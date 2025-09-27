import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import Notifications from './Notifications';
import NotificationsProvider from '../contexts/NotificationProvider';
import useNotify from '../hooks/useNotify';
import Button from '../components/Button';
import { notify as directNotify } from '../stores/notificationStore';

const meta: Meta<typeof Notifications> = {
  title: 'Components/Notifications',
  component: Notifications,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <NotificationsProvider>
        <div style={{ minHeight: '200px', padding: '20px' }}>
          <Story />
        </div>
      </NotificationsProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const NotificationTrigger = ({
  type,
  message,
  timeout = 3000,
  autoTrigger = false,
}: {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timeout?: number;
  autoTrigger?: boolean;
}) => {
  const notify = useNotify();

  useEffect(() => {
    if (autoTrigger) {
      notify({ message, type, timeoutMs: timeout });
    }
  }, [autoTrigger, message, type, timeout, notify]);

  return (
    <div className="space-y-4">
      <Button onClick={() => notify({ message, type, timeoutMs: timeout })}>Show {type} notification</Button>
      <Notifications />
    </div>
  );
};

// Multiple notifications trigger component
const MultipleNotificationTrigger = () => {
  const notify = useNotify();

  const triggerSequence = () => {
    notify({ message: 'First notification', type: 'info', timeoutMs: 5000 });
    setTimeout(() => {
      notify({ message: 'Second notification', type: 'success', timeoutMs: 5000 });
    }, 500);
    setTimeout(() => {
      notify({ message: 'Third notification', type: 'warning', timeoutMs: 5000 });
    }, 1000);
    setTimeout(() => {
      notify({ message: 'Fourth notification', type: 'error', timeoutMs: 5000 });
    }, 1500);
  };

  const triggerAll = () => {
    const messages = [
      { message: 'Success: Operation completed!', type: 'success' as const },
      { message: 'Error: Something went wrong!', type: 'error' as const },
      { message: 'Warning: Please check your input', type: 'warning' as const },
      { message: "Info: Here's some helpful information", type: 'info' as const },
      { message: 'Another success message', type: 'success' as const },
    ];

    messages.forEach((notif) => {
      notify({ ...notif, timeoutMs: 8000 });
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button onClick={triggerSequence}>Trigger Sequence</Button>
        <Button onClick={triggerAll}>Trigger All Types</Button>
      </div>
      <Notifications />
    </div>
  );
};

export const SingleSuccess: Story = {
  render: () => <NotificationTrigger type="success" message="Operation completed successfully!" autoTrigger />,
};

export const SingleError: Story = {
  render: () => <NotificationTrigger type="error" message="Something went wrong. Please try again." autoTrigger />,
};

export const SingleWarning: Story = {
  render: () => <NotificationTrigger type="warning" message="Please check your input before proceeding." autoTrigger />,
};

export const SingleInfo: Story = {
  render: () => <NotificationTrigger type="info" message="Here's some helpful information for you." autoTrigger />,
};

export const Interactive: Story = {
  render: () => {
    const notify = useNotify();

    return (
      <div className="space-y-4 p-4">
        <h3 className="text-lg font-semibold mb-4">Interactive Notification Demo</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() =>
              notify({
                message: 'Success: Your changes have been saved!',
                type: 'success',
                timeoutMs: 4000,
              })
            }
          >
            Success
          </Button>

          <Button
            onClick={() =>
              notify({
                message: 'Error: Failed to connect to server',
                type: 'error',
                timeoutMs: 5000,
              })
            }
          >
            Error
          </Button>

          <Button
            onClick={() =>
              notify({
                message: 'Warning: Your session will expire soon',
                type: 'warning',
                timeoutMs: 6000,
              })
            }
          >
            Warning
          </Button>

          <Button
            onClick={() =>
              notify({
                message: 'Info: New features are now available',
                type: 'info',
                timeoutMs: 4000,
              })
            }
          >
            Info
          </Button>
        </div>
        <Notifications />
      </div>
    );
  },
};

export const StackedNotifications: Story = {
  render: () => <MultipleNotificationTrigger />,
};

export const LongMessages: Story = {
  render: () => {
    const notify = useNotify();

    return (
      <div className="space-y-4 p-4">
        <h3 className="text-lg font-semibold mb-4">Long Message Demo</h3>
        <div className="space-y-2">
          <Button
            onClick={() =>
              notify({
                message:
                  'This is a very long notification message that demonstrates how the notification component handles longer text content. It should wrap properly and maintain good readability.',
                type: 'info',
                timeoutMs: 8000,
              })
            }
          >
            Long Info Message
          </Button>

          <Button
            onClick={() =>
              notify({
                message:
                  'Error: The file you are trying to upload is too large. Maximum file size is 10MB. Please reduce the file size and try again.',
                type: 'error',
                timeoutMs: 7000,
              })
            }
          >
            Long Error Message
          </Button>
        </div>
        <Notifications />
      </div>
    );
  },
};

export const CustomTimeouts: Story = {
  render: () => {
    const notify = useNotify();

    return (
      <div className="space-y-4 p-4">
        <h3 className="text-lg font-semibold mb-4">Custom Timeout Demo</h3>
        <div className="grid grid-cols-3 gap-4">
          <Button
            onClick={() =>
              notify({
                message: 'Quick notification (1s)',
                type: 'info',
                timeoutMs: 1000,
              })
            }
          >
            1 Second
          </Button>

          <Button
            onClick={() =>
              notify({
                message: 'Standard notification (3s)',
                type: 'success',
                timeoutMs: 3000,
              })
            }
          >
            3 Seconds
          </Button>

          <Button
            onClick={() =>
              notify({
                message: 'Long lasting notification (10s)',
                type: 'warning',
                timeoutMs: 10000,
              })
            }
          >
            10 Seconds
          </Button>
        </div>
        <Notifications />
      </div>
    );
  },
};

// Pre-populated notifications story using direct store access
export const PrePopulated: Story = {
  render: () => {
    useEffect(() => {
      // Add notifications directly to store for demo
      directNotify({
        message: 'Welcome! This notification was pre-loaded',
        type: 'success',
        timeoutMs: 10000,
      });
      directNotify({
        message: 'Another pre-loaded notification',
        type: 'info',
        timeoutMs: 10000,
      });
    }, []);

    return <Notifications />;
  },
};
