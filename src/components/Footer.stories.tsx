import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    text: '© 2025 Your Name. All rights reserved.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
