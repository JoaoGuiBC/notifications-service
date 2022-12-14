import { randomUUID } from 'node:crypto';

import { Content } from "./content";
import { Notificattion } from "./notification";

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notificattion({
      content: new Content('Você recebeu uma nova notificação'),
      category: 'work',
      recipientId: randomUUID(),
    });
  
    expect(notification).toBeTruthy();
  });
});
