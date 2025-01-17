import * as React from 'react';

import { cn } from '@/lib/utils';
import Text from '@/components/ui/Text';
import { Field, Label, Select as HLSelect } from '@headlessui/react';

type Props = {
  label?: string;
  name: string;
  defaultValue?: string;
  options: Array<Option>;
};

type Option = {
  value: string;
  name: string;
};

const commonClasses =
  'h-10 px-4 py-2 rounded-lg border-none bg-white/5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25';
const Select = ({ label, name, defaultValue = '', options }: Props) => {
  const classes = cn(commonClasses);

  return (
    <Field className="flex flex-col gap-1">
      {label && (
        <Label>
          <Text size="xs">{label}</Text>
        </Label>
      )}

      <HLSelect name={name} defaultValue={defaultValue} className={classes}>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.name}
          </option>
        ))}
      </HLSelect>
    </Field>
  );
};

export default Select;
