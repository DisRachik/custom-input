import type { FC } from 'react';

import { cn } from '@/utils/cn';

import { InputText, type InputTextProps } from '@/components/ui/InputText';
import { ToolTip } from '@/components/ui/ToolTip';

interface InputLabelProps extends InputTextProps {
  labelTitle: string;
  labelPosition?: 'top' | 'left';
  tooltipText?: string;
}

export const InputLabel: FC<InputLabelProps> = ({
  labelTitle,
  labelPosition = 'top',
  tooltipText,
  required,
  ...rest
}) => (
  <label className={cn('flex justify-between gap-1', labelPosition === 'top' && 'inline-flex flex-col')}>
    <span className='flex items-center gap-1 text-xs/5'>
      {labelTitle}
      {required ? <span className='text-red-dark'>*</span> : null}
      {tooltipText ? <ToolTip text={tooltipText} /> : null}
    </span>
    <InputText required={required} {...rest} />
  </label>
);
