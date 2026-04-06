import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog — ABA Therapy Resources for Miami Parents",
  description:
    "Expert articles about ABA therapy, autism, and child development from Build-A-Block Therapy in Kendall, FL. Resources to help Miami-Dade families navigate their child's care.",
  alternates: { canonical: "https://buildablocktherapy.com/blog" },
};

const posts = [
  {
    slug: "how-to-choose-aba-therapy-provider-miami",
    title: "How to Choose the Right ABA Therapy Provider in Miami",
    excerpt: "With dozens of options across Miami-Dade County, choosing the right ABA provider can feel overwhelming. This guide covers what to look for, what questions to ask, and red flags to watch out for.",
    date: "April 4, 2026",
    readTime: "8 min read",
    category: "Parent Guide",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Resources for <span className="text-blue">Parents</span>
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Expert articles about ABA therapy, autism, and child development to help you
            make informed decisions for your family.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20 card-hover"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue/10 text-blue text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray text-xs">{post.date}</span>
                  <span className="text-gray text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3 group-hover:text-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-blue font-semibold text-sm flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
