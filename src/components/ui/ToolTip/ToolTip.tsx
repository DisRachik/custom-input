import type { FC } from 'react';

import { FiInfo } from 'react-icons/fi';
import { IoCaretDownOutline } from 'react-icons/io5';

import type { ToolTipProps } from './ToolTip.types';

export const ToolTip: FC<ToolTipProps> = ({ text }) => (
  <span className='relative'>
    <FiInfo className='peer size-3 stroke-gray' />
    <span className='pointer-events absolute -top-1 left-1.5 z-50 inline-flex max-w-full -translate-x-1/2 -translate-y-full flex-col items-center justify-center text-xs/5 opacity-0 transition-all peer-hover:opacity-100'>
      <span className='max-w-32 truncate rounded-lg bg-dark px-3 py-2 text-white'>{text}</span>
      <IoCaretDownOutline className='-m-1' />
    </span>
  </span>
);
