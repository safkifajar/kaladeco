import { ArrowRight, Sparkles, Star, User, Heart, Flower2, Camera } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 animate-float" style={{ animationDelay: "2s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1410 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-primary/20 text-primary-dark px-4 py-2 rounded-full text-xs font-medium mb-8 animate-fade-in-up">
              <Sparkles className="w-3.5 h-3.5" />
              Jasa Dekorasi Profesional Terpercaya
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-charcoal animate-fade-in-up delay-100">
              Setiap Momen
              <br />
              <span className="italic font-normal gradient-text">Layak Diabadikan</span>
              <br />
              <span className="relative inline-block">
                dengan Indah.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C75 2 150 2 298 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/40"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-charcoal/70 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
              Kaladeco.id menghadirkan dekorasi elegan untuk lamaran, prewedding,
              tasyakuran, maternity shoot, dan momen spesial lainnya di Purwokerto
              dan sekitarnya.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-300">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-primary transition-all shadow-xl shadow-charcoal/20 hover:shadow-primary/30"
              >
                Lihat Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#harga"
                className="group inline-flex items-center gap-2 text-charcoal px-6 py-4 text-sm font-medium hover:text-primary transition-colors"
              >
                <span className="border-b border-charcoal/30 group-hover:border-primary pb-0.5">
                  Jelajahi Paket Harga
                </span>
              </a>
            </div>

            {/* Rating preview */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 animate-fade-in-up delay-400">
              <div className="flex -space-x-3">
                {[
                  "from-rose-400 to-pink-500",
                  "from-amber-400 to-orange-500",
                  "from-purple-400 to-violet-500",
                  "from-sky-400 to-blue-500",
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${g} border-2 border-cream flex items-center justify-center shadow-sm`}
                  >
                    <User className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-charcoal/60 mt-1">
                  <span className="font-semibold text-charcoal">500+ klien</span> sudah puas
                </p>
              </div>
            </div>
          </div>

          {/* Right visual — richer composition */}
          <div className="lg:col-span-5 relative animate-scale-in delay-300">
            <div className="relative aspect-[4/5] max-w-md mx-auto">

              {/* Background shape */}
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary-light/20 to-primary/10 blur-2xl" />

              {/* Main featured card */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/30">
                {/* Layered gradient background (decorative illustration) */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-primary-light/70 to-primary-dark" />

                {/* Geometric decorative shapes */}
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute bottom-20 left-8 w-40 h-40 rounded-full bg-rose-300/40 blur-2xl" />

                {/* Arch / window illustration */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-64 rounded-t-full border-[3px] border-white/40 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-sm">
                  <div className="absolute inset-4 rounded-t-full border-2 border-white/30" />
                </div>

                {/* Floral decorations */}
                <div className="absolute top-6 left-6 text-white/70 animate-float">
                  <Flower2 className="w-8 h-8" />
                </div>
                <div className="absolute top-20 right-8 text-white/60 animate-float" style={{ animationDelay: "1.5s" }}>
                  <Flower2 className="w-6 h-6" />
                </div>
                <div className="absolute bottom-32 right-12 text-white/50 animate-float" style={{ animationDelay: "3s" }}>
                  <Flower2 className="w-10 h-10" />
                </div>

                {/* Sparkles */}
                <div className="absolute top-32 left-10">
                  <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
                </div>
                <div className="absolute bottom-40 left-20">
                  <Sparkles className="w-4 h-4 text-white/70 animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
                <div className="absolute top-40 right-20">
                  <Sparkles className="w-6 h-6 text-white/90 animate-pulse" style={{ animationDelay: "2s" }} />
                </div>

                {/* Bottom gradient for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

                {/* Text content */}
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[1px] bg-white/60" />
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">
                      Featured Work
                    </p>
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                    Lamaran Garden
                    <br />
                    <span className="italic font-normal">Romantic</span>
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-[11px] text-white/70">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" /> Romantic
                    </span>
                    <span>•</span>
                    <span>2025</span>
                  </div>
                </div>
              </div>

              {/* Floating stats card — top left */}
              <div className="absolute -left-4 sm:-left-10 top-8 bg-white rounded-2xl p-4 shadow-2xl animate-float border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal/60 uppercase tracking-wider">Acara Sukses</p>
                    <p className="font-display text-xl font-bold text-charcoal leading-tight">500+</p>
                  </div>
                </div>
              </div>

              {/* Floating rating card — right */}
              <div
                className="absolute -right-4 sm:-right-8 top-1/3 bg-white rounded-2xl p-4 shadow-2xl animate-float border border-primary/10"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-charcoal leading-none">4.9</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-2 h-2 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating service tag — bottom left */}
              <div
                className="absolute -left-6 sm:-left-12 bottom-20 bg-white rounded-2xl p-3 pr-5 shadow-2xl animate-float border border-primary/10"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-[9px] text-charcoal/50 uppercase tracking-wider leading-none">Live</p>
                    <p className="text-xs font-semibold text-charcoal">Dekor Lamaran</p>
                  </div>
                </div>
              </div>

              {/* Floating camera badge — bottom right */}
              <div
                className="absolute right-4 -bottom-4 bg-charcoal rounded-2xl p-3 shadow-2xl animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="flex items-center gap-2 text-white">
                  <Camera className="w-4 h-4 text-primary-light" />
                  <span className="text-xs font-medium">Photo-ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal/40 text-xs tracking-widest hidden md:flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-charcoal/40 to-transparent" />
      </div>
    </section>
  );
}
