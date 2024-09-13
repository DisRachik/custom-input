import type { Meta, StoryObj } from '@storybook/react';

import { InputAnnotation } from './InputAnnotation';

const meta: Meta<typeof InputAnnotation> = {
  title: 'components-ua/InputAnnotation',
  component: InputAnnotation,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the annotation.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to be applied to the annotation for custom styling.',
    },
  },
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof InputAnnotation>;

export const Default: Story = {
  args: {
    children: 'This is a default annotation',
  },
};
