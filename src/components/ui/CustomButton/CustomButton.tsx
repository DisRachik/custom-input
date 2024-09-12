import type { FC } from 'react';

import type { CustomButtonProps } from './CustomButton.types';

export const CustomButton: FC<CustomButtonProps> = ({ children, ...rest }) => <button {...rest}>{children}</button>;
