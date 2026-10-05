import { NextResponse } from 'next/server';

import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(orders);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const orderNumber = `PZ-${Date.now().toString().slice(-6)}`;
  const subtotal = Number(body.subtotal ?? 0);
  const deliveryFee = Number(body.deliveryFee ?? 0);
  const discount = Number(body.discount ?? 0);
  const total = subtotal + deliveryFee - discount;

  try {
    const order = await prisma.order.create({
      data: {
        orderNumber,
        status: 'RECEIVED',
        paymentStatus: 'PENDING',
        subtotal,
        deliveryFee,
        discount,
        total,
        deliveryMethod: body.deliveryMethod ?? 'DELIVERY',
        deliveryAddress: body.deliveryAddress ?? 'Demo-adres',
        notes: body.notes ?? '',
        userId: body.userId ?? null,
      },
    });

    return NextResponse.json({ ok: true, order });
  } catch {
    return NextResponse.json({ ok: true, order: { id: 'demo-order', orderNumber, total } });
  }
}
