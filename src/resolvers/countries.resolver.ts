import { Resolver, Query, Args } from '@nestjs/graphql';

import { ApiService } from '../service/mesh.service';

@Resolver()
export class CountriesResolver {
  constructor(private countriesService: ApiService) {}

  @Query()
  async country(@Args('code') code: string) {
    return this.countriesService.getCountry(code);
  }
}
