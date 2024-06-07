import { Resolver, Query, Args } from '@nestjs/graphql';

import { ApiService } from '../service/mesh.service';

@Resolver()
export class AnimeResolver {
  constructor(private animeService: ApiService) {}

  @Query()
  async Character(@Args('id') id: number) {
    return this.animeService.getAnime(id);
  }
}
