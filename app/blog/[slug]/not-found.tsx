import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function ArticleNotFound() {
  return <main className={styles.page} id="top">
    <Nav alwaysSolid />
    <section className={styles.notFound}>
      <h1>Article not found.</h1>
      <p>This story may have been unpublished or its link may be out of date. Browse the rest of the journal instead.</p>
      <Link href="/blog">Back to the journal</Link>
    </section>
    <Footer />
  </main>;
}
