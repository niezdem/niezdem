import { getTravels, type Travel } from '@/app/countries/utils';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import formatDate from '@/utils/formatDate';

export const revalidate = 10;
export const dynamic = 'force-dynamic';

const formatTripDates = (
  startDate: string | Date,
  endDate: string | Date,
): string => {
  const start = startDate instanceof Date ? startDate : new Date(startDate);
  const end = endDate instanceof Date ? endDate : new Date(endDate);

  if (start.getTime() === end.getTime()) {
    return formatDate(start);
  } else {
    return `${formatDate(start)} — ${formatDate(end)}`;
  }
};

const TripsByYear = ({ title, trips }: { title: string; trips: Travel[] }) => (
  <>
    <Title order={2}>{title}</Title>
    <ul className="flex flex-col gap-3">
      {trips.map((trip, key) => (
        <li key={key}>
          <div className="flex gap-2">
            {trip.country_flag}
            <div className="flex flex-col">
              <Text>
                {trip.city}, {trip.country}
              </Text>
              <Text size="xs" className="opacity-50">
                {formatTripDates(trip.start_date, trip.end_date)}
              </Text>
            </div>
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
      <div className="n-container">
        <Title size="3xl">Something bad happened. Refresh the page.</Title>
      </div>
    );
  }

  const entries = Object.entries(data).sort(
    ([year1], [year2]) => Number(year2) - Number(year1),
  );

  return (
    <div className="n-container">
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
    </div>
  );
};

export default CountriesPage;
