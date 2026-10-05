import { NextResponse } from 'next/server';

import { couponSchema } from '@/lib/validators';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = couponSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ valid: false, message: 'Kortingscode is ongeldig.' }, { status: 400 });
  }

  const code = parsed.data.code.toUpperCase();
  const validCodes = {
    PIZZA10: { type: 'PERCENTAGE', value: 10 },
    PIZZA15: { type: 'FIXED', value: 5 },
  } as const;

  const match = validCodes[code as keyof typeof validCodes];

  if (!match) {
    return NextResponse.json({ valid: false, message: 'Kortingscode niet gevonden.' }, { status: 404 });
  }

  return NextResponse.json({
    valid: true,
    code,
    ...match,
  });
}
