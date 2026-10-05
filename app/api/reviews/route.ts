import { NextResponse } from 'next/server';

const fallbackReviews = [
  { id: 'r1', name: 'Mila', rating: 5, comment: 'Heerlijk, authentiek en perfect gebakken.' },
  { id: 'r2', name: 'Luca', rating: 5, comment: 'Beste pizza in de buurt. De burrata is geweldig.' },
  { id: 'r3', name: 'Sofia', rating: 4, comment: 'Vlotte bezorging en frisse ingrediënten.' },
];

export async function GET() {
  return NextResponse.json(fallbackReviews);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    review: { id: 'new-review', ...body },
  });
}
