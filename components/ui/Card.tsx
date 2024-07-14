'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import Title from './Title';

type Props = {
  link: string;
  title?: string;
  titleClassName?: string;
  hoverColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const commonClasses =
  'relative flex h-auto sm:h-80 w-full flex-col overflow-hidden rounded-3xl bg-zinc-950 p-6 pb-8 transition duration-300 grayscale hover:grayscale-0';

const Card = ({
  link,
  title,
  titleClassName,
  hoverColor = 'rgba(244, 63, 94, 0.2)',
  className,
  style,
  children,
}: Props) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLAnchorElement>(null);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [],
  );

  const classes = cn(
    commonClasses,
    link && 'cursor-pointer hover:-translate-y-1',
    className,
  );

  const CardContent = () => (
    <>
      {title && (
        <Title order={2} className={cn('z-10 pb-2 md:pb-4', titleClassName)}>
          {title}
        </Title>
      )}
      {children}
    </>
  );

  const hoverEffect = (
    <div
      className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${hoverColor}, transparent 50%)`,
      }}
    />
  );

  return (
    <Link
      href={link}
      style={style}
      className={cn(classes, 'group')}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      {hoverEffect}
      <CardContent />
    </Link>
  );
};

export default Card;
