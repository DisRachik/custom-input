import type { PropsWithChildren } from 'react';

export interface InputGroupProps extends PropsWithChildren {
  direction?: 'vertical' | 'horizontal';
  className?: string;
}
