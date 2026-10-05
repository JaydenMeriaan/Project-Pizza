import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItemTopping.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.review.deleteMany();
  await prisma.productTopping.deleteMany();
  await prisma.topping.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.openingHour.deleteMany();

  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
  const adminHash = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.create({
    data: {
      name: 'Admin Pizzeria',
      email: process.env.ADMIN_EMAIL || 'admin@projectpizza.local',
      passwordHash: adminHash,
      role: 'ADMIN',
      phone: '+310612345678',
    },
  });

  const categories = await Promise.all([
    prisma.category.create({ data: { name: 'Pizza', slug: 'pizza', description: 'Klassieke pizza’s', image: 'https://images.unsplash.com/...' , sortOrder: 1 } }),
    prisma.category.create({ data: { name: 'Pizza Special', slug: 'pizza-special', description: 'Specialiteiten van de ovens', image: 'https://images.unsplash.com/...' , sortOrder: 2 } }),
    prisma.category.create({ data: { name: 'Pasta', slug: 'pasta', description: 'Italiaanse pastas', image: 'https://images.unsplash.com/...' , sortOrder: 3 } }),
    prisma.category.create({ data: { name: 'Salades', slug: 'salades', description: 'Verse salades', image: 'https://images.unsplash.com/...' , sortOrder: 4 } }),
    prisma.category.create({ data: { name: 'Voorgerechten', slug: 'voorgerechten', description: 'Fris en lekker', image: 'https://images.unsplash.com/...' , sortOrder: 5 } }),
    prisma.category.create({ data: { name: 'Desserts', slug: 'desserts', description: 'Italiaanse lekkernijen', image: 'https://images.unsplash.com/...' , sortOrder: 6 } }),
    prisma.category.create({ data: { name: 'Dranken', slug: 'dranken', description: 'Frisdranken en wijn', image: 'https://images.unsplash.com/...' , sortOrder: 7 } }),
  ]);

  const [pizzaCategory, specialCategory, pastaCategory, saladCategory, starterCategory, dessertCategory, drinkCategory] = categories;

  const toppings = await Promise.all([
    prisma.topping.create({ data: { name: 'Mozzarella', price: 1.5 } }),
    prisma.topping.create({ data: { name: 'Burrata', price: 2.5 } }),
    prisma.topping.create({ data: { name: 'Salami', price: 2.4 } }),
    prisma.topping.create({ data: { name: 'Pepperoni', price: 2.4 } }),
    prisma.topping.create({ data: { name: 'Ham', price: 2.2 } }),
    prisma.topping.create({ data: { name: 'Champignons', price: 1.8 } }),
    prisma.topping.create({ data: { name: 'Olijven', price: 1.6 } }),
    prisma.topping.create({ data: { name: 'Paprika', price: 1.6 } }),
    prisma.topping.create({ data: { name: 'Ui', price: 1.4 } }),
    prisma.topping.create({ data: { name: 'Jalapeño', price: 1.7 } }),
    prisma.topping.create({ data: { name: 'Kip', price: 2.3 } }),
    prisma.topping.create({ data: { name: 'Tonijn', price: 2.1 } }),
    prisma.topping.create({ data: { name: 'Ananas', price: 1.9 } }),
    prisma.topping.create({ data: { name: 'Rucola', price: 1.8 } }),
  ]);

  const productDefs = [
    { name: 'Margherita', slug: 'margherita', categoryId: pizzaCategory.id, desc: 'Tomatensaus, mozzarella, basilicum en extra virgin olive oil.', price: 14.5, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Pepperoni', slug: 'pepperoni', categoryId: pizzaCategory.id, desc: 'Pepperoni, mozzarella en tomatensaus met een robuuste smaak.', price: 16.5, image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Prosciutto', slug: 'prosciutto', categoryId: pizzaCategory.id, desc: 'Ham, rucola en pecorino voor een elegante Italiaanse smaak.', price: 17.5, image: 'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Quattro Formaggi', slug: 'quattro-formaggi', categoryId: pizzaCategory.id, desc: 'Gorgonzola, mozzarella, parmesan en pecorino.', price: 18.0, image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Funghi', slug: 'funghi', categoryId: pizzaCategory.id, desc: 'Champignons, mozzarella en verse kruiden.', price: 16.0, image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=80', featured: false },
    { name: 'Diavola', slug: 'diavola', categoryId: specialCategory.id, desc: 'Spicy salami, chili en mozzarella met een warme finish.', price: 18.5, image: 'https://images.unsplash.com/photo-1618219871453-5df533ffc4c8?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Capricciosa', slug: 'capricciosa', categoryId: specialCategory.id, desc: 'Ham, champignons, olijven, artichokes en mozzarella.', price: 19.0, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=80', featured: false },
    { name: 'Vegetariana', slug: 'vegetariana', categoryId: specialCategory.id, desc: 'Groenten, basilicum, mozzarella en een lichte tomatensaus.', price: 17.0, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80', featured: false },
    { name: 'BBQ Chicken', slug: 'bbq-chicken', categoryId: specialCategory.id, desc: 'Kip, BBQ-saus, ui en extra mozzarella.', price: 19.5, image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Tonno', slug: 'tonno', categoryId: specialCategory.id, desc: 'Tonijn, ui, capers en mozzarella op een lichte saus.', price: 18.0, image: 'https://images.unsplash.com/photo-1551970634-747846a548cb?auto=format&fit=crop&w=900&q=80', featured: false },
    { name: 'Parma', slug: 'parma', categoryId: specialCategory.id, desc: 'Parmaham, burrata, rucola en zongedroogde tomaten.', price: 20.5, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80', featured: true },
    { name: 'Burrata Special', slug: 'burrata-special', categoryId: specialCategory.id, desc: 'Burrata, tomaten, basilicum en pesto.', price: 21.5, image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=900&q=80', featured: true },
  ];

  const createdProducts = await Promise.all(
    productDefs.map((product) =>
      prisma.product.create({
        data: {
          categoryId: product.categoryId,
          name: product.name,
          slug: product.slug,
          description: product.desc,
          price: product.price,
          image: product.image,
          featured: product.featured,
        },
      }),
    ),
  );

  const productMap = new Map(createdProducts.map((p) => [p.slug, p]));

  const toppingAssignments: Array<[string, string[]]> = [
    ['margherita', ['Mozzarella']],
    ['pepperoni', ['Mozzarella', 'Pepperoni']],
    ['prosciutto', ['Mozzarella', 'Ham', 'Rucola']],
    ['quattro-formaggi', ['Mozzarella', 'Burrata']],
    ['funghi', ['Champignons', 'Mozzarella']],
    ['diavola', ['Salami', 'Jalapeño', 'Mozzarella']],
    ['capricciosa', ['Ham', 'Champignons', 'Olijven', 'Mozzarella']],
    ['vegetariana', ['Paprika', 'Ui', 'Rucola', 'Mozzarella']],
    ['bbq-chicken', ['Kip', 'Ui', 'Mozzarella']],
    ['tonno', ['Tonijn', 'Ui', 'Mozzarella']],
    ['parma', ['Ham', 'Burrata', 'Rucola']],
    ['burrata-special', ['Burrata', 'Rucola', 'Mozzarella']],
  ];

  for (const [slug, names] of toppingAssignments) {
    const product = productMap.get(slug as string);
    if (!product) continue;

    for (const name of names) {
      const topping = toppings.find((item) => item.name === name);
      if (!topping) continue;

      await prisma.productTopping.create({
        data: {
          productId: product.id,
          toppingId: topping.id,
        },
      });
    }
  }

  await prisma.coupon.createMany({
    data: [
      { code: 'PIZZA10', type: 'PERCENTAGE', value: 10, minimumOrderAmount: 20, maxUses: 50, usedCount: 0, active: true },
      { code: 'PIZZA15', type: 'FIXED', value: 5, minimumOrderAmount: 30, maxUses: 25, usedCount: 0, active: true },
    ],
  });

  await prisma.openingHour.createMany({
    data: [
      { dayOfWeek: 0, openTime: '16:00', closeTime: '22:00', closed: false },
      { dayOfWeek: 1, openTime: '16:00', closeTime: '22:00', closed: false },
      { dayOfWeek: 2, openTime: '16:00', closeTime: '22:00', closed: false },
      { dayOfWeek: 3, openTime: '16:00', closeTime: '22:00', closed: false },
      { dayOfWeek: 4, openTime: '16:00', closeTime: '23:00', closed: false },
      { dayOfWeek: 5, openTime: '16:00', closeTime: '23:00', closed: false },
      { dayOfWeek: 6, openTime: '16:00', closeTime: '22:00', closed: false },
    ],
  });

  const demoUser = await prisma.user.create({
    data: {
      name: 'Mila Rossi',
      email: 'mila@example.com',
      passwordHash: await bcrypt.hash('password123', 10),
      phone: '+310623456789',
    },
  });

  await prisma.review.createMany({
    data: [
      { userId: demoUser.id, productId: productMap.get('margherita')!.id, rating: 5, comment: 'Perfecte balans tussen tomatensaus en mozzarella. Geweldig!', approved: true },
      { userId: demoUser.id, productId: productMap.get('diavola')!.id, rating: 5, comment: 'Heerlijk pittig en echt authentiek. Ik kom zeker terug.', approved: true },
      { userId: admin.id, productId: productMap.get('parma')!.id, rating: 4, comment: 'Luxe smaak en mooi verzorgd.', approved: true },
    ],
  });

  console.log('Seeded data for Project Pizza');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
