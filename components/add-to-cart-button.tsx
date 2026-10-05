'use client';

import { ShoppingBag } from 'lucide-react';

import { useCart } from '@/components/cart-provider';

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  variant?: 'card' | 'detail';
};

export function AddToCartButton({ id, name, price, image, variant = 'card' }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleClick = () => {
    addItem({
      id,
      name,
      price,
      quantity: 1,
      image,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={variant === 'detail' ? 'flex-1 rounded-full bg-[#1d2a1f] px-5 py-3 text-sm font-semibold text-white' : 'inline-flex items-center gap-2 rounded-full bg-[#1d2a1f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d3d2f]'}
    >
      <ShoppingBag size={15} />
      {variant === 'detail' ? 'Naar mandje' : 'Toevoegen'}
    </button>
  );
}
