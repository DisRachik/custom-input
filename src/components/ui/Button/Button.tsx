import type { FC } from 'react';

import type { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ children, ...rest }) => <button {...rest}>{children}</button>;
