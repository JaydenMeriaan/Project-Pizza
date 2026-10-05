'use client';

import Link from 'next/link';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useCart } from '@/components/cart-provider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/#about', label: 'Over ons' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[#f0e6dc] bg-[#f7f2eb]/90 shadow-[0_12px_30px_rgba(29,42,31,0.05)] backdrop-blur-xl' : 'border-b border-transparent bg-[#f7f2eb]/70 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d2a1f] text-lg font-bold text-white shadow-lg shadow-[#1d2a1f]/20 transition-transform duration-300 hover:scale-105">P</div>
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-[#1d2a1f]">PIZZA</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b2774f]">La Dolce Vita</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-sm font-medium text-[#28352b] transition hover:text-[#b2774f] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#b2774f] after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Zoeken" className="hidden rounded-full border border-[#e9dccd] bg-white p-2.5 text-[#1d2a1f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d7a24d] hover:shadow-md sm:inline-flex">
            <Search size={18} />
          </button>
          <Link href="/login" className="hidden items-center gap-2 rounded-full border border-[#e9dccd] bg-white px-4 py-2 text-sm font-semibold text-[#1d2a1f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d7a24d] hover:shadow-md sm:inline-flex">
            <User size={16} />
            Account
          </Link>
          <Link href="/checkout" className="inline-flex items-center gap-2 rounded-full bg-[#1d2a1f] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1d2a1f]/15 transition hover:-translate-y-0.5 hover:bg-[#273a2d]">
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Mandje</span>
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d7a24d] px-1 text-xs text-[#1d2a1f]">{itemCount}</span>
          </Link>
          <button className="inline-flex rounded-full border border-[#e9dccd] bg-white p-2.5 text-[#1d2a1f] shadow-sm transition hover:border-[#d7a24d] md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Menu openen">
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[#f0e6dc] bg-[#f7f2eb] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-[#28352b]">
                {link.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#1d2a1f] px-4 py-2 text-center text-sm font-semibold text-white">
              Inloggen
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
