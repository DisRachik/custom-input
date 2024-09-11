import type { FC } from 'react';

import type { InputAnnotationProps } from './InputAnnotation.types';

import { cn } from '@/utils/cn';

export const InputAnnotation: FC<InputAnnotationProps> = ({ className, children }) => {
  return (
    <p
      className={cn(
        'col-span-2 gap-1 text-xs/5 transition group-has-[:disabled:placeholder-shown]:text-gray-light group-has-[:disabled]:text-gray-light group-has-[:invalid]:text-red group-has-[:placeholder-shown]:text-gray-extraDark',
        className,
      )}
    >
      {children}
    </p>
  );
};
