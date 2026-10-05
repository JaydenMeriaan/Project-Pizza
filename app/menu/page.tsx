'use client';

import Link from 'next/link';
import { Search, SlidersHorizontal, Star } from 'lucide-react';
import { useMemo, useState } from 'react';

import { ProductCard } from '@/components/product-card';
import { SectionHeading } from '@/components/section-heading';
import { categories, products } from '@/lib/products';

export default function MenuPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'Alle' || product.category === activeCategory;
      const haystack = `${product.name} ${product.description} ${product.ingredients?.join(' ') ?? ''}`.toLowerCase();
      const matchesSearch = !normalized || haystack.includes(normalized);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Menu" title="Ons complete aanbod" description="Zoek naar jouw favoriete pizza of ontdek iets nieuws." />

      <div className="mt-10 flex flex-col gap-5 rounded-[28px] border border-[#e8ddd0] bg-white p-4 shadow-[0_18px_60px_rgba(29,42,31,0.04)] md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a938c]" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Zoek op pizza, pasta of topping..."
            className="h-12 w-full rounded-full border border-[#eadfd0] bg-[#faf7f4] pl-11 pr-4 text-sm outline-none transition focus:border-[#d7a24d]"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#e2d7cb] bg-[#fffaf4] px-4 py-2 text-sm font-medium text-[#1d2a1f]">
            <SlidersHorizontal size={15} />
            Filters
          </button>
          <Link href="/checkout" className="rounded-full bg-[#1d2a1f] px-5 py-2.5 text-sm font-semibold text-white">Bestellen</Link>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category ? 'bg-[#1d2a1f] text-white' : 'border border-[#e8ddd0] bg-white text-[#1d2a1f] hover:border-[#d7a24d]'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[28px] border border-dashed border-[#d7c7ba] bg-[#fffaf6] p-10 text-center">
          <p className="text-lg font-semibold text-[#1d2a1f]">Geen producten gevonden</p>
          <p className="mt-2 text-sm text-[#5c655d]">Probeer een andere zoekterm of kies een andere categorie.</p>
        </div>
      )}

      <div className="mt-12 rounded-[28px] border border-[#e8ddd0] bg-[#fffaf6] p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2774f]">Trending</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1d2a1f]">Fotogenieke specialiteiten</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#5b655d]">
            <Star size={16} className="fill-[#d7a24d] text-[#d7a24d]" /> 4.9 klantwaardering
          </div>
        </div>
      </div>
    </div>
  );
}
