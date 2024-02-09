import { Notification, NotificationStatus, NotificationType } from '../models';
import { createServer } from 'miragejs';

const notifications: Notification[] = [
  {
    title: 'Some title',
    description: 'some description',
    id: 'notification-1',
    type: NotificationType.INFO,
    status: NotificationStatus.READ,
  },
  {
    title: 'Some other title',
    description: 'some other description',
    id: 'notification-2',
    type: NotificationType.WARNING,
    status: NotificationStatus.UNREAD,
  },
  {
    title: 'Another title',
    description: 'another description',
    id: 'notification-3',
    type: NotificationType.ALERT,
    status: NotificationStatus.UNREAD,
  },
];

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/anomaly-service/unread', () => {
      console.log('mocking response');
      return notifications;
    });
  },
});
