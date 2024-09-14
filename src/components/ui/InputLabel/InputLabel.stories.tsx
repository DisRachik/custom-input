import type { Meta, StoryObj } from '@storybook/react';

import { InputLabel } from './InputLabel';

import { InputGroup } from '@/components/ui/InputGroup';
import * as InputGroupStories from '@/components/ui/InputGroup/InputGroup.stories.tsx';
import * as InputTextStories from '@/components/ui/InputText/InputText.stories.tsx';
import { InputText } from '../InputText';

const meta: Meta<typeof InputLabel> = {
  title: 'components-ua/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the label.',
    },
    informText: {
      control: 'text',
      description: 'If provided, displays an information icon with a tooltip containing this text.',
    },
    htmlFor: {
      control: 'text',
      description:
        'Specifies which form element a label is bound to. Should match the id of the associated input element.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to be applied to the label for custom styling.',
    },
  },
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    children: 'Label Text',
    htmlFor: 'example-input',
    informText: 'It`s required!!!',
  },
};

export const FullExample: Story = {
  args: {
    ...Default.args,
  },
  render: args => (
    <InputGroup>
      <InputLabel {...args}>Email</InputLabel>
      <InputText {...InputTextStories.Required.args} id={args.htmlFor} />
    </InputGroup>
  ),
};

export const Variety: Story = {
  args: {
    children: 'Label Text',
    htmlFor: 'example-input',
  },
  render: args => (
    <>
      <InputGroup {...InputGroupStories.VerticalTemplate.args} className='mx-auto mb-2 w-[300px]'>
        <InputLabel {...args} />
        <InputText {...InputTextStories.NoBorder.args} id={args.htmlFor} />
      </InputGroup>
      <InputGroup {...InputGroupStories.HorizontalTemplate.args} className='mx-auto mb-2 w-[300px]'>
        <InputLabel {...args} htmlFor='1' />
        <InputText id='1' type='number' textRight />
      </InputGroup>
      <InputGroup {...InputGroupStories.HorizontalTemplate.args} className='mx-auto w-[300px]'>
        <InputLabel htmlFor='2'>Without border</InputLabel>
        <InputText {...InputTextStories.NoBorder.args} id='2' />
      </InputGroup>
    </>
  ),
};
