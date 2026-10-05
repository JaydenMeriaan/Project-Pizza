'use client';

import { CreditCard, MapPin, Truck } from 'lucide-react';

import { useCart } from '@/components/cart-provider';
import { formatCurrency } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2774f]">Checkout</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1d2a1f]">Jouw bestelling</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ece2] text-[#b2774f]">1</div>
              <h2 className="text-xl font-semibold text-[#1d2a1f]">Klantgegevens</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4" placeholder="Voornaam" />
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4" placeholder="Achternaam" />
              <input type="email" className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4 md:col-span-2" placeholder="E-mail" />
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4 md:col-span-2" placeholder="Telefoonnummer" />
            </div>
          </section>

          <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ece2] text-[#b2774f]">2</div>
              <h2 className="text-xl font-semibold text-[#1d2a1f]">Bezorgadres</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4 md:col-span-2" placeholder="Straat" />
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4" placeholder="Huisnummer" />
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4" placeholder="Postcode" />
              <input className="h-12 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4 md:col-span-2" placeholder="Plaats" />
              <textarea className="h-24 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] px-4 py-3 md:col-span-2" placeholder="Opmerking voor bezorger" />
            </div>
          </section>

          <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ece2] text-[#b2774f]">3</div>
              <h2 className="text-xl font-semibold text-[#1d2a1f]">Bezorging of afhalen</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] p-4"><input type="radio" name="delivery" defaultChecked /><span className="flex items-center gap-2"><Truck size={16} /> Bezorgen</span></label>
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] p-4"><input type="radio" name="delivery" /><span className="flex items-center gap-2"><MapPin size={16} /> Afhalen</span></label>
            </div>
          </section>

          <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ece2] text-[#b2774f]">4</div>
              <h2 className="text-xl font-semibold text-[#1d2a1f]">Betaalmethode</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {['iDEAL', 'Creditcard', 'Apple Pay', 'Contant bij bezorgen'].map((method) => (
                <label key={method} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#e7ddd1] bg-[#faf7f4] p-4"><input type="radio" name="payment" defaultChecked={method === 'Creditcard'} /><span className="flex items-center gap-2"><CreditCard size={16} /> {method}</span></label>
              ))}
            </div>
          </section>
        </div>

        <aside className="rounded-[28px] border border-[#e7ddd1] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.08)]">
          <h2 className="text-2xl font-bold text-[#1d2a1f]">Samenvatting</h2>
          <div className="mt-6 space-y-4">
            {items.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#e7ddd1] bg-[#faf7f4] p-6 text-center text-sm text-[#5c655d]">
                Je mandje is nog leeg. Voeg eerst een pizza toe.
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 rounded-2xl border border-[#efe3d8] bg-[#faf7f4] p-3">
                  <div>
                    <p className="font-semibold text-[#1d2a1f]">{item.name}</p>
                    <p className="text-sm text-[#5c655d]">Aantal: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-[#1d2a1f]">{formatCurrency(item.quantity * item.price)}</p>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 space-y-3 text-sm text-[#49574b]">
            <div className="flex items-center justify-between"><span>Subtotaal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex items-center justify-between"><span>Bezorgkosten</span><span>{formatCurrency(4.5)}</span></div>
            <div className="flex items-center justify-between"><span>Korting</span><span>-{formatCurrency(0)}</span></div>
            <div className="mt-3 flex items-center justify-between border-t border-[#efe3d8] pt-3 text-base font-bold text-[#1d2a1f]"><span>Totaal</span><span>{formatCurrency(subtotal + 4.5)}</span></div>
          </div>
          <button className="mt-8 w-full rounded-full bg-[#1d2a1f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2d3d2f]">Betaal nu</button>
        </aside>
      </div>
    </div>
  );
}
