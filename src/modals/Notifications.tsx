import { createPortal } from 'react-dom';
import SuccessIcon from '../assets/svgs/Success';
import ErrorIcon from '../assets/svgs/Error';
import WarningIcon from '../assets/svgs/Warning';
import InfoIcon from '../assets/svgs/Info';
import useGetNotifications from '../hooks/useGetNotifications';
import { type Notification } from '../stores/notificationStore';

const Notifications: React.FC = () => {
  const notifications = useGetNotifications();

  return createPortal(
    notifications.length > 0 && (
      <div
        className="pointer-events-none fixed inset-x-0 z-[9999] flex justify-center top-4 px-4"
        aria-live="polite"
        role="status"
      >
        {notifications.map(({ id, message, type = 'info' }, idx) => (
          <div
            key={id}
            className={[
              // stacking (Tailwind only)
              'absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out animate-slide-down',
              stackTop(idx),
              // card
              'w-80 pointer-events-none rounded-lg border-none shadow-sm ring-0 flex items-center gap-3 px-4 py-3',
              typeClass(type),
            ].join(' ')}
          >
            <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${dotWrap(type)}`}>
              {typeIcon(type)}
            </span>
            <p className="text-sm font-medium leading-5">{message}</p>
          </div>
        ))}
      </div>
    ),
    document.body
  );
};

export default Notifications;

/* ---------------- helpers ---------------- */

function stackTop(i: number) {
  switch (i) {
    case 0:
      return 'translate-y-0 scale-100 opacity-100 z-50';
    case 1:
      return 'translate-y-3 scale-97 opacity-95 z-40';
    case 2:
      return 'translate-y-6 scale-93 opacity-90 z-30';
    case 3:
      return 'translate-y-9 scale-88 opacity-80 z-20';
    default:
      return 'translate-y-12 scale-82 opacity-70 z-10';
  }
}

function typeClass(type: Notification['type']) {
  switch (type) {
    case 'success':
      return 'bg-emerald-50 text-emerald-600';
    case 'error':
      return 'bg-rose-50 text-rose-600';
    case 'warning':
      return 'bg-amber-50 text-amber-600';
    case 'info':
    default:
      return 'bg-sky-50 text-sky-600';
  }
}

function dotWrap(type: Notification['type']) {
  switch (type) {
    case 'success':
      return 'bg-emerald-600 text-emerald-50';
    case 'error':
      return 'bg-rose-600 text-rose-50';
    case 'warning':
      return 'bg-amber-600 text-amber-50';
    case 'info':
    default:
      return 'bg-sky-600 text-sky-50';
  }
}

function typeIcon(type: Notification['type']) {
  switch (type) {
    case 'success':
      return <SuccessIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'info':
    default:
      return <InfoIcon />;
  }
}
