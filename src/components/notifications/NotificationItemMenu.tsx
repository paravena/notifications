import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { classNames } from '../../lib';

const NotificationItemMenu = () => (
  <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
    <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Open options menu</span>
      <span className="flex h-full w-full items-center justify-center rounded-full">
        <EllipsisVerticalIcon
          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </span>
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                Mark it as read
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                )}
              >
                View details
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default NotificationItemMenu;
