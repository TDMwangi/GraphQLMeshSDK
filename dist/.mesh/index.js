"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetPetByIdDocument = exports.GetCountryDocument = exports.GetAnimeCharacterDocument = exports.getMeshSDK = exports.subscribe = exports.execute = exports.getBuiltMesh = exports.pollingInterval = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const utils_3 = require("@graphql-mesh/utils");
const cache_localforage_1 = require("@graphql-mesh/cache-localforage");
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = require("@graphql-mesh/graphql");
const openapi_1 = require("@graphql-mesh/openapi");
const merger_stitching_1 = require("@graphql-mesh/merger-stitching");
const utils_4 = require("@graphql-mesh/utils");
const plugin_persisted_operations_1 = require("@graphql-yoga/plugin-persisted-operations");
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = require("./sources/CountriesGraphQL/introspectionSchema");
const importedModule$1 = require("./sources/PetStoreSwaggerAPI/schemaWithAnnotations");
const importedModule$2 = require("./sources/AnimeCharactersGraphQL/introspectionSchema");
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".mesh/sources/CountriesGraphQL/introspectionSchema":
            return Promise.resolve(importedModule$0);
        case ".mesh/sources/PetStoreSwaggerAPI/schemaWithAnnotations":
            return Promise.resolve(importedModule$1);
        case ".mesh/sources/AnimeCharactersGraphQL/introspectionSchema":
            return Promise.resolve(importedModule$2);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.mesh', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_2.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_3.DefaultLogger("🕸️  Mesh");
    const cache = new cache_localforage_1.default({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const countriesGraphQlTransforms = [];
    const animeCharactersGraphQlTransforms = [];
    const petStoreSwaggerApiTransforms = [];
    const additionalTypeDefs = [];
    const countriesGraphQlHandler = new graphql_1.default({
        name: "CountriesGraphQL",
        config: { "endpoint": "https://countries.trevorblades.com/graphql" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("CountriesGraphQL"),
        logger: logger.child("CountriesGraphQL"),
        importFn,
    });
    const animeCharactersGraphQlHandler = new graphql_1.default({
        name: "AnimeCharactersGraphQL",
        config: { "endpoint": "https://graphql.anilist.co" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("AnimeCharactersGraphQL"),
        logger: logger.child("AnimeCharactersGraphQL"),
        importFn,
    });
    const petStoreSwaggerApiHandler = new openapi_1.default({
        name: "PetStoreSwaggerAPI",
        config: { "source": "https://petstore.swagger.io/v2/swagger.json" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("PetStoreSwaggerAPI"),
        logger: logger.child("PetStoreSwaggerAPI"),
        importFn,
    });
    sources[0] = {
        name: 'CountriesGraphQL',
        handler: countriesGraphQlHandler,
        transforms: countriesGraphQlTransforms
    };
    sources[1] = {
        name: 'AnimeCharactersGraphQL',
        handler: animeCharactersGraphQlHandler,
        transforms: animeCharactersGraphQlTransforms
    };
    sources[2] = {
        name: 'PetStoreSwaggerAPI',
        handler: petStoreSwaggerApiHandler,
        transforms: petStoreSwaggerApiTransforms
    };
    const additionalResolvers = [];
    const merger = new merger_stitching_1.default({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const documentHashMap = {
        "8716219f1d0d9eb539c5d75834271437bb1f0cb380dbf6524c09d5e3c31a9b01": exports.GetAnimeCharacterDocument,
        "3ff8a0a8d49d3e40b2a1d64163a54c717efb4cb98f389375e937f3d5c2821b4d": exports.GetPetByIdDocument,
        "4dcdc18961b94f41ba059827f6703996b459be503d6504e01892758959d09e16": exports.GetCountryDocument
    };
    additionalEnvelopPlugins.push((0, plugin_persisted_operations_1.usePersistedOperations)({
        getPersistedOperation(key) {
            return documentHashMap[key];
        },
    }));
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: exports.GetAnimeCharacterDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.GetAnimeCharacterDocument);
                    },
                    location: 'GetAnimeCharacterDocument.graphql',
                    sha256Hash: '8716219f1d0d9eb539c5d75834271437bb1f0cb380dbf6524c09d5e3c31a9b01'
                }, {
                    document: exports.GetPetByIdDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.GetPetByIdDocument);
                    },
                    location: 'GetPetByIdDocument.graphql',
                    sha256Hash: '3ff8a0a8d49d3e40b2a1d64163a54c717efb4cb98f389375e937f3d5c2821b4d'
                }, {
                    document: exports.GetCountryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.GetCountryDocument);
                    },
                    location: 'GetCountryDocument.graphql',
                    sha256Hash: '4dcdc18961b94f41ba059827f6703996b459be503d6504e01892758959d09e16'
                }
            ];
        },
        fetchFn: fetch_1.fetch,
    };
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltMesh,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
exports.pollingInterval = null;
function getBuiltMesh() {
    if (meshInstance$ == null) {
        if (exports.pollingInterval) {
            setInterval(() => {
                getMeshOptions()
                    .then(meshOptions => (0, runtime_1.getMesh)(meshOptions))
                    .then(newMesh => meshInstance$.then(oldMesh => {
                    oldMesh.destroy();
                    meshInstance$ = Promise.resolve(newMesh);
                })).catch(err => {
                    console.error("Mesh polling failed so the existing version will be used:", err);
                });
            }, exports.pollingInterval);
        }
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltMesh = getBuiltMesh;
const execute = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
function getMeshSDK(globalContext) {
    const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
exports.getMeshSDK = getMeshSDK;
exports.GetAnimeCharacterDocument = (0, utils_1.gql) `
    query GetAnimeCharacter($id: Int!) {
  Character(id: $id) {
    name {
      first
      last
    }
    image {
      large
    }
    age
    description
  }
}
    `;
exports.GetCountryDocument = (0, utils_1.gql) `
    query GetCountry($code: ID!) {
  country(code: $code) {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
    `;
exports.GetPetByIdDocument = (0, utils_1.gql) `
    query GetPetById($petId: BigInt!) {
  getPetById(petId: $petId) {
    name
    category {
      id
      name
    }
  }
}
    `;
function getSdk(requester) {
    return {
        GetAnimeCharacter(variables, options) {
            return requester(exports.GetAnimeCharacterDocument, variables, options);
        },
        GetCountry(variables, options) {
            return requester(exports.GetCountryDocument, variables, options);
        },
        GetPetById(variables, options) {
            return requester(exports.GetPetByIdDocument, variables, options);
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=index.js.map