import { Module } from '@nestjs/common';

import { CountriesModule } from './modules/countries.module';
import { AnimeModule } from './modules/anime.module';
import { PetsModule } from './modules/pets.module';

@Module({
  imports: [
    CountriesModule,
    AnimeModule,
    PetsModule,
  ],
})

export class AppModule {}
