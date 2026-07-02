import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/motion/Reveal";

const recent = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export function BlogTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            From the Blog
          </p>
          <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
            Tips for a Healthier Smile
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-neutral-50 ring-1 ring-primary-100 transition-shadow hover:shadow-lg hover:shadow-primary-950/10"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time dateTime={post.date} className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 font-serif text-lg leading-snug text-primary-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            Visit the Blog
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
