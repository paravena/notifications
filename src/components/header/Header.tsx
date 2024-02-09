import NotificationsButton from '../notifications/NotificationsButton.tsx';

type Props = {
  toggleNotificationsDrawer: () => void;
};
const Header = ({ toggleNotificationsDrawer }: Props) => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 justify-end">
          <NotificationsButton
            numberOfNotifications={2}
            onClick={toggleNotificationsDrawer}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
