const stats = [
  { label: 'Totale omzet', value: '€24.580', change: '+12%' },
  { label: 'Aantal bestellingen', value: '184', change: '+8%' },
  { label: 'Bestellingen vandaag', value: '24', change: '+5%' },
  { label: 'Gemiddelde orderwaarde', value: '€32,10', change: '+4%' },
];

const orders = [
  { id: 'PZ-1441', customer: 'Mila G.', total: '€26,80', status: 'In behandeling' },
  { id: 'PZ-1442', customer: 'Hugo L.', total: '€41,50', status: 'In de oven' },
  { id: 'PZ-1443', customer: 'Nina B.', total: '€18,40', status: 'Onderweg' },
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2774f]">Admin dashboard</p>
          <h1 className="mt-3 text-4xl font-bold text-[#1d2a1f]">Overzicht</h1>
        </div>
        <button className="rounded-full bg-[#1d2a1f] px-5 py-2.5 text-sm font-semibold text-white">Nieuwe order</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[28px] border border-[#e8ddd0] bg-white p-5 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
            <p className="text-sm text-[#5d665f]">{stat.label}</p>
            <div className="mt-5 flex items-end justify-between gap-3">
              <span className="text-3xl font-bold text-[#1d2a1f]">{stat.value}</span>
              <span className="rounded-full bg-[#edf8f2] px-2 py-1 text-xs font-semibold text-[#20613a]">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
          <h2 className="text-2xl font-bold text-[#1d2a1f]">Recente bestellingen</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#efe3d8]">
            <table className="w-full text-left text-sm text-[#3a4b42]">
              <thead className="bg-[#faf7f4] text-[#1d2a1f]">
                <tr>
                  <th className="px-4 py-3">Bestelnummer</th>
                  <th className="px-4 py-3">Klant</th>
                  <th className="px-4 py-3">Totaal</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-[#efe3d8]">
                    <td className="px-4 py-3 font-medium text-[#1d2a1f]">{order.id}</td>
                    <td className="px-4 py-3">{order.customer}</td>
                    <td className="px-4 py-3">{order.total}</td>
                    <td className="px-4 py-3"><span className="inline-flex rounded-full bg-[#f4ece2] px-2.5 py-1 text-xs font-semibold text-[#b2774f]">{order.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#e8ddd0] bg-white p-6 shadow-[0_18px_60px_rgba(29,42,31,0.05)]">
          <h2 className="text-2xl font-bold text-[#1d2a1f]">Producten</h2>
          <div className="mt-6 space-y-3">
            {['Margherita', 'Diavola', 'Quattro Formaggi', 'Burrata Special'].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-[#faf7f4] p-3">
                <span className="font-medium text-[#1d2a1f]">{item}</span>
                <span className="text-sm text-[#5d665f]">{index * 18 + 42} verkocht</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
