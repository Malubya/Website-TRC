import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { JOURNAL_TOPICS, formatPublishedDate, getJournalPosts, readingTime, topicFromSlug, topicSlug } from "@/lib/journal";
import styles from "./page.module.css";

type SearchParams = { topic?: string; page?: string };

export async function generateMetadata({ searchParams }: { searchParams: Promise<SearchParams> }): Promise<Metadata> {
  const sp = await searchParams;
  const filtered = Boolean(topicFromSlug(sp.topic)) || (sp.page && sp.page !== "1");
  return {
    title: "Journal | TRC Contractors",
    description: "Ideas, field notes, material intelligence, and project stories from TRC Contractors Design Studio in Uganda.",
    alternates: { canonical: "/blog" },
    // A topic filter or a page beyond the first is a view of the same
    // content, not a distinct page worth indexing on its own — keep it
    // crawlable (so topic and pagination links get followed) without
    // competing with the canonical /blog listing in search results.
    ...(filtered ? { robots: { index: false, follow: true } } : {}),
  };
}

// Articles are written and published by admins in the TRC Contractors System
// (the BIMS portal's "Publishing desk"), not edited here — this page only
// renders whatever is currently published. Cover photography isn't part of
// that admin workflow yet, so each post is paired with one of the site's own
// project photos, chosen deterministically from its slug so the pairing is
// stable across visits rather than reshuffling on every request.
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

function CutMark() {
  return <svg className={styles.cutMark} viewBox="0 0 180 180" aria-hidden="true"><path d="M15 90A75 75 0 0 1 90 15v75Z"/><path d="M90 90h75a75 75 0 0 1-75 75Z"/><circle cx="90" cy="90" r="36"/></svg>;
}

const PAGE_SIZE = 6;

export default async function BlogPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const sp = await searchParams;
  const topic = topicFromSlug(sp.topic);
  const allPosts = await getJournalPosts();
  const filtered = topic ? allPosts.filter((post) => post.category === topic) : allPosts;

  const itemsAfterFeatured = Math.max(0, filtered.length - 1);
  const totalPages = Math.max(1, Math.ceil(itemsAfterFeatured / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(sp.page) || 1), totalPages);
  const featured = page === 1 ? filtered[0] : undefined;
  const gridStart = page === 1 ? 1 : 1 + (page - 1) * PAGE_SIZE;
  const gridPosts = filtered.slice(gridStart, gridStart + PAGE_SIZE);

  const pageHref = (targetPage: number) => {
    const params = new URLSearchParams();
    if (topic) params.set("topic", topicSlug(topic));
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return `/blog${query ? `?${query}` : ""}#stories`;
  };

  return <main className={styles.page} id="top">
    <Nav alwaysSolid />
    <header className={styles.hero}>
      <div className={styles.heroCopy}><span className={styles.eyebrow}>The TRC Journal · Uganda</span><h1>Ideas built<br/>to <em>endure.</em></h1><p>Field notes, material intelligence, design thinking, and the stories behind the structures shaping tomorrow.</p></div>
      <div className={styles.heroShape}><CutMark/><span>Design<br/>Build<br/>Roof</span></div>
      <svg className={styles.heroCut} viewBox="0 0 1440 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 75C230 145 425 8 685 67c250 57 444 83 755-21v84H0Z"/></svg>
    </header>

    <nav className={styles.topics} aria-label="Journal topics">
      <span>Explore by topic</span>
      <Link href="/blog#stories" className={!topic ? styles.active : ""} aria-current={!topic ? "page" : undefined}>All stories</Link>
      {JOURNAL_TOPICS.map((item) => (
        <Link key={item} href={`/blog?topic=${topicSlug(item)}#stories`} className={topic === item ? styles.active : ""} aria-current={topic === item ? "page" : undefined}>{item}</Link>
      ))}
    </nav>

    {allPosts.length === 0 ? (
      <section className={styles.featured} id="stories">
        <div className={styles.featuredCopy}>
          <div className={styles.meta}><span>Journal</span></div>
          <h2>New stories<br/>are on the way.</h2>
          <p>Our team is preparing the first articles for the journal. Check back soon for field notes, material intelligence, and project stories from across Uganda.</p>
        </div>
      </section>
    ) : filtered.length === 0 ? (
      <section className={styles.featured} id="stories">
        <div className={styles.featuredCopy}>
          <div className={styles.meta}><span>{topic}</span></div>
          <h2>Nothing here<br/>just yet.</h2>
          <p>We haven&rsquo;t published a {topic?.toLowerCase()} story yet. In the meantime, browse everything we&rsquo;ve written so far.</p>
          <Link href="/blog#stories" className={styles.readLink}>See all stories <span>↗</span></Link>
        </div>
      </section>
    ) : null}

    {allPosts.length > 0 && filtered.length > 0 && featured && (
      <section className={styles.featured} id="stories">
        <Link href={`/blog/${featured.slug}`} className={styles.featuredImage} aria-label={`Read ${featured.title}`}><Image src={backdropFor(featured.slug)} alt="" fill priority sizes="(max-width: 800px) 100vw, 60vw"/><span className={styles.imageCut}/><b>01</b></Link>
        <div className={styles.featuredCopy}><div className={styles.meta}><span>{featured.category || "Latest"}</span><time>{formatPublishedDate(featured.publishedAt)}</time></div><h2>{featured.title}</h2><p>{featured.excerpt || featured.body.slice(0, 180)}</p><Link href={`/blog/${featured.slug}`} className={styles.readLink}>Read the story <span>↗</span></Link><small>{readingTime(featured.body)}</small></div>
      </section>
    )}

    {!featured && filtered.length > 0 && (
      <section className={styles.featured} id="stories" style={{ paddingBottom: 0 }}>
        <div className={styles.featuredCopy} style={{ gridColumn: "1/-1" }}>
          <div className={styles.meta}><span>{topic || "Journal"}</span></div>
          <h2>{topic ? `More from ${topic.toLowerCase()}.` : "The archive."}</h2>
        </div>
      </section>
    )}

    {gridPosts.length > 0 && (
      <section className={styles.storySection} aria-labelledby="latest-title">
        <Reveal as="div" className={styles.sectionHead}><div><span>02 — Latest thinking</span><h2 id="latest-title">From studio<br/>and site.</h2></div><p>Observations from the people designing, coordinating, and building TRC projects across Uganda.</p></Reveal>
        <div className={styles.grid}>
          {gridPosts.map((post, index) => {
            const number = String(gridStart + index + 1).padStart(2, "0");
            return (
              <Reveal as="article" key={post.id} className={styles.card} delayMs={Math.min(index, 5) * 60}>
                <Link href={`/blog/${post.slug}`} className={styles.cardImage}><Image src={backdropFor(post.slug)} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"/><span/><b>{number}</b></Link>
                <div className={styles.meta}><span>{post.category || "Journal"}</span><time>{formatPublishedDate(post.publishedAt)}</time></div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt || post.body.slice(0, 140)}</p>
                <div className={styles.cardFoot}><Link href={`/blog/${post.slug}`}>Read article <b>→</b></Link><small>{readingTime(post.body)}</small></div>
              </Reveal>
            );
          })}
        </div>

        {totalPages > 1 && (
          <nav className={styles.pagination} aria-label="Journal pages">
            {page > 1 ? <Link href={pageHref(page - 1)}>← Newer</Link> : <span />}
            <span className={styles.pageIndicator}>Page {page} of {totalPages}</span>
            {page < totalPages ? <Link href={pageHref(page + 1)}>Older →</Link> : <span />}
          </nav>
        )}
      </section>
    )}

    <aside className={styles.manifesto}><svg viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="63"/><circle cx="75" cy="75" r="33"/><path d="M75 0v150M0 75h150"/></svg><span>Notes from the drawing board</span><blockquote>“A good building answers today’s needs. A great one makes room for tomorrow.”</blockquote><Link href="/#contact">Discuss your project <b>↗</b></Link></aside>
    <Footer />
  </main>;
}
