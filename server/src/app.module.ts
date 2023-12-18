import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationModule } from './destinations/destination.module';
import { DestinationsController } from './destinations/destinations.controller';
import { DestinationsService } from './destinations/destinations.service';

@Module({
  imports: [DestinationModule],
  controllers: [AppController, DestinationsController],
  providers: [AppService, DestinationsService],
})
export class AppModule {}
