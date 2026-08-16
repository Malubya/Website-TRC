import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journal | TRC Contractors",
  description: "Ideas, field notes, material intelligence, and project stories from TRC Contractors Design Studio in Uganda.",
};

const stories = [
  { category: "Project story", date: "08 Aug 2026", title: "Katwe, reimagined vertically", excerpt: "Inside the thinking behind an eight-storey mixed-use landmark where commerce, wellness, hospitality, and skyline views meet.", image: "/assets/imagery/katwe-mixed-use-aerial.jpeg", read: "6 min read", featured: true },
  { category: "Field notes", date: "02 Aug 2026", title: "Building a farm as a living system", excerpt: "How circulation, ventilation, storage, and animal wellbeing informed our integrated farm design in Kamuli.", image: "/assets/imagery/integrated-farm-view-13.jpg", read: "5 min read" },
  { category: "Materials", date: "25 Jul 2026", title: "The quiet power of a considered finish", excerpt: "Stone, copper, timber, and light: selecting materials that age with dignity in Uganda’s climate.", image: "/assets/imagery/material-detail-copper-stone.png", read: "4 min read" },
  { category: "On site", date: "17 Jul 2026", title: "Why the best buildings begin before concrete", excerpt: "Coordination, site reading, and preconstruction decisions that protect quality long before the first pour.", image: "/assets/imagery/site-progress-team.jpeg", read: "7 min read" },
  { category: "Design insight", date: "10 Jul 2026", title: "Compact living without compromise", excerpt: "Design moves that give studio apartments more privacy, daylight, usefulness, and a sense of generosity.", image: "/assets/imagery/studio-apartments-view-4.jpg", read: "5 min read" },
  { category: "Diaspora", date: "01 Jul 2026", title: "Building in Uganda while living abroad", excerpt: "A clearer way to manage decisions, approvals, progress, and trust across borders.", image: "/assets/imagery/diaspora-outreach.jpeg", read: "6 min read" },
];

function CutMark() {
  return <svg className={styles.cutMark} viewBox="0 0 180 180" aria-hidden="true"><path d="M15 90A75 75 0 0 1 90 15v75Z"/><path d="M90 90h75a75 75 0 0 1-75 75Z"/><circle cx="90" cy="90" r="36"/></svg>;
}

export default function BlogPage() {
  const [featured, ...articles] = stories;
  return <main className={styles.page} id="top">
    <Nav alwaysSolid />
    <header className={styles.hero}>
      <div className={styles.heroCopy}><span className={styles.eyebrow}>The TRC Journal · Uganda</span><h1>Ideas built<br/>to <em>endure.</em></h1><p>Field notes, material intelligence, design thinking, and the stories behind the structures shaping tomorrow.</p></div>
      <div className={styles.heroShape}><CutMark/><span>Design<br/>Build<br/>Roof</span></div>
      <svg className={styles.heroCut} viewBox="0 0 1440 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 75C230 145 425 8 685 67c250 57 444 83 755-21v84H0Z"/></svg>
    </header>

    <nav className={styles.topics} aria-label="Journal topics"><span>Explore by topic</span>{["All stories","Design","Construction","Materials","Field notes","Diaspora"].map((topic,i)=><a key={topic} href={i ? `#${topic.toLowerCase().replace(" ","-")}` : "#stories"} className={i===0 ? styles.active : ""}>{topic}</a>)}</nav>

    <section className={styles.featured} id="stories">
      <Link href="#journal-note" className={styles.featuredImage} aria-label={`Read ${featured.title}`}><Image src={featured.image} alt="Aerial rendering of the Katwe mixed-use development" fill priority sizes="(max-width: 800px) 100vw, 60vw"/><span className={styles.imageCut}/><b>01</b></Link>
      <div className={styles.featuredCopy}><div className={styles.meta}><span>{featured.category}</span><time>{featured.date}</time></div><h2>{featured.title}</h2><p>{featured.excerpt}</p><Link href="#journal-note" className={styles.readLink}>Read the story <span>↗</span></Link><small>{featured.read}</small></div>
    </section>

    <section className={styles.storySection} aria-labelledby="latest-title"><div className={styles.sectionHead}><div><span>02 — Latest thinking</span><h2 id="latest-title">From studio<br/>and site.</h2></div><p>Observations from the people designing, coordinating, and building TRC projects across Uganda.</p></div>
      <div className={styles.grid}>{articles.map((story,index)=><article className={styles.card} key={story.title} id={story.category.toLowerCase().replace(" ","-")}><Link href="#journal-note" className={styles.cardImage}><Image src={story.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"/><span/><b>0{index+2}</b></Link><div className={styles.meta}><span>{story.category}</span><time>{story.date}</time></div><h3><Link href="#journal-note">{story.title}</Link></h3><p>{story.excerpt}</p><div className={styles.cardFoot}><Link href="#journal-note">Read article <b>→</b></Link><small>{story.read}</small></div></article>)}</div>
    </section>

    <aside className={styles.manifesto} id="journal-note"><svg viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="63"/><circle cx="75" cy="75" r="33"/><path d="M75 0v150M0 75h150"/></svg><span>Notes from the drawing board</span><blockquote>“A good building answers today’s needs. A great one makes room for tomorrow.”</blockquote><Link href="/#contact">Discuss your project <b>↗</b></Link></aside>
    <Footer />
  </main>;
}
