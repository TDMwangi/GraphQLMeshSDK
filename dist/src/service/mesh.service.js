"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const _mesh_1 = require("../../.mesh");
let ApiService = class ApiService {
    async onModuleInit() {
        this.sdk = (0, _mesh_1.getMeshSDK)();
    }
    async getCountry(code) {
        try {
            const result = await this.sdk.GetCountry({ code });
            return result.country;
        }
        catch (error) {
            console.error('Error executing: ', error);
            throw error;
        }
    }
    async getAnime(id) {
        try {
            const result = await this.sdk.GetAnimeCharacter({ id });
            return result.Character;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
    async getPet(petId) {
        try {
            const result = await this.sdk.GetPetById({ petId });
            return result.getPetById;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
//# sourceMappingURL=mesh.service.js.map