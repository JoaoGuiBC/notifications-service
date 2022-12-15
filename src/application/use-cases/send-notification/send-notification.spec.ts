import { SendNotification } from ".";
import { Notification } from '../../entities/notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  }
}

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'Esta é uma notificação',
      category: 'Work',
      recipientId: 'example-recipient-id'
    });

    expect(notifications).toHaveLength(1);
  });
});
