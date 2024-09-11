import type { FC } from 'react';

import type { InputAnnotationProps } from './InputAnnotation.types';

export const InputAnnotation: FC<InputAnnotationProps> = ({ children }) => {
  return <p className='gap-1 text-xs/5'>{children}</p>;
};
