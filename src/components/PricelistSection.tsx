import { Check, Sparkles, Plus } from "lucide-react";
import Reveal from "./Reveal";

const packages = [
  {
    name: "470K",
    tagline: "Paket hemat untuk momen intimate",
    price: "470",
    priceUnit: "Ribu",
    popular: false,
    features: [
      "Backdrop Max 3m",
      "1 Ring Oval",
      "2 Standing Flower",
      "Bunga Artificial",
      "2 Kursi Tiffani",
      "1 Welcome Sign",
      "2 Lampu Sorot",
      "Nama di Papan",
      "Hand Bouquet",
      "Permadani",
    ],
  },
  {
    name: "550K",
    tagline: "Paket pilihan terpopuler",
    price: "550",
    priceUnit: "Ribu",
    popular: true,
    features: [
      "Backdrop Max 3m",
      "1 Ring Lingkaran 2m",
      "2 Standing Flower / 2 Standing Lampu (bebas pilih)",
      "Bunga Artificial",
      "2 Kursi Tiffani",
      "1 Welcome Sign",
      "2 Lampu Sorot",
      "Nama di Papan",
      "Hand Bouquet",
      "Permadani",
    ],
  },
  {
    name: "850K",
    tagline: "Paket lengkap & mewah",
    price: "850",
    priceUnit: "Ribu",
    popular: false,
    features: [
      "Backdrop Max 3m",
      "2 Ring Oval",
      "2 Standing Lampu",
      "Bunga Artificial",
      "2 Kursi Tiffani",
      "1 Welcome Sign",
      "2 Lampu Sorot",
      "Nama di Papan",
      "Hand Bouquet",
      "Permadani",
    ],
  },
];

const colorOptions = ["Pink", "Merah Maroon", "Biru", "Putih", "Peach"];

const addOns = [
  { name: "Include MUA", price: "+ 350K" },
  { name: "Include FG (Flower Girl)", price: "+ 500K" },
];

export default function PricelistSection() {
  return (
    <section id="harga" className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary-dark font-medium text-xs uppercase tracking-[0.25em] mb-4">
              — Harga Paket
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
              Paket Dekorasi <span className="italic gradient-text">Terjangkau</span>
            </h2>
            <p className="mt-6 text-charcoal/70 text-lg">
              Pilih paket yang sesuai kebutuhan dan budget Anda. Semua paket bisa
              disesuaikan dengan tema yang diinginkan.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <div
                className={`relative rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 ${
                  pkg.popular
                    ? "bg-charcoal text-white shadow-2xl shadow-charcoal/30 lg:scale-105"
                    : "bg-white border border-primary/10 hover:border-primary/30 hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        Terpopuler
                      </span>
                    </div>
                  </>
                )}

                <div className="relative">
                  <p
                    className={`text-xs uppercase tracking-[0.2em] ${
                      pkg.popular ? "text-primary-light" : "text-primary-dark"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                  <h3
                    className={`font-display text-3xl font-bold mt-2 ${
                      pkg.popular ? "text-white" : "text-charcoal"
                    }`}
                  >
                    Paket {pkg.name}
                  </h3>

                  <div className="mt-6 pb-6 border-b border-current/10">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-sm ${pkg.popular ? "text-white/60" : "text-charcoal/60"}`}
                      >
                        Rp
                      </span>
                      <span
                        className={`font-display text-5xl font-bold ${
                          pkg.popular ? "text-white" : "text-charcoal"
                        }`}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={`text-sm ${pkg.popular ? "text-white/60" : "text-charcoal/60"}`}
                      >
                        {pkg.priceUnit}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 ${
                        pkg.popular ? "text-white/50" : "text-charcoal/50"
                      }`}
                    >
                      Sudah termasuk setup
                    </p>
                  </div>

                  <ul className="space-y-3 mt-6 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            pkg.popular ? "bg-primary" : "bg-primary/10"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              pkg.popular ? "text-white" : "text-primary-dark"
                            }`}
                          />
                        </div>
                        <span
                          className={pkg.popular ? "text-white/80" : "text-charcoal/70"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/6285283910033?text=Halo%20Kaladeco%2C%20saya%20tertarik%20dengan%20Paket%20${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-full font-medium text-sm transition-all ${
                      pkg.popular
                        ? "bg-white text-charcoal hover:bg-primary hover:text-white"
                        : "bg-charcoal text-white hover:bg-primary"
                    }`}
                  >
                    Pilih Paket {pkg.name}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons + Color options */}
        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 border border-primary/10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-dark">
                    Add-on
                  </p>
                  <h4 className="font-display text-xl font-semibold text-charcoal">
                    Layanan Tambahan
                  </h4>
                </div>
              </div>
              <ul className="space-y-3">
                {addOns.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between p-4 bg-cream rounded-2xl"
                  >
                    <span className="text-sm text-charcoal/80">{item.name}</span>
                    <span className="font-display font-bold text-primary-dark">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 border border-primary/10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-dark">
                    Pilihan Warna
                  </p>
                  <h4 className="font-display text-xl font-semibold text-charcoal">
                    Warna Bunga Tersedia
                  </h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {colorOptions.map((color) => (
                  <span
                    key={color}
                    className="px-4 py-2 bg-cream rounded-full text-sm text-charcoal/80 border border-primary/10"
                  >
                    {color}
                  </span>
                ))}
              </div>
              <p className="text-xs text-charcoal/60 italic leading-relaxed">
                Bebas mix warna. Jika ada request warna di luar pilihan di atas,
                akan dikenakan biaya tambahan.
              </p>
            </div>
          </Reveal>
        </div>

        <p className="text-center text-sm text-charcoal/50 mt-10">
          * Harga dapat berubah tergantung lokasi & kebutuhan tambahan.
          Konsultasi GRATIS via WhatsApp untuk penawaran khusus.
        </p>
      </div>
    </section>
  );
}
