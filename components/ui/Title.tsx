import * as React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  color?: string;
  align?: 'left' | 'center' | 'right';
  backlight?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Title = ({
  order = 1,
  size = '2xl',
  color = 'text-zinc-100',
  align = 'left',
  backlight,
  className,
  children,
}: Props) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl leading-[1.1]',
  };
  const commonClasses = 'font-semibold';
  const colorClass = color && `${color}`;
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  const backlightClass = backlight && 'rounded-md bg-zinc-100/20 px-2 py-0.5';

  const classes = cn(
    commonClasses,
    sizeClasses[size],
    colorClass,
    alignClass[align],
    backlightClass,
    className,
  );

  const HeadingTag = `h${order}` as keyof JSX.IntrinsicElements;

  return backlight ? (
    <span className={classes}>{children}</span>
  ) : (
    <HeadingTag className={classes}>{children}</HeadingTag>
  );
};

export default Title;
