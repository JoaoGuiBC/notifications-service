import { CountRecipientNotifications } from ".";
import { inMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { makeNotification } from "@test/factories/notification-factory";

describe('Count recipients notifications', () => {
  it('Should be able to count recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-2' }));

    const { count } = await countRecipientNotifications.execute({ recipientId: 'example-recipient-id-1' });

    expect(count).toEqual(2);
  });
});
