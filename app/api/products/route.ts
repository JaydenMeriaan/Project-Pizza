import { NextResponse } from 'next/server';

import { prisma } from '@/lib/db';

const fallbackProducts = [
  { id: 'p1', name: 'Margherita', slug: 'margherita', description: 'Tomatensaus, mozzarella, basilicum en olijfolie.', price: 14.5, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80', categoryId: 'cat-1', active: true, featured: true },
  { id: 'p2', name: 'Pepperoni', slug: 'pepperoni', description: 'Pepperoni, mozzarella, tomatensaus en kruiden.', price: 16.5, image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80', categoryId: 'cat-1', active: true, featured: true },
  { id: 'p3', name: 'Funghi', slug: 'funghi', description: 'Champignons, mozzarella en kruiden.', price: 16, image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=80', categoryId: 'cat-1', active: true, featured: false },
  { id: 'p4', name: 'Diavola', slug: 'diavola', description: 'Spicy salami, jalapeños en mozzarella.', price: 18.5, image: 'https://images.unsplash.com/photo-1618219871453-5df533ffc4c8?auto=format&fit=crop&w=900&q=80', categoryId: 'cat-2', active: true, featured: true },
];

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(products);
  } catch {
    return NextResponse.json(fallbackProducts);
  }
}
