import { CancelNotification } from ".";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/notification/content";
import { NotificationNotFound } from "../errors/notification-not-found";
import { inMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";

describe('Cancel notification', () => {
  it('Should be able to cancel a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new Content('Esta é uma notificação'),
      category: 'Work',
      recipientId: 'example-recipient-id'
    })

    await notificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });

  it('Should not be able to cancel a notification when it does not exist', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({ notificationId: 'fake-notification-id' })
    }).rejects.toThrow(NotificationNotFound)
  });
});
