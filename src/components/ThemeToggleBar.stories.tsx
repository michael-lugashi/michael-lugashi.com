import type { Meta, StoryObj } from '@storybook/react-vite';
import ThemeToggleBar from './ThemeToggleBar';

const meta: Meta<typeof ThemeToggleBar> = {
  title: 'Components/ThemeToggleBar',
  component: ThemeToggleBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    className: 'w-full',
  },
  decorators: [
    (Story) => {
      try {
        // Reset persisted theme for consistent demos
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
      } catch {
        // ignore
      }
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StartLight: Story = {
  render: (args) => {
    try {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } catch {
      // ignore
    }
    return <ThemeToggleBar {...args} />;
  },
};

export const StartDark: Story = {
  render: (args) => {
    try {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } catch {
      // ignore
    }
    return <ThemeToggleBar {...args} />;
  },
};
