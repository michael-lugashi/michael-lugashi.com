import type { Meta, StoryObj } from '@storybook/react-vite';
import NavBar from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Pages/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { story: { inline: false }, iframeHeight: 140 },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: '#fcfcfc' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    handleScrollToContactMe: () => void 'do nothing',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
