import AddGame from '@/app/games/AddGame';
import RemoveGame from '@/app/games/RemoveGame';
import { type Game, getGames, getUserRights } from '@/app/games/utils';
import formatDate from '@/utils/formatDate';

export const revalidate = 10;
export const dynamic = 'force-dynamic';

type PCBuildDataProps = {
  title: string;
  value: string;
};

const pcBuildData: PCBuildDataProps[] = [
  { title: 'CPU', value: 'AMD Ryzen 9 5900X' },
  { title: 'Graphic Card', value: 'NVIDIA GeForce RTX 4070 Ti' },
  { title: 'Motherboard', value: 'Asus ROG Strix B550-F Gaming' },
  {
    title: 'RAM',
    value: 'Kingston Fury & HyperX Predator RGB 32GB(4x8GB) DDR4 3600MHz CL17',
  },
  { title: 'SSD', value: 'Lexar NM620 2TB + Lexar NM800 Pro 1TB' },
  { title: 'Water Cooling System', value: 'Arctic Liquid Freezer II' },
  { title: 'Power Supply', value: 'SilentiumPC 750W Supremo FM2 Gold' },
  { title: 'Case', value: 'SilentiumPC Regnum RG6V EVO TG ARGB' },
];

const PCInfo = () => (
  <div className="mb-6">
    <h2 className="font-unbounded mb-3 text-2xl font-bold">My PC Build</h2>
    <ul>
      {pcBuildData.map(({ ...props }, key) => (
        <li key={key} className="mb-3">
          <h3>{props.value}</h3>
          <div className="text-xs text-gray-400">{props.title}</div>
        </li>
      ))}
    </ul>
  </div>
);

const GamesByYear = async ({
  title,
  gamesList,
}: {
  title: string;
  gamesList: Game[];
}) => {
  const userRights = await getUserRights();

  return (
    <div key={title} className="mb-10">
      <h2 className="font-unbounded mb-4 text-2xl font-bold">{title}</h2>
      <ul>
        {gamesList.map((game, index) => (
          <li key={index} className="mb-4 flex flex-col gap-1">
            <h3>{game.name}</h3>

            <div className="text-xs text-gray-400">
              {game.platform} · {game.developer}
            </div>

            {/* <span className="text-xs text-gray-400">
              {formatDate(new Date(game.finished_date))}
            </span> */}
            {userRights === 'ADMIN' && <RemoveGame id={game.id} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

const GamesPage = async () => {
  const { data, total } = await getGames();
  const userRights = await getUserRights();

  if (!data) {
    return (
      <main className="mx-auto max-w-3xl">
        <h1 className="font-unbounded mb-10 text-3xl font-bold">
          Something bad happened. Refresh the page.
        </h1>
      </main>
    );
  }

  const entries = Object.entries(data).sort(
    ([year1], [year2]) => Number(year2) - Number(year1),
  );

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="font-unbounded mb-10 text-3xl font-bold">
        Games I beat: <span className="text-gray-400">{total}</span>
      </h1>

      {userRights === 'ADMIN' && <AddGame />}

      <div className="grid gap-2 md:grid-cols-2">
        <div className="">
          {entries.map(([year, gamesList]) => (
            <GamesByYear key={year} title={year} gamesList={gamesList} />
          ))}
        </div>

        <div>
          <PCInfo />
        </div>
      </div>
    </main>
  );
};

export default GamesPage;
