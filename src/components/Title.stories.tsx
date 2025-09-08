import type { Meta, StoryObj } from '@storybook/react-vite';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    title: 'Section Title',
    subtitle: 'Optional subtitle goes here.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoLine: Story = {
  args: {
    showLine: false,
  },
};

export const LeftAligned: Story = {
  args: {
    align: 'left',
  },
};

export const RightAligned: Story = {
  args: {
    align: 'right',
  },
};
