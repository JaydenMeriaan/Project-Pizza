import { NextResponse } from 'next/server';

import { checkoutSchema } from '@/lib/validators';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: 'Controleer je bestellinggegevens.' }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    orderNumber: `PZ-${Date.now().toString().slice(-6)}`,
    message: 'Bestelling ontvangen. Je ontvangt een bevestiging per e-mail.',
  });
}
