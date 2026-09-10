import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { formatPublishedDate, getJournalPost, getJournalPosts, getRelatedPosts, readingTime } from "@/lib/journal";
import styles from "./page.module.css";

const SITE_URL = "https://trccontractors.com";

// Cover photography rotation, matching /blog — see the comment there for why
// posts don't yet carry their own uploaded image.
const backdrops = [
  "/assets/imagery/katwe-mixed-use-aerial.jpeg",
  "/assets/imagery/integrated-farm-view-13.jpg",
  "/assets/imagery/material-detail-copper-stone.png",
  "/assets/imagery/site-progress-team.jpeg",
  "/assets/imagery/studio-apartments-view-4.jpg",
  "/assets/imagery/diaspora-outreach.jpeg",
  "/assets/imagery/residential-design-modern.jpeg",
  "/assets/imagery/highland-exterior.png",
];

function backdropFor(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return backdrops[hash % backdrops.length];
}

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getJournalPost(slug);
  if (!post) return { title: "Article not found | TRC Contractors" };
  const image = backdropFor(post.slug);
  return {
    title: `${post.title} | The TRC Blogs`,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || undefined,
      images: [image],
      publishedTime: post.publishedAt || undefined,
      section: post.category || undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt || undefined, images: [image] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getJournalPost(slug), getJournalPosts()]);
  if (!post) notFound();

  const paragraphs = post.body.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const related = getRelatedPosts(allPosts, post);
  const image = `${SITE_URL}${backdropFor(post.slug)}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    image: [image],
    datePublished: post.publishedAt || undefined,
    dateModified: post.publishedAt || undefined,
    articleSection: post.category || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    author: { "@type": "Organization", name: "TRC Contractors", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "TRC Contractors",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logos/trc-official-mark.png` },
    },
  };

  return <main className={styles.page} id="top">
    {/* `<` is escaped so a title/excerpt containing "</script>" can't break out
        of this tag — admin-authored, but not otherwise sanitized against that. */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <Nav alwaysSolid />
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <Link href="/blog" className={styles.back}>← The TRC Blogs</Link>
        <div className={styles.meta}><span>{post.category || "Blogs"}</span><time>{formatPublishedDate(post.publishedAt)}</time><span>{readingTime(post.body)}</span></div>
        <h1>{post.title}</h1>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
      </div>
    </header>

    <div className={styles.cover}><Image src={backdropFor(post.slug)} alt="" fill priority sizes="(max-width: 900px) 100vw, 900px"/></div>

    <article className={styles.body}>
      {paragraphs.length > 0 ? paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>) : <p>{post.body}</p>}
    </article>

    {related.length > 0 && (
      <section className={styles.related} aria-labelledby="related-title">
        <h2 id="related-title">Keep reading</h2>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <Link key={item.id} href={`/blog/${item.slug}`} className={styles.relatedCard}>
              <span className={styles.relatedImage}><Image src={backdropFor(item.slug)} alt="" fill sizes="(max-width: 700px) 100vw, 33vw"/></span>
              <span className={styles.relatedMeta}>{item.category || "Blogs"}</span>
              <strong>{item.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    )}

    <div className={styles.footerCta}>
      <span>Have a project in mind?</span>
      <Link href="/#contact">Discuss your project ↗</Link>
    </div>
    <Footer />
  </main>;
}
