import type { FC } from 'react';

import { cn } from '@/utils/cn';

import type { InputGroupProps } from './InputGroup.types';

export const InputGroup: FC<InputGroupProps> = ({ direction = 'vertical', children }) => (
  <div className={cn(direction === 'horizontal' ? 'flex items-center' : '')}>{children}</div>
);
