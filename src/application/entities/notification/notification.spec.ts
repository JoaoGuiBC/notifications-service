import { randomUUID } from 'node:crypto';

import { Content } from "./content";
import { Notification } from ".";

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
