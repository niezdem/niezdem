import Card from './ui/Card';

const GamesWidget = () => (
  <Card
    link="/games"
    className={`h-80 bg-[url('/gow.webp')] bg-cover`}
    title={`Games I beat\u00A0➔`}
  ></Card>
);

export default GamesWidget;
