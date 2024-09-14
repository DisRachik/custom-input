import type { Meta, StoryObj } from '@storybook/react';

import { InputGroup } from './InputGroup';

import { InputAnnotation } from '@/components/ui/InputAnnotation';
import * as InputAnnotationStories from '@/components/ui/InputAnnotation/InputAnnotation.stories';
import { InputLabel } from '@/components/ui/InputLabel';
import { InputText } from '@/components/ui/InputText';
import * as InputTextStories from '@/components/ui/InputText/InputText.stories';
import * as InputLabelStories from '../InputLabel/InputLabel.stories';

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

export const AllSettings: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When using direction: "horizontal" for the InputGroup, there is no need to set icons or additional attributes for the InputText component.',
      },
    },
  },
  render: args => {
    return (
      <>
        <InputGroup {...args}>
          <InputLabel {...InputLabelStories.Default.args}>Email</InputLabel>
          <InputText {...InputTextStories.Required.args} id={InputLabelStories.Default.args?.htmlFor} />
          <InputAnnotation {...InputAnnotationStories.Default.args}>This is a hint text to help user.</InputAnnotation>
        </InputGroup>

        <div>
          <InputGroup {...HorizontalTemplate.args} className='mx-auto mb-2 w-[300px]'>
            <InputLabel htmlFor='1'>Without border</InputLabel>
            <InputText id='1' type='number' textRight />
          </InputGroup>
          <InputGroup {...HorizontalTemplate.args} className='mx-auto w-[300px]'>
            <InputLabel htmlFor='2'>Without border</InputLabel>
            <InputText {...InputTextStories.NoBorder.args} id='2' placeholder=' ' />
          </InputGroup>
        </div>
      </>
    );
  },
};

export const Disabled: Story = {
  render: args => {
    return (
      <InputGroup {...args} className='.dark'>
        <InputLabel {...InputLabelStories.Default.args} informText="It's disabled input stan">
          Email
        </InputLabel>
        <InputText {...InputTextStories.Required.args} id={InputLabelStories.Default.args?.htmlFor} disabled />
        <InputAnnotation {...InputAnnotationStories.Default.args}>This is a hint text to help user.</InputAnnotation>
      </InputGroup>
    );
  },
};

export const VerticalTemplate: Story = {
  args: {
    direction: 'vertical',
  },
  render: args => <InputGroup {...args}>{args.children}</InputGroup>,
};
export const HorizontalTemplate: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => <InputGroup {...args}>{args.children}</InputGroup>,
};
