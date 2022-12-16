import { PrismaNotificationsRepository } from './prisma/repositories/prisma-noitifications-repository';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [
    NotificationsRepository
  ]
})
export class DatabaseModule {}
