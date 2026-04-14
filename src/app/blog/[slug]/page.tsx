import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, MessageCircle } from "lucide-react";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Kaladeco.id",
      logo: { "@type": "ImageObject", url: "https://kaladeco.web.id/icon.svg" },
    },
  };

  return (
    <article className="min-h-screen pt-28 pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <header className={`relative bg-gradient-to-br ${post.coverColor} pt-14 pb-20 sm:pb-28 overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-[250px] sm:text-[400px] font-display leading-none pointer-events-none">
          ❀
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </Link>
          </div>

          <div className="mt-8">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-charcoal text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          className="prose-kaladeco"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-cream border border-primary/10 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
            Siap wujudkan acara impian Anda?
          </h3>
          <p className="mt-3 text-charcoal/70">
            Konsultasi GRATIS via WhatsApp. Kami bantu rancang dekorasi sesuai budget & tema Anda.
          </p>
          <a
            href="https://wa.me/6285283910033?text=Halo%20Kaladeco%2C%20saya%20ingin%20konsultasi%20tentang%20dekorasi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </article>
  );
}
