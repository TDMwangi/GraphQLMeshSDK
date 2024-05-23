import { OnModuleInit } from '@nestjs/common';
export declare class ApiService implements OnModuleInit {
    private sdk;
    onModuleInit(): Promise<void>;
    getCountry(code: string): Promise<Pick<import("../../.mesh").Country, "name" | "native" | "capital" | "emoji" | "currency"> & {
        languages: Pick<import("../../.mesh").Language, "code" | "name">[];
    }>;
    getAnime(id: number): Promise<Pick<import("../../.mesh").Character, "age" | "description"> & {
        name?: Pick<import("../../.mesh").CharacterName, "first" | "last">;
        image?: Pick<import("../../.mesh").CharacterImage, "large">;
    }>;
    getPet(petId: any): Promise<Pick<import("../../.mesh").Pet, "name"> & {
        category?: Pick<import("../../.mesh").Category, "id" | "name">;
    }>;
}
