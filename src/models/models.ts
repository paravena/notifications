export type Notification = {
  id: string;
  title: string;
  description: string;
  type: NotificationType;
  status: NotificationStatus;
};

export enum NotificationType {
  ALERT = 'ALERT',
  INFO = 'INFO',
  WARNING = 'WARNING',
}

export enum NotificationStatus {
  READ = 'READ',
  UNREAD = 'UNREAD',
}

export enum FetchStatus {
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  IDLE = 'IDLE',
}
