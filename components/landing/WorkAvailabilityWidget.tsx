import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';

const WorkAvailabilityWidget = () => (
  <Card
    link="/contact"
    title={`Open to opportunities\u00A0➔`}
    hoverColor="rgba(255, 255, 255, 0.2)"
    className={`bg-gradient-to-br from-rose-400 to-rose-500/50 md:grayscale-0`}
  >
    <Text className="z-10">
      I&apos;m ready to dive into work without skipping a beat. Curious about
      what I&apos;ve been up to? Click here to check out my journey.
    </Text>
  </Card>
);

export default WorkAvailabilityWidget;
