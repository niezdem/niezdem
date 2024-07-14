import AboutMeSection from '@/components/landing/AboutMeSection';
import DashboardTitle from '@/components/landing/DashboardTitle';

import CountriesWidget from '@/components/CountriesWidget';
import GamesWidget from '@/components/GamesWidget';
import WorkAvailabilityWidget from '@/components/WorkAvailabilityWidget';

const RootPage = () => (
  <main>
    <AboutMeSection />

    <section
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(113, 113, 122, .10) 35%, rgba(113, 113, 122, .10) 65%, transparent)',
      }}
    >
      <div className="n-container py-32">
        <DashboardTitle />

        <div className="grid gap-4 py-16 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <WorkAvailabilityWidget />
          <GamesWidget />
          <CountriesWidget />
        </div>
      </div>
    </section>
  </main>
);

export default RootPage;
