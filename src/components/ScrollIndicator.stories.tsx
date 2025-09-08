import type { Meta, StoryObj } from '@storybook/react-vite';
import ScrollIndicator from './ScrollIndicator';

const meta: Meta<typeof ScrollIndicator> = {
  title: 'Components/ScrollIndicator',
  component: ScrollIndicator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
