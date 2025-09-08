import type { Meta, StoryObj } from '@storybook/react-vite';
import ContactMe from './ContactMe';

const meta: Meta<typeof ContactMe> = {
  title: 'Pages/ContactMe',
  component: ContactMe,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
