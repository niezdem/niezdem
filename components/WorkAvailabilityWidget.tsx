import Card from './ui/Card';
import Text from './ui/Text';

const WorkAvailabilityWidget = () => (
  <Card
    link="/contact"
    title="Open to opportunities ➔"
    className={`bg-yellow-300 bg-[url('/noise.svg')] dark:bg-red-800`}
  >
    <Text>
      I&apos;m available to start working right away. Click here to see my
      experience.
    </Text>
  </Card>
);

export default WorkAvailabilityWidget;
