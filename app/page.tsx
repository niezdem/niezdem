import AboutMe from '@/components/AboutMe';
import CountriesWidget from '@/components/CountriesWidget';
import DashboardTitle from '@/components/DashboardTitle';
import GamesWidget from '@/components/GamesWidget';
import WorkAvailabilityWidget from '@/components/WorkAvailabilityWidget';

const RootPage = () => (
  <main>
    <section className="n-container border-b border-zinc-100/5 pb-32 pt-10">
      <AboutMe />
    </section>

    <section
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(113, 113, 122, .10) 35%, rgba(113, 113, 122, .10) 65%, transparent)',
      }}
    >
      <section className="n-container py-32">
        <DashboardTitle />
        <div className="grid gap-4 py-16 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <WorkAvailabilityWidget />
          <GamesWidget />
          <CountriesWidget />
        </div>
      </section>
    </section>
  </main>
);

export default RootPage;
