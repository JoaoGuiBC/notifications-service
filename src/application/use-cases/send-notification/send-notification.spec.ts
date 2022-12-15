import { SendNotification } from "."

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Esta é uma notificação',
      category: 'Work',
      recipientId: 'example-recipient-id'
    });

    expect(notification).toBeTruthy();
  })
})