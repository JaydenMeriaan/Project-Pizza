import Link from 'next/link';
import { ArrowRight, Clock3, Flame, Leaf, Sparkles, Star, Truck } from 'lucide-react';

import { ProductCard } from '@/components/product-card';
import { SectionHeading } from '@/components/section-heading';

const usps = [
  { icon: Leaf, title: 'Verse ingrediënten', description: 'Alle ingrediënten zijn elke dag vers aangevoerd en zorgvuldig geselecteerd.' },
  { icon: Sparkles, title: 'Traditioneel recept', description: 'Gemaakt volgens een authentiek Italiaans recept met een lichte, luchtige bodem.' },
  { icon: Flame, title: 'Vers uit de steenoven', description: 'Gebakken in de steenoven voor de perfecte textuur en smaak.' },
  { icon: Truck, title: 'Snelle bezorging', description: 'Snelle bezorging in en rond Amsterdam voor een warme pizza op tijd.' },
];

const featuredProducts = [
  { name: 'Margherita', description: 'Tomatensaus, mozzarella en basilicum.', price: 14.5, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80', slug: 'margherita' },
  { name: 'Pepperoni', description: 'Pepperoni, mozzarella en kruiden.', price: 16.5, image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80', slug: 'pepperoni' },
  { name: 'Prosciutto', description: 'Prosciutto, rucola en pecorino.', price: 17.5, image: 'https://images.unsplash.com/photo-1548365328-9f547fb9587c?auto=format&fit=crop&w=900&q=80', slug: 'prosciutto' },
  { name: 'Diavola', description: 'Spicy salami, jalapeños en mozzarella.', price: 18.5, image: 'https://images.unsplash.com/photo-1618219871453-5df533ffc4c8?auto=format&fit=crop&w=900&q=80', slug: 'diavola' },
];

const reviews = [
  { name: 'Luca', text: 'De beste pizza in Amsterdam. De bodem is perfect en de toppings zijn altijd vers.', rating: 5 },
  { name: 'Sofia', text: 'Ik bestel hier vaak. Vlotte service, perfecte pizza en snelle levering.', rating: 5 },
  { name: 'Marco', text: 'Authentieke Italiaanse smaak zonder concessies. Echt een aanrader.', rating: 5 },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-16">
        <div className="flex items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b2774f]">Authentieke Italiaanse keuken</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-[#1d2a1f] sm:text-6xl">
              Authentieke Italiaanse pizza,<br />
              vers uit de oven.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5b655d]">
              Met liefde bereid met verse ingrediënten en een traditionele Italiaanse bodem.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/menu" className="inline-flex items-center gap-2 rounded-full bg-[#1d2a1f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1d2a1f]/15 transition hover:bg-[#2d3d2f]">
                Bestel nu
                <ArrowRight size={16} />
              </Link>
              <Link href="/menu" className="inline-flex items-center gap-2 rounded-full border border-[#e7ddd1] bg-white px-6 py-3 text-sm font-semibold text-[#1d2a1f] transition hover:border-[#d7a24d]">
                Bekijk menu
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm text-[#5b655d]">
              <div className="flex items-center gap-2"><Star className="fill-[#d7a24d] text-[#d7a24d]" size={16} /> 4.9/5 reviews</div>
              <div className="flex items-center gap-2"><Clock3 size={16} className="text-[#b2774f]" /> 30 min gemiddeld</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#d7a24d]/20 blur-3xl" />
          <div className="absolute -right-3 bottom-12 h-40 w-40 rounded-full bg-[#1d2a1f]/10 blur-3xl" />
          <div className="gold-glow luxury-card relative overflow-hidden rounded-[32px] border border-[#ecdcc8] bg-white p-3 shadow-[0_28px_70px_rgba(29,42,31,0.12)]">
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">Fresh oven</div>
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80" alt="Pizza" className="animate-float-slow h-[620px] w-full rounded-[24px] object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Waarom ons" title="Traditie, kwaliteit en verse smaak in elke hap" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {usps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 text-center shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe5] text-[#b2774f]">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1d2a1f]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#58605c]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#17211a] py-20 text-[#edf0eb]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Favorieten" title="Populaire pizza's" description="De meest geliefde pizza's van onze gasten." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-[#e8ddd0] bg-white p-3 shadow-[0_18px_60px_rgba(29,42,31,0.08)]">
          <img src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=1200&q=80" alt="Pizzabakker" className="h-[520px] w-full rounded-[24px] object-cover" />
        </div>
        <div className="flex items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b2774f]">Over ons</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1d2a1f]">Pizza gemaakt met liefde, traditie en passie.</h2>
            <p className="mt-6 text-lg leading-8 text-[#58605c]">
              Bij Project Pizza bereiden we elke pizza met respect voor het traditionele Italiaanse vakmanschap. Onze pizza’s worden gemaakt met verse ingrediënten, een langzaam gerezen deeg en gebakken in een houtgestookte steenoven voor die kenmerkende crunch en aroma.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ece2] text-[#b2774f]"><Sparkles size={16} /></div>
                <div>
                  <p className="font-semibold text-[#1d2a1f]">Italiaanse roots</p>
                  <p className="text-sm text-[#58605c]">Gebaseerd op klassieke recepten uit het zuiden van Italië.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ece2] text-[#b2774f]"><Leaf size={16} /></div>
                <div>
                  <p className="font-semibold text-[#1d2a1f]">Verse ingrediënten</p>
                  <p className="text-sm text-[#58605c]">Geen kant-en-klaar, maar elke dag vers en met zorg geselecteerd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3ee] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Reviews" title="Wat klanten zeggen" description="Iedereen houdt van een warme pizza, maar onze gasten laten het vooral zien in hun feedback." align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
                <div className="flex gap-1 text-[#d7a24d]">
                  {Array.from({ length: review.rating }).map((_, idx) => (<Star key={idx} size={18} className="fill-current" />))}
                </div>
                <p className="mt-5 text-base leading-7 text-[#496052]">“{review.text}”</p>
                <div className="mt-6 border-t border-[#efe3d8] pt-4 text-sm font-semibold text-[#1d2a1f]">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#1d2a1f] px-8 py-12 text-center text-[#edf0eb] shadow-[0_28px_70px_rgba(29,42,31,0.16)] sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a24d]">Zin in pizza?</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Bestel jouw pizza vandaag nog</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#dfe6e0]">
            Verschillende smaken, snelle bezorging en een authentieke Italiaanse ervaring in elke hap.
          </p>
          <Link href="/menu" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d7a24d] px-6 py-3 text-sm font-semibold text-[#1d2a1f] transition hover:bg-[#ebbd72]">
            Bestel jouw pizza
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
