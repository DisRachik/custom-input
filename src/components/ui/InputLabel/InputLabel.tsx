import type { FC } from 'react';

import { cn } from '@/utils/cn';

import { ToolTip } from '@/components/ui/ToolTip';

import type { InputLabelProps } from './InputLabel.types';

export const InputLabel: FC<InputLabelProps> = ({ informText, className, children, ...rest }) => (
  <label {...rest} className={cn('flex justify-between gap-1 pr-16', className)}>
    <span className='flex items-center gap-1 text-xs/5'>
      {children}
      <span className='hidden text-red-dark group-has-[:required]:block'>*</span>
      {informText ? <ToolTip className='text-gray' text={informText} icon='inform' /> : null}
    </span>
  </label>
);
