import { Phone, Mail, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-display text-lg font-bold">K</span>
              </div>
              <span className="font-display text-2xl font-bold">
                Kala<span className="text-primary-light">deco</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Mendekor dengan hati, semoga sampai ke hati. Penyedia jasa dekorasi
              lamaran, prewedding, tasyakuran, maternity shoot, dan acara lainnya
              untuk wilayah Purwokerto dan sekitarnya.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-primary-light font-semibold mb-5">
              Menu
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#beranda" className="text-white/70 hover:text-primary-light transition-colors">Beranda</a></li>
              <li><a href="/#tentang" className="text-white/70 hover:text-primary-light transition-colors">Tentang</a></li>
              <li><a href="/#layanan" className="text-white/70 hover:text-primary-light transition-colors">Layanan</a></li>
              <li><a href="/#portfolio" className="text-white/70 hover:text-primary-light transition-colors">Portfolio</a></li>
              <li><a href="/#harga" className="text-white/70 hover:text-primary-light transition-colors">Harga</a></li>
              <li><a href="/blog" className="text-white/70 hover:text-primary-light transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-primary-light font-semibold mb-5">
              Layanan
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Dekorasi Lamaran</li>
              <li>Dekorasi Prewedding</li>
              <li>Dekorasi Tasyakuran</li>
              <li>Maternity Shoot</li>
              <li>Rangkaian Bunga</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-primary-light font-semibold mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary-light" />
                <span>+62 852-8391-0033</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary-light" />
                <span>kaladeco.id@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-light" />
                <span>Purwokerto, Indonesia</span>
              </li>
              <li className="pt-3">
                <a
                  href="https://instagram.com/kaladeco.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Kaladeco. Semua hak dilindungi.
          </p>
          <p className="text-xs text-white/50 font-display italic">
            Crafted with ♥ for every special moment
          </p>
        </div>
      </div>
    </footer>
  );
}
