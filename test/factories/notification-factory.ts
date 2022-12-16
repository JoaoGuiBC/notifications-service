import { Content } from "@application/entities/notification/content";
import { Notification, NotificationData } from "@application/entities/notification";

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Esta é uma notificação'),
    category: 'Work',
    recipientId: 'example-recipient-id-1',
    ...override
  })
}