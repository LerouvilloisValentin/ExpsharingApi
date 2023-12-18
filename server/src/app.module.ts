import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationModule } from './destinations/destination.module';
import { DestinationsController } from './destinations/destinations.controller';
import { DestinationsService } from './destinations/destinations.service';
import { CulinairesService } from './culinaires/culinaires.service';
import { CulinairesController } from './culinaires/culinaires.controller';
import { CulinaireModule } from './culinaires/culinaire.module';
import { GamesService } from './games/games.service';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/game.module';

@Module({
  imports: [DestinationModule, CulinaireModule, GamesModule],
  controllers: [AppController, DestinationsController, CulinairesController, GamesController],
  providers: [AppService, DestinationsService, CulinairesService, GamesService],
})
export class AppModule {}
