import type { ComponentPropsWithoutRef } from 'react';

export interface InputTextProps extends ComponentPropsWithoutRef<'input'> {
  onChangeValue?: (value: string) => void;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  textRight?: boolean;
  borderNone?: boolean;
  className?: string;
}
