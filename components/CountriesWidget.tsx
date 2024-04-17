import Image from 'next/image';

import Card from './ui/Card';

const countryList = [
  {
    countryCode: 'cz',
    countryName: 'Czechia',
  },
  {
    countryCode: 'de',
    countryName: 'Germany',
  },
  {
    countryCode: 'pl',
    countryName: 'Poland',
  },
  {
    countryCode: 'at',
    countryName: 'Austria',
  },
  {
    countryCode: 'nl',
    countryName: 'Netherlands',
  },
  {
    countryCode: 'be',
    countryName: 'Belgium',
  },
  {
    countryCode: 'tr',
    countryName: 'Turkey',
  },
  {
    countryCode: 'bg',
    countryName: 'Bulgaria',
  },
  {
    countryCode: 'it',
    countryName: 'Italy',
  },
  {
    countryCode: 'es',
    countryName: 'Spain',
  },
  {
    countryCode: 'gr',
    countryName: 'Greece',
  },
  {
    countryCode: 'hr',
    countryName: 'Croatia',
  },
];
const Flag = ({
  countryCode,
  countryName,
}: {
  countryCode: string;
  countryName: string;
}) => (
  <Image
    width={54}
    height={36}
    src={`/flags/${countryCode}.svg`}
    alt={`${countryName} flag`}
    title={countryName}
  />
);

const CountriesWidget = () => (
  <Card
    link="/countries"
    className={`h-80 bg-[url('/images/travel.webp')] bg-cover bg-center bg-no-repeat`}
    title={`Countries I visited\u00A0➔`}
    titleClassName="[text-shadow:_-1px_-1px_0_#e4e4e7,_1px_-1px_0_#e4e4e7,_-1px_2px_0_#e4e4e7,_2px_2px_0_#e4e4e7] dark:[text-shadow:_-1px_-1px_0_#09090B,_1px_-1px_0_#09090B,_-1px_2px_0_#09090B,_2px_2px_0_#09090B]"
  ></Card>
);

export default CountriesWidget;
