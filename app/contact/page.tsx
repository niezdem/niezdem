import {
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  PaintBrushIcon,
  ScaleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FlatCard from '@/components/ui/FlatCard';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

const data = [
  {
    icon: <CubeTransparentIcon />,
    badge: 'Where Structure Meets Style',
    title: 'Design Systems',
    children:
      'I don’t just build design systems, I craft them to perfection. From the first pixel to seamless updates, I ensure your team has a solid foundation and a visually stunning toolkit that’s easy to use and even easier to love.',
  },
  {
    icon: <CursorArrowRaysIcon />,
    badge: 'Code that Clicks',
    title: 'Frontend Development',
    children:
      'Clean, responsive, and lightning-fast — my code isn’t just functional, it’s delightful. Whether it’s TypeScript, React, or bringing dusty old codebases back to life, I’m all in for making your front end shine.',
  },
  {
    icon: <SparklesIcon />,
    badge: 'Turning Headaches into Head-turners',
    title: 'UX/UI Design',
    children:
      'Got a user journey that’s more of a maze? Let’s simplify, streamline, and sprinkle some joy into your interface. Whether it’s real estate platforms or tools for bailiffs, I make workflows feel intuitive and satisfying.',
  },
  {
    icon: <PaintBrushIcon />,
    badge: 'Crafting Beautiful, Fluid Designs',
    title: 'CSS Mastery',
    children:
      'I don’t just do CSS, I dominate it. Pixel-perfect layouts, responsive designs — everything snaps into place. Flexbox, Grid, custom properties? I make them work like magic.',
  },
  {
    icon: <ScaleIcon />,
    badge: 'The Bridge Over Barriers',
    title: 'Design and Development',
    children:
      'I get both worlds. I make sure designers build stunning designs that are also a breeze to code. No more impossible concepts — I lead the way, getting design and dev on the same page.',
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="n-container grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Title
            size={{
              default: '4xl',
              md: '5xl',
            }}
          >
            Hi there, wonderful stranger!
          </Title>
          <Text>
            So, you&apos;ve got a job proposition for me? Great!
            <br />
            <br />
            First off, thanks for swinging by. Time&apos;s precious, so
            let&apos;s skip the formalities and get straight to it. I&apos;m{' '}
            <Text backlight>Dmitr</Text> — the bridge between creativity and
            code. With over 10 years of web design wizardry and 5+ years of
            frontend finesse, I&apos;ve been making the internet a more
            beautiful, functional, and downright enjoyable place.
          </Text>
        </div>
        <div className="flex flex-col gap-8">
          <Title
            size={{
              default: '2xl',
              md: '3xl',
            }}
          >
            Let me show you exactly what I&apos;m damn good at:
          </Title>

          <section className="flex max-w-xl flex-col gap-8">
            {data.map((item, index) => (
              <FlatCard
                key={index}
                icon={item.icon}
                badgeText={item.badge}
                title={item.title}
              >
                {item.children}
              </FlatCard>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

// &apos;
