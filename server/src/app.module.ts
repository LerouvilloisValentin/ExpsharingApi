import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './groups/group.module';
import { GroupsController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';

@Module({
  imports: [GroupModule],
  controllers: [AppController, GroupsController],
  providers: [AppService, GroupsService],
})
export class AppModule {}
