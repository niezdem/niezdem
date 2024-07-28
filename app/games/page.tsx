// import AddGame from '@/app/games/AddGame';
// import RemoveGame from '@/app/games/RemoveGame';
import { type Game, getGames, getUserRights } from '@/app/games/utils';
import {
  NintendoIcon,
  PCIcon,
  PS5Icon,
  SteamDeckIcon,
  XboxIcon,
} from '@/app/games/Platforms';
import formatDate from '@/utils/formatDate';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

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

const PlatformIcon = ({ platform }: { platform: string }) => {
  let Icon;

  switch (platform) {
    case 'PC':
      Icon = PCIcon;
      break;
    case 'Xbox':
      Icon = XboxIcon;
      break;
    case 'PlayStation 5':
      Icon = PS5Icon;
      break;
    case 'Steam Deck':
      Icon = SteamDeckIcon;
      break;
    case 'Nintendo':
      Icon = NintendoIcon;
      break;
    default:
      Icon = PCIcon;
  }

  return <Icon className="h-4 w-4 text-zinc-100/75" />;
};

const PCInfo = () => (
  <div className="order-first flex flex-col gap-4 md:order-last">
    <Title order={2}>My PC Build</Title>
    <ul className="flex flex-col gap-4">
      {pcBuildData.map(({ ...props }, key) => (
        <li key={key}>
          <Text>{props.value}</Text>
          <Text size="xs" className="opacity-50">
            {props.title}
          </Text>
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
  // const userRights = await getUserRights();

  return (
    <>
      <Title order={2}>{title}</Title>
      <ul className="flex flex-col gap-4">
        {gamesList.map((game, key) => (
          <li key={key}>
            <Text>{game.name}</Text>
            <div className="flex items-center gap-1">
              <PlatformIcon platform={game.platform} />
              <Text size="xs" className="opacity-50">
                · {formatDate(new Date(game.finished_date))}
              </Text>
            </div>

            {/* {userRights === 'ADMIN' && <RemoveGame id={game.id} />} */}
          </li>
        ))}
      </ul>
    </>
  );
};

const GamesPage = async () => {
  const { data, total } = await getGames();
  // const userRights = await getUserRights();

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
        Games I beat: <span className="opacity-75">{total}</span>
      </Title>

      {/* {userRights === 'ADMIN' && <AddGame />} */}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {entries.map(([year, gamesList], key) => (
            <GamesByYear key={key} title={year} gamesList={gamesList} />
          ))}
        </div>

        <PCInfo />
      </div>
    </div>
  );
};

export default GamesPage;
