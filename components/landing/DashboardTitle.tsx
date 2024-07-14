import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

const DashboardTitle = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    <Title size="5xl">Let&apos;s get acquainted</Title>
    <Text>
      I am a Wrocław-based (Poland) solopreneur, proudly waving my company flag
      with the registration number (REGON) <Text backlight>382878212</Text> and
      VAT EU <Text backlight>PL9151812700</Text>
    </Text>
  </div>
);

export default DashboardTitle;
