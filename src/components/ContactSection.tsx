import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import Reveal from "./Reveal";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 852-8391-0033",
    href: "https://wa.me/6285283910033",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kaladeco.id@gmail.com",
    href: "mailto:kaladeco.id@gmail.com",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@kaladeco.id",
    href: "https://instagram.com/kaladeco.id",
  },
  {
    icon: MapPin,
    label: "Area",
    value: "Purwokerto & sekitarnya",
    href: null,
  },
  {
    icon: Clock,
    label: "Jam Buka",
    value: "Senin–Sabtu, 24 jam",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-24 sm:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-dark/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Big CTA */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-primary-light font-medium text-xs uppercase tracking-[0.25em] mb-4">
                — Mari Berbincang
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold">
                Siap mewujudkan
                <br />
                <span className="italic gradient-text">acara impian</span> Anda?
              </h2>
              <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
                Konsultasi GRATIS tanpa kewajiban. Ceritakan konsep impian Anda,
                kami bantu wujudkan dengan dekorasi terbaik.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285283910033?text=Halo%20Kaladeco%2C%20saya%20ingin%20konsultasi%20tentang%20dekorasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-charcoal px-8 py-4 rounded-full font-medium text-sm hover:bg-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="mailto:kaladeco.id@gmail.com"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Kirim Email
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Contact list */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10">
                <h3 className="font-display text-2xl font-semibold mb-8">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  {contacts.map((contact) => {
                    const content = (
                      <>
                        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-charcoal transition-colors">
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-wider text-white/50">
                            {contact.label}
                          </p>
                          <p className="text-sm font-medium mt-1">{contact.value}</p>
                        </div>
                        {contact.href && (
                          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        )}
                      </>
                    );

                    return contact.href ? (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={contact.label} className="group flex items-center gap-4">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
