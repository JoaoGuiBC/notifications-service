import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

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
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Essa é uma nova notificação',
        category: 'Work',
        recipientId: randomUUID()
      }
    });
  }
}
