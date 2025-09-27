import { notify } from '../stores/notificationStore';
import Notifications from '../modals/Notifications';
import { NotificationsCtx } from './NotificationsContext';

const NotificationsProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    <NotificationsCtx value={notify}>{children}</NotificationsCtx>
    {/* Only this portal re-renders when notifications change */}
    <Notifications />
  </>
);

export default NotificationsProvider;
