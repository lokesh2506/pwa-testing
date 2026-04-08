interface Notification{
  notificationTitle: string,
  subtitle:string,
  link?:string,
}

export interface NotificationProps{
  notifications: Notification[]
}