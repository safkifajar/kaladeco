import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description:
    "Tips, inspirasi, dan panduan seputar dekorasi lamaran, prewedding, tasyakuran, dan maternity shoot dari Kaladeco.id Purwokerto.",
  openGraph: {
    title: "Blog & Artikel | Kaladeco.id",
    description:
      "Tips dan inspirasi seputar dekorasi acara spesial Anda.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
            — Blog & Artikel
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Tips & Inspirasi <span className="italic gradient-text">Dekorasi</span>
          </h1>
          <p className="mt-6 text-charcoal/70 text-lg">
            Panduan, ide, dan tips untuk membuat acara spesial Anda lebih berkesan.
          </p>
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <p className="text-center text-charcoal/60">Belum ada artikel.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Cover */}
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-[120px] font-display">
                    ❀
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-charcoal text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-charcoal/50 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-charcoal leading-snug mb-3 group-hover:text-primary-dark transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-dark group-hover:gap-2 transition-all">
                    Baca Selengkapnya
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
