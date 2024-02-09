import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { Notification } from '../../models';
import NotificationItemMenu from './NotificationItemMenu.tsx';

type Props = {
  notification: Notification;
};
const NotificationItem = ({ notification }: Props) => {
  return (
    <li key={notification.id}>
      <div className="group relative flex items-center px-5 py-6">
        <a href="#" className="-m-1 block flex-1 p-1">
          <div
            className="absolute inset-0 group-hover:bg-gray-50"
            aria-hidden="true"
          />
          <div className="relative flex min-w-0 flex-1 items-center">
            <span className="relative inline-block flex-shrink-0">
              <InformationCircleIcon className="h-10 w-10 text-green-400" />
            </span>
            <div className="ml-4 truncate">
              <p className="truncate text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <p className="truncate text-sm text-gray-500">
                {notification.description}
              </p>
            </div>
          </div>
        </a>
        <NotificationItemMenu />
      </div>
    </li>
  );
};

export default NotificationItem;
