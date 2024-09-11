import { type ChangeEvent, forwardRef } from 'react';

import { cn } from '@/utils/cn';

import type { InputTextProps } from './InputText.types';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ onChangeValue: onInputValue, height = 'md', textRight, borderNone, className, ...rest }, ref) => {
    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (onInputValue) onInputValue(value);
    };

    return (
      <input
        type='text'
        className={cn(
          'w-full rounded border border-gray-light bg-white px-3 py-2 text-xs/5 text-dark transition placeholder:text-gray-dark autofill:bg-white focus-visible:outline-none',
          'focus:border-blue focus:shadow-blue focus:invalid:shadow-error invalid:placeholder-shown:focus:border-blue invalid:placeholder-shown:focus:shadow-blue invalid:border-red-extraLight invalid:placeholder-shown:border-gray-light focus:invalid:border-red-extraLight disabled:cursor-not-allowed disabled:text-gray-dark disabled:hover:border-transparent',
          height === 'sm' && 'py-0',
          height === 'lg' && 'pl-4',
          height === 'xl' && 'py-3 pl-4',
          textRight && 'text-right',
          borderNone &&
            'border-transparent invalid:placeholder-shown:border-transparent hover:border-gray-light invalid:hover:border-red-extraLight invalid:placeholder-shown:hover:border-gray-light',
          className,
        )}
        {...rest}
        ref={ref}
        onChange={changeHandle}
      />
    );
  },
);
InputText.displayName = 'InputText';
