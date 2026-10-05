import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b2774f]">404</p>
      <h1 className="mt-4 text-5xl font-black text-[#1d2a1f]">Pagina niet gevonden</h1>
      <p className="mt-5 max-w-lg text-lg text-[#58605c]">De pagina die je zoekt bestaat niet of is verplaatst.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-[#1d2a1f] px-6 py-3 text-sm font-semibold text-white">Terug naar home</Link>
    </div>
  );
}
