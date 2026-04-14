import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/posts";
import Reveal from "./Reveal";

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
                — Blog & Inspirasi
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
                Tips & <span className="italic gradient-text">Inspirasi</span>
              </h2>
              <p className="mt-6 text-charcoal/70 text-lg">
                Panduan, ide kreatif, dan tips seputar dekorasi acara spesial Anda.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-primary transition-colors self-start lg:self-end"
            >
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-cream rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 h-full"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-[120px] font-display">
                    ❀
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-charcoal text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
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
                  <h3 className="font-display text-xl font-semibold text-charcoal leading-snug mb-3 group-hover:text-primary-dark transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-dark group-hover:gap-2 transition-all">
                    Baca Selengkapnya
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
