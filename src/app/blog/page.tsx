import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dental tips and news from Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ.",
  alternates: { canonical: "/blog" },
};

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogIndexPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            The Blog
          </p>
          <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">
            Tips for a Healthier Smile
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
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
                  <h2 className="mt-2 font-serif text-lg leading-snug text-primary-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
