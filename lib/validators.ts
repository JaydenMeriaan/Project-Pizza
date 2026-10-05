import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Wachtwoorden komen niet overeen.',
  path: ['confirmPassword'],
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  street: z.string().min(2),
  houseNumber: z.string().min(1),
  postalCode: z.string().min(4),
  city: z.string().min(2),
  notes: z.string().optional(),
  deliveryMethod: z.enum(['DELIVERY', 'PICKUP']),
  paymentMethod: z.enum(['IDEAL', 'CARD', 'APPLE_PAY', 'CASH']),
});

export const couponSchema = z.object({
  code: z.string().min(2),
});
