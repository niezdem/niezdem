import Card from './ui/Card';
import Text from './ui/Text';

const BusinessInfoWidget = () => (
  <Card title="Business details">
    <Text>
      I am a Wrocław-based (Poland) solopreneur registered with the company
      registration number (REGON) <Text backlight>382878212</Text> and VAT EU{' '}
      <Text backlight>PL9151812700</Text>.
    </Text>
  </Card>
);

export default BusinessInfoWidget;
