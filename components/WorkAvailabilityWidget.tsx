import Card from './ui/Card';
import Text from './ui/Text';

const WorkAvailabilityWidget = () => (
  <Card
    link="/contact"
    title={`Open to opportunities\u00A0➔`}
    titleClassName="dark:text-zinc-800"
    className={`bg-[#FCC70F] bg-[url('/images/noise.svg')] dark:bg-[#FCC70F]`}
  >
    <Text className="dark:text-zinc-800/75">
      I&apos;m ready to dive into work without skipping a beat. Curious about
      what I&apos;ve been up to? Click here to check out my journey.
    </Text>
  </Card>
);

export default WorkAvailabilityWidget;
