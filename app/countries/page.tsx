import { getTravels, type Travel } from '@/app/countries/utils';

export const revalidate = 10;
export const dynamic = 'force-dynamic';

const TripsByYear = ({ title, trips }: { title: string; trips: Travel[] }) => (
  <div key={title}>
    <h2 className="mb-3 text-2xl font-bold">{title}</h2>
    <ul>
      {trips.map((trip, index) => (
        <li key={index} className="mb-3">
          <div className="inline-flex items-end gap-2">
            <h3>
              {trip.country_flag} {trip.city}, {trip.country}
            </h3>
            <div className="text-xs leading-relaxed text-gray-400">
              {trip.range_text}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const CountriesPage = async () => {
  const { data, totalCountries } = await getTravels();

  if (!data) {
    return (
      <main className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-3xl font-bold">
          Something bad happened. Refresh the page.
        </h1>
      </main>
    );
  }

  const entries = Object.entries(data).sort(
    ([year1], [year2]) => Number(year2) - Number(year1),
  );

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="mb-10 text-3xl font-bold">
        Countries I visited:{' '}
        <span className="text-gray-400">{totalCountries}</span>
      </h1>

      <div className="flex flex-col gap-8">
        {entries.map(([year, trips]) => {
          if (year === 'inProgress') return;
          return <TripsByYear key={year} title={year} trips={trips} />;
        })}
      </div>
    </main>
  );
};

export default CountriesPage;
