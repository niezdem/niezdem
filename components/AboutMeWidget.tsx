import Card from './ui/Card';
import Text from './ui/Text';

const AboutMeWidget = () => (
  <Card title="About me" className="sm:col-span-2">
    <Text>
      Hello there, I&apos;m <Text backlight>Dima</Text> - web design and
      frontend development with over 6 years of experience. I specialize in
      enhancing teamwork, optimizing communication between designers and
      developers to reduce project development time. My goal is to create
      innovative solutions and write clean, modern code. Let&apos;s collaborate
      to make your projects even more successful!
    </Text>
  </Card>
);

export default AboutMeWidget;
