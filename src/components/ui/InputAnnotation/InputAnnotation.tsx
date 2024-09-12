import type { FC } from 'react';

import type { InputAnnotationProps } from './InputAnnotation.types';

import { cn } from '@/utils/cn';

export const InputAnnotation: FC<InputAnnotationProps> = ({ className, children }) => {
  return (
    <p
      className={cn(
        'col-span-2 gap-1 text-xs/5 text-gray-extraDark transition group-has-[:disabled:placeholder-shown]:text-gray-light group-has-[:disabled]:text-gray-light group-has-[:invalid:placeholder-shown:focus]:text-gray-extraDark group-has-[:invalid:placeholder-shown]:text-gray-extraDark group-has-[:invalid]:text-red-dark',
        className,
      )}
    >
      {children}
    </p>
  );
};
