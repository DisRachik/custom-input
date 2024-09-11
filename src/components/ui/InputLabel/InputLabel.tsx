import type { FC } from 'react';

import { cn } from '@/utils/cn';

import { ToolTip } from '@/components/ui/ToolTip';

import type { InputLabelProps } from './InputLabel.types';

export const InputLabel: FC<InputLabelProps> = ({ tooltipText, className, children, ...rest }) => (
  <label {...rest} className={cn('flex justify-between gap-1', className)}>
    <span className='flex items-center gap-1 text-xs/5'>
      {children}
      <span className='hidden text-red-dark group-has-[:required]:block'>*</span>
      {tooltipText ? <ToolTip text={tooltipText} /> : null}
    </span>
  </label>
);
// text-red-dark
