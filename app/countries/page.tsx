import { getTravels, type Travel } from '@/app/countries/utils';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

export const revalidate = 10;
export const dynamic = 'force-dynamic';

const TripsByYear = ({ title, trips }: { title: string; trips: Travel[] }) => (
  <>
    <Title order={2}>{title}</Title>
    <ul className="flex flex-col gap-3">
      {trips.map((trip, key) => (
        <li key={key}>
          <div className="flex items-center gap-2">
            {trip.country_flag}
            <Text>
              {trip.city}, {trip.country}
            </Text>
            <Text size="xs" className="opacity-50">
              {trip.range_text}
            </Text>
          </div>
        </li>
      ))}
    </ul>
  </>
);

const CountriesPage = async () => {
  const { data, totalCountries } = await getTravels();

  if (!data) {
    return (
      <main className="mx-auto max-w-4xl">
        <Title size="3xl">Something bad happened. Refresh the page.</Title>
      </main>
    );
  }

  const entries = Object.entries(data).sort(
    ([year1], [year2]) => Number(year2) - Number(year1),
  );

  return (
    <main className="mx-auto max-w-4xl">
      <Title size="3xl" className="mb-8">
        Countries I visited:{' '}
        <span className="opacity-75">{totalCountries}</span>
      </Title>

      <div className="flex flex-col gap-6">
        {entries.map(([year, trips], key) => {
          if (year === 'inProgress') return;
          return <TripsByYear key={key} title={year} trips={trips} />;
        })}
      </div>
    </main>
  );
};

export default CountriesPage;
