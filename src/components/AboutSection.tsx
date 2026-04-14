import { Heart, Award, Users, Clock } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Heart,
    title: "Penuh Dedikasi",
    description: "Setiap detail kami kerjakan dengan sepenuh hati untuk hasil yang sempurna dan berkesan.",
  },
  {
    icon: Award,
    title: "Profesional",
    description: "Tim berpengalaman yang terlatih menangani berbagai jenis acara dengan standar tinggi.",
  },
  {
    icon: Users,
    title: "Tim Kreatif",
    description: "Didukung oleh tim yang siap mewujudkan konsep dekorasi impian Anda jadi nyata.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Kami memastikan semua persiapan selesai tepat waktu sebelum acara dimulai.",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
                — Tentang Kaladeco
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
                Keindahan yang <span className="italic gradient-text">Bercerita.</span>
              </h2>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                Kaladeco.id hadir untuk menghidupkan momen-momen berharga Anda —
                dari lamaran romantis, prewedding yang estetik, tasyakuran penuh syukur,
                hingga maternity shoot yang menawan. Melayani Purwokerto dan sekitarnya.
              </p>
              <div className="mt-8 pt-8 border-t border-primary/20">
                <p className="font-display italic text-xl text-charcoal/80 leading-relaxed">
                  &ldquo;Mendekor dengan hati, semoga sampai ke hati.&rdquo;
                </p>
                <p className="mt-3 text-sm text-charcoal/60">— Tim Kaladeco.id</p>
              </div>
            </Reveal>
          </div>

          {/* Right: Feature grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 100}>
                  <div className="group relative p-8 rounded-3xl bg-cream border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="absolute top-6 right-6 font-display text-5xl text-primary/10 font-bold">
                      0{i + 1}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
