import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Pages/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
