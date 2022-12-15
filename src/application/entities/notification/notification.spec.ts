import { randomUUID } from 'node:crypto';

import { Notification } from ".";
import { Content } from "./content";

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova notificação'),
      category: 'work',
      recipientId: randomUUID(),
    });
  
    expect(notification).toBeTruthy();
  });
});
