import { cn } from '@/lib/utils';
import * as React from 'react';

type Props = {
  icon?: React.ReactNode;
  iconColor?: string;
  className?: string;
  children: React.ReactNode;
};

const Badge = ({
  icon,
  iconColor = 'text-rose-500',
  className,
  children,
}: Props) => {
  const classes = cn('text-sm text-zinc-100', className);
  const iconClasses = cn(iconColor, 'w-4 h-4');

  return (
    <div className="flex items-center gap-2">
      <div className={iconClasses}>{icon}</div>
      <span className={classes}>{children}</span>
    </div>
  );
};

export default Badge;
