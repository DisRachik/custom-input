import type { FC } from 'react';

import { cn } from '@/utils/cn';

import { ToolTip } from '@/components/ui/ToolTip';

import type { InputLabelProps } from './InputLabel.types';

export const InputLabel: FC<InputLabelProps> = ({ position = 'top', tooltipText, children, ...rest }) => (
  <label {...rest} className={cn('flex justify-between gap-1', position === 'left' && 'inline-flex flex-col')}>
    <span className='flex items-center gap-1 text-xs/5'>
      {children}
      {/* {required ? <span className='text-red-dark'>*</span> : null} */}
      {tooltipText ? <ToolTip text={tooltipText} /> : null}
    </span>
  </label>
);
