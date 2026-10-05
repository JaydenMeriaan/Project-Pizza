'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';

import { formatCurrency } from '@/lib/utils';
import { useCart } from '@/components/cart-provider';

export function CartSheet() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <aside className="rounded-[28px] border border-[#e7ddd1] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.08)]">
      <div className="flex items-center justify-between gap-4 border-b border-[#efe3d8] pb-4">
        <h3 className="text-2xl font-bold text-[#1d2a1f]">Winkelmandje</h3>
        <span className="rounded-full bg-[#f4ece2] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b2774f]">{items.length} items</span>
      </div>

      <div className="mt-6 space-y-5">
        {items.length === 0 ? (
          <div className="rounded-2xl bg-[#f7f2eb] p-6 text-center text-sm text-[#5c655d]">
            Je mandje is nog leeg. Voeg eerst een pizza toe.
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-2xl border border-[#efe3d8] p-3">
              <div className="h-20 w-20 overflow-hidden rounded-xl bg-[#f4ede7]">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-[#1d2a1f]">{item.name}</h4>
                    <p className="text-sm text-[#667166]">{formatCurrency(item.price)} per stuk</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-[#b02a1b]" aria-label={`Verwijder ${item.name}`}>
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#e3d6c8] bg-[#faf7f4] p-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="rounded-full p-1.5 text-[#1d2a1f] hover:bg-white"><Minus size={14} /></button>
                    <span className="min-w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="rounded-full p-1.5 text-[#1d2a1f] hover:bg-white"><Plus size={14} /></button>
                  </div>
                  <p className="font-semibold text-[#1d2a1f]">{formatCurrency(item.price * item.quantity)}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-[#f7f2eb] p-4 text-sm text-[#475349]">
        <div className="flex items-center justify-between">
          <span>Subtotaal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span>Bezorgkosten</span>
          <span>{formatCurrency(4.5)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[#efe3d8] pt-3 text-base font-bold text-[#1d2a1f]">
          <span>Totaal</span>
          <span>{formatCurrency(subtotal + 4.5)}</span>
        </div>
      </div>

      <Link href="/checkout" className="mt-6 block rounded-full bg-[#1d2a1f] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2f4738]">
        Ga naar checkout
      </Link>
    </aside>
  );
}
