import { type ChangeEvent, forwardRef } from 'react';

import { TbCommand, TbSearch } from 'react-icons/tb';

import { ToolTip } from '@/components/ui/ToolTip';

import { cn } from '@/utils/cn';

import { Button } from '../Button';
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
          '*-transition flex items-center gap-2 px-3 text-gray transition',
          'group-has-[:invalid:placeholder-shown:focus]:text-gray group-has-[:invalid:placeholder-shown]:text-gray group-has-[:invalid]:text-red-dark',
          'w-full cursor-text rounded border border-gray-light bg-white text-xs/5 has-[:disabled]:cursor-not-allowed has-[:focus]:border-blue has-[:invalid:focus]:border-red-extraLight has-[:invalid:placeholder-shown:focus]:border-blue has-[:invalid:placeholder-shown]:border-gray-light has-[:invalid]:border-red-extraLight has-[:focus]:shadow-blue has-[:invalid:focus]:shadow-error has-[:invalid:placeholder-shown:focus]:shadow-blue',
          borderNone &&
            'border-transparent hover:border-gray-light has-[:invalid:placeholder-shown]:border-transparent has-[:disabled]:hover:border-transparent has-[:invalid:placeholder-shown]:hover:border-gray-light has-[:invalid]:hover:border-red-extraLight',
          height === 'lg' && 'pl-4',
          height === 'xl' && 'pl-4',
          className,
        )}
      >
        {icon ? <TbSearch className='size-4 flex-none' /> : null}

        <input
          type='text'
          className={cn(
            'w-16 flex-1 bg-transparent py-2 text-dark placeholder:text-gray-dark autofill:bg-transparent focus-visible:outline-none disabled:text-gray-dark',
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
          <Button
            className={'flex flex-none cursor-pointer items-center rounded border border-gray-light px-1.5 text-gray'}
            onClick={() => alert('There might be something here!')}
          >
            <TbCommand className='size-4' /> <span>K</span>
          </Button>
        ) : null}
      </div>
    );
  },
);
InputText.displayName = 'InputText';
