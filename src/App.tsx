import { Header, NotificationsDrawer } from './components';
import { useState } from 'react';

function App() {
  const [showNotificationsDrawer, setShowNotificationsDrawer] = useState(false);
  const toggleNotificationsDrawer = () =>
    setShowNotificationsDrawer(!showNotificationsDrawer);

  return (
    <>
      <Header toggleNotificationsDrawer={toggleNotificationsDrawer} />
      <NotificationsDrawer
        open={showNotificationsDrawer}
        onClose={() => setShowNotificationsDrawer(false)}
      />
    </>
  );
}

export default App;
