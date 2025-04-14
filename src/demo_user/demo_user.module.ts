import { Module } from '@nestjs/common';
import { DemoUserService } from './demo_user.service';
import { DemoUserController } from './demo_user.controller';

@Module({
  controllers: [DemoUserController],
  providers: [DemoUserService],
})
export class DemoUserModule {}
