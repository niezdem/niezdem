import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button as HLButton } from '@headlessui/react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const commonClasses =
  'h-10 px-4 py-2 text-sm text-white bg-rose-500 rounded-lg data-[active]:bg-rose-600 data-[hover]:bg-rose-400 flex items-center justify-center gap-4';

const Button = ({ type, icon, className, children, onClick }: Props) => {
  const classes = cn(commonClasses, className);

  return (
    <HLButton type={type} className={classes} onClick={onClick}>
      {icon && icon}
      {children}
    </HLButton>
  );
};

export default Button;
