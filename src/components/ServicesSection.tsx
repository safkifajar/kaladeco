import { Heart, Camera, Gift, Flower2, PartyPopper, Sparkles, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Heart,
    number: "01",
    title: "Dekorasi Lamaran",
    description:
      "Ciptakan momen lamaran romantis dengan dekorasi elegan yang menggambarkan kisah cinta Anda.",
    tags: ["Backdrop custom", "Bunga segar", "Lighting romantis"],
    accent: "from-rose-100 to-pink-50",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Dekorasi Prewedding",
    description:
      "Ciptakan set prewedding shoot yang aesthetic dan memorable dengan konsep yang disesuaikan keinginan Anda.",
    tags: ["Konsep custom", "Props premium", "Lokasi fleksibel"],
    accent: "from-sky-100 to-blue-50",
  },
  {
    icon: Gift,
    number: "03",
    title: "Dekorasi Tasyakuran",
    description:
      "Rayakan syukur dengan dekorasi hangat dan berkesan untuk berbagai acara tasyakuran keluarga.",
    tags: ["Nuansa elegan", "Table setting", "Setup lengkap"],
    accent: "from-amber-100 to-yellow-50",
  },
  {
    icon: Camera,
    number: "04",
    title: "Maternity Shoot",
    description:
      "Abadikan momen kehamilan dengan setting dekorasi maternity shoot yang estetik dan elegan.",
    tags: ["Set studio", "Properti foto", "Backdrop elegan"],
    accent: "from-purple-100 to-violet-50",
  },
  {
    icon: PartyPopper,
    number: "05",
    title: "Acara Spesial",
    description:
      "Dari anniversary hingga surprise party, kami siap mendekorasi momen berharga Anda.",
    tags: ["Konsep custom", "Setup lengkap", "Tim profesional"],
    accent: "from-red-100 to-rose-50",
  },
  {
    icon: Flower2,
    number: "06",
    title: "Rangkaian Bunga",
    description:
      "Jasa rangkaian bunga segar dari hand bouquet hingga dekorasi ruangan lengkap.",
    tags: ["Bunga pilihan", "Desain custom", "Pengiriman cepat"],
    accent: "from-green-100 to-emerald-50",
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
              — Layanan Kami
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
              Dekorasi untuk <span className="italic gradient-text">Setiap Momen</span>
            </h2>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
              Berbagai layanan dekorasi profesional untuk menjadikan acara Anda
              lebih istimewa dan berkesan.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group relative bg-white rounded-3xl p-8 h-full hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cream group-hover:bg-white shadow-sm flex items-center justify-center transition-colors">
                      <service.icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <span className="font-display text-sm text-primary/40 font-medium tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-cream group-hover:bg-white/70 text-charcoal/70 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-primary transition-colors"
                  >
                    Tanya Detail
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
