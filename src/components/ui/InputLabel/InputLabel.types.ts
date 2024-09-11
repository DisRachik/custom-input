import type { ComponentPropsWithoutRef } from 'react';

export interface InputLabelProps extends ComponentPropsWithoutRef<'label'> {
  position?: 'top' | 'left';
  tooltipText?: string;
  children: string;
}
