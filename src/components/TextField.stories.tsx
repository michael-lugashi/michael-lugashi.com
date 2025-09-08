import type { Meta, StoryObj } from '@storybook/react-vite';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    value: '',
    onChange: () => void 'do nothing',
    placeholder: 'you@example.com',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Please enter a valid email',
  },
};
