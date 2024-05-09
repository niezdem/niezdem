import Card from './ui/Card';

const CountriesWidget = () => (
  <Card
    link="/countries"
    className={`h-80 bg-[url('/images/travel.webp')] bg-cover bg-center bg-no-repeat`}
    title={`Countries I visited\u00A0➔`}
    titleClassName="[text-shadow:_-1px_-1px_0_#e4e4e7,_1px_-1px_0_#e4e4e7,_-1px_2px_0_#e4e4e7,_2px_2px_0_#e4e4e7] dark:[text-shadow:_-1px_-1px_0_#09090B,_1px_-1px_0_#09090B,_-1px_2px_0_#09090B,_2px_2px_0_#09090B]"
  ></Card>
);

export default CountriesWidget;
