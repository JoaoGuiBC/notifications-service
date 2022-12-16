import { CountRecipientNotifications } from ".";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/notification/content";
import { inMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";

describe('Count recipients notifications', () => {
  it('Should be able to count recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(new Notification({
      content: new Content('Esta é uma notificação'),
      category: 'Work',
      recipientId: 'example-recipient-id-1'
    }));
    await notificationsRepository.create(new Notification({
      content: new Content('Esta é uma notificação'),
      category: 'Work',
      recipientId: 'example-recipient-id-1'
    }));
    await notificationsRepository.create(new Notification({
      content: new Content('Esta é uma notificação'),
      category: 'Work',
      recipientId: 'example-recipient-id-2'
    }));

    const { count } = await countRecipientNotifications.execute({ recipientId: 'example-recipient-id-1' });

    expect(count).toEqual(2);
  });
});
