import type { Meta, StoryObj } from '@storybook/react-vite';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    label: 'Message',
    name: 'message',
    value: '',
    onChange: () => void 'do nothing',
    placeholder: 'Type your message...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'This field is required',
  },
};
