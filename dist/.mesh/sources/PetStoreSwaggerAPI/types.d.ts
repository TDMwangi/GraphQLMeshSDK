import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';
export declare namespace PetStoreSwaggerApiTypes {
    type Maybe<T> = T | null;
    type InputMaybe<T> = Maybe<T>;
    type Exact<T extends {
        [key: string]: unknown;
    }> = {
        [K in keyof T]: T[K];
    };
    type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
    };
    type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
    };
    type MakeEmpty<T extends {
        [key: string]: unknown;
    }, K extends keyof T> = {
        [_ in K]?: never;
    };
    type Incremental<T> = T | {
        [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
    type Scalars = {
        ID: {
            input: string;
            output: string;
        };
        String: {
            input: string;
            output: string;
        };
        Boolean: {
            input: boolean;
            output: boolean;
        };
        Int: {
            input: number;
            output: number;
        };
        Float: {
            input: number;
            output: number;
        };
        BigInt: {
            input: bigint;
            output: bigint;
        };
        DateTime: {
            input: Date | string;
            output: Date | string;
        };
        JSON: {
            input: any;
            output: any;
        };
        ObjMap: {
            input: any;
            output: any;
        };
    };
    type Query = {
        findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
        findPetsByTags?: Maybe<Array<Maybe<Pet>>>;
        getPetById: Pet;
        getOrderById: Order;
        getInventory?: Maybe<Scalars['JSON']['output']>;
        getUserByName: User;
        loginUser?: Maybe<Scalars['String']['output']>;
        logoutUser?: Maybe<Scalars['JSON']['output']>;
    };
    type QueryfindPetsByStatusArgs = {
        status: Array<InputMaybe<queryInput_findPetsByStatus_status_items>>;
    };
    type QueryfindPetsByTagsArgs = {
        tags: Array<InputMaybe<Scalars['String']['input']>>;
    };
    type QuerygetPetByIdArgs = {
        petId: Scalars['BigInt']['input'];
    };
    type QuerygetOrderByIdArgs = {
        orderId: Scalars['BigInt']['input'];
    };
    type QuerygetUserByNameArgs = {
        username: Scalars['String']['input'];
    };
    type QueryloginUserArgs = {
        username: Scalars['String']['input'];
        password: Scalars['String']['input'];
    };
    type Pet = {
        id?: Maybe<Scalars['BigInt']['output']>;
        category?: Maybe<Category>;
        name: Scalars['String']['output'];
        photoUrls: Array<Maybe<Scalars['String']['output']>>;
        tags?: Maybe<Array<Maybe<Tag>>>;
        status?: Maybe<mutationInput_addPet_input_status>;
    };
    type Category = {
        id?: Maybe<Scalars['BigInt']['output']>;
        name?: Maybe<Scalars['String']['output']>;
    };
    type Tag = {
        id?: Maybe<Scalars['BigInt']['output']>;
        name?: Maybe<Scalars['String']['output']>;
    };
    type mutationInput_addPet_input_status = 'available' | 'pending' | 'sold';
    type queryInput_findPetsByStatus_status_items = 'available' | 'pending' | 'sold';
    type Order = {
        id?: Maybe<Scalars['BigInt']['output']>;
        petId?: Maybe<Scalars['BigInt']['output']>;
        quantity?: Maybe<Scalars['Int']['output']>;
        shipDate?: Maybe<Scalars['DateTime']['output']>;
        status?: Maybe<mutation_placeOrder_status>;
        complete?: Maybe<Scalars['Boolean']['output']>;
    };
    type mutation_placeOrder_status = 'placed' | 'approved' | 'delivered';
    type User = {
        id?: Maybe<Scalars['BigInt']['output']>;
        username?: Maybe<Scalars['String']['output']>;
        firstName?: Maybe<Scalars['String']['output']>;
        lastName?: Maybe<Scalars['String']['output']>;
        email?: Maybe<Scalars['String']['output']>;
        password?: Maybe<Scalars['String']['output']>;
        phone?: Maybe<Scalars['String']['output']>;
        userStatus?: Maybe<Scalars['Int']['output']>;
    };
    type Mutation = {
        uploadFile?: Maybe<ApiResponse>;
        addPet?: Maybe<Scalars['JSON']['output']>;
        updatePet?: Maybe<Scalars['JSON']['output']>;
        updatePetWithForm?: Maybe<Scalars['JSON']['output']>;
        deletePet?: Maybe<Scalars['JSON']['output']>;
        placeOrder: Order;
        deleteOrder?: Maybe<Scalars['JSON']['output']>;
        createUsersWithArrayInput?: Maybe<Scalars['JSON']['output']>;
        createUsersWithListInput?: Maybe<Scalars['JSON']['output']>;
        updateUser?: Maybe<Scalars['JSON']['output']>;
        deleteUser?: Maybe<Scalars['JSON']['output']>;
        createUser?: Maybe<Scalars['JSON']['output']>;
    };
    type MutationuploadFileArgs = {
        petId: Scalars['BigInt']['input'];
    };
    type MutationaddPetArgs = {
        input: Pet_Input;
    };
    type MutationupdatePetArgs = {
        input: Pet_Input;
    };
    type MutationupdatePetWithFormArgs = {
        petId: Scalars['BigInt']['input'];
    };
    type MutationdeletePetArgs = {
        api_key?: InputMaybe<Scalars['String']['input']>;
        petId: Scalars['BigInt']['input'];
    };
    type MutationplaceOrderArgs = {
        input: Order_Input;
    };
    type MutationdeleteOrderArgs = {
        orderId: Scalars['BigInt']['input'];
    };
    type MutationcreateUsersWithArrayInputArgs = {
        input: Array<InputMaybe<User_Input>>;
    };
    type MutationcreateUsersWithListInputArgs = {
        input: Array<InputMaybe<User_Input>>;
    };
    type MutationupdateUserArgs = {
        username: Scalars['String']['input'];
        input: User_Input;
    };
    type MutationdeleteUserArgs = {
        username: Scalars['String']['input'];
    };
    type MutationcreateUserArgs = {
        input: User_Input;
    };
    type ApiResponse = {
        code?: Maybe<Scalars['Int']['output']>;
        type?: Maybe<Scalars['String']['output']>;
        message?: Maybe<Scalars['String']['output']>;
    };
    type Pet_Input = {
        id?: InputMaybe<Scalars['BigInt']['input']>;
        category?: InputMaybe<Category_Input>;
        name: Scalars['String']['input'];
        photoUrls: Array<InputMaybe<Scalars['String']['input']>>;
        tags?: InputMaybe<Array<InputMaybe<Tag_Input>>>;
        status?: InputMaybe<mutationInput_addPet_input_status>;
    };
    type Category_Input = {
        id?: InputMaybe<Scalars['BigInt']['input']>;
        name?: InputMaybe<Scalars['String']['input']>;
    };
    type Tag_Input = {
        id?: InputMaybe<Scalars['BigInt']['input']>;
        name?: InputMaybe<Scalars['String']['input']>;
    };
    type Order_Input = {
        id?: InputMaybe<Scalars['BigInt']['input']>;
        petId?: InputMaybe<Scalars['BigInt']['input']>;
        quantity?: InputMaybe<Scalars['Int']['input']>;
        shipDate?: InputMaybe<Scalars['DateTime']['input']>;
        status?: InputMaybe<mutation_placeOrder_status>;
        complete?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type User_Input = {
        id?: InputMaybe<Scalars['BigInt']['input']>;
        username?: InputMaybe<Scalars['String']['input']>;
        firstName?: InputMaybe<Scalars['String']['input']>;
        lastName?: InputMaybe<Scalars['String']['input']>;
        email?: InputMaybe<Scalars['String']['input']>;
        password?: InputMaybe<Scalars['String']['input']>;
        phone?: InputMaybe<Scalars['String']['input']>;
        userStatus?: InputMaybe<Scalars['Int']['input']>;
    };
    type HTTPMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    type QuerySdk = {
        findPetsByStatus: InContextSdkMethod<Query['findPetsByStatus'], QueryfindPetsByStatusArgs, MeshContext>;
        findPetsByTags: InContextSdkMethod<Query['findPetsByTags'], QueryfindPetsByTagsArgs, MeshContext>;
        getPetById: InContextSdkMethod<Query['getPetById'], QuerygetPetByIdArgs, MeshContext>;
        getOrderById: InContextSdkMethod<Query['getOrderById'], QuerygetOrderByIdArgs, MeshContext>;
        getInventory: InContextSdkMethod<Query['getInventory'], {}, MeshContext>;
        getUserByName: InContextSdkMethod<Query['getUserByName'], QuerygetUserByNameArgs, MeshContext>;
        loginUser: InContextSdkMethod<Query['loginUser'], QueryloginUserArgs, MeshContext>;
        logoutUser: InContextSdkMethod<Query['logoutUser'], {}, MeshContext>;
    };
    type MutationSdk = {
        uploadFile: InContextSdkMethod<Mutation['uploadFile'], MutationuploadFileArgs, MeshContext>;
        addPet: InContextSdkMethod<Mutation['addPet'], MutationaddPetArgs, MeshContext>;
        updatePet: InContextSdkMethod<Mutation['updatePet'], MutationupdatePetArgs, MeshContext>;
        updatePetWithForm: InContextSdkMethod<Mutation['updatePetWithForm'], MutationupdatePetWithFormArgs, MeshContext>;
        deletePet: InContextSdkMethod<Mutation['deletePet'], MutationdeletePetArgs, MeshContext>;
        placeOrder: InContextSdkMethod<Mutation['placeOrder'], MutationplaceOrderArgs, MeshContext>;
        deleteOrder: InContextSdkMethod<Mutation['deleteOrder'], MutationdeleteOrderArgs, MeshContext>;
        createUsersWithArrayInput: InContextSdkMethod<Mutation['createUsersWithArrayInput'], MutationcreateUsersWithArrayInputArgs, MeshContext>;
        createUsersWithListInput: InContextSdkMethod<Mutation['createUsersWithListInput'], MutationcreateUsersWithListInputArgs, MeshContext>;
        updateUser: InContextSdkMethod<Mutation['updateUser'], MutationupdateUserArgs, MeshContext>;
        deleteUser: InContextSdkMethod<Mutation['deleteUser'], MutationdeleteUserArgs, MeshContext>;
        createUser: InContextSdkMethod<Mutation['createUser'], MutationcreateUserArgs, MeshContext>;
    };
    type SubscriptionSdk = {};
    type Context = {
        ["PetStoreSwaggerAPI"]: {
            Query: QuerySdk;
            Mutation: MutationSdk;
            Subscription: SubscriptionSdk;
        };
    };
}
