"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/6285283910033?text=Halo%20Kaladeco%2C%20saya%20ingin%20bertanya%20tentang%20jasa%20dekorasi"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
      aria-label="Chat WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      <div className="relative flex items-center gap-2 bg-green-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/30 hover:bg-green-600 transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="whitespace-nowrap text-sm font-semibold">
          Chat Kami
        </span>
      </div>
    </a>
  );
}
