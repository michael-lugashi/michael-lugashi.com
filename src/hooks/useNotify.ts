import { use } from 'react';
import { NotificationsCtx } from '../contexts/NotificationsContext';

const useNotify = () => {
  const ctx = use(NotificationsCtx);
  if (!ctx) throw new Error('useNotifications must be used within <NotificationsProvider>');
  return ctx;
};

export default useNotify;
