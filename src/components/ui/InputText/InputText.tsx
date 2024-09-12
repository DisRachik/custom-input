import { type ChangeEvent, forwardRef } from 'react';

import { TbCommand, TbSearch } from 'react-icons/tb';

import { CustomButton } from '@/components/ui/CustomButton';
import { ToolTip } from '@/components/ui/ToolTip';

import { cn } from '@/utils/cn';

import type { InputTextProps } from './InputText.types';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      height = 'md',
      textRight,
      borderNone,
      icon,
      buttonSettings,
      informText,
      placeholder = ' ',
      onChangeValue,
      className,
      ...rest
    },
    ref,
  ) => {
    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (onChangeValue) onChangeValue(value);
    };

    return (
      <div
        className={cn(
          'flex w-full cursor-text items-center gap-2 rounded border bg-white px-3 text-xs/5 transition *:transition has-[:disabled]:cursor-not-allowed',
          'dark:bg-dark-dark',

          'text-gray group-has-[:invalid:placeholder-shown:focus]:text-gray group-has-[:invalid:placeholder-shown]:text-gray group-has-[:invalid]:text-red-dark',
          'dark:text-gray-dark dark:group-has-[:invalid:placeholder-shown:focus]:text-gray-dark dark:group-has-[:invalid:placeholder-shown]:text-gray-dark dark:group-has-[:invalid]:text-red',

          'border-gray-light has-[:focus]:border-blue has-[:invalid:focus]:border-red-extraLight has-[:invalid:placeholder-shown:focus]:border-blue has-[:invalid:placeholder-shown]:border-gray-light has-[:invalid]:border-red-extraLight has-[:focus]:shadow-blueSky has-[:invalid:focus]:shadow-error has-[:invalid:placeholder-shown:focus]:shadow-blueSky',
          'dark:border-gray-extraDark dark:has-[:focus]:border-blue-dark dark:has-[:invalid:focus]:border-red-light dark:has-[:invalid:placeholder-shown:focus]:border-blue-dark dark:has-[:invalid:placeholder-shown]:border-gray-extraDark dark:has-[:invalid]:border-red-light',

          borderNone &&
            'border-transparent has-[:invalid:placeholder-shown]:border-transparent has-[:disabled]:hover:border-transparent has-[:focus-within:placeholder-shown]:hover:border-blue has-[:focus-within:valid]:hover:border-blue has-[:invalid:placeholder-shown]:hover:border-gray-light has-[:invalid]:hover:border-red-extraLight',
          borderNone &&
            'dark:has-[:invalid:placeholder-shown]:border-transparent dark:has-[:focus-within:placeholder-shown]:hover:border-blue-dark dark:has-[:focus-within:valid]:hover:border-blue-dark dark:has-[:invalid:placeholder-shown]:hover:border-gray-extraDark dark:has-[:invalid]:hover:border-red-light',
          height === 'lg' && 'pl-4',
          height === 'xl' && 'pl-4',
          className,
        )}
      >
        {icon ? <TbSearch className='size-4 flex-none' /> : null}

        <input
          type='text'
          className={cn(
            'w-16 flex-1 bg-transparent py-2 text-dark placeholder:text-gray-dark autofill:bg-transparent focus-visible:outline-none disabled:text-gray-light disabled:placeholder:text-gray-light',
            'dark:text-white-light dark:placeholder:text-gray dark:autofill:bg-dark-dark dark:disabled:text-dark-light dark:disabled:placeholder:text-dark-light',
            height === 'sm' && 'py-0',
            height === 'xl' && 'py-3',
            textRight && 'text-right',
          )}
          ref={ref}
          placeholder={placeholder}
          onChange={changeHandle}
          {...rest}
        />

        {informText ? <ToolTip className='size-4 flex-none' icon='help' text={informText} /> : null}
        {buttonSettings ? (
          <CustomButton
            className={
              'flex flex-none cursor-pointer items-center rounded border border-white-dark px-1.5 text-gray-dark dark:border-dark-light dark:text-gray'
            }
            onClick={() => alert('There might be something here!')}
          >
            <TbCommand className='size-4' /> <span>K</span>
          </CustomButton>
        ) : null}
      </div>
    );
  },
);
InputText.displayName = 'InputText';
