"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["Semua", "Lamaran", "Prewedding", "Tasyakuran", "Maternity", "Lainnya"];

const portfolioItems = [
  {
    id: 1,
    title: "Lamaran Garden Romantic",
    category: "Lamaran",
    year: "2025",
    color: "from-rose-200 via-pink-300 to-rose-400",
    size: "tall",
  },
  {
    id: 2,
    title: "Prewedding Rustic Golden",
    category: "Prewedding",
    year: "2025",
    color: "from-sky-200 via-blue-300 to-indigo-400",
    size: "normal",
  },
  {
    id: 3,
    title: "Tasyakuran Rose Gold",
    category: "Tasyakuran",
    year: "2025",
    color: "from-amber-200 via-yellow-300 to-orange-400",
    size: "normal",
  },
  {
    id: 4,
    title: "Maternity Floral Pastel",
    category: "Maternity",
    year: "2024",
    color: "from-purple-200 via-violet-300 to-fuchsia-400",
    size: "tall",
  },
  {
    id: 5,
    title: "Lamaran Rustic Elegant",
    category: "Lamaran",
    year: "2024",
    color: "from-orange-200 via-amber-300 to-yellow-400",
    size: "normal",
  },
  {
    id: 6,
    title: "Tasyakuran Keluarga Hangat",
    category: "Tasyakuran",
    year: "2024",
    color: "from-green-200 via-emerald-300 to-teal-400",
    size: "normal",
  },
  {
    id: 7,
    title: "Anniversary Surprise",
    category: "Lainnya",
    year: "2025",
    color: "from-red-200 via-rose-300 to-pink-400",
    size: "tall",
  },
  {
    id: 8,
    title: "Prewedding Outdoor Garden",
    category: "Prewedding",
    year: "2024",
    color: "from-indigo-200 via-blue-300 to-cyan-400",
    size: "normal",
  },
  {
    id: 9,
    title: "Maternity White Greenery",
    category: "Maternity",
    year: "2025",
    color: "from-gray-200 via-slate-300 to-zinc-400",
    size: "normal",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
              — Portfolio
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
              Karya <span className="italic gradient-text">Pilihan</span> Kami
            </h2>
            <p className="mt-6 text-charcoal/70 text-lg">
              Koleksi dekorasi terbaik dari berbagai acara yang pernah kami kerjakan.
            </p>
          </div>

          <a
            href="https://instagram.com/kaladeco"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-primary transition-colors self-start lg:self-end"
          >
            Lihat di Instagram
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-primary/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-charcoal text-white"
                  : "bg-cream text-charcoal/70 hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                item.size === "tall" ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
              style={{ animation: `fade-in-up 0.6s ${i * 80}ms both` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

              {/* Decorative element */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="font-display text-[150px] text-white/40">❀</span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-white/70">{item.year}</span>
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-lg sm:text-xl text-white font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Lihat Detail <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
