require('json-bigint-patch');
import { Resolver, Query, Args } from '@nestjs/graphql';

import { ApiService } from '../service/mesh.service';

@Resolver()
export class PetsResolver {
  constructor(private petsService: ApiService) {}

  @Query()
  async getPetById(@Args('petId') petId: BigInt) {
    return this.petsService.getPet(petId);
  }
}
