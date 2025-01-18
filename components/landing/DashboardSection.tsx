import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

import WorkAvailabilityWidget from '@/components/landing/WorkAvailabilityWidget';
import GamesWidget from '@/components/GamesWidget';
import CountriesWidget from '@/components/CountriesWidget';

const DashboardSection = () => (
  <div
    className="-mb-10 py-10 md:-mb-20 md:py-20"
    style={{
      background:
        'linear-gradient(180deg, transparent, rgba(113, 113, 122, .10) 35%, rgba(113, 113, 122, .10) 65%, transparent)',
    }}
  >
    <section className="n-container">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <Title
          size={{
            default: '3xl',
            md: '5xl',
          }}
        >
          Let&apos;s get acquainted
        </Title>
        <Text>
          I am a Wrocław-based (Poland) solopreneur, proudly waving my company
          flag with the registration number (REGON){' '}
          <Text backlight>382878212</Text> and VAT EU{' '}
          <Text backlight>PL9151812700</Text>
        </Text>
      </div>

      <div className="grid gap-4 pt-8 sm:grid-cols-2 md:gap-5 md:pt-16 lg:grid-cols-3">
        <WorkAvailabilityWidget />
        <GamesWidget />
        <CountriesWidget />
      </div>
    </section>
  </div>
);

export default DashboardSection;
