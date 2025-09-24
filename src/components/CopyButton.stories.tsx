import type { Meta, StoryObj } from '@storybook/react-vite';
import CopyButton from './CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    text: 'npm install my-package',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CopyUrl: Story = {
  args: {
    text: 'https://michael-lugashi.com',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a longer piece of text that will be copied to the clipboard.',
  },
};
