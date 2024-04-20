import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';
export declare namespace CountriesGraphQlTypes {
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
    };
    type Continent = {
        code: Scalars['ID']['output'];
        countries: Array<Country>;
        name: Scalars['String']['output'];
    };
    type ContinentFilterInput = {
        code?: InputMaybe<StringQueryOperatorInput>;
    };
    type Country = {
        awsRegion: Scalars['String']['output'];
        capital?: Maybe<Scalars['String']['output']>;
        code: Scalars['ID']['output'];
        continent: Continent;
        currencies: Array<Scalars['String']['output']>;
        currency?: Maybe<Scalars['String']['output']>;
        emoji: Scalars['String']['output'];
        emojiU: Scalars['String']['output'];
        languages: Array<Language>;
        name: Scalars['String']['output'];
        native: Scalars['String']['output'];
        phone: Scalars['String']['output'];
        phones: Array<Scalars['String']['output']>;
        states: Array<State>;
        subdivisions: Array<Subdivision>;
    };
    type CountrynameArgs = {
        lang?: InputMaybe<Scalars['String']['input']>;
    };
    type CountryFilterInput = {
        code?: InputMaybe<StringQueryOperatorInput>;
        continent?: InputMaybe<StringQueryOperatorInput>;
        currency?: InputMaybe<StringQueryOperatorInput>;
        name?: InputMaybe<StringQueryOperatorInput>;
    };
    type Language = {
        code: Scalars['ID']['output'];
        name: Scalars['String']['output'];
        native: Scalars['String']['output'];
        rtl: Scalars['Boolean']['output'];
    };
    type LanguageFilterInput = {
        code?: InputMaybe<StringQueryOperatorInput>;
    };
    type Query = {
        continent?: Maybe<Continent>;
        continents: Array<Continent>;
        countries: Array<Country>;
        country?: Maybe<Country>;
        language?: Maybe<Language>;
        languages: Array<Language>;
    };
    type QuerycontinentArgs = {
        code: Scalars['ID']['input'];
    };
    type QuerycontinentsArgs = {
        filter?: InputMaybe<ContinentFilterInput>;
    };
    type QuerycountriesArgs = {
        filter?: InputMaybe<CountryFilterInput>;
    };
    type QuerycountryArgs = {
        code: Scalars['ID']['input'];
    };
    type QuerylanguageArgs = {
        code: Scalars['ID']['input'];
    };
    type QuerylanguagesArgs = {
        filter?: InputMaybe<LanguageFilterInput>;
    };
    type State = {
        code?: Maybe<Scalars['String']['output']>;
        country: Country;
        name: Scalars['String']['output'];
    };
    type StringQueryOperatorInput = {
        eq?: InputMaybe<Scalars['String']['input']>;
        in?: InputMaybe<Array<Scalars['String']['input']>>;
        ne?: InputMaybe<Scalars['String']['input']>;
        nin?: InputMaybe<Array<Scalars['String']['input']>>;
        regex?: InputMaybe<Scalars['String']['input']>;
    };
    type Subdivision = {
        code: Scalars['ID']['output'];
        emoji?: Maybe<Scalars['String']['output']>;
        name: Scalars['String']['output'];
    };
    type QuerySdk = {
        continent: InContextSdkMethod<Query['continent'], QuerycontinentArgs, MeshContext>;
        continents: InContextSdkMethod<Query['continents'], QuerycontinentsArgs, MeshContext>;
        countries: InContextSdkMethod<Query['countries'], QuerycountriesArgs, MeshContext>;
        country: InContextSdkMethod<Query['country'], QuerycountryArgs, MeshContext>;
        language: InContextSdkMethod<Query['language'], QuerylanguageArgs, MeshContext>;
        languages: InContextSdkMethod<Query['languages'], QuerylanguagesArgs, MeshContext>;
    };
    type MutationSdk = {};
    type SubscriptionSdk = {};
    type Context = {
        ["CountriesGraphQL"]: {
            Query: QuerySdk;
            Mutation: MutationSdk;
            Subscription: SubscriptionSdk;
        };
    };
}
