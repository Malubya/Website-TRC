// Fetches published articles from the TRC Contractors System — the same
// Supabase-backed API that powers the BIMS admin portal's "Publishing desk"
// (see /TRC Contractors React, server/routes/public.js and
// src/workflowViews.tsx's ContentView). An admin writes and publishes an
// article there; this is how it reaches the marketing site. These calls run
// server-side (this file is only ever imported by Server Components), so the
// system API's URL never reaches the visitor's browser and no CORS applies —
// the API's own public router stays open regardless, for any other consumer.

export type JournalPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string | null;
  publishedAt: string | null;
};

const API_BASE = process.env.TRC_SYSTEM_API_URL || "http://127.0.0.1:3001";

// Must match the check constraint on blog_posts.category — see
// ../TRC Contractors React/supabase/migrations/20260829150000_add_blog_post_category.sql
// and the BLOG_CATEGORIES list in that repo's src/workflowViews.tsx.
export const JOURNAL_TOPICS = ["Design", "Construction", "Materials", "Field notes", "Diaspora"] as const;
export type JournalTopic = (typeof JOURNAL_TOPICS)[number];

export function topicSlug(topic: string): string {
  return topic.toLowerCase().replace(/\s+/g, "-");
}

export function topicFromSlug(slug: string | undefined): JournalTopic | undefined {
  return JOURNAL_TOPICS.find((topic) => topicSlug(topic) === slug);
}

// Revalidated on a short interval rather than on every request: the journal
// changes rarely enough that this is a good trade, and it means the page
// keeps rendering the last-known posts if the system API is briefly
// unreachable, instead of failing the whole page load.
const REVALIDATE_SECONDS = 60;

export function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function formatPublishedDate(publishedAt: string | null): string {
  if (!publishedAt) return "";
  return new Date(publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export async function getJournalPosts(): Promise<JournalPost[]> {
  try {
    const response = await fetch(`${API_BASE}/api/public/blog-posts`, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!response.ok) return [];
    const data = (await response.json()) as { posts?: JournalPost[] };
    return data.posts || [];
  } catch {
    // The system API is a separate deployment from this site; if it's down
    // or unreachable, the journal should render empty rather than take the
    // rest of the marketing site down with it.
    return [];
  }
}

export async function getJournalPost(slug: string): Promise<JournalPost | null> {
  try {
    const response = await fetch(`${API_BASE}/api/public/blog-posts/${encodeURIComponent(slug)}`, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!response.ok) return null;
    const data = (await response.json()) as { post?: JournalPost };
    return data.post || null;
  } catch {
    return null;
  }
}

// Same topic first (most recent), then falls back to the most recent other
// posts so the section is never empty just because nothing shares a topic.
export function getRelatedPosts(all: JournalPost[], current: JournalPost, limit = 3): JournalPost[] {
  const others = all.filter((post) => post.id !== current.id);
  const sameTopic = current.category ? others.filter((post) => post.category === current.category) : [];
  const rest = others.filter((post) => !sameTopic.includes(post));
  return [...sameTopic, ...rest].slice(0, limit);
}
