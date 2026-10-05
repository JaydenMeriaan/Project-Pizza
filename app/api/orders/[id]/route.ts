import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return NextResponse.json({ id, status: 'RECEIVED', total: 32.5 });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const body = await request.json();
  const { id } = await params;

  return NextResponse.json({
    ok: true,
    id,
    status: body.status ?? 'IN_OVEN',
  });
}
