import Card from './ui/Card';

const GamesWidget = () => (
  <Card
    link="/games"
    className={`h-80 bg-[url('/images/games.webp')] bg-contain bg-right bg-no-repeat`}
    title={`Games I beat\u00A0➔`}
  ></Card>
);

export default GamesWidget;
