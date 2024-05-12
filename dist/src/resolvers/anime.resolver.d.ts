import { ApiService } from '../service/mesh.service';
export declare class AnimeResolver {
    private animeService;
    constructor(animeService: ApiService);
    Character(id: number): Promise<Pick<import("../../.mesh").Character, "age" | "description"> & {
        name?: Pick<import("../../.mesh").CharacterName, "first" | "last">;
        image?: Pick<import("../../.mesh").CharacterImage, "large">;
    }>;
}
