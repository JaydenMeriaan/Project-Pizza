export type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category: string;
  rating?: number;
  ingredients?: string[];
  allergens?: string[];
};

export const products: Product[] = [
  {
    name: 'Margherita',
    description: 'Tomatensaus, mozzarella, basilicum en olijfolie.',
    price: 14.5,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    slug: 'margherita',
    category: 'Pizza',
    rating: 4.9,
    ingredients: ['Tomatensaus', 'Mozzarella', 'Basilicum'],
    allergens: ['Gluten', 'Melk'],
  },
  {
    name: 'Pepperoni',
    description: 'Pepperoni, mozzarella en kruiden.',
    price: 16.5,
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80',
    slug: 'pepperoni',
    category: 'Pizza',
    rating: 4.8,
    ingredients: ['Pepperoni', 'Mozzarella', 'Tomatensaus'],
    allergens: ['Gluten', 'Melk'],
  },
  {
    name: 'Prosciutto',
    description: 'Prosciutto, rucola en pecorino.',
    price: 17.5,
    image: 'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=900&q=80',
    slug: 'prosciutto',
    category: 'Pizza',
    rating: 4.9,
    ingredients: ['Ham', 'Rucola', 'Pecorino'],
    allergens: ['Gluten', 'Melk'],
  },
  {
    name: 'Funghi',
    description: 'Champignons, mozzarella en verse kruiden.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=80',
    slug: 'funghi',
    category: 'Pizza',
    rating: 4.7,
    ingredients: ['Champignons', 'Mozzarella', 'Kruiden'],
    allergens: ['Gluten', 'Melk'],
  },
  {
    name: 'Diavola',
    description: 'Spicy salami, jalapeños en mozzarella.',
    price: 18.5,
    image: 'https://images.unsplash.com/photo-1618219871453-5df533ffc4c8?auto=format&fit=crop&w=900&q=80',
    slug: 'diavola',
    category: 'Pizza Special',
    rating: 4.9,
    ingredients: ['Salami', 'Jalapeños', 'Mozzarella'],
    allergens: ['Gluten', 'Melk'],
  },
  {
    name: 'Burrata Special',
    description: 'Burrata, tomaat, basilicum en pesto.',
    price: 21.5,
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=900&q=80',
    slug: 'burrata-special',
    category: 'Pizza Special',
    rating: 5,
    ingredients: ['Burrata', 'Basilicum', 'Pesto'],
    allergens: ['Gluten', 'Melk', 'Noten'],
  },
  {
    name: 'Lasagne',
    description: 'Pasta met ragu, béchamel en parmezaan.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    slug: 'lasagne',
    category: 'Pasta',
    rating: 4.8,
    ingredients: ['Ragu', 'Béchamel', 'Parmezaan'],
    allergens: ['Gluten', 'Melk'],
  },
  {
    name: 'Caesar salad',
    description: 'Vers gemengde salade met kip en parmezaan.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    slug: 'caesar-salad',
    category: 'Salades',
    rating: 4.6,
    ingredients: ['Kip', 'Salad', 'Parmezaan'],
    allergens: ['Melk'],
  },
];

export const categories = ['Alle', 'Pizza', 'Pizza Special', 'Pasta', 'Salades', 'Voorgerechten', 'Desserts', 'Dranken'];

export function findProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
