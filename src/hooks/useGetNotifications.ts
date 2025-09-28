import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot, type Notification } from '../stores/notificationStore';

const useNotificationsSnapshot = (): Notification[] => useSyncExternalStore(subscribe, getSnapshot);

export default useNotificationsSnapshot;
