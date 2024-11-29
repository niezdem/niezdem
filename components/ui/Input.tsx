import * as React from 'react';

import { cn } from '@/lib/utils';
import Text from '@/components/ui/Text';
import { Field, Label, Input as HLInput } from '@headlessui/react';

type Props = {
  label?: string;
  type?: 'date' | 'email' | 'number' | 'password' | 'text';
  name: string;
  placeholder?: string;
  defaultValue?: string;
};

const commonClasses =
  'h-10 px-4 py-2 rounded-lg border-none bg-white/5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25';
const dateInputClasses =
  '[color-scheme:dark] [&::-webkit-calendar-picker-indicator]:filter-invert [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:transition-opacity';

const Input = ({
  label,
  type = 'text',
  name,
  placeholder,
  defaultValue = '',
}: Props) => {
  const classes = cn(commonClasses, type === 'date' && dateInputClasses);

  return (
    <Field className="flex flex-col gap-1">
      {label && (
        <Label>
          <Text size="xs">{label}</Text>
        </Label>
      )}

      <HLInput
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={classes}
      />
    </Field>
  );
};

export default Input;
