// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog • Aureus",
  description:
    "Training intelligence, hypertrophy principles, recovery, and performance—written for lifters who want results.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog • Aureus",
    description:
      "Training intelligence, hypertrophy principles, recovery, and performance—written for lifters who want results.",
    url: "/blog",
    type: "website",
  },
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readingTimeMin: number;
  tags: string[];
  coverImage?: string; // /images/blog/...
  featured?: boolean;
};

const POSTS: BlogPost[] = [
  {
    slug: "most-important-muscles-to-target-as-a-male",
    title: "The Most Important Muscles to Target as a Male",
    excerpt:
      "If you’re training for size, strength, and balance, some muscle groups deliver a bigger return than others. Here’s what to prioritize—and how to train them intelligently.",
    date: "2026-01-07",
    readingTimeMin: 8,
    tags: ["Hypertrophy", "Programming", "Aesthetics"],
    coverImage: "/images/blog/male-priority-muscles.jpg", // <- add your image
    featured: true,
  },
  // Add more posts here
  // {
  //   slug: "how-to-progressively-overload-without-burning-out",
  //   title: "How to Progressively Overload Without Burning Out",
  //   excerpt: "A practical approach to progress that respects fatigue, recovery, and real life.",
  //   date: "2026-01-10",
  //   readingTimeMin: 7,
  //   tags: ["Progression", "Recovery"],
  //   coverImage: "/images/blog/progressive-overload.jpg",
  // },
];

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

function slugToUrl(slug: string) {
  return `/blog/${slug}`;
}

function uniqueTags(posts: BlogPost[]) {
  const set = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams?: { q?: string; tag?: string };
}) {
  const q = (searchParams?.q ?? "").trim();
  const activeTag = (searchParams?.tag ?? "").trim();

  const filtered = POSTS.filter((p) => {
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()));

    const matchesTag = !activeTag || p.tags.includes(activeTag);

    return matchesQuery && matchesTag;
  }).sort((a, b) => (a.date < b.date ? 1 : -1));

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  const tags = uniqueTags(POSTS);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Aureus Blog",
    url: "https://aureus.fit/blog",
    description:
      "Training intelligence, hypertrophy principles, recovery, and performance—written for lifters who want results.",
    publisher: {
      "@type": "Organization",
      name: "Aureus",
      url: "https://aureus.fit",
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#070A12] dark:text-slate-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#3E5BA9]/15 to-transparent blur-3xl dark:from-[#D4AF37]/18 dark:via-[#3E5BA9]/18" />
        <div className="absolute -bottom-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#3E5BA9]/10 to-[#D4AF37]/10 blur-3xl dark:via-[#3E5BA9]/14 dark:to-[#D4AF37]/14" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#070A12]/65">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <span className="h-4 w-4 rounded-md bg-gradient-to-br from-[#D4AF37] to-[#3E5BA9]" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Aureus</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Blog
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Pricing
            </Link>
            <Link
              href="/download"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              Download
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Evidence-based training, written simply.
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The Aureus Blog
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Practical guides for building muscle, getting stronger, staying
              consistent, and training like an athlete—without wasting time on
              nonsense.
            </p>

            {/* Search (server-driven via query params) */}
            <form
              action="/blog"
              method="get"
              className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center"
            >
              <div className="relative w-full">
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Search articles (e.g. chest, progressive overload, recovery)…"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-28 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500 dark:focus:border-white/20"
                />
                {activeTag ? (
                  <input name="tag" value={activeTag} readOnly hidden />
                ) : null}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Search
                </button>
              </div>

              {(q || activeTag) && (
                <Link
                  href="/blog"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  Clear
                </Link>
              )}
            </form>

            {/* Tag pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <TagPill href="/blog" active={!activeTag} label="All" />
              {tags.map((t) => (
                <TagPill
                  key={t}
                  href={`/blog?${new URLSearchParams(
                    Object.fromEntries(
                      [
                        q ? ["q", q] : null,
                        ["tag", t],
                      ].filter(Boolean) as [string, string][]
                    )
                  ).toString()}`}
                  active={activeTag === t}
                  label={t}
                />
              ))}
            </div>
          </div>

          {/* CTA card */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold">Want the app?</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Aureus is a premium training log designed to make progress obvious:
              better sessions, better decisions, better physique.
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href="/download"
                className="flex-1 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#3E5BA9] px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95"
              >
                Download
              </Link>
              <Link
                href="/pricing"
                className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                Pricing
              </Link>
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              <div className="font-medium text-slate-800 dark:text-slate-200">
                Image slot
              </div>
              <div className="mt-1">
                Put a small promo image here later (e.g. app screenshot).
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.36fr]">
          {/* Posts */}
          <div className="space-y-6">
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="text-lg font-semibold">No results</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Try a different search or clear filters.
                </p>
                <div className="mt-5">
                  <Link
                    href="/blog"
                    className="inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    View all posts
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {featured && (
                  <FeaturedCard post={featured} activeTag={activeTag} q={q} />
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  {rest.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">Popular topics</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {["Hypertrophy", "Strength", "Recovery", "Nutrition"].map((t) => (
                  <Link
                    key={t}
                    href={`/blog?${new URLSearchParams({ tag: t }).toString()}`}
                    className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">Newsletter (optional)</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                If you add an email provider later, this slot becomes your
                subscribe form. For now it’s just a clean CTA area.
              </p>

              <div className="mt-4 flex gap-2">
                <input
                  placeholder="you@domain.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500 dark:focus:border-white/20"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Join
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                Swap this to a real form when you’re ready.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold">About this blog</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Articles are written to be skimmable, practical, and brutally
                focused on what actually moves the needle.
              </p>
              <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                <div className="font-medium text-slate-800 dark:text-slate-200">
                  Image slot
                </div>
                <div className="mt-1">
                  Add a portrait, logo mark, or an “Aureus philosophy” graphic.
                </div>
              </div>
            </div>
          </aside>
        </div>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-600 sm:px-6 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="font-medium text-slate-800 dark:text-slate-200">
              © {new Date().getFullYear()} Aureus
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="hover:text-slate-900 dark:hover:text-slate-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-900 dark:hover:text-slate-200"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="hover:text-slate-900 dark:hover:text-slate-200"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="text-xs">
            Built for lifters who care about detail.
          </div>
        </div>
      </footer>
    </main>
  );
}

function TagPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition",
        active
          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function FeaturedCard({
  post,
  q,
  activeTag,
}: {
  post: BlogPost;
  q: string;
  activeTag: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-white/5">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-4 py-2 text-xs text-slate-600 backdrop-blur dark:border-white/20 dark:bg-black/10 dark:text-slate-300">
                Add a featured cover image
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur dark:bg-black/40 dark:text-slate-100">
            Featured
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
            <span>{formatDate(post.date)}</span>
            <span className="text-slate-300 dark:text-white/15">•</span>
            <span>{post.readingTimeMin} min read</span>
          </div>

          <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            <Link href={slugToUrl(post.slug)} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Link
                key={t}
                href={`/blog?${new URLSearchParams(
                  Object.fromEntries(
                    [
                      q ? ["q", q] : null,
                      ["tag", t],
                    ].filter(Boolean) as [string, string][]
                  )
                ).toString()}`}
                className={[
                  "rounded-full px-3 py-1 text-xs font-medium",
                  activeTag === t
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
                ].join(" ")}
              >
                {t}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={slugToUrl(post.slug)}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Read article →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <Link href={slugToUrl(post.slug)} className="block">
        <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-white/5">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-4 py-2 text-xs text-slate-600 backdrop-blur dark:border-white/20 dark:bg-black/10 dark:text-slate-300">
                Cover image slot
              </div>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
            <span>{formatDate(post.date)}</span>
            <span className="text-slate-300 dark:text-white/15">•</span>
            <span>{post.readingTimeMin} min</span>
          </div>

          <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all group-hover:bg-[length:100%_2px] dark:from-white dark:to-slate-200">
              {post.title}
            </span>
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
