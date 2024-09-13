import type { Meta, StoryObj } from '@storybook/react';

import { InputGroup } from './InputGroup';

// import { InputAnnotation } from '../InputAnnotation';
// import { InputLabel } from '../InputLabel';
// import { InputText } from '../InputText';

const meta: Meta<typeof InputGroup> = {
  title: 'components-ua/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'The layout direction of the input group.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to be applied to the group container.',
    },
    children: {
      description:
        'The content of the InputGroup, typically includes components such as InputLabel, InputText, and InputAnnotation. These elements are used together to create a labeled input field with optional annotations.',
    },
  },
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Template: Story = {
  args: {
    direction: 'vertical',
    className: 'custom-block-styles-with-Tailwind',
  },
  render: args => <InputGroup {...args}>{args.children}</InputGroup>,
};
