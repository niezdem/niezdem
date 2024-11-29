import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button as HLButton } from '@headlessui/react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
};

const commonClasses =
  'h-10 px-4 py-2 text-sm text-white bg-rose-500 rounded-lg data-[active]:bg-rose-600 data-[hover]:bg-rose-400';

const Button = ({ type, children }: Props) => {
  const classes = cn(commonClasses);

  return (
    <HLButton type={type} className={classes}>
      {children}
    </HLButton>
  );
};

export default Button;
