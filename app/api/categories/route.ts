import { NextResponse } from 'next/server';

import { prisma } from '@/lib/db';

const fallbackCategories = [
  { id: 'cat-1', name: 'Pizza', slug: 'pizza', description: 'Klassieke pizza’s', active: true },
  { id: 'cat-2', name: 'Pizza Special', slug: 'pizza-special', description: 'Specialiteiten van de oven', active: true },
  { id: 'cat-3', name: 'Pasta', slug: 'pasta', description: 'Italiaanse pastas', active: true },
  { id: 'cat-4', name: 'Salades', slug: 'salades', description: 'Verse salades', active: true },
];

export async function GET() {
  try {
    const categories = await prisma.category.findMany({ orderBy: { sortOrder: 'asc' } });
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json(fallbackCategories);
  }
}
