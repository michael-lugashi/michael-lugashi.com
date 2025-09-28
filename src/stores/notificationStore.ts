export type NotificationType = 'success' | 'error' | 'info' | 'warning';
export interface Notification {
  id: string;
  message: string;
  type?: NotificationType;
  timeoutMs?: number; // per-item auto-dismiss override
}

type Listener = () => void;

let items: Notification[] = [];
const listeners = new Set<Listener>();
const MAX_VISIBLE = 5;

const emit = () => {
  for (const l of listeners) l();
};

const scheduleAutoDismiss = (id: string, timeoutMs?: number) => {
  const ms = timeoutMs ?? 3000; // default 3s
  if (ms <= 0) return;
  // use a micro map if you want to cancel on hover, etc.
  setTimeout(() => {
    items = items.filter((n) => n.id !== id);
    emit();
  }, ms);
};

export const getSnapshot = () => items;

export const subscribe = (l: Listener) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export const notify = (input: Omit<Notification, 'id'> & { id?: string }) => {
  const id = input.id ?? String(Date.now() + Math.random());
  const next: Notification = { id, ...input };
  items = [next, ...items].slice(0, MAX_VISIBLE);
  emit();
  scheduleAutoDismiss(id, input.timeoutMs);
  return id;
};

/* METHODS THAT WE DON'T NEED FOR NOW BUT ARE GOOD FOR REFERENCE */
// export const dismiss = (id: string) => {
//   items = items.filter((n) => n.id !== id);
//   emit();
// };

// export const clear = () => {
//   items = [];
//   emit();
// };
