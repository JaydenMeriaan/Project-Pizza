import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone, Clock3, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#17211a] text-[#edf0eb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-5 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7a24d] text-lg font-bold text-[#17211a]">P</div>
            <div>
              <p className="text-lg font-bold tracking-[0.2em]">PIZZA</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#d7a24d]">La Dolce Vita</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#d5ddd2]">
            Authentic Italian pizza, baked in traditional style with fresh ingredients and generous hospitality.
          </p>
          <div className="space-y-3 text-sm text-[#d5ddd2]">
            <div className="flex items-center gap-3"><MapPin size={16} className="text-[#d7a24d]" /> Via Roma 42, Amsterdam</div>
            <div className="flex items-center gap-3"><Phone size={16} className="text-[#d7a24d]" /> +31 (0)20 555 0171</div>
            <div className="flex items-center gap-3"><Mail size={16} className="text-[#d7a24d]" /> hello@projectpizza.nl</div>
            <div className="flex items-center gap-3"><Clock3 size={16} className="text-[#d7a24d]" /> Ma - Zo: 16:00 - 22:00</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Navigatie</h3>
          <ul className="mt-5 space-y-3 text-sm text-[#d5ddd2]">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link href="/#about" className="hover:text-white">Over ons</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Service</h3>
          <ul className="mt-5 space-y-3 text-sm text-[#d5ddd2]">
            <li><Link href="/privacy" className="hover:text-white">Privacybeleid</Link></li>
            <li><Link href="/terms" className="hover:text-white">Algemene voorwaarden</Link></li>
            <li><Link href="/account" className="hover:text-white">Mijn account</Link></li>
            <li><Link href="/admin" className="hover:text-white">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Volg ons</h3>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebefe9]/20 bg-white/5 text-[#edf0eb] transition hover:bg-[#d7a24d] hover:text-[#17211a]">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-sm text-[#d5ddd2] sm:px-6 lg:px-8">
          <p>© 2026 Project Pizza. Alle rechten voorbehouden.</p>
          <p>Made with love in Amsterdam.</p>
        </div>
      </div>
    </footer>
  );
}
