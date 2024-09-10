import type { ComponentPropsWithoutRef } from 'react';

export interface InputTextProps extends ComponentPropsWithoutRef<'input'> {
  onChangeValue?: (value: string) => void;
  className?: string;
}
