import type { FC } from 'react';

import { FiInfo } from 'react-icons/fi';
import { IoCaretDownOutline } from 'react-icons/io5';
import { TbHelpCircle } from 'react-icons/tb';

import { cn } from '@/utils/cn';

import type { ToolTipProps } from './ToolTip.types';

export const ToolTip: FC<ToolTipProps> = ({ text, icon, className }) => (
  <span className='relative'>
    {icon === 'inform' ? <FiInfo className={cn('peer size-3 cursor-auto', className)} /> : null}
    {icon === 'help' ? <TbHelpCircle className={cn('peer size-3 cursor-auto', className)} /> : null}
    <span className='pointer-events-none absolute -top-1 left-1.5 z-50 inline-flex -translate-x-1/2 -translate-y-full flex-col items-center justify-center text-xs/5 opacity-0 transition peer-hover:opacity-100'>
      <span className='max-w-40 truncate rounded-lg bg-dark px-3 py-2 text-white'>{text}</span>
      <IoCaretDownOutline className='-m-1 fill-dark' />
    </span>
  </span>
);
