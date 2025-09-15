import type { Meta, StoryObj } from '@storybook/react-vite';
import StripedText from './StripedText';

const meta: Meta<typeof StripedText> = {
  title: 'Components/StripedText',
  component: StripedText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-6 text-3xl font-extrabold">
      <StripedText>Striped Text</StripedText>
    </div>
  ),
};

export const LargeHeading: Story = {
  render: () => (
    <div className="p-6">
      <h1 className="text-6xl font-black">
        This is <StripedText>Striped</StripedText> Heading
      </h1>
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div className="p-6 text-lg leading-8 max-w-xl">
      <p>
        Use <StripedText>StripedText</StripedText> to highlight keywords in your copy. It adapts to the light/dark theme
        automatically.
      </p>
    </div>
  ),
};
