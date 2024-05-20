import { ApiService } from '../service/mesh.service';
export declare class PetsResolver {
    private petsService;
    constructor(petsService: ApiService);
    getPetById(petId: BigInt): Promise<Pick<import("../../.mesh").Pet, "name"> & {
        category?: Pick<import("../../.mesh").Category, "id" | "name">;
    }>;
}
