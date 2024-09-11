import type { FC } from 'react';

import { cn } from '@/utils/cn';

import type { InputGroupProps } from './InputGroup.types';

export const InputGroup: FC<InputGroupProps> = ({ direction = 'vertical', className, children }) => (
  <div
    className={cn(
      'group space-y-1',
      direction === 'horizontal' && 'grid grid-cols-[1fr_64px] items-center justify-between gap-1',
      className,
    )}
  >
    {children}
  </div>
);
