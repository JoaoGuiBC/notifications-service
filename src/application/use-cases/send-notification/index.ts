import { Notificattion } from "../../entities/notification";
import { Content } from "../../entities/notification/content";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notificattion;
}

export class SendNotification {
  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notificattion({
      category,
      content: new Content(content),
      recipientId
    })

    return { notification };
  }
}