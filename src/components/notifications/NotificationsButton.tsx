import { BellIcon } from '@heroicons/react/20/solid';
import Badge from './Badge.tsx';

type Props = {
  numberOfNotifications: number;
  onClick: () => void;
};
const NotificationsButton = ({ numberOfNotifications, onClick }: Props) => {
  return (
    <button
      className="group relative rounded-full bg-white px-2 py-1 text-gray-900 hover:bg-gray-50"
      onClick={onClick}
    >
      {numberOfNotifications > 0 && (
        <Badge text={numberOfNotifications.toString()} />
      )}
      <BellIcon className="h-10 w-10 stroke-red-400 text-white group-hover:stroke-red-600" />
    </button>
  );
};

export default NotificationsButton;
