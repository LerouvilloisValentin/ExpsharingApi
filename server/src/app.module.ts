import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationModule } from './destinations/destination.module';
import { DestinationsController } from './destinations/destinations.controller';
import { DestinationsService } from './destinations/destinations.service';
import { CulinairesService } from './culinaires/culinaires.service';
import { CulinairesController } from './culinaires/culinaires.controller';
import { CulinaireModule } from './culinaires/culinaire.module';

@Module({
  imports: [DestinationModule, CulinaireModule],
  controllers: [AppController, DestinationsController, CulinairesController],
  providers: [AppService, DestinationsService, CulinairesService],
})
export class AppModule {}
