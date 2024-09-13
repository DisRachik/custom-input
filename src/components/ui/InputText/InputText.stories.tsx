import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from './InputText';

const meta: Meta<typeof InputText> = {
  title: 'components-ua/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description:
        'The type of the input field. Defaults to "text", but can be changed to other valid input types like "email", "password", etc.',
      type: { name: 'enum', value: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'] },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text that will be displayed in the input field.',
    },
    required: {
      control: 'boolean',
      description: 'If true, the input field will be required. This adds the required attribute to the input element.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the input field will be disabled and not editable.',
    },
    id: {
      control: 'text',
      description:
        'The id attribute for the input. When used with InputLabel, it helps associate the label with this input.',
    },
    height: {
      control: 'inline-radio',
      description: 'Sets the height of the input field. Available options are "sm", "md", "lg", and "xl".',
      type: { name: 'enum', value: ['sm', 'md', 'lg', 'xl'], raw: 'md' },
    },
    textRight: {
      description: 'If true, the text in the input field will be aligned to the right.',
    },
    borderNone: {
      control: 'boolean',
      description: 'If true, the border of the input field will be removed.',
    },
    icon: {
      description: 'If true, a search icon will be displayed at the start of the input field.',
    },
    informText: {
      control: 'text',
      description:
        'If provided, a tooltip with this text will be displayed next to the input field. The tooltip is displayed before the settings button.',
    },
    buttonSettings: {
      control: 'boolean',
      description: 'If true, a settings button will be displayed at the end of the input field.',
    },
    value: {
      control: 'text',
      description:
        'The current value of the input field. This prop is typically used in conjunction with the `onChangeValue` prop to control the input field programmatically. For example, you can use `useState` in the parent component to manage the value of the input field, and then pass the current value to this prop and the `set` function for the value to the `onChangeValue` prop.',
    },
    onChangeValue: {
      action: 'changed',
      description:
        'A function that will be called whenever the value of the input field changes. This prop is typically used in conjunction with the `value` prop to update the state of the input field programmatically. For example, you can use `useState` in the parent component to manage the value of the input field, and then pass the current value to the `value` prop and the `set` function for the value to this prop.',
    },
    ref: {
      description:
        'A ref that can be used to access the underlying input element. Useful for integrating with form libraries like React Hook Form.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to be applied to the input container for custom styling.',
    },
  },
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FullExample: Story = {
  args: {
    placeholder: 'Input...',
    value: '',
    type: 'email',
    required: false,
    disabled: false,
    height: 'md',
    textRight: false,
    borderNone: false,
    icon: true,
    informText: 'Enter email',
    buttonSettings: true,
    className: 'custom-input-styles-with-Tailwind',
    onChangeValue: () => {},
  },
  render: args => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (e: string) => {
      updateArgs({ value: e });
    };

    return <InputText {...args} onChangeValue={onChange} value={value} />;
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const NoBorder: Story = {
  args: {
    type: 'text',
    placeholder: 'Borderless input',
    borderNone: true,
  },
};

export const AllSize: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  render: args => (
    <>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='w-[300px] space-y-3'>
          <InputText {...args} height='sm' />
          <InputText {...args} height='md' />
          <InputText {...args} height='lg' />
          <InputText {...args} height='xl' />
        </div>
        <div className='w-[300px] space-y-3'>
          <InputText {...args} height='sm' textRight />
          <InputText {...args} height='md' textRight />
          <InputText {...args} height='lg' textRight />
          <InputText {...args} height='xl' textRight />
        </div>
      </div>
    </>
  ),
};
