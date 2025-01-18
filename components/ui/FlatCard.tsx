import * as React from 'react';

import Badge from '@/components/ui/Badge';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { cn } from '@/lib/utils';

type Props = {
  icon?: React.ReactNode;
  iconColor?: string;
  badgeText?: string;
  title: string;
  children: React.ReactNode;
  borderColor?: string;
  className?: string;
};

const FlatCard = ({
  icon,
  iconColor,
  badgeText,
  title,
  children,
  borderColor = 'border-rose-500/20',
  className,
}: Props) => {
  const classes = cn('flex flex-col gap-2', className);

  return (
    <div className={classes}>
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            'relative flex min-w-[12rem] flex-col gap-2 pl-4 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-rose-500/20 before:to-transparent',
            borderColor,
          )}
        >
          {badgeText && (
            <Badge icon={icon} iconColor={iconColor}>
              {badgeText}
            </Badge>
          )}
          <Title>{title}</Title>
        </div>
        <Text className="pl-4">{children}</Text>
      </div>
    </div>
  );
};

export default FlatCard;
