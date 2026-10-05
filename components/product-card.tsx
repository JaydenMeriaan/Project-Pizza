import Link from 'next/link';
import { Star } from 'lucide-react';

import { AddToCartButton } from '@/components/add-to-cart-button';
import { formatCurrency } from '@/lib/utils';

type ProductCardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  slug?: string;
};

export function ProductCard({ name, description, price, image, rating = 4.8, slug = '#' }: ProductCardProps) {
  return (
    <article className="luxury-card group overflow-hidden rounded-[28px] border border-[#e7ddd1] bg-white shadow-[0_18px_60px_rgba(29,42,31,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(29,42,31,0.12)]">
      <div className="relative h-64 overflow-hidden soft-border">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-[#1d2a1f]">{name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-[#7c8579]">
              <Star size={14} className="fill-[#d7a24d] text-[#d7a24d]" />
              <span>{rating}</span>
            </div>
          </div>
          <span className="text-xl font-bold text-[#b02a1b]">{formatCurrency(price)}</span>
        </div>
        <p className="text-sm leading-6 text-[#5f685f]">{description}</p>
        <div className="flex items-center justify-between gap-3 pt-2">
          <Link href={slug ? `/menu/${slug}` : '/menu'} className="text-sm font-semibold text-[#1d2a1f] underline decoration-[#d7a24d] underline-offset-4">
            Bekijk details
          </Link>
          <AddToCartButton id={slug || name} name={name} price={price} image={image} />
        </div>
      </div>
    </article>
  );
}
