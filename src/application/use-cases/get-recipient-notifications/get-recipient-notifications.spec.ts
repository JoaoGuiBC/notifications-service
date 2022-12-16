import { GetRecipientNotifications } from ".";
import { inMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { makeNotification } from "@test/factories/notification-factory";

describe('Count recipients notifications', () => {
  it('Should be able to count recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-2' }));

    const { notifications } = await getRecipientNotifications.execute({ recipientId: 'example-recipient-id-1' });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: 'example-recipient-id-1' }),
      expect.objectContaining({ recipientId: 'example-recipient-id-1' }),
    ]));
  });
});
