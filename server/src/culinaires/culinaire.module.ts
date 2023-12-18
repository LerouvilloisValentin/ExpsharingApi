import { Module } from '@nestjs/common';
import { CulinairesService } from './culinaires.service';

@Module({
    providers: [CulinairesService]

})
export class CulinaireModule {}
