import type { ComponentPropsWithoutRef } from 'react';

export interface InputLabelProps extends ComponentPropsWithoutRef<'label'> {
  tooltipText?: string;
  children?: string;
}
