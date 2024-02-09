import { classNames } from '../../lib';

const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Unread', href: '#', current: false },
  { name: 'Read', href: '#', current: false },
];

const NotificationsTabs = () => (
  <nav className="-mb-px flex space-x-6">
    {tabs.map(tab => (
      <a
        key={tab.name}
        href={tab.href}
        className={classNames(
          tab.current
            ? 'border-indigo-500 text-indigo-600'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
          'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
        )}
      >
        {tab.name}
      </a>
    ))}
  </nav>
);

export default NotificationsTabs;
