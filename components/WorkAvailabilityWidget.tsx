import Card from './ui/Card';
import Text from './ui/Text';

const WorkAvailabilityWidget = () => (
  <Card
    link="/contact"
    title={`Open to opportunities\u00A0➔`}
    className={`bg-yellow-300 bg-[url('/noise.svg')] dark:bg-red-800`}
  >
    <Text>
      I&apos;m ready to dive into work without skipping a beat. Curious about
      what I&apos;ve been up to? Click here to check out my journey.
    </Text>
  </Card>
);

export default WorkAvailabilityWidget;
