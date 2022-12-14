import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { CreateNotificationBody } from './create-notification-body';

import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    const notifications = await this.prisma.notification.findMany();
    return notifications;
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    });
  }
}