import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-white-p">
      <Card>
        <div className="text-brown-p dark:text-pink-p">This is inside a Card component.</div>
      </Card>
    </div>
  ),
};
