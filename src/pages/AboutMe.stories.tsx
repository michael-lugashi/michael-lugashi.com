import type { Meta, StoryObj } from '@storybook/react-vite';
import AboutMe from './AboutMe';

const meta: Meta<typeof AboutMe> = {
  title: 'Pages/AboutMe',
  component: AboutMe,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
