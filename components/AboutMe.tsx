'use client';

import Link from 'next/link';
import Text from './ui/Text';
import Title from './ui/Title';

const AboutMe = () => (
  <div className="flex max-w-[50rem] flex-col">
    <Link
      href="/contact"
      className="group relative flex w-fit items-center gap-2 overflow-hidden pb-1"
    >
      <div className="h-2 w-6 rounded-lg bg-rose-500" />
      <Text
        size="sm"
        className="font-semibold"
      >{`I'm ready for my next big adventure\u00A0➔`}</Text>
      <span className="absolute bottom-0 left-0 h-2 w-full translate-x-[-100%] transform bg-rose-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-1 group-hover:opacity-100 group-focus:translate-x-0 group-focus:translate-y-1 group-focus:opacity-100"></span>
    </Link>

    <Title size="5xl" className="mb-8 mt-4">
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
);

export default AboutMe;
