import { type ChangeEvent, forwardRef } from 'react';

import { cn } from '@/utils/cn';

import type { InputTextProps } from './InputText.types';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ onChangeValue: onInputValue, className, ...rest }, ref) => {
    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (onInputValue) onInputValue(value);
    };
    return <input type='text' className={cn('text-xs/5', className)} {...rest} ref={ref} onChange={changeHandle} />;
  },
);
InputText.displayName = 'InputText';
