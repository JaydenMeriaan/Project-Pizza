const orders = [
  { id: 'PZ-1428', date: '05 okt 2026', total: '€31,50', status: 'Onderweg' },
  { id: 'PZ-1396', date: '01 okt 2026', total: '€24,00', status: 'Bezorgd' },
];

const favorites = ['Margherita', 'Diavola', 'Burrata Special'];

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2774f]">Mijn account</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1d2a1f]">Welkom terug, Luca</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)] lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#1d2a1f]">Profiel</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#faf7f4] p-4"><p className="text-xs uppercase tracking-[0.2em] text-[#8a938c]">Naam</p><p className="mt-2 font-semibold text-[#1d2a1f]">Luca Vermeulen</p></div>
            <div className="rounded-2xl bg-[#faf7f4] p-4"><p className="text-xs uppercase tracking-[0.2em] text-[#8a938c]">E-mail</p><p className="mt-2 font-semibold text-[#1d2a1f]">luca@projectpizza.nl</p></div>
            <div className="rounded-2xl bg-[#faf7f4] p-4"><p className="text-xs uppercase tracking-[0.2em] text-[#8a938c]">Telefoon</p><p className="mt-2 font-semibold text-[#1d2a1f]">+31 6 123 456 78</p></div>
            <div className="rounded-2xl bg-[#faf7f4] p-4"><p className="text-xs uppercase tracking-[0.2em] text-[#8a938c]">Adres</p><p className="mt-2 font-semibold text-[#1d2a1f]">Herengracht 78, Amsterdam</p></div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
          <h2 className="text-2xl font-bold text-[#1d2a1f]">Favorieten</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#4f5b52]">
            {favorites.map((fav) => (
              <li key={fav} className="rounded-2xl bg-[#faf7f4] p-3">{fav}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8 rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
        <h2 className="text-2xl font-bold text-[#1d2a1f]">Bestellingen</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#efe3d8]">
          <table className="w-full text-left text-sm text-[#3d4f46]">
            <thead className="bg-[#faf7f4] text-[#1d2a1f]">
              <tr>
                <th className="px-4 py-3">Bestelnummer</th>
                <th className="px-4 py-3">Datum</th>
                <th className="px-4 py-3">Totaal</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-[#efe3d8]">
                  <td className="px-4 py-3 font-medium text-[#1d2a1f]">{order.id}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.total}</td>
                  <td className="px-4 py-3"><span className="inline-flex rounded-full bg-[#f4ece2] px-2.5 py-1 text-xs font-semibold text-[#b2774f]">{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
