import { ApiService } from '../service/mesh.service';
export declare class CountriesResolver {
    private countriesService;
    constructor(countriesService: ApiService);
    country(code: string): Promise<Pick<import("../../.mesh").Country, "name" | "native" | "capital" | "emoji" | "currency"> & {
        languages: Pick<import("../../.mesh").Language, "code" | "name">[];
    }>;
}
