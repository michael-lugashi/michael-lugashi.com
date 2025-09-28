export type Notify = (payload: {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  timeoutMs?: number;
  id?: string;
}) => string;

import { createContext } from 'react';

export const NotificationsCtx = createContext<Notify | null>(null);
