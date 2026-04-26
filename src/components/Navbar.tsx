"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/#beranda", label: "Beranda" },
  { href: "/#tentang", label: "Tentang" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#harga", label: "Harga" },
  { href: "/blog", label: "Blog" },
  { href: "https://kaladeco-font.vercel.app", label: "Font Generator", external: true },
  { href: "/#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-primary/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <span className="text-white font-display text-lg font-bold">K</span>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              Kala<span className="gradient-text">deco</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative px-4 py-2 text-sm font-medium text-charcoal/80 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="https://wa.me/6285283910033"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-primary/10 animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-charcoal hover:text-primary py-3 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285283910033"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-charcoal text-white px-5 py-3.5 rounded-full text-sm font-semibold mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
