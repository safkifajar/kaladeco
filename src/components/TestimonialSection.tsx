import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Anisa & Rizki",
    event: "Dekorasi Lamaran",
    text: "Kaladeco benar-benar mewujudkan dekorasi lamaran impian kami! Hasilnya sangat cantik dan romantis. Semua tamu kagum dengan dekorasinya.",
    rating: 5,
    avatar: "from-rose-300 to-pink-400",
  },
  {
    name: "Laras & Dimas",
    event: "Prewedding Shoot",
    text: "Dekorasi prewedding-nya bagus banget, konsepnya pas dengan yang kami mau. Tim-nya ramah dan detail. Hasil fotonya jadi aesthetic banget!",
    rating: 5,
    avatar: "from-sky-300 to-blue-400",
  },
  {
    name: "Dina Maharani",
    event: "Maternity Shoot",
    text: "Dekorasi maternity shoot-nya cantik banget! Semua detail diperhatikan. Foto-fotonya jadi sangat aesthetic. Highly recommended!",
    rating: 5,
    avatar: "from-purple-300 to-violet-400",
  },
  {
    name: "Bapak Ahmad",
    event: "Tasyakuran Keluarga",
    text: "Puas banget dengan dekorasi tasyakuran di rumah. Nuansanya hangat, detailnya rapi, dan harga sangat reasonable untuk kualitas yang diberikan. Recommended!",
    rating: 5,
    avatar: "from-amber-300 to-orange-400",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
              — Testimoni
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
              Kata Mereka tentang <span className="italic gradient-text">Kami</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <div className="relative bg-cream rounded-3xl p-8 sm:p-10 h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-primary/10">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-charcoal/80 text-base leading-relaxed mb-8 font-display italic">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.avatar} flex items-center justify-center text-white font-display font-semibold`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{item.name}</p>
                    <p className="text-xs text-primary-dark uppercase tracking-wider mt-0.5">
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
