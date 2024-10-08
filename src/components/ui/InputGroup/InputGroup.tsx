import type { FC } from 'react';

import { cn } from '@/utils/cn';

import type { InputGroupProps } from './InputGroup.types';

export const InputGroup: FC<InputGroupProps> = ({ direction = 'vertical', className, children }) => (
  <div
    className={cn(
      'max-w-dvw group space-y-1 text-dark dark:text-white-light',
      direction === 'horizontal' && 'grid grid-cols-[1fr_64px] items-center justify-between gap-1',
      className,
    )}
  >
    {children}
  </div>
);
