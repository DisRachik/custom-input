import type { ComponentPropsWithoutRef } from 'react';

export interface InputTextProps extends ComponentPropsWithoutRef<'input'> {
  height?: 'sm' | 'md' | 'lg' | 'xl';
  textRight?: boolean;
  borderNone?: boolean;
  informText?: string;
  icon?: boolean;
  buttonSettings?: boolean;
  onChangeValue?: (value: string) => void;
}
