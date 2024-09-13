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

export const FullExample: Story = {
  args: {
    children: 'Label Text',
    htmlFor: 'example-input',
    informText: 'It`s required!!!',
  },
  render: args => (
    <InputGroup>
      <InputLabel {...args}>Email</InputLabel>
      <InputText
        id={args.htmlFor}
        type='email'
        required
        placeholder='Input...'
        icon
        informText='Enter email'
        buttonSettings
        height='xl'
      />
    </InputGroup>
  ),
};

export const Default: Story = {
  args: { children: 'Label Text' },
};

export const Variety: Story = {
  args: {
    children: 'Label Text',
    htmlFor: 'example-input',
  },
  render: args => (
    <>
      <InputGroup {...InputGroupStories.Template} className='mx-auto mb-2 w-[300px]'>
        <InputLabel {...args} />
        <InputText {...InputTextStories.FullExample} id={args.htmlFor} placeholder=' ' />
      </InputGroup>
      <InputGroup {...InputGroupStories.Template} direction='horizontal' className='mx-auto mb-2 w-[300px]'>
        <InputLabel {...args} htmlFor='1' />
        <InputText {...InputTextStories.FullExample} id='1' type='number' textRight />
      </InputGroup>
      <InputGroup {...InputGroupStories.Template} direction='horizontal' className='mx-auto w-[300px]'>
        <InputLabel htmlFor='2'>Without border</InputLabel>
        <InputText id='2' placeholder=' ' textRight borderNone />
      </InputGroup>
    </>
  ),
};
