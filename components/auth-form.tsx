'use client';

import Link from 'next/link';
import { useState } from 'react';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('Deze demo vereist een werkende PostgreSQL-database. Voeg je DATABASE_URL in en draai prisma db push & seed.');
  };

  return (
    <div className="mx-auto max-w-md rounded-[32px] border border-[#e9dece] bg-white p-8 shadow-[0_18px_60px_rgba(29,42,31,0.08)]">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b2774f]">{mode === 'login' ? 'Welkom terug' : 'Maak account'}</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1d2a1f]">
          {mode === 'login' ? 'Inloggen bij Project Pizza' : 'Registreren'}
        </h1>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {mode === 'register' ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1d2a1f]">Naam</label>
            <input className="h-12 w-full rounded-2xl border border-[#e8ddd0] bg-[#fbf9f7] px-4 outline-none ring-0 transition focus:border-[#d7a24d]" placeholder="Jan de Vries" />
          </div>
        ) : null}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#1d2a1f]">E-mail</label>
          <input type="email" className="h-12 w-full rounded-2xl border border-[#e8ddd0] bg-[#fbf9f7] px-4 outline-none ring-0 transition focus:border-[#d7a24d]" placeholder="you@example.com" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#1d2a1f]">Wachtwoord</label>
          <input type="password" className="h-12 w-full rounded-2xl border border-[#e8ddd0] bg-[#fbf9f7] px-4 outline-none ring-0 transition focus:border-[#d7a24d]" placeholder="••••••••" />
        </div>

        {mode === 'register' ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1d2a1f]">Bevestig wachtwoord</label>
            <input type="password" className="h-12 w-full rounded-2xl border border-[#e8ddd0] bg-[#fbf9f7] px-4 outline-none ring-0 transition focus:border-[#d7a24d]" placeholder="••••••••" />
          </div>
        ) : null}

        {error ? <p className="rounded-2xl bg-[#fef0ed] px-3 py-2 text-sm text-[#b02a1b]">{error}</p> : null}

        <button type="submit" className="flex h-12 w-full items-center justify-center rounded-full bg-[#1d2a1f] text-sm font-semibold text-white transition hover:bg-[#2d3d2f]">
          {mode === 'login' ? 'Inloggen' : 'Account aanmaken'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#5c655d]">
        {mode === 'login' ? 'Nog geen account?' : 'Heb je al een account?'}{' '}
        <Link href={mode === 'login' ? '/register' : '/login'} className="font-semibold text-[#1d2a1f] underline decoration-[#d7a24d] underline-offset-4">
          {mode === 'login' ? 'Registreer nu' : 'Log in'}
        </Link>
      </p>
    </div>
  );
}
