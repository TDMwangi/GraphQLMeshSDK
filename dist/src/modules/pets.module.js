"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const nestjs_1 = require("@graphql-yoga/nestjs");
const path_1 = require("path");
const fs_1 = require("fs");
const pets_resolver_1 = require("../resolvers/pets.resolver");
const mesh_service_1 = require("../service/mesh.service");
let PetsModule = class PetsModule {
};
exports.PetsModule = PetsModule;
exports.PetsModule = PetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: nestjs_1.YogaDriver,
                typeDefs: (0, fs_1.readFileSync)((0, path_1.join)(process.cwd(), '.mesh/schema.graphql'), 'utf8'),
            }),
        ],
        providers: [
            pets_resolver_1.PetsResolver,
            mesh_service_1.ApiService,
        ],
    })
], PetsModule);
//# sourceMappingURL=pets.module.js.map