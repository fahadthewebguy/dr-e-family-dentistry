import type { Metadata } from "next";
import Image from "@/components/AppImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        image={post.image}
        slug={post.slug}
      />
      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-primary-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-700">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <Reveal>
            <time dateTime={post.date} className="mt-6 block text-sm font-medium uppercase tracking-wide text-accent-700">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-primary-950 sm:text-4xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-lg shadow-primary-950/10">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-neutral-700">
              {post.content.map((paragraph, i) =>
                paragraph.startsWith("{/*") ? null : <p key={i}>{paragraph}</p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-14 rounded-3xl bg-primary-950 p-8 text-center sm:p-10">
              <h2 className="font-serif text-2xl text-white">Have questions about your smile?</h2>
              <p className="mt-3 text-primary-200">
                Dr. E and her team are here to help — reach out anytime.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent-500 px-7 py-3.5 text-center text-base font-semibold text-primary-950 transition-colors hover:bg-accent-400"
                >
                  Request an Appointment
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-primary-700 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-primary-900"
                >
                  Call or Text {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-2xl text-primary-950 sm:text-3xl">More From the Blog</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-primary-100 transition-shadow hover:shadow-lg hover:shadow-primary-950/10"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-base leading-snug text-primary-900">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
