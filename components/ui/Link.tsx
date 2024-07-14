import * as React from 'react';
import { default as LinkNext } from 'next/link';
import { cn } from '@/lib/utils';

import Text, { ResponsiveSize, SizeClassKey } from '@/components/ui/Text';

type Props = {
  href: string;
  size?: SizeClassKey | ResponsiveSize;
  label?: string;
  className?: string;
  children: React.ReactNode;
};

const commonClasses =
  'group relative flex w-fit items-center gap-2 overflow-hidden pb-1';

const Link = ({ href, size = 'lg', label, className, children }: Props) => {
  const classes = cn(commonClasses, className);

  return (
    <LinkNext href={href} className={classes}>
      {children}
      <Text size={size} weight="bold">
        {label}
      </Text>
      <span className="absolute bottom-0 left-0 h-2 w-full translate-x-[-100%] transform bg-rose-500 opacity-0 transition-all duration-300 group-focus:translate-x-0 group-focus:translate-y-1 group-focus:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-1 md:group-hover:opacity-100"></span>
    </LinkNext>
  );
};

export default Link;
