import type { Meta, StoryObj } from '@storybook/react-vite';
import StripedBox from './StripedBox';

const meta: Meta<typeof StripedBox> = {
  title: 'Components/StripedBox',
  component: StripedBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-6">
      <StripedBox className="w-64 h-32 rounded-xl" />
    </div>
  ),
};
