import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import ContactMe from './ContactMe';
import NotificationsProvider from '../contexts/NotificationProvider';

const meta: Meta<typeof ContactMe> = {
  title: 'Pages/ContactMe',
  component: ContactMe,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const ref = useRef<HTMLDivElement | null>(null);
    return (
      <NotificationsProvider>
        <ContactMe ref={ref} />
      </NotificationsProvider>
    );
  },
};
