import * as React from 'react';
import { HTMLAttributeAnchorTarget } from 'react';
import { default as LinkNext } from 'next/link';

import { cn } from '@/lib/utils';
import Text, { ResponsiveSize, SizeClassKey } from '@/components/ui/Text';

type Props = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  size?: SizeClassKey | ResponsiveSize;
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

const commonClasses =
  'group relative flex w-fit items-center gap-2 overflow-hidden pb-1';

const Link = ({
  href,
  target,
  size = 'sm',
  label,
  className,
  children,
}: Props) => {
  const classes = cn(commonClasses, className);

  return (
    <LinkNext target={target} href={href} className={classes}>
      {children}
      <Text
        size={size}
        weight="bold"
        className="text-rose-500 transition-colors duration-300"
      >
        {label}
      </Text>
      <span
        className="absolute bottom-0 left-0 hidden h-2 w-full bg-rose-500 transition-all 
        duration-300 md:block
        md:translate-x-[-100%] md:translate-y-0 md:opacity-0
        md:group-hover:translate-x-0 md:group-hover:translate-y-1 md:group-hover:opacity-100
        md:group-focus:translate-x-0 md:group-focus:translate-y-1 md:group-focus:opacity-100"
      ></span>
    </LinkNext>
  );
};

export default Link;
