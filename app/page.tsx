import AboutMeWidget from '@/components/AboutMeWidget';
import BusinessInfoWidget from '@/components/BusinessInfoWidget';
import CountriesWidget from '@/components/CountriesWidget';
import CurrentLocationWidget from '@/components/CurrentLocationWidget';
import GamesWidget from '@/components/GamesWidget';
// import PortfolioWidget from '@/components/PortfolioWidget';
// import SpotifyWidget from '@/components/SpotifyWidget';
import WorkAvailabilityWidget from '@/components/WorkAvailabilityWidget';

// import SpotifyWidget from '@/components/SpotifyWidget';
// import WorkAvailabilityWidget from '@/components/WorkAvailabilityWidget';

const RootPage = () => (
  <main>
    <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      <AboutMeWidget />
      <BusinessInfoWidget />
      <CurrentLocationWidget />
      <WorkAvailabilityWidget />
      {/* <SpotifyWidget /> */}
      <GamesWidget />
      <CountriesWidget />
      {/* <PortfolioWidget /> */}
    </div>
  </main>
);

export default RootPage;
