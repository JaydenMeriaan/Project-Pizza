import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

import { AddToCartButton } from '@/components/add-to-cart-button';
import { findProductBySlug } from '@/lib/products';

export async function generateStaticParams() {
  const { products } = await import('@/lib/products');
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return { title: 'Product niet gevonden' };
  }

  return {
    title: `${product.name} | Project Pizza`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-medium text-[#1d2a1f]">
        <ArrowLeft size={16} />
        Terug naar menu
      </Link>

      <div className="mt-8 grid gap-8 rounded-[32px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[24px] border border-[#efe3d8] bg-[#faf7f4]">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2774f]">{product.category}</p>
          <h1 className="mt-3 text-4xl font-bold text-[#1d2a1f]">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#5b655d]">
            <Star size={16} className="fill-[#d7a24d] text-[#d7a24d]" />
            <span>{product.rating ?? 4.8}</span>
          </div>
          <p className="mt-5 text-lg leading-8 text-[#58615b]">{product.description}</p>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#faf7f4] p-4">
            <span className="text-sm uppercase tracking-[0.2em] text-[#7d857f]">Prijs</span>
            <span className="text-3xl font-bold text-[#1d2a1f]">€{product.price.toFixed(2)}</span>
          </div>

          <div className="mt-6 space-y-3">
            <h2 className="text-lg font-semibold text-[#1d2a1f]">Ingrediënten</h2>
            <div className="flex flex-wrap gap-2">
              {(product.ingredients ?? []).map((ingredient) => (
                <span key={ingredient} className="rounded-full border border-[#e8ddd0] bg-[#faf7f4] px-3 py-1.5 text-xs font-medium text-[#1d2a1f]">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <AddToCartButton id={product.slug} name={product.name} price={product.price} image={product.image} variant="detail" />
            <Link href="/checkout" className="rounded-full border border-[#e8ddd0] bg-white px-5 py-3 text-sm font-semibold text-[#1d2a1f]">Afrekenen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
