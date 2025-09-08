import type { Meta, StoryObj } from '@storybook/react-vite';
import projects from '../assets/data/projects.json';
import Projects from './Projects';

const meta: Meta<typeof Projects> = {
  title: 'Pages/Projects',
  component: Projects,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    projects: projects,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
