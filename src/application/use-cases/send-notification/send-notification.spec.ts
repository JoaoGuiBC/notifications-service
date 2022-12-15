import { inMemoryNotificationsRepository } from "../../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from ".";

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Esta é uma notificação',
      category: 'Work',
      recipientId: 'example-recipient-id'
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
