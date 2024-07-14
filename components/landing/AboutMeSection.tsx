import Link from '@/components/ui/Link';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

const AboutMeSection = () => (
  <div className="n-container pb-16 pt-5 md:pb-32 md:pt-20">
    <div className="flex flex-col md:max-w-[50rem]">
      <Link
        href="/contact"
        label={`I'm ready for my next big adventure\u00A0➔`}
        size="sm"
      >
        <div className="h-2 w-6 rounded-lg bg-rose-500" />
      </Link>

      <Title
        size={{
          default: '4xl',
          md: '5xl',
        }}
        className="mb-8 mt-4"
      >
        Hey! I&apos;m{' '}
        <span className="inline-block bg-gradient-to-r from-rose-400 to-rose-500/50 bg-clip-text text-transparent">
          Dmitr
        </span>{' '}
        - your go-to guy for web design and frontend development
      </Title>
      <Text>
        With a solid <Text backlight>5+ years</Text> under my belt, I&apos;m all
        about jazzing up teamwork and smoothing out the convo between designers
        and developers. My mission is simple: cook up innovative solutions and
        keep that code looking sharp and modern. Ready to amp up your projects?
        Let&apos;s make some magic happen together!
      </Text>
    </div>
  </div>
);

export default AboutMeSection;
