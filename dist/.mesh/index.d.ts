import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { CountriesGraphQlTypes } from './sources/CountriesGraphQL/types';
import type { PetStoreSwaggerApiTypes } from './sources/PetStoreSwaggerAPI/types';
import type { AnimeCharactersGraphQlTypes } from './sources/AnimeCharactersGraphQL/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
export type Scalars = {
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
    Json: {
        input: any;
        output: any;
    };
    CountryCode: {
        input: any;
        output: any;
    };
    FuzzyDateInt: {
        input: any;
        output: any;
    };
};
export type Query = {
    continent?: Maybe<Continent>;
    continents: Array<Continent>;
    countries: Array<Country>;
    country?: Maybe<Country>;
    language?: Maybe<Language>;
    languages: Array<Language>;
    findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
    findPetsByTags?: Maybe<Array<Maybe<Pet>>>;
    getPetById: Pet;
    getOrderById: Order;
    getInventory?: Maybe<Scalars['JSON']['output']>;
    getUserByName: User;
    loginUser?: Maybe<Scalars['String']['output']>;
    logoutUser?: Maybe<Scalars['JSON']['output']>;
    Page?: Maybe<Page>;
    Media?: Maybe<Media>;
    MediaTrend?: Maybe<MediaTrend>;
    AiringSchedule?: Maybe<AiringSchedule>;
    Character?: Maybe<Character>;
    Staff?: Maybe<Staff>;
    MediaList?: Maybe<MediaList>;
    MediaListCollection?: Maybe<MediaListCollection>;
    GenreCollection?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    MediaTagCollection?: Maybe<Array<Maybe<MediaTag>>>;
    User?: Maybe<User>;
    Viewer?: Maybe<User>;
    Notification?: Maybe<NotificationUnion>;
    Studio?: Maybe<Studio>;
    Review?: Maybe<Review>;
    Activity?: Maybe<ActivityUnion>;
    ActivityReply?: Maybe<ActivityReply>;
    Following?: Maybe<User>;
    Follower?: Maybe<User>;
    Thread?: Maybe<Thread>;
    ThreadComment?: Maybe<Array<Maybe<ThreadComment>>>;
    Recommendation?: Maybe<Recommendation>;
    Like?: Maybe<User>;
    Markdown?: Maybe<ParsedMarkdown>;
    AniChartUser?: Maybe<AniChartUser>;
    SiteStatistics?: Maybe<SiteStatistics>;
    ExternalLinkSourceCollection?: Maybe<Array<Maybe<MediaExternalLink>>>;
};
export type QuerycontinentArgs = {
    code: Scalars['ID']['input'];
};
export type QuerycontinentsArgs = {
    filter?: InputMaybe<ContinentFilterInput>;
};
export type QuerycountriesArgs = {
    filter?: InputMaybe<CountryFilterInput>;
};
export type QuerycountryArgs = {
    code: Scalars['ID']['input'];
};
export type QuerylanguageArgs = {
    code: Scalars['ID']['input'];
};
export type QuerylanguagesArgs = {
    filter?: InputMaybe<LanguageFilterInput>;
};
export type QueryfindPetsByStatusArgs = {
    status: Array<InputMaybe<queryInput_findPetsByStatus_status_items>>;
};
export type QueryfindPetsByTagsArgs = {
    tags: Array<InputMaybe<Scalars['String']['input']>>;
};
export type QuerygetPetByIdArgs = {
    petId: Scalars['BigInt']['input'];
};
export type QuerygetOrderByIdArgs = {
    orderId: Scalars['BigInt']['input'];
};
export type QuerygetUserByNameArgs = {
    username: Scalars['String']['input'];
};
export type QueryloginUserArgs = {
    username: Scalars['String']['input'];
    password: Scalars['String']['input'];
};
export type QueryPageArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryMediaArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    idMal?: InputMaybe<Scalars['Int']['input']>;
    startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    season?: InputMaybe<MediaSeason>;
    seasonYear?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<MediaType>;
    format?: InputMaybe<MediaFormat>;
    status?: InputMaybe<MediaStatus>;
    episodes?: InputMaybe<Scalars['Int']['input']>;
    duration?: InputMaybe<Scalars['Int']['input']>;
    chapters?: InputMaybe<Scalars['Int']['input']>;
    volumes?: InputMaybe<Scalars['Int']['input']>;
    isAdult?: InputMaybe<Scalars['Boolean']['input']>;
    genre?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Scalars['String']['input']>;
    minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
    tagCategory?: InputMaybe<Scalars['String']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    licensedBy?: InputMaybe<Scalars['String']['input']>;
    licensedById?: InputMaybe<Scalars['Int']['input']>;
    averageScore?: InputMaybe<Scalars['Int']['input']>;
    popularity?: InputMaybe<Scalars['Int']['input']>;
    source?: InputMaybe<MediaSource>;
    countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
    isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    idMal_not?: InputMaybe<Scalars['Int']['input']>;
    idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startDate_like?: InputMaybe<Scalars['String']['input']>;
    endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate_like?: InputMaybe<Scalars['String']['input']>;
    format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
    format_not?: InputMaybe<MediaFormat>;
    format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
    status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
    status_not?: InputMaybe<MediaStatus>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
    episodes_greater?: InputMaybe<Scalars['Int']['input']>;
    episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
    duration_greater?: InputMaybe<Scalars['Int']['input']>;
    duration_lesser?: InputMaybe<Scalars['Int']['input']>;
    chapters_greater?: InputMaybe<Scalars['Int']['input']>;
    chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
    volumes_greater?: InputMaybe<Scalars['Int']['input']>;
    volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
    genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    averageScore_not?: InputMaybe<Scalars['Int']['input']>;
    averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
    averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
    popularity_not?: InputMaybe<Scalars['Int']['input']>;
    popularity_greater?: InputMaybe<Scalars['Int']['input']>;
    popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
    source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};
export type QueryMediaTrendArgs = {
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    date?: InputMaybe<Scalars['Int']['input']>;
    trending?: InputMaybe<Scalars['Int']['input']>;
    averageScore?: InputMaybe<Scalars['Int']['input']>;
    popularity?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    releasing?: InputMaybe<Scalars['Boolean']['input']>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    date_greater?: InputMaybe<Scalars['Int']['input']>;
    date_lesser?: InputMaybe<Scalars['Int']['input']>;
    trending_greater?: InputMaybe<Scalars['Int']['input']>;
    trending_lesser?: InputMaybe<Scalars['Int']['input']>;
    trending_not?: InputMaybe<Scalars['Int']['input']>;
    averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
    averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
    averageScore_not?: InputMaybe<Scalars['Int']['input']>;
    popularity_greater?: InputMaybe<Scalars['Int']['input']>;
    popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
    popularity_not?: InputMaybe<Scalars['Int']['input']>;
    episode_greater?: InputMaybe<Scalars['Int']['input']>;
    episode_lesser?: InputMaybe<Scalars['Int']['input']>;
    episode_not?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
};
export type QueryAiringScheduleArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    airingAt?: InputMaybe<Scalars['Int']['input']>;
    notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_not?: InputMaybe<Scalars['Int']['input']>;
    episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_greater?: InputMaybe<Scalars['Int']['input']>;
    episode_lesser?: InputMaybe<Scalars['Int']['input']>;
    airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
    airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};
export type QueryCharacterArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};
export type QueryStaffArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type QueryMediaListArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    userName?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<MediaType>;
    status?: InputMaybe<MediaListStatus>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
    userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not?: InputMaybe<MediaListStatus>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    notes_like?: InputMaybe<Scalars['String']['input']>;
    startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_like?: InputMaybe<Scalars['String']['input']>;
    completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
};
export type QueryMediaListCollectionArgs = {
    userId?: InputMaybe<Scalars['Int']['input']>;
    userName?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<MediaType>;
    status?: InputMaybe<MediaListStatus>;
    notes?: InputMaybe<Scalars['String']['input']>;
    startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    forceSingleCompletedList?: InputMaybe<Scalars['Boolean']['input']>;
    chunk?: InputMaybe<Scalars['Int']['input']>;
    perChunk?: InputMaybe<Scalars['Int']['input']>;
    status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not?: InputMaybe<MediaListStatus>;
    notes_like?: InputMaybe<Scalars['String']['input']>;
    startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_like?: InputMaybe<Scalars['String']['input']>;
    completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
};
export type QueryMediaTagCollectionArgs = {
    status?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryUserArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    isModerator?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type QueryNotificationArgs = {
    type?: InputMaybe<NotificationType>;
    resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
    type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};
export type QueryStudioArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};
export type QueryReviewArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    mediaType?: InputMaybe<MediaType>;
    sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};
export type QueryActivityArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    messengerId?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<ActivityType>;
    isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
    hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
    createdAt?: InputMaybe<Scalars['Int']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    userId_not?: InputMaybe<Scalars['Int']['input']>;
    userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    messengerId_not?: InputMaybe<Scalars['Int']['input']>;
    messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    type_not?: InputMaybe<ActivityType>;
    type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
    type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
    createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
    createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
};
export type QueryActivityReplyArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    activityId?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryFollowingArgs = {
    userId: Scalars['Int']['input'];
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type QueryFollowerArgs = {
    userId: Scalars['Int']['input'];
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type QueryThreadArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    replyUserId?: InputMaybe<Scalars['Int']['input']>;
    subscribed?: InputMaybe<Scalars['Boolean']['input']>;
    categoryId?: InputMaybe<Scalars['Int']['input']>;
    mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
};
export type QueryThreadCommentArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    threadId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
};
export type QueryRecommendationArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    rating?: InputMaybe<Scalars['Int']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    rating_greater?: InputMaybe<Scalars['Int']['input']>;
    rating_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
};
export type QueryLikeArgs = {
    likeableId?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<LikeableType>;
};
export type QueryMarkdownArgs = {
    markdown: Scalars['String']['input'];
};
export type QueryExternalLinkSourceCollectionArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<ExternalLinkType>;
    mediaType?: InputMaybe<ExternalLinkMediaType>;
};
export type Continent = {
    code: Scalars['ID']['output'];
    countries: Array<Country>;
    name: Scalars['String']['output'];
};
export type ContinentFilterInput = {
    code?: InputMaybe<StringQueryOperatorInput>;
};
export type Country = {
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
export type CountrynameArgs = {
    lang?: InputMaybe<Scalars['String']['input']>;
};
export type CountryFilterInput = {
    code?: InputMaybe<StringQueryOperatorInput>;
    continent?: InputMaybe<StringQueryOperatorInput>;
    currency?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
};
export type Language = {
    code: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    native: Scalars['String']['output'];
    rtl: Scalars['Boolean']['output'];
};
export type LanguageFilterInput = {
    code?: InputMaybe<StringQueryOperatorInput>;
};
export type State = {
    code?: Maybe<Scalars['String']['output']>;
    country: Country;
    name: Scalars['String']['output'];
};
export type StringQueryOperatorInput = {
    eq?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<Scalars['String']['input']>>;
    ne?: InputMaybe<Scalars['String']['input']>;
    nin?: InputMaybe<Array<Scalars['String']['input']>>;
    regex?: InputMaybe<Scalars['String']['input']>;
};
export type Subdivision = {
    code: Scalars['ID']['output'];
    emoji?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
};
export type Mutation = {
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
    UpdateUser?: Maybe<User>;
    SaveMediaListEntry?: Maybe<MediaList>;
    UpdateMediaListEntries?: Maybe<Array<Maybe<MediaList>>>;
    DeleteMediaListEntry?: Maybe<Deleted>;
    DeleteCustomList?: Maybe<Deleted>;
    SaveTextActivity?: Maybe<TextActivity>;
    SaveMessageActivity?: Maybe<MessageActivity>;
    SaveListActivity?: Maybe<ListActivity>;
    DeleteActivity?: Maybe<Deleted>;
    ToggleActivityPin?: Maybe<ActivityUnion>;
    ToggleActivitySubscription?: Maybe<ActivityUnion>;
    SaveActivityReply?: Maybe<ActivityReply>;
    DeleteActivityReply?: Maybe<Deleted>;
    ToggleLike?: Maybe<Array<Maybe<User>>>;
    ToggleLikeV2?: Maybe<LikeableUnion>;
    ToggleFollow?: Maybe<User>;
    ToggleFavourite?: Maybe<Favourites>;
    UpdateFavouriteOrder?: Maybe<Favourites>;
    SaveReview?: Maybe<Review>;
    DeleteReview?: Maybe<Deleted>;
    RateReview?: Maybe<Review>;
    SaveRecommendation?: Maybe<Recommendation>;
    SaveThread?: Maybe<Thread>;
    DeleteThread?: Maybe<Deleted>;
    ToggleThreadSubscription?: Maybe<Thread>;
    SaveThreadComment?: Maybe<ThreadComment>;
    DeleteThreadComment?: Maybe<Deleted>;
    UpdateAniChartSettings?: Maybe<Scalars['Json']['output']>;
    UpdateAniChartHighlights?: Maybe<Scalars['Json']['output']>;
};
export type MutationuploadFileArgs = {
    petId: Scalars['BigInt']['input'];
};
export type MutationaddPetArgs = {
    input: Pet_Input;
};
export type MutationupdatePetArgs = {
    input: Pet_Input;
};
export type MutationupdatePetWithFormArgs = {
    petId: Scalars['BigInt']['input'];
};
export type MutationdeletePetArgs = {
    api_key?: InputMaybe<Scalars['String']['input']>;
    petId: Scalars['BigInt']['input'];
};
export type MutationplaceOrderArgs = {
    input: Order_Input;
};
export type MutationdeleteOrderArgs = {
    orderId: Scalars['BigInt']['input'];
};
export type MutationcreateUsersWithArrayInputArgs = {
    input: Array<InputMaybe<User_Input>>;
};
export type MutationcreateUsersWithListInputArgs = {
    input: Array<InputMaybe<User_Input>>;
};
export type MutationupdateUserArgs = {
    username: Scalars['String']['input'];
    input: User_Input;
};
export type MutationdeleteUserArgs = {
    username: Scalars['String']['input'];
};
export type MutationcreateUserArgs = {
    input: User_Input;
};
export type MutationUpdateUserArgs = {
    about?: InputMaybe<Scalars['String']['input']>;
    titleLanguage?: InputMaybe<UserTitleLanguage>;
    displayAdultContent?: InputMaybe<Scalars['Boolean']['input']>;
    airingNotifications?: InputMaybe<Scalars['Boolean']['input']>;
    scoreFormat?: InputMaybe<ScoreFormat>;
    rowOrder?: InputMaybe<Scalars['String']['input']>;
    profileColor?: InputMaybe<Scalars['String']['input']>;
    donatorBadge?: InputMaybe<Scalars['String']['input']>;
    notificationOptions?: InputMaybe<Array<InputMaybe<NotificationOptionInput>>>;
    timezone?: InputMaybe<Scalars['String']['input']>;
    activityMergeTime?: InputMaybe<Scalars['Int']['input']>;
    animeListOptions?: InputMaybe<MediaListOptionsInput>;
    mangaListOptions?: InputMaybe<MediaListOptionsInput>;
    staffNameLanguage?: InputMaybe<UserStaffNameLanguage>;
    restrictMessagesToFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    disabledListActivity?: InputMaybe<Array<InputMaybe<ListActivityOptionInput>>>;
};
export type MutationSaveMediaListEntryArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<MediaListStatus>;
    score?: InputMaybe<Scalars['Float']['input']>;
    scoreRaw?: InputMaybe<Scalars['Int']['input']>;
    progress?: InputMaybe<Scalars['Int']['input']>;
    progressVolumes?: InputMaybe<Scalars['Int']['input']>;
    repeat?: InputMaybe<Scalars['Int']['input']>;
    priority?: InputMaybe<Scalars['Int']['input']>;
    private?: InputMaybe<Scalars['Boolean']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
    customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    startedAt?: InputMaybe<FuzzyDateInput>;
    completedAt?: InputMaybe<FuzzyDateInput>;
};
export type MutationUpdateMediaListEntriesArgs = {
    status?: InputMaybe<MediaListStatus>;
    score?: InputMaybe<Scalars['Float']['input']>;
    scoreRaw?: InputMaybe<Scalars['Int']['input']>;
    progress?: InputMaybe<Scalars['Int']['input']>;
    progressVolumes?: InputMaybe<Scalars['Int']['input']>;
    repeat?: InputMaybe<Scalars['Int']['input']>;
    priority?: InputMaybe<Scalars['Int']['input']>;
    private?: InputMaybe<Scalars['Boolean']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
    advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    startedAt?: InputMaybe<FuzzyDateInput>;
    completedAt?: InputMaybe<FuzzyDateInput>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};
export type MutationDeleteMediaListEntryArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationDeleteCustomListArgs = {
    customList?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<MediaType>;
};
export type MutationSaveTextActivityArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    text?: InputMaybe<Scalars['String']['input']>;
    locked?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationSaveMessageActivityArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    message?: InputMaybe<Scalars['String']['input']>;
    recipientId?: InputMaybe<Scalars['Int']['input']>;
    private?: InputMaybe<Scalars['Boolean']['input']>;
    locked?: InputMaybe<Scalars['Boolean']['input']>;
    asMod?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationSaveListActivityArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    locked?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationDeleteActivityArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationToggleActivityPinArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    pinned?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationToggleActivitySubscriptionArgs = {
    activityId?: InputMaybe<Scalars['Int']['input']>;
    subscribe?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationSaveActivityReplyArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    activityId?: InputMaybe<Scalars['Int']['input']>;
    text?: InputMaybe<Scalars['String']['input']>;
    asMod?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationDeleteActivityReplyArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationToggleLikeArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<LikeableType>;
};
export type MutationToggleLikeV2Args = {
    id?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<LikeableType>;
};
export type MutationToggleFollowArgs = {
    userId?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationToggleFavouriteArgs = {
    animeId?: InputMaybe<Scalars['Int']['input']>;
    mangaId?: InputMaybe<Scalars['Int']['input']>;
    characterId?: InputMaybe<Scalars['Int']['input']>;
    staffId?: InputMaybe<Scalars['Int']['input']>;
    studioId?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationUpdateFavouriteOrderArgs = {
    animeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mangaIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    characterIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    staffIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    studioIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    animeOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mangaOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    characterOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    staffOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    studioOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};
export type MutationSaveReviewArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    body?: InputMaybe<Scalars['String']['input']>;
    summary?: InputMaybe<Scalars['String']['input']>;
    score?: InputMaybe<Scalars['Int']['input']>;
    private?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationDeleteReviewArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationRateReviewArgs = {
    reviewId?: InputMaybe<Scalars['Int']['input']>;
    rating?: InputMaybe<ReviewRating>;
};
export type MutationSaveRecommendationArgs = {
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
    rating?: InputMaybe<RecommendationRating>;
};
export type MutationSaveThreadArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    body?: InputMaybe<Scalars['String']['input']>;
    categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaCategories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sticky?: InputMaybe<Scalars['Boolean']['input']>;
    locked?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationDeleteThreadArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationToggleThreadSubscriptionArgs = {
    threadId?: InputMaybe<Scalars['Int']['input']>;
    subscribe?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationSaveThreadCommentArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    threadId?: InputMaybe<Scalars['Int']['input']>;
    parentCommentId?: InputMaybe<Scalars['Int']['input']>;
    comment?: InputMaybe<Scalars['String']['input']>;
    locked?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationDeleteThreadCommentArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationUpdateAniChartSettingsArgs = {
    titleLanguage?: InputMaybe<Scalars['String']['input']>;
    outgoingLinkProvider?: InputMaybe<Scalars['String']['input']>;
    theme?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
};
export type MutationUpdateAniChartHighlightsArgs = {
    highlights?: InputMaybe<Array<InputMaybe<AniChartHighlightInput>>>;
};
export type Pet = {
    id?: Maybe<Scalars['BigInt']['output']>;
    category?: Maybe<Category>;
    name: Scalars['String']['output'];
    photoUrls: Array<Maybe<Scalars['String']['output']>>;
    tags?: Maybe<Array<Maybe<Tag>>>;
    status?: Maybe<mutationInput_addPet_input_status>;
};
export type Category = {
    id?: Maybe<Scalars['BigInt']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type Tag = {
    id?: Maybe<Scalars['BigInt']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type mutationInput_addPet_input_status = 'available' | 'pending' | 'sold';
export type queryInput_findPetsByStatus_status_items = 'available' | 'pending' | 'sold';
export type Order = {
    id?: Maybe<Scalars['BigInt']['output']>;
    petId?: Maybe<Scalars['BigInt']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    shipDate?: Maybe<Scalars['DateTime']['output']>;
    status?: Maybe<mutation_placeOrder_status>;
    complete?: Maybe<Scalars['Boolean']['output']>;
};
export type mutation_placeOrder_status = 'placed' | 'approved' | 'delivered';
export type User = {
    id: Scalars['Int']['output'];
    username?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    password?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    userStatus?: Maybe<Scalars['Int']['output']>;
    name: Scalars['String']['output'];
    about?: Maybe<Scalars['String']['output']>;
    avatar?: Maybe<UserAvatar>;
    bannerImage?: Maybe<Scalars['String']['output']>;
    isFollowing?: Maybe<Scalars['Boolean']['output']>;
    isFollower?: Maybe<Scalars['Boolean']['output']>;
    isBlocked?: Maybe<Scalars['Boolean']['output']>;
    bans?: Maybe<Scalars['Json']['output']>;
    options?: Maybe<UserOptions>;
    mediaListOptions?: Maybe<MediaListOptions>;
    favourites?: Maybe<Favourites>;
    statistics?: Maybe<UserStatisticTypes>;
    unreadNotificationCount?: Maybe<Scalars['Int']['output']>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    donatorTier?: Maybe<Scalars['Int']['output']>;
    donatorBadge?: Maybe<Scalars['String']['output']>;
    moderatorRoles?: Maybe<Array<Maybe<ModRole>>>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    stats?: Maybe<UserStats>;
    moderatorStatus?: Maybe<Scalars['String']['output']>;
    previousNames?: Maybe<Array<Maybe<UserPreviousName>>>;
};
export type UseraboutArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type UserfavouritesArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type ApiResponse = {
    code?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
};
export type Pet_Input = {
    id?: InputMaybe<Scalars['BigInt']['input']>;
    category?: InputMaybe<Category_Input>;
    name: Scalars['String']['input'];
    photoUrls: Array<InputMaybe<Scalars['String']['input']>>;
    tags?: InputMaybe<Array<InputMaybe<Tag_Input>>>;
    status?: InputMaybe<mutationInput_addPet_input_status>;
};
export type Category_Input = {
    id?: InputMaybe<Scalars['BigInt']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};
export type Tag_Input = {
    id?: InputMaybe<Scalars['BigInt']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};
export type Order_Input = {
    id?: InputMaybe<Scalars['BigInt']['input']>;
    petId?: InputMaybe<Scalars['BigInt']['input']>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
    shipDate?: InputMaybe<Scalars['DateTime']['input']>;
    status?: InputMaybe<mutation_placeOrder_status>;
    complete?: InputMaybe<Scalars['Boolean']['input']>;
};
export type User_Input = {
    id?: InputMaybe<Scalars['BigInt']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
    userStatus?: InputMaybe<Scalars['Int']['input']>;
};
export type HTTPMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export type Page = {
    pageInfo?: Maybe<PageInfo>;
    users?: Maybe<Array<Maybe<User>>>;
    media?: Maybe<Array<Maybe<Media>>>;
    characters?: Maybe<Array<Maybe<Character>>>;
    staff?: Maybe<Array<Maybe<Staff>>>;
    studios?: Maybe<Array<Maybe<Studio>>>;
    mediaList?: Maybe<Array<Maybe<MediaList>>>;
    airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
    mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
    notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
    followers?: Maybe<Array<Maybe<User>>>;
    following?: Maybe<Array<Maybe<User>>>;
    activities?: Maybe<Array<Maybe<ActivityUnion>>>;
    activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
    threads?: Maybe<Array<Maybe<Thread>>>;
    threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
    reviews?: Maybe<Array<Maybe<Review>>>;
    recommendations?: Maybe<Array<Maybe<Recommendation>>>;
    likes?: Maybe<Array<Maybe<User>>>;
};
export type PageusersArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    isModerator?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type PagemediaArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    idMal?: InputMaybe<Scalars['Int']['input']>;
    startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    season?: InputMaybe<MediaSeason>;
    seasonYear?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<MediaType>;
    format?: InputMaybe<MediaFormat>;
    status?: InputMaybe<MediaStatus>;
    episodes?: InputMaybe<Scalars['Int']['input']>;
    duration?: InputMaybe<Scalars['Int']['input']>;
    chapters?: InputMaybe<Scalars['Int']['input']>;
    volumes?: InputMaybe<Scalars['Int']['input']>;
    isAdult?: InputMaybe<Scalars['Boolean']['input']>;
    genre?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Scalars['String']['input']>;
    minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
    tagCategory?: InputMaybe<Scalars['String']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    licensedBy?: InputMaybe<Scalars['String']['input']>;
    licensedById?: InputMaybe<Scalars['Int']['input']>;
    averageScore?: InputMaybe<Scalars['Int']['input']>;
    popularity?: InputMaybe<Scalars['Int']['input']>;
    source?: InputMaybe<MediaSource>;
    countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
    isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    idMal_not?: InputMaybe<Scalars['Int']['input']>;
    idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startDate_like?: InputMaybe<Scalars['String']['input']>;
    endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate_like?: InputMaybe<Scalars['String']['input']>;
    format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
    format_not?: InputMaybe<MediaFormat>;
    format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
    status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
    status_not?: InputMaybe<MediaStatus>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
    episodes_greater?: InputMaybe<Scalars['Int']['input']>;
    episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
    duration_greater?: InputMaybe<Scalars['Int']['input']>;
    duration_lesser?: InputMaybe<Scalars['Int']['input']>;
    chapters_greater?: InputMaybe<Scalars['Int']['input']>;
    chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
    volumes_greater?: InputMaybe<Scalars['Int']['input']>;
    volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
    genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    averageScore_not?: InputMaybe<Scalars['Int']['input']>;
    averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
    averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
    popularity_not?: InputMaybe<Scalars['Int']['input']>;
    popularity_greater?: InputMaybe<Scalars['Int']['input']>;
    popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
    source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};
export type PagecharactersArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};
export type PagestaffArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type PagestudiosArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};
export type PagemediaListArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    userName?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<MediaType>;
    status?: InputMaybe<MediaListStatus>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
    userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not?: InputMaybe<MediaListStatus>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    notes_like?: InputMaybe<Scalars['String']['input']>;
    startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_like?: InputMaybe<Scalars['String']['input']>;
    completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
};
export type PageairingSchedulesArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    airingAt?: InputMaybe<Scalars['Int']['input']>;
    notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_not?: InputMaybe<Scalars['Int']['input']>;
    episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_greater?: InputMaybe<Scalars['Int']['input']>;
    episode_lesser?: InputMaybe<Scalars['Int']['input']>;
    airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
    airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};
export type PagemediaTrendsArgs = {
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    date?: InputMaybe<Scalars['Int']['input']>;
    trending?: InputMaybe<Scalars['Int']['input']>;
    averageScore?: InputMaybe<Scalars['Int']['input']>;
    popularity?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    releasing?: InputMaybe<Scalars['Boolean']['input']>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    date_greater?: InputMaybe<Scalars['Int']['input']>;
    date_lesser?: InputMaybe<Scalars['Int']['input']>;
    trending_greater?: InputMaybe<Scalars['Int']['input']>;
    trending_lesser?: InputMaybe<Scalars['Int']['input']>;
    trending_not?: InputMaybe<Scalars['Int']['input']>;
    averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
    averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
    averageScore_not?: InputMaybe<Scalars['Int']['input']>;
    popularity_greater?: InputMaybe<Scalars['Int']['input']>;
    popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
    popularity_not?: InputMaybe<Scalars['Int']['input']>;
    episode_greater?: InputMaybe<Scalars['Int']['input']>;
    episode_lesser?: InputMaybe<Scalars['Int']['input']>;
    episode_not?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
};
export type PagenotificationsArgs = {
    type?: InputMaybe<NotificationType>;
    resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
    type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};
export type PagefollowersArgs = {
    userId: Scalars['Int']['input'];
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type PagefollowingArgs = {
    userId: Scalars['Int']['input'];
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type PageactivitiesArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    messengerId?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<ActivityType>;
    isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
    hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
    createdAt?: InputMaybe<Scalars['Int']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    userId_not?: InputMaybe<Scalars['Int']['input']>;
    userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    messengerId_not?: InputMaybe<Scalars['Int']['input']>;
    messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    type_not?: InputMaybe<ActivityType>;
    type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
    type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
    createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
    createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
};
export type PageactivityRepliesArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    activityId?: InputMaybe<Scalars['Int']['input']>;
};
export type PagethreadsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    replyUserId?: InputMaybe<Scalars['Int']['input']>;
    subscribed?: InputMaybe<Scalars['Boolean']['input']>;
    categoryId?: InputMaybe<Scalars['Int']['input']>;
    mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
};
export type PagethreadCommentsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    threadId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
};
export type PagereviewsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    mediaType?: InputMaybe<MediaType>;
    sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};
export type PagerecommendationsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    rating?: InputMaybe<Scalars['Int']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    rating_greater?: InputMaybe<Scalars['Int']['input']>;
    rating_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
};
export type PagelikesArgs = {
    likeableId?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<LikeableType>;
};
export type PageInfo = {
    total?: Maybe<Scalars['Int']['output']>;
    perPage?: Maybe<Scalars['Int']['output']>;
    currentPage?: Maybe<Scalars['Int']['output']>;
    lastPage?: Maybe<Scalars['Int']['output']>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type UserSort = 'ID' | 'ID_DESC' | 'USERNAME' | 'USERNAME_DESC' | 'WATCHED_TIME' | 'WATCHED_TIME_DESC' | 'CHAPTERS_READ' | 'CHAPTERS_READ_DESC' | 'SEARCH_MATCH';
export type UserAvatar = {
    large?: Maybe<Scalars['String']['output']>;
    medium?: Maybe<Scalars['String']['output']>;
};
export type UserOptions = {
    titleLanguage?: Maybe<UserTitleLanguage>;
    displayAdultContent?: Maybe<Scalars['Boolean']['output']>;
    airingNotifications?: Maybe<Scalars['Boolean']['output']>;
    profileColor?: Maybe<Scalars['String']['output']>;
    notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>;
    timezone?: Maybe<Scalars['String']['output']>;
    activityMergeTime?: Maybe<Scalars['Int']['output']>;
    staffNameLanguage?: Maybe<UserStaffNameLanguage>;
    restrictMessagesToFollowing?: Maybe<Scalars['Boolean']['output']>;
    disabledListActivity?: Maybe<Array<Maybe<ListActivityOption>>>;
};
export type UserTitleLanguage = 'ROMAJI' | 'ENGLISH' | 'NATIVE' | 'ROMAJI_STYLISED' | 'ENGLISH_STYLISED' | 'NATIVE_STYLISED';
export type NotificationOption = {
    type?: Maybe<NotificationType>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type NotificationType = 'ACTIVITY_MESSAGE' | 'ACTIVITY_REPLY' | 'FOLLOWING' | 'ACTIVITY_MENTION' | 'THREAD_COMMENT_MENTION' | 'THREAD_SUBSCRIBED' | 'THREAD_COMMENT_REPLY' | 'AIRING' | 'ACTIVITY_LIKE' | 'ACTIVITY_REPLY_LIKE' | 'THREAD_LIKE' | 'THREAD_COMMENT_LIKE' | 'ACTIVITY_REPLY_SUBSCRIBED' | 'RELATED_MEDIA_ADDITION' | 'MEDIA_DATA_CHANGE' | 'MEDIA_MERGE' | 'MEDIA_DELETION';
export type UserStaffNameLanguage = 'ROMAJI_WESTERN' | 'ROMAJI' | 'NATIVE';
export type ListActivityOption = {
    disabled?: Maybe<Scalars['Boolean']['output']>;
    type?: Maybe<MediaListStatus>;
};
export type MediaListStatus = 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED' | 'REPEATING';
export type MediaListOptions = {
    scoreFormat?: Maybe<ScoreFormat>;
    rowOrder?: Maybe<Scalars['String']['output']>;
    useLegacyLists?: Maybe<Scalars['Boolean']['output']>;
    animeList?: Maybe<MediaListTypeOptions>;
    mangaList?: Maybe<MediaListTypeOptions>;
    sharedTheme?: Maybe<Scalars['Json']['output']>;
    sharedThemeEnabled?: Maybe<Scalars['Boolean']['output']>;
};
export type ScoreFormat = 'POINT_100' | 'POINT_10_DECIMAL' | 'POINT_10' | 'POINT_5' | 'POINT_3';
export type MediaListTypeOptions = {
    sectionOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']['output']>;
    theme?: Maybe<Scalars['Json']['output']>;
    customLists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    advancedScoring?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    advancedScoringEnabled?: Maybe<Scalars['Boolean']['output']>;
};
export type Favourites = {
    anime?: Maybe<MediaConnection>;
    manga?: Maybe<MediaConnection>;
    characters?: Maybe<CharacterConnection>;
    staff?: Maybe<StaffConnection>;
    studios?: Maybe<StudioConnection>;
};
export type FavouritesanimeArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type FavouritesmangaArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type FavouritescharactersArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type FavouritesstaffArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type FavouritesstudiosArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediaConnection = {
    edges?: Maybe<Array<Maybe<MediaEdge>>>;
    nodes?: Maybe<Array<Maybe<Media>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type MediaEdge = {
    node?: Maybe<Media>;
    id?: Maybe<Scalars['Int']['output']>;
    relationType?: Maybe<MediaRelation>;
    isMainStudio: Scalars['Boolean']['output'];
    characters?: Maybe<Array<Maybe<Character>>>;
    characterRole?: Maybe<CharacterRole>;
    characterName?: Maybe<Scalars['String']['output']>;
    roleNotes?: Maybe<Scalars['String']['output']>;
    dubGroup?: Maybe<Scalars['String']['output']>;
    staffRole?: Maybe<Scalars['String']['output']>;
    voiceActors?: Maybe<Array<Maybe<Staff>>>;
    voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
    favouriteOrder?: Maybe<Scalars['Int']['output']>;
};
export type MediaEdgerelationTypeArgs = {
    version?: InputMaybe<Scalars['Int']['input']>;
};
export type MediaEdgevoiceActorsArgs = {
    language?: InputMaybe<StaffLanguage>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type MediaEdgevoiceActorRolesArgs = {
    language?: InputMaybe<StaffLanguage>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type Media = {
    id: Scalars['Int']['output'];
    idMal?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<MediaTitle>;
    type?: Maybe<MediaType>;
    format?: Maybe<MediaFormat>;
    status?: Maybe<MediaStatus>;
    description?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<FuzzyDate>;
    endDate?: Maybe<FuzzyDate>;
    season?: Maybe<MediaSeason>;
    seasonYear?: Maybe<Scalars['Int']['output']>;
    seasonInt?: Maybe<Scalars['Int']['output']>;
    episodes?: Maybe<Scalars['Int']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    chapters?: Maybe<Scalars['Int']['output']>;
    volumes?: Maybe<Scalars['Int']['output']>;
    countryOfOrigin?: Maybe<Scalars['CountryCode']['output']>;
    isLicensed?: Maybe<Scalars['Boolean']['output']>;
    source?: Maybe<MediaSource>;
    hashtag?: Maybe<Scalars['String']['output']>;
    trailer?: Maybe<MediaTrailer>;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    coverImage?: Maybe<MediaCoverImage>;
    bannerImage?: Maybe<Scalars['String']['output']>;
    genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    averageScore?: Maybe<Scalars['Int']['output']>;
    meanScore?: Maybe<Scalars['Int']['output']>;
    popularity?: Maybe<Scalars['Int']['output']>;
    isLocked?: Maybe<Scalars['Boolean']['output']>;
    trending?: Maybe<Scalars['Int']['output']>;
    favourites?: Maybe<Scalars['Int']['output']>;
    tags?: Maybe<Array<Maybe<MediaTag>>>;
    relations?: Maybe<MediaConnection>;
    characters?: Maybe<CharacterConnection>;
    staff?: Maybe<StaffConnection>;
    studios?: Maybe<StudioConnection>;
    isFavourite: Scalars['Boolean']['output'];
    isFavouriteBlocked: Scalars['Boolean']['output'];
    isAdult?: Maybe<Scalars['Boolean']['output']>;
    nextAiringEpisode?: Maybe<AiringSchedule>;
    airingSchedule?: Maybe<AiringScheduleConnection>;
    trends?: Maybe<MediaTrendConnection>;
    externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>;
    streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>;
    rankings?: Maybe<Array<Maybe<MediaRank>>>;
    mediaListEntry?: Maybe<MediaList>;
    reviews?: Maybe<ReviewConnection>;
    recommendations?: Maybe<RecommendationConnection>;
    stats?: Maybe<MediaStats>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    autoCreateForumThread?: Maybe<Scalars['Boolean']['output']>;
    isRecommendationBlocked?: Maybe<Scalars['Boolean']['output']>;
    isReviewBlocked?: Maybe<Scalars['Boolean']['output']>;
    modNotes?: Maybe<Scalars['String']['output']>;
};
export type MediastatusArgs = {
    version?: InputMaybe<Scalars['Int']['input']>;
};
export type MediadescriptionArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediasourceArgs = {
    version?: InputMaybe<Scalars['Int']['input']>;
};
export type MediacharactersArgs = {
    sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
    role?: InputMaybe<CharacterRole>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediastaffArgs = {
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediastudiosArgs = {
    sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
    isMain?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaairingScheduleArgs = {
    notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediatrendsArgs = {
    sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
    releasing?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediareviewsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediarecommendationsArgs = {
    sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type MediaTitle = {
    romaji?: Maybe<Scalars['String']['output']>;
    english?: Maybe<Scalars['String']['output']>;
    native?: Maybe<Scalars['String']['output']>;
    userPreferred?: Maybe<Scalars['String']['output']>;
};
export type MediaTitleromajiArgs = {
    stylised?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaTitleenglishArgs = {
    stylised?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaTitlenativeArgs = {
    stylised?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaType = 'ANIME' | 'MANGA';
export type MediaFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT';
export type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';
export type FuzzyDate = {
    year?: Maybe<Scalars['Int']['output']>;
    month?: Maybe<Scalars['Int']['output']>;
    day?: Maybe<Scalars['Int']['output']>;
};
export type MediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
export type MediaSource = 'ORIGINAL' | 'MANGA' | 'LIGHT_NOVEL' | 'VISUAL_NOVEL' | 'VIDEO_GAME' | 'OTHER' | 'NOVEL' | 'DOUJINSHI' | 'ANIME' | 'WEB_NOVEL' | 'LIVE_ACTION' | 'GAME' | 'COMIC' | 'MULTIMEDIA_PROJECT' | 'PICTURE_BOOK';
export type MediaTrailer = {
    id?: Maybe<Scalars['String']['output']>;
    site?: Maybe<Scalars['String']['output']>;
    thumbnail?: Maybe<Scalars['String']['output']>;
};
export type MediaCoverImage = {
    extraLarge?: Maybe<Scalars['String']['output']>;
    large?: Maybe<Scalars['String']['output']>;
    medium?: Maybe<Scalars['String']['output']>;
    color?: Maybe<Scalars['String']['output']>;
};
export type MediaTag = {
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    category?: Maybe<Scalars['String']['output']>;
    rank?: Maybe<Scalars['Int']['output']>;
    isGeneralSpoiler?: Maybe<Scalars['Boolean']['output']>;
    isMediaSpoiler?: Maybe<Scalars['Boolean']['output']>;
    isAdult?: Maybe<Scalars['Boolean']['output']>;
    userId?: Maybe<Scalars['Int']['output']>;
};
export type CharacterSort = 'ID' | 'ID_DESC' | 'ROLE' | 'ROLE_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC' | 'RELEVANCE';
export type CharacterRole = 'MAIN' | 'SUPPORTING' | 'BACKGROUND';
export type CharacterConnection = {
    edges?: Maybe<Array<Maybe<CharacterEdge>>>;
    nodes?: Maybe<Array<Maybe<Character>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type CharacterEdge = {
    node?: Maybe<Character>;
    id?: Maybe<Scalars['Int']['output']>;
    role?: Maybe<CharacterRole>;
    name?: Maybe<Scalars['String']['output']>;
    voiceActors?: Maybe<Array<Maybe<Staff>>>;
    voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
    media?: Maybe<Array<Maybe<Media>>>;
    favouriteOrder?: Maybe<Scalars['Int']['output']>;
};
export type CharacterEdgevoiceActorsArgs = {
    language?: InputMaybe<StaffLanguage>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type CharacterEdgevoiceActorRolesArgs = {
    language?: InputMaybe<StaffLanguage>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type Character = {
    id: Scalars['Int']['output'];
    name?: Maybe<CharacterName>;
    image?: Maybe<CharacterImage>;
    description?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    dateOfBirth?: Maybe<FuzzyDate>;
    age?: Maybe<Scalars['String']['output']>;
    bloodType?: Maybe<Scalars['String']['output']>;
    isFavourite: Scalars['Boolean']['output'];
    isFavouriteBlocked: Scalars['Boolean']['output'];
    siteUrl?: Maybe<Scalars['String']['output']>;
    media?: Maybe<MediaConnection>;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    favourites?: Maybe<Scalars['Int']['output']>;
    modNotes?: Maybe<Scalars['String']['output']>;
};
export type CharacterdescriptionArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type CharactermediaArgs = {
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
    type?: InputMaybe<MediaType>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type CharacterName = {
    first?: Maybe<Scalars['String']['output']>;
    middle?: Maybe<Scalars['String']['output']>;
    last?: Maybe<Scalars['String']['output']>;
    full?: Maybe<Scalars['String']['output']>;
    native?: Maybe<Scalars['String']['output']>;
    alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    alternativeSpoiler?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    userPreferred?: Maybe<Scalars['String']['output']>;
};
export type CharacterImage = {
    large?: Maybe<Scalars['String']['output']>;
    medium?: Maybe<Scalars['String']['output']>;
};
export type MediaSort = 'ID' | 'ID_DESC' | 'TITLE_ROMAJI' | 'TITLE_ROMAJI_DESC' | 'TITLE_ENGLISH' | 'TITLE_ENGLISH_DESC' | 'TITLE_NATIVE' | 'TITLE_NATIVE_DESC' | 'TYPE' | 'TYPE_DESC' | 'FORMAT' | 'FORMAT_DESC' | 'START_DATE' | 'START_DATE_DESC' | 'END_DATE' | 'END_DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODES' | 'EPISODES_DESC' | 'DURATION' | 'DURATION_DESC' | 'STATUS' | 'STATUS_DESC' | 'CHAPTERS' | 'CHAPTERS_DESC' | 'VOLUMES' | 'VOLUMES_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC';
export type StaffLanguage = 'JAPANESE' | 'ENGLISH' | 'KOREAN' | 'ITALIAN' | 'SPANISH' | 'PORTUGUESE' | 'FRENCH' | 'GERMAN' | 'HEBREW' | 'HUNGARIAN';
export type StaffSort = 'ID' | 'ID_DESC' | 'ROLE' | 'ROLE_DESC' | 'LANGUAGE' | 'LANGUAGE_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC' | 'RELEVANCE';
export type Staff = {
    id: Scalars['Int']['output'];
    name?: Maybe<StaffName>;
    language?: Maybe<StaffLanguage>;
    languageV2?: Maybe<Scalars['String']['output']>;
    image?: Maybe<StaffImage>;
    description?: Maybe<Scalars['String']['output']>;
    primaryOccupations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    gender?: Maybe<Scalars['String']['output']>;
    dateOfBirth?: Maybe<FuzzyDate>;
    dateOfDeath?: Maybe<FuzzyDate>;
    age?: Maybe<Scalars['Int']['output']>;
    yearsActive?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
    homeTown?: Maybe<Scalars['String']['output']>;
    bloodType?: Maybe<Scalars['String']['output']>;
    isFavourite: Scalars['Boolean']['output'];
    isFavouriteBlocked: Scalars['Boolean']['output'];
    siteUrl?: Maybe<Scalars['String']['output']>;
    staffMedia?: Maybe<MediaConnection>;
    characters?: Maybe<CharacterConnection>;
    characterMedia?: Maybe<MediaConnection>;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    staff?: Maybe<Staff>;
    submitter?: Maybe<User>;
    submissionStatus?: Maybe<Scalars['Int']['output']>;
    submissionNotes?: Maybe<Scalars['String']['output']>;
    favourites?: Maybe<Scalars['Int']['output']>;
    modNotes?: Maybe<Scalars['String']['output']>;
};
export type StaffdescriptionArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type StaffstaffMediaArgs = {
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
    type?: InputMaybe<MediaType>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type StaffcharactersArgs = {
    sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type StaffcharacterMediaArgs = {
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type StaffName = {
    first?: Maybe<Scalars['String']['output']>;
    middle?: Maybe<Scalars['String']['output']>;
    last?: Maybe<Scalars['String']['output']>;
    full?: Maybe<Scalars['String']['output']>;
    native?: Maybe<Scalars['String']['output']>;
    alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    userPreferred?: Maybe<Scalars['String']['output']>;
};
export type StaffImage = {
    large?: Maybe<Scalars['String']['output']>;
    medium?: Maybe<Scalars['String']['output']>;
};
export type StaffRoleType = {
    voiceActor?: Maybe<Staff>;
    roleNotes?: Maybe<Scalars['String']['output']>;
    dubGroup?: Maybe<Scalars['String']['output']>;
};
export type StaffConnection = {
    edges?: Maybe<Array<Maybe<StaffEdge>>>;
    nodes?: Maybe<Array<Maybe<Staff>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type StaffEdge = {
    node?: Maybe<Staff>;
    id?: Maybe<Scalars['Int']['output']>;
    role?: Maybe<Scalars['String']['output']>;
    favouriteOrder?: Maybe<Scalars['Int']['output']>;
};
export type StudioSort = 'ID' | 'ID_DESC' | 'NAME' | 'NAME_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC';
export type StudioConnection = {
    edges?: Maybe<Array<Maybe<StudioEdge>>>;
    nodes?: Maybe<Array<Maybe<Studio>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type StudioEdge = {
    node?: Maybe<Studio>;
    id?: Maybe<Scalars['Int']['output']>;
    isMain: Scalars['Boolean']['output'];
    favouriteOrder?: Maybe<Scalars['Int']['output']>;
};
export type Studio = {
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    isAnimationStudio: Scalars['Boolean']['output'];
    media?: Maybe<MediaConnection>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    isFavourite: Scalars['Boolean']['output'];
    favourites?: Maybe<Scalars['Int']['output']>;
};
export type StudiomediaArgs = {
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
    isMain?: InputMaybe<Scalars['Boolean']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type AiringSchedule = {
    id: Scalars['Int']['output'];
    airingAt: Scalars['Int']['output'];
    timeUntilAiring: Scalars['Int']['output'];
    episode: Scalars['Int']['output'];
    mediaId: Scalars['Int']['output'];
    media?: Maybe<Media>;
};
export type AiringScheduleConnection = {
    edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>;
    nodes?: Maybe<Array<Maybe<AiringSchedule>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type AiringScheduleEdge = {
    node?: Maybe<AiringSchedule>;
    id?: Maybe<Scalars['Int']['output']>;
};
export type MediaTrendSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'DATE' | 'DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODE' | 'EPISODE_DESC';
export type MediaTrendConnection = {
    edges?: Maybe<Array<Maybe<MediaTrendEdge>>>;
    nodes?: Maybe<Array<Maybe<MediaTrend>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type MediaTrendEdge = {
    node?: Maybe<MediaTrend>;
};
export type MediaTrend = {
    mediaId: Scalars['Int']['output'];
    date: Scalars['Int']['output'];
    trending: Scalars['Int']['output'];
    averageScore?: Maybe<Scalars['Int']['output']>;
    popularity?: Maybe<Scalars['Int']['output']>;
    inProgress?: Maybe<Scalars['Int']['output']>;
    releasing: Scalars['Boolean']['output'];
    episode?: Maybe<Scalars['Int']['output']>;
    media?: Maybe<Media>;
};
export type MediaExternalLink = {
    id: Scalars['Int']['output'];
    url?: Maybe<Scalars['String']['output']>;
    site: Scalars['String']['output'];
    siteId?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<ExternalLinkType>;
    language?: Maybe<Scalars['String']['output']>;
    color?: Maybe<Scalars['String']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    notes?: Maybe<Scalars['String']['output']>;
    isDisabled?: Maybe<Scalars['Boolean']['output']>;
};
export type ExternalLinkType = 'INFO' | 'STREAMING' | 'SOCIAL';
export type MediaStreamingEpisode = {
    title?: Maybe<Scalars['String']['output']>;
    thumbnail?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    site?: Maybe<Scalars['String']['output']>;
};
export type MediaRank = {
    id: Scalars['Int']['output'];
    rank: Scalars['Int']['output'];
    type: MediaRankType;
    format: MediaFormat;
    year?: Maybe<Scalars['Int']['output']>;
    season?: Maybe<MediaSeason>;
    allTime?: Maybe<Scalars['Boolean']['output']>;
    context: Scalars['String']['output'];
};
export type MediaRankType = 'RATED' | 'POPULAR';
export type MediaList = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    mediaId: Scalars['Int']['output'];
    status?: Maybe<MediaListStatus>;
    score?: Maybe<Scalars['Float']['output']>;
    progress?: Maybe<Scalars['Int']['output']>;
    progressVolumes?: Maybe<Scalars['Int']['output']>;
    repeat?: Maybe<Scalars['Int']['output']>;
    priority?: Maybe<Scalars['Int']['output']>;
    private?: Maybe<Scalars['Boolean']['output']>;
    notes?: Maybe<Scalars['String']['output']>;
    hiddenFromStatusLists?: Maybe<Scalars['Boolean']['output']>;
    customLists?: Maybe<Scalars['Json']['output']>;
    advancedScores?: Maybe<Scalars['Json']['output']>;
    startedAt?: Maybe<FuzzyDate>;
    completedAt?: Maybe<FuzzyDate>;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    media?: Maybe<Media>;
    user?: Maybe<User>;
};
export type MediaListscoreArgs = {
    format?: InputMaybe<ScoreFormat>;
};
export type MediaListcustomListsArgs = {
    asArray?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ReviewSort = 'ID' | 'ID_DESC' | 'SCORE' | 'SCORE_DESC' | 'RATING' | 'RATING_DESC' | 'CREATED_AT' | 'CREATED_AT_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC';
export type ReviewConnection = {
    edges?: Maybe<Array<Maybe<ReviewEdge>>>;
    nodes?: Maybe<Array<Maybe<Review>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type ReviewEdge = {
    node?: Maybe<Review>;
};
export type Review = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    mediaId: Scalars['Int']['output'];
    mediaType?: Maybe<MediaType>;
    summary?: Maybe<Scalars['String']['output']>;
    body?: Maybe<Scalars['String']['output']>;
    rating?: Maybe<Scalars['Int']['output']>;
    ratingAmount?: Maybe<Scalars['Int']['output']>;
    userRating?: Maybe<ReviewRating>;
    score?: Maybe<Scalars['Int']['output']>;
    private?: Maybe<Scalars['Boolean']['output']>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['Int']['output'];
    updatedAt: Scalars['Int']['output'];
    user?: Maybe<User>;
    media?: Maybe<Media>;
};
export type ReviewbodyArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ReviewRating = 'NO_VOTE' | 'UP_VOTE' | 'DOWN_VOTE';
export type RecommendationSort = 'ID' | 'ID_DESC' | 'RATING' | 'RATING_DESC';
export type RecommendationConnection = {
    edges?: Maybe<Array<Maybe<RecommendationEdge>>>;
    nodes?: Maybe<Array<Maybe<Recommendation>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type RecommendationEdge = {
    node?: Maybe<Recommendation>;
};
export type Recommendation = {
    id: Scalars['Int']['output'];
    rating?: Maybe<Scalars['Int']['output']>;
    userRating?: Maybe<RecommendationRating>;
    media?: Maybe<Media>;
    mediaRecommendation?: Maybe<Media>;
    user?: Maybe<User>;
};
export type RecommendationRating = 'NO_RATING' | 'RATE_UP' | 'RATE_DOWN';
export type MediaStats = {
    scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
    statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
    airingProgression?: Maybe<Array<Maybe<AiringProgression>>>;
};
export type ScoreDistribution = {
    score?: Maybe<Scalars['Int']['output']>;
    amount?: Maybe<Scalars['Int']['output']>;
};
export type StatusDistribution = {
    status?: Maybe<MediaListStatus>;
    amount?: Maybe<Scalars['Int']['output']>;
};
export type AiringProgression = {
    episode?: Maybe<Scalars['Float']['output']>;
    score?: Maybe<Scalars['Float']['output']>;
    watching?: Maybe<Scalars['Int']['output']>;
};
export type MediaRelation = 'ADAPTATION' | 'PREQUEL' | 'SEQUEL' | 'PARENT' | 'SIDE_STORY' | 'CHARACTER' | 'SUMMARY' | 'ALTERNATIVE' | 'SPIN_OFF' | 'OTHER' | 'SOURCE' | 'COMPILATION' | 'CONTAINS';
export type UserStatisticTypes = {
    anime?: Maybe<UserStatistics>;
    manga?: Maybe<UserStatistics>;
};
export type UserStatistics = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    standardDeviation: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    episodesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    volumesRead: Scalars['Int']['output'];
    formats?: Maybe<Array<Maybe<UserFormatStatistic>>>;
    statuses?: Maybe<Array<Maybe<UserStatusStatistic>>>;
    scores?: Maybe<Array<Maybe<UserScoreStatistic>>>;
    lengths?: Maybe<Array<Maybe<UserLengthStatistic>>>;
    releaseYears?: Maybe<Array<Maybe<UserReleaseYearStatistic>>>;
    startYears?: Maybe<Array<Maybe<UserStartYearStatistic>>>;
    genres?: Maybe<Array<Maybe<UserGenreStatistic>>>;
    tags?: Maybe<Array<Maybe<UserTagStatistic>>>;
    countries?: Maybe<Array<Maybe<UserCountryStatistic>>>;
    voiceActors?: Maybe<Array<Maybe<UserVoiceActorStatistic>>>;
    staff?: Maybe<Array<Maybe<UserStaffStatistic>>>;
    studios?: Maybe<Array<Maybe<UserStudioStatistic>>>;
};
export type UserStatisticsformatsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsstatusesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsscoresArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticslengthsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsreleaseYearsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsstartYearsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsgenresArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticstagsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticscountriesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsvoiceActorsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsstaffArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsstudiosArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};
export type UserStatisticsSort = 'ID' | 'ID_DESC' | 'COUNT' | 'COUNT_DESC' | 'PROGRESS' | 'PROGRESS_DESC' | 'MEAN_SCORE' | 'MEAN_SCORE_DESC';
export type UserFormatStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    format?: Maybe<MediaFormat>;
};
export type UserStatusStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    status?: Maybe<MediaListStatus>;
};
export type UserScoreStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    score?: Maybe<Scalars['Int']['output']>;
};
export type UserLengthStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    length?: Maybe<Scalars['String']['output']>;
};
export type UserReleaseYearStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    releaseYear?: Maybe<Scalars['Int']['output']>;
};
export type UserStartYearStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    startYear?: Maybe<Scalars['Int']['output']>;
};
export type UserGenreStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    genre?: Maybe<Scalars['String']['output']>;
};
export type UserTagStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    tag?: Maybe<MediaTag>;
};
export type UserCountryStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    country?: Maybe<Scalars['CountryCode']['output']>;
};
export type UserVoiceActorStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    voiceActor?: Maybe<Staff>;
    characterIds: Array<Maybe<Scalars['Int']['output']>>;
};
export type UserStaffStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    staff?: Maybe<Staff>;
};
export type UserStudioStatistic = {
    count: Scalars['Int']['output'];
    meanScore: Scalars['Float']['output'];
    minutesWatched: Scalars['Int']['output'];
    chaptersRead: Scalars['Int']['output'];
    mediaIds: Array<Maybe<Scalars['Int']['output']>>;
    studio?: Maybe<Studio>;
};
export type ModRole = 'ADMIN' | 'LEAD_DEVELOPER' | 'DEVELOPER' | 'LEAD_COMMUNITY' | 'COMMUNITY' | 'DISCORD_COMMUNITY' | 'LEAD_ANIME_DATA' | 'ANIME_DATA' | 'LEAD_MANGA_DATA' | 'MANGA_DATA' | 'LEAD_SOCIAL_MEDIA' | 'SOCIAL_MEDIA' | 'RETIRED' | 'CHARACTER_DATA' | 'STAFF_DATA';
export type UserStats = {
    watchedTime?: Maybe<Scalars['Int']['output']>;
    chaptersRead?: Maybe<Scalars['Int']['output']>;
    activityHistory?: Maybe<Array<Maybe<UserActivityHistory>>>;
    animeStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
    mangaStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
    animeScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
    mangaScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
    animeListScores?: Maybe<ListScoreStats>;
    mangaListScores?: Maybe<ListScoreStats>;
    favouredGenresOverview?: Maybe<Array<Maybe<GenreStats>>>;
    favouredGenres?: Maybe<Array<Maybe<GenreStats>>>;
    favouredTags?: Maybe<Array<Maybe<TagStats>>>;
    favouredActors?: Maybe<Array<Maybe<StaffStats>>>;
    favouredStaff?: Maybe<Array<Maybe<StaffStats>>>;
    favouredStudios?: Maybe<Array<Maybe<StudioStats>>>;
    favouredYears?: Maybe<Array<Maybe<YearStats>>>;
    favouredFormats?: Maybe<Array<Maybe<FormatStats>>>;
};
export type UserActivityHistory = {
    date?: Maybe<Scalars['Int']['output']>;
    amount?: Maybe<Scalars['Int']['output']>;
    level?: Maybe<Scalars['Int']['output']>;
};
export type ListScoreStats = {
    meanScore?: Maybe<Scalars['Int']['output']>;
    standardDeviation?: Maybe<Scalars['Int']['output']>;
};
export type GenreStats = {
    genre?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Int']['output']>;
    meanScore?: Maybe<Scalars['Int']['output']>;
    timeWatched?: Maybe<Scalars['Int']['output']>;
};
export type TagStats = {
    tag?: Maybe<MediaTag>;
    amount?: Maybe<Scalars['Int']['output']>;
    meanScore?: Maybe<Scalars['Int']['output']>;
    timeWatched?: Maybe<Scalars['Int']['output']>;
};
export type StaffStats = {
    staff?: Maybe<Staff>;
    amount?: Maybe<Scalars['Int']['output']>;
    meanScore?: Maybe<Scalars['Int']['output']>;
    timeWatched?: Maybe<Scalars['Int']['output']>;
};
export type StudioStats = {
    studio?: Maybe<Studio>;
    amount?: Maybe<Scalars['Int']['output']>;
    meanScore?: Maybe<Scalars['Int']['output']>;
    timeWatched?: Maybe<Scalars['Int']['output']>;
};
export type YearStats = {
    year?: Maybe<Scalars['Int']['output']>;
    amount?: Maybe<Scalars['Int']['output']>;
    meanScore?: Maybe<Scalars['Int']['output']>;
};
export type FormatStats = {
    format?: Maybe<MediaFormat>;
    amount?: Maybe<Scalars['Int']['output']>;
};
export type UserPreviousName = {
    name?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    updatedAt?: Maybe<Scalars['Int']['output']>;
};
export type MediaListSort = 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'SCORE' | 'SCORE_DESC' | 'STATUS' | 'STATUS_DESC' | 'PROGRESS' | 'PROGRESS_DESC' | 'PROGRESS_VOLUMES' | 'PROGRESS_VOLUMES_DESC' | 'REPEAT' | 'REPEAT_DESC' | 'PRIORITY' | 'PRIORITY_DESC' | 'STARTED_ON' | 'STARTED_ON_DESC' | 'FINISHED_ON' | 'FINISHED_ON_DESC' | 'ADDED_TIME' | 'ADDED_TIME_DESC' | 'UPDATED_TIME' | 'UPDATED_TIME_DESC' | 'MEDIA_TITLE_ROMAJI' | 'MEDIA_TITLE_ROMAJI_DESC' | 'MEDIA_TITLE_ENGLISH' | 'MEDIA_TITLE_ENGLISH_DESC' | 'MEDIA_TITLE_NATIVE' | 'MEDIA_TITLE_NATIVE_DESC' | 'MEDIA_POPULARITY' | 'MEDIA_POPULARITY_DESC';
export type AiringSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'TIME' | 'TIME_DESC' | 'EPISODE' | 'EPISODE_DESC';
export type NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification;
export type AiringNotification = {
    id: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    animeId: Scalars['Int']['output'];
    episode: Scalars['Int']['output'];
    contexts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    media?: Maybe<Media>;
};
export type FollowingNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    user?: Maybe<User>;
};
export type ActivityMessageNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    activityId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    message?: Maybe<MessageActivity>;
    user?: Maybe<User>;
};
export type MessageActivity = {
    id: Scalars['Int']['output'];
    recipientId?: Maybe<Scalars['Int']['output']>;
    messengerId?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<ActivityType>;
    replyCount: Scalars['Int']['output'];
    message?: Maybe<Scalars['String']['output']>;
    isLocked?: Maybe<Scalars['Boolean']['output']>;
    isSubscribed?: Maybe<Scalars['Boolean']['output']>;
    likeCount: Scalars['Int']['output'];
    isLiked?: Maybe<Scalars['Boolean']['output']>;
    isPrivate?: Maybe<Scalars['Boolean']['output']>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['Int']['output'];
    recipient?: Maybe<User>;
    messenger?: Maybe<User>;
    replies?: Maybe<Array<Maybe<ActivityReply>>>;
    likes?: Maybe<Array<Maybe<User>>>;
};
export type MessageActivitymessageArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ActivityType = 'TEXT' | 'ANIME_LIST' | 'MANGA_LIST' | 'MESSAGE' | 'MEDIA_LIST';
export type ActivityReply = {
    id: Scalars['Int']['output'];
    userId?: Maybe<Scalars['Int']['output']>;
    activityId?: Maybe<Scalars['Int']['output']>;
    text?: Maybe<Scalars['String']['output']>;
    likeCount: Scalars['Int']['output'];
    isLiked?: Maybe<Scalars['Boolean']['output']>;
    createdAt: Scalars['Int']['output'];
    user?: Maybe<User>;
    likes?: Maybe<Array<Maybe<User>>>;
};
export type ActivityReplytextArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ActivityMentionNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    activityId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    activity?: Maybe<ActivityUnion>;
    user?: Maybe<User>;
};
export type ActivityUnion = TextActivity | ListActivity | MessageActivity;
export type TextActivity = {
    id: Scalars['Int']['output'];
    userId?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<ActivityType>;
    replyCount: Scalars['Int']['output'];
    text?: Maybe<Scalars['String']['output']>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    isLocked?: Maybe<Scalars['Boolean']['output']>;
    isSubscribed?: Maybe<Scalars['Boolean']['output']>;
    likeCount: Scalars['Int']['output'];
    isLiked?: Maybe<Scalars['Boolean']['output']>;
    isPinned?: Maybe<Scalars['Boolean']['output']>;
    createdAt: Scalars['Int']['output'];
    user?: Maybe<User>;
    replies?: Maybe<Array<Maybe<ActivityReply>>>;
    likes?: Maybe<Array<Maybe<User>>>;
};
export type TextActivitytextArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ListActivity = {
    id: Scalars['Int']['output'];
    userId?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<ActivityType>;
    replyCount: Scalars['Int']['output'];
    status?: Maybe<Scalars['String']['output']>;
    progress?: Maybe<Scalars['String']['output']>;
    isLocked?: Maybe<Scalars['Boolean']['output']>;
    isSubscribed?: Maybe<Scalars['Boolean']['output']>;
    likeCount: Scalars['Int']['output'];
    isLiked?: Maybe<Scalars['Boolean']['output']>;
    isPinned?: Maybe<Scalars['Boolean']['output']>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['Int']['output'];
    user?: Maybe<User>;
    media?: Maybe<Media>;
    replies?: Maybe<Array<Maybe<ActivityReply>>>;
    likes?: Maybe<Array<Maybe<User>>>;
};
export type ActivityReplyNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    activityId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    activity?: Maybe<ActivityUnion>;
    user?: Maybe<User>;
};
export type ActivityReplySubscribedNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    activityId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    activity?: Maybe<ActivityUnion>;
    user?: Maybe<User>;
};
export type ActivityLikeNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    activityId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    activity?: Maybe<ActivityUnion>;
    user?: Maybe<User>;
};
export type ActivityReplyLikeNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    activityId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    activity?: Maybe<ActivityUnion>;
    user?: Maybe<User>;
};
export type ThreadCommentMentionNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    commentId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    thread?: Maybe<Thread>;
    comment?: Maybe<ThreadComment>;
    user?: Maybe<User>;
};
export type Thread = {
    id: Scalars['Int']['output'];
    title?: Maybe<Scalars['String']['output']>;
    body?: Maybe<Scalars['String']['output']>;
    userId: Scalars['Int']['output'];
    replyUserId?: Maybe<Scalars['Int']['output']>;
    replyCommentId?: Maybe<Scalars['Int']['output']>;
    replyCount?: Maybe<Scalars['Int']['output']>;
    viewCount?: Maybe<Scalars['Int']['output']>;
    isLocked?: Maybe<Scalars['Boolean']['output']>;
    isSticky?: Maybe<Scalars['Boolean']['output']>;
    isSubscribed?: Maybe<Scalars['Boolean']['output']>;
    likeCount: Scalars['Int']['output'];
    isLiked?: Maybe<Scalars['Boolean']['output']>;
    repliedAt?: Maybe<Scalars['Int']['output']>;
    createdAt: Scalars['Int']['output'];
    updatedAt: Scalars['Int']['output'];
    user?: Maybe<User>;
    replyUser?: Maybe<User>;
    likes?: Maybe<Array<Maybe<User>>>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    categories?: Maybe<Array<Maybe<ThreadCategory>>>;
    mediaCategories?: Maybe<Array<Maybe<Media>>>;
};
export type ThreadbodyArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ThreadCategory = {
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
};
export type ThreadComment = {
    id: Scalars['Int']['output'];
    userId?: Maybe<Scalars['Int']['output']>;
    threadId?: Maybe<Scalars['Int']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    likeCount: Scalars['Int']['output'];
    isLiked?: Maybe<Scalars['Boolean']['output']>;
    siteUrl?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['Int']['output'];
    updatedAt: Scalars['Int']['output'];
    thread?: Maybe<Thread>;
    user?: Maybe<User>;
    likes?: Maybe<Array<Maybe<User>>>;
    childComments?: Maybe<Scalars['Json']['output']>;
    isLocked?: Maybe<Scalars['Boolean']['output']>;
};
export type ThreadCommentcommentArgs = {
    asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ThreadCommentReplyNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    commentId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    thread?: Maybe<Thread>;
    comment?: Maybe<ThreadComment>;
    user?: Maybe<User>;
};
export type ThreadCommentSubscribedNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    commentId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    thread?: Maybe<Thread>;
    comment?: Maybe<ThreadComment>;
    user?: Maybe<User>;
};
export type ThreadCommentLikeNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    commentId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    thread?: Maybe<Thread>;
    comment?: Maybe<ThreadComment>;
    user?: Maybe<User>;
};
export type ThreadLikeNotification = {
    id: Scalars['Int']['output'];
    userId: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    threadId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    thread?: Maybe<Thread>;
    comment?: Maybe<ThreadComment>;
    user?: Maybe<User>;
};
export type RelatedMediaAdditionNotification = {
    id: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    mediaId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    media?: Maybe<Media>;
};
export type MediaDataChangeNotification = {
    id: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    mediaId: Scalars['Int']['output'];
    context?: Maybe<Scalars['String']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    media?: Maybe<Media>;
};
export type MediaMergeNotification = {
    id: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    mediaId: Scalars['Int']['output'];
    deletedMediaTitles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    context?: Maybe<Scalars['String']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    media?: Maybe<Media>;
};
export type MediaDeletionNotification = {
    id: Scalars['Int']['output'];
    type?: Maybe<NotificationType>;
    deletedMediaTitle?: Maybe<Scalars['String']['output']>;
    context?: Maybe<Scalars['String']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
};
export type ActivitySort = 'ID' | 'ID_DESC' | 'PINNED';
export type ThreadSort = 'ID' | 'ID_DESC' | 'TITLE' | 'TITLE_DESC' | 'CREATED_AT' | 'CREATED_AT_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'REPLIED_AT' | 'REPLIED_AT_DESC' | 'REPLY_COUNT' | 'REPLY_COUNT_DESC' | 'VIEW_COUNT' | 'VIEW_COUNT_DESC' | 'IS_STICKY' | 'SEARCH_MATCH';
export type ThreadCommentSort = 'ID' | 'ID_DESC';
export type LikeableType = 'THREAD' | 'THREAD_COMMENT' | 'ACTIVITY' | 'ACTIVITY_REPLY';
export type MediaListCollection = {
    lists?: Maybe<Array<Maybe<MediaListGroup>>>;
    user?: Maybe<User>;
    hasNextChunk?: Maybe<Scalars['Boolean']['output']>;
    statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
    customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
};
export type MediaListCollectionstatusListsArgs = {
    asArray?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaListCollectioncustomListsArgs = {
    asArray?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaListGroup = {
    entries?: Maybe<Array<Maybe<MediaList>>>;
    name?: Maybe<Scalars['String']['output']>;
    isCustomList?: Maybe<Scalars['Boolean']['output']>;
    isSplitCompletedList?: Maybe<Scalars['Boolean']['output']>;
    status?: Maybe<MediaListStatus>;
};
export type ParsedMarkdown = {
    html?: Maybe<Scalars['String']['output']>;
};
export type AniChartUser = {
    user?: Maybe<User>;
    settings?: Maybe<Scalars['Json']['output']>;
    highlights?: Maybe<Scalars['Json']['output']>;
};
export type SiteStatistics = {
    users?: Maybe<SiteTrendConnection>;
    anime?: Maybe<SiteTrendConnection>;
    manga?: Maybe<SiteTrendConnection>;
    characters?: Maybe<SiteTrendConnection>;
    staff?: Maybe<SiteTrendConnection>;
    studios?: Maybe<SiteTrendConnection>;
    reviews?: Maybe<SiteTrendConnection>;
};
export type SiteStatisticsusersArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteStatisticsanimeArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteStatisticsmangaArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteStatisticscharactersArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteStatisticsstaffArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteStatisticsstudiosArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteStatisticsreviewsArgs = {
    sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
    page?: InputMaybe<Scalars['Int']['input']>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
};
export type SiteTrendSort = 'DATE' | 'DATE_DESC' | 'COUNT' | 'COUNT_DESC' | 'CHANGE' | 'CHANGE_DESC';
export type SiteTrendConnection = {
    edges?: Maybe<Array<Maybe<SiteTrendEdge>>>;
    nodes?: Maybe<Array<Maybe<SiteTrend>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type SiteTrendEdge = {
    node?: Maybe<SiteTrend>;
};
export type SiteTrend = {
    date: Scalars['Int']['output'];
    count: Scalars['Int']['output'];
    change: Scalars['Int']['output'];
};
export type ExternalLinkMediaType = 'ANIME' | 'MANGA' | 'STAFF';
export type NotificationOptionInput = {
    type?: InputMaybe<NotificationType>;
    enabled?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MediaListOptionsInput = {
    sectionOrder?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    splitCompletedSectionByFormat?: InputMaybe<Scalars['Boolean']['input']>;
    customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    advancedScoring?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    advancedScoringEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    theme?: InputMaybe<Scalars['String']['input']>;
};
export type ListActivityOptionInput = {
    disabled?: InputMaybe<Scalars['Boolean']['input']>;
    type?: InputMaybe<MediaListStatus>;
};
export type FuzzyDateInput = {
    year?: InputMaybe<Scalars['Int']['input']>;
    month?: InputMaybe<Scalars['Int']['input']>;
    day?: InputMaybe<Scalars['Int']['input']>;
};
export type Deleted = {
    deleted?: Maybe<Scalars['Boolean']['output']>;
};
export type LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment;
export type AniChartHighlightInput = {
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    highlight?: InputMaybe<Scalars['String']['input']>;
};
export type InternalPage = {
    mediaSubmissions?: Maybe<Array<Maybe<MediaSubmission>>>;
    characterSubmissions?: Maybe<Array<Maybe<CharacterSubmission>>>;
    staffSubmissions?: Maybe<Array<Maybe<StaffSubmission>>>;
    revisionHistory?: Maybe<Array<Maybe<RevisionHistory>>>;
    reports?: Maybe<Array<Maybe<Report>>>;
    modActions?: Maybe<Array<Maybe<ModAction>>>;
    userBlockSearch?: Maybe<Array<Maybe<User>>>;
    pageInfo?: Maybe<PageInfo>;
    users?: Maybe<Array<Maybe<User>>>;
    media?: Maybe<Array<Maybe<Media>>>;
    characters?: Maybe<Array<Maybe<Character>>>;
    staff?: Maybe<Array<Maybe<Staff>>>;
    studios?: Maybe<Array<Maybe<Studio>>>;
    mediaList?: Maybe<Array<Maybe<MediaList>>>;
    airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
    mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
    notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
    followers?: Maybe<Array<Maybe<User>>>;
    following?: Maybe<Array<Maybe<User>>>;
    activities?: Maybe<Array<Maybe<ActivityUnion>>>;
    activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
    threads?: Maybe<Array<Maybe<Thread>>>;
    threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
    reviews?: Maybe<Array<Maybe<Review>>>;
    recommendations?: Maybe<Array<Maybe<Recommendation>>>;
    likes?: Maybe<Array<Maybe<User>>>;
};
export type InternalPagemediaSubmissionsArgs = {
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    submissionId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    assigneeId?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<SubmissionStatus>;
    type?: InputMaybe<MediaType>;
    sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
};
export type InternalPagecharacterSubmissionsArgs = {
    characterId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    assigneeId?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<SubmissionStatus>;
    sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
};
export type InternalPagestaffSubmissionsArgs = {
    staffId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    assigneeId?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<SubmissionStatus>;
    sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
};
export type InternalPagerevisionHistoryArgs = {
    userId?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    characterId?: InputMaybe<Scalars['Int']['input']>;
    staffId?: InputMaybe<Scalars['Int']['input']>;
    studioId?: InputMaybe<Scalars['Int']['input']>;
};
export type InternalPagereportsArgs = {
    reporterId?: InputMaybe<Scalars['Int']['input']>;
    reportedId?: InputMaybe<Scalars['Int']['input']>;
};
export type InternalPagemodActionsArgs = {
    userId?: InputMaybe<Scalars['Int']['input']>;
    modId?: InputMaybe<Scalars['Int']['input']>;
};
export type InternalPageuserBlockSearchArgs = {
    search?: InputMaybe<Scalars['String']['input']>;
};
export type InternalPageusersArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    isModerator?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type InternalPagemediaArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    idMal?: InputMaybe<Scalars['Int']['input']>;
    startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    season?: InputMaybe<MediaSeason>;
    seasonYear?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<MediaType>;
    format?: InputMaybe<MediaFormat>;
    status?: InputMaybe<MediaStatus>;
    episodes?: InputMaybe<Scalars['Int']['input']>;
    duration?: InputMaybe<Scalars['Int']['input']>;
    chapters?: InputMaybe<Scalars['Int']['input']>;
    volumes?: InputMaybe<Scalars['Int']['input']>;
    isAdult?: InputMaybe<Scalars['Boolean']['input']>;
    genre?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Scalars['String']['input']>;
    minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
    tagCategory?: InputMaybe<Scalars['String']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    licensedBy?: InputMaybe<Scalars['String']['input']>;
    licensedById?: InputMaybe<Scalars['Int']['input']>;
    averageScore?: InputMaybe<Scalars['Int']['input']>;
    popularity?: InputMaybe<Scalars['Int']['input']>;
    source?: InputMaybe<MediaSource>;
    countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
    isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    idMal_not?: InputMaybe<Scalars['Int']['input']>;
    idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startDate_like?: InputMaybe<Scalars['String']['input']>;
    endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    endDate_like?: InputMaybe<Scalars['String']['input']>;
    format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
    format_not?: InputMaybe<MediaFormat>;
    format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
    status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
    status_not?: InputMaybe<MediaStatus>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
    episodes_greater?: InputMaybe<Scalars['Int']['input']>;
    episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
    duration_greater?: InputMaybe<Scalars['Int']['input']>;
    duration_lesser?: InputMaybe<Scalars['Int']['input']>;
    chapters_greater?: InputMaybe<Scalars['Int']['input']>;
    chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
    volumes_greater?: InputMaybe<Scalars['Int']['input']>;
    volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
    genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    averageScore_not?: InputMaybe<Scalars['Int']['input']>;
    averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
    averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
    popularity_not?: InputMaybe<Scalars['Int']['input']>;
    popularity_greater?: InputMaybe<Scalars['Int']['input']>;
    popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
    source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
    sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};
export type InternalPagecharactersArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};
export type InternalPagestaffArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};
export type InternalPagestudiosArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};
export type InternalPagemediaListArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    userName?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<MediaType>;
    status?: InputMaybe<MediaListStatus>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    notes?: InputMaybe<Scalars['String']['input']>;
    startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
    userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
    status_not?: InputMaybe<MediaListStatus>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    notes_like?: InputMaybe<Scalars['String']['input']>;
    startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    startedAt_like?: InputMaybe<Scalars['String']['input']>;
    completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
    completedAt_like?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
};
export type InternalPageairingSchedulesArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    airingAt?: InputMaybe<Scalars['Int']['input']>;
    notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_not?: InputMaybe<Scalars['Int']['input']>;
    episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    episode_greater?: InputMaybe<Scalars['Int']['input']>;
    episode_lesser?: InputMaybe<Scalars['Int']['input']>;
    airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
    airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};
export type InternalPagemediaTrendsArgs = {
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    date?: InputMaybe<Scalars['Int']['input']>;
    trending?: InputMaybe<Scalars['Int']['input']>;
    averageScore?: InputMaybe<Scalars['Int']['input']>;
    popularity?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    releasing?: InputMaybe<Scalars['Boolean']['input']>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    date_greater?: InputMaybe<Scalars['Int']['input']>;
    date_lesser?: InputMaybe<Scalars['Int']['input']>;
    trending_greater?: InputMaybe<Scalars['Int']['input']>;
    trending_lesser?: InputMaybe<Scalars['Int']['input']>;
    trending_not?: InputMaybe<Scalars['Int']['input']>;
    averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
    averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
    averageScore_not?: InputMaybe<Scalars['Int']['input']>;
    popularity_greater?: InputMaybe<Scalars['Int']['input']>;
    popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
    popularity_not?: InputMaybe<Scalars['Int']['input']>;
    episode_greater?: InputMaybe<Scalars['Int']['input']>;
    episode_lesser?: InputMaybe<Scalars['Int']['input']>;
    episode_not?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
};
export type InternalPagenotificationsArgs = {
    type?: InputMaybe<NotificationType>;
    resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
    type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};
export type InternalPagefollowersArgs = {
    userId: Scalars['Int']['input'];
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type InternalPagefollowingArgs = {
    userId: Scalars['Int']['input'];
    sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};
export type InternalPageactivitiesArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    messengerId?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<ActivityType>;
    isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
    hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
    hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
    createdAt?: InputMaybe<Scalars['Int']['input']>;
    id_not?: InputMaybe<Scalars['Int']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    userId_not?: InputMaybe<Scalars['Int']['input']>;
    userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    messengerId_not?: InputMaybe<Scalars['Int']['input']>;
    messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not?: InputMaybe<Scalars['Int']['input']>;
    mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    type_not?: InputMaybe<ActivityType>;
    type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
    type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
    createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
    createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
};
export type InternalPageactivityRepliesArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    activityId?: InputMaybe<Scalars['Int']['input']>;
};
export type InternalPagethreadsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    replyUserId?: InputMaybe<Scalars['Int']['input']>;
    subscribed?: InputMaybe<Scalars['Boolean']['input']>;
    categoryId?: InputMaybe<Scalars['Int']['input']>;
    mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
};
export type InternalPagethreadCommentsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    threadId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
};
export type InternalPagereviewsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    mediaType?: InputMaybe<MediaType>;
    sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};
export type InternalPagerecommendationsArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    mediaId?: InputMaybe<Scalars['Int']['input']>;
    mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    rating?: InputMaybe<Scalars['Int']['input']>;
    onList?: InputMaybe<Scalars['Boolean']['input']>;
    rating_greater?: InputMaybe<Scalars['Int']['input']>;
    rating_lesser?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
};
export type InternalPagelikesArgs = {
    likeableId?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<LikeableType>;
};
export type SubmissionStatus = 'PENDING' | 'REJECTED' | 'PARTIALLY_ACCEPTED' | 'ACCEPTED';
export type SubmissionSort = 'ID' | 'ID_DESC';
export type MediaSubmission = {
    id: Scalars['Int']['output'];
    submitter?: Maybe<User>;
    assignee?: Maybe<User>;
    status?: Maybe<SubmissionStatus>;
    submitterStats?: Maybe<Scalars['Json']['output']>;
    notes?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    changes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    locked?: Maybe<Scalars['Boolean']['output']>;
    media?: Maybe<Media>;
    submission?: Maybe<Media>;
    characters?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
    staff?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
    studios?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
    relations?: Maybe<Array<Maybe<MediaEdge>>>;
    externalLinks?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
    createdAt?: Maybe<Scalars['Int']['output']>;
};
export type MediaSubmissionComparison = {
    submission?: Maybe<MediaSubmissionEdge>;
    character?: Maybe<MediaCharacter>;
    staff?: Maybe<StaffEdge>;
    studio?: Maybe<StudioEdge>;
    externalLink?: Maybe<MediaExternalLink>;
};
export type MediaSubmissionEdge = {
    id?: Maybe<Scalars['Int']['output']>;
    characterRole?: Maybe<CharacterRole>;
    staffRole?: Maybe<Scalars['String']['output']>;
    roleNotes?: Maybe<Scalars['String']['output']>;
    dubGroup?: Maybe<Scalars['String']['output']>;
    characterName?: Maybe<Scalars['String']['output']>;
    isMain?: Maybe<Scalars['Boolean']['output']>;
    character?: Maybe<Character>;
    characterSubmission?: Maybe<Character>;
    voiceActor?: Maybe<Staff>;
    voiceActorSubmission?: Maybe<Staff>;
    staff?: Maybe<Staff>;
    staffSubmission?: Maybe<Staff>;
    studio?: Maybe<Studio>;
    externalLink?: Maybe<MediaExternalLink>;
    media?: Maybe<Media>;
};
export type MediaCharacter = {
    id?: Maybe<Scalars['Int']['output']>;
    role?: Maybe<CharacterRole>;
    roleNotes?: Maybe<Scalars['String']['output']>;
    dubGroup?: Maybe<Scalars['String']['output']>;
    characterName?: Maybe<Scalars['String']['output']>;
    character?: Maybe<Character>;
    voiceActor?: Maybe<Staff>;
};
export type CharacterSubmission = {
    id: Scalars['Int']['output'];
    character?: Maybe<Character>;
    submission?: Maybe<Character>;
    submitter?: Maybe<User>;
    assignee?: Maybe<User>;
    status?: Maybe<SubmissionStatus>;
    notes?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    locked?: Maybe<Scalars['Boolean']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
};
export type StaffSubmission = {
    id: Scalars['Int']['output'];
    staff?: Maybe<Staff>;
    submission?: Maybe<Staff>;
    submitter?: Maybe<User>;
    assignee?: Maybe<User>;
    status?: Maybe<SubmissionStatus>;
    notes?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    locked?: Maybe<Scalars['Boolean']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
};
export type RevisionHistory = {
    id: Scalars['Int']['output'];
    action?: Maybe<RevisionHistoryAction>;
    changes?: Maybe<Scalars['Json']['output']>;
    user?: Maybe<User>;
    media?: Maybe<Media>;
    character?: Maybe<Character>;
    staff?: Maybe<Staff>;
    studio?: Maybe<Studio>;
    externalLink?: Maybe<MediaExternalLink>;
    createdAt?: Maybe<Scalars['Int']['output']>;
};
export type RevisionHistoryAction = 'CREATE' | 'EDIT';
export type Report = {
    id: Scalars['Int']['output'];
    reporter?: Maybe<User>;
    reported?: Maybe<User>;
    reason?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['Int']['output']>;
    cleared?: Maybe<Scalars['Boolean']['output']>;
};
export type ModAction = {
    id: Scalars['Int']['output'];
    user?: Maybe<User>;
    mod?: Maybe<User>;
    type?: Maybe<ModActionType>;
    objectId?: Maybe<Scalars['Int']['output']>;
    objectType?: Maybe<Scalars['String']['output']>;
    data?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['Int']['output'];
};
export type ModActionType = 'NOTE' | 'BAN' | 'DELETE' | 'EDIT' | 'EXPIRE' | 'REPORT' | 'RESET' | 'ANON';
export type MediaTitleInput = {
    romaji?: InputMaybe<Scalars['String']['input']>;
    english?: InputMaybe<Scalars['String']['input']>;
    native?: InputMaybe<Scalars['String']['input']>;
};
export type AiringScheduleInput = {
    airingAt?: InputMaybe<Scalars['Int']['input']>;
    episode?: InputMaybe<Scalars['Int']['input']>;
    timeUntilAiring?: InputMaybe<Scalars['Int']['input']>;
};
export type MediaExternalLinkInput = {
    id: Scalars['Int']['input'];
    url: Scalars['String']['input'];
    site: Scalars['String']['input'];
};
export type CharacterNameInput = {
    first?: InputMaybe<Scalars['String']['input']>;
    middle?: InputMaybe<Scalars['String']['input']>;
    last?: InputMaybe<Scalars['String']['input']>;
    native?: InputMaybe<Scalars['String']['input']>;
    alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    alternativeSpoiler?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type CharacterSubmissionConnection = {
    edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
    nodes?: Maybe<Array<Maybe<CharacterSubmission>>>;
    pageInfo?: Maybe<PageInfo>;
};
export type CharacterSubmissionEdge = {
    node?: Maybe<CharacterSubmission>;
    role?: Maybe<CharacterRole>;
    voiceActors?: Maybe<Array<Maybe<Staff>>>;
    submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>;
};
export type StaffNameInput = {
    first?: InputMaybe<Scalars['String']['input']>;
    middle?: InputMaybe<Scalars['String']['input']>;
    last?: InputMaybe<Scalars['String']['input']>;
    native?: InputMaybe<Scalars['String']['input']>;
    alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type UserModData = {
    alts?: Maybe<Array<Maybe<User>>>;
    bans?: Maybe<Scalars['Json']['output']>;
    ip?: Maybe<Scalars['Json']['output']>;
    counts?: Maybe<Scalars['Json']['output']>;
    privacy?: Maybe<Scalars['Int']['output']>;
    email?: Maybe<Scalars['String']['output']>;
};
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
    NotificationUnion: (AiringNotification) | (FollowingNotification) | (ActivityMessageNotification) | (Omit<ActivityMentionNotification, 'activity'> & {
        activity?: Maybe<RefType['ActivityUnion']>;
    }) | (Omit<ActivityReplyNotification, 'activity'> & {
        activity?: Maybe<RefType['ActivityUnion']>;
    }) | (Omit<ActivityReplySubscribedNotification, 'activity'> & {
        activity?: Maybe<RefType['ActivityUnion']>;
    }) | (Omit<ActivityLikeNotification, 'activity'> & {
        activity?: Maybe<RefType['ActivityUnion']>;
    }) | (Omit<ActivityReplyLikeNotification, 'activity'> & {
        activity?: Maybe<RefType['ActivityUnion']>;
    }) | (ThreadCommentMentionNotification) | (ThreadCommentReplyNotification) | (ThreadCommentSubscribedNotification) | (ThreadCommentLikeNotification) | (ThreadLikeNotification) | (RelatedMediaAdditionNotification) | (MediaDataChangeNotification) | (MediaMergeNotification) | (MediaDeletionNotification);
    ActivityUnion: (TextActivity) | (ListActivity) | (MessageActivity);
    LikeableUnion: (ListActivity) | (TextActivity) | (MessageActivity) | (ActivityReply) | (Thread) | (ThreadComment);
}>;
export type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Continent: ResolverTypeWrapper<Continent>;
    ContinentFilterInput: ContinentFilterInput;
    Country: ResolverTypeWrapper<Country>;
    CountryFilterInput: CountryFilterInput;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Language: ResolverTypeWrapper<Language>;
    LanguageFilterInput: LanguageFilterInput;
    State: ResolverTypeWrapper<State>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    StringQueryOperatorInput: StringQueryOperatorInput;
    Subdivision: ResolverTypeWrapper<Subdivision>;
    Mutation: ResolverTypeWrapper<{}>;
    Pet: ResolverTypeWrapper<Pet>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
    Category: ResolverTypeWrapper<Category>;
    Tag: ResolverTypeWrapper<Tag>;
    mutationInput_addPet_input_status: mutationInput_addPet_input_status;
    queryInput_findPetsByStatus_status_items: queryInput_findPetsByStatus_status_items;
    Order: ResolverTypeWrapper<Order>;
    DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
    mutation_placeOrder_status: mutation_placeOrder_status;
    JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
    User: ResolverTypeWrapper<User>;
    ApiResponse: ResolverTypeWrapper<ApiResponse>;
    Pet_Input: Pet_Input;
    Category_Input: Category_Input;
    Tag_Input: Tag_Input;
    Order_Input: Order_Input;
    User_Input: User_Input;
    ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
    HTTPMethod: HTTPMethod;
    Page: ResolverTypeWrapper<Omit<Page, 'notifications' | 'activities'> & {
        notifications?: Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>;
        activities?: Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>>;
    }>;
    PageInfo: ResolverTypeWrapper<PageInfo>;
    UserSort: UserSort;
    UserAvatar: ResolverTypeWrapper<UserAvatar>;
    Json: ResolverTypeWrapper<Scalars['Json']['output']>;
    UserOptions: ResolverTypeWrapper<UserOptions>;
    UserTitleLanguage: UserTitleLanguage;
    NotificationOption: ResolverTypeWrapper<NotificationOption>;
    NotificationType: NotificationType;
    UserStaffNameLanguage: UserStaffNameLanguage;
    ListActivityOption: ResolverTypeWrapper<ListActivityOption>;
    MediaListStatus: MediaListStatus;
    MediaListOptions: ResolverTypeWrapper<MediaListOptions>;
    ScoreFormat: ScoreFormat;
    MediaListTypeOptions: ResolverTypeWrapper<MediaListTypeOptions>;
    Favourites: ResolverTypeWrapper<Favourites>;
    MediaConnection: ResolverTypeWrapper<MediaConnection>;
    MediaEdge: ResolverTypeWrapper<MediaEdge>;
    Media: ResolverTypeWrapper<Media>;
    MediaTitle: ResolverTypeWrapper<MediaTitle>;
    MediaType: MediaType;
    MediaFormat: MediaFormat;
    MediaStatus: MediaStatus;
    FuzzyDate: ResolverTypeWrapper<FuzzyDate>;
    MediaSeason: MediaSeason;
    CountryCode: ResolverTypeWrapper<Scalars['CountryCode']['output']>;
    MediaSource: MediaSource;
    MediaTrailer: ResolverTypeWrapper<MediaTrailer>;
    MediaCoverImage: ResolverTypeWrapper<MediaCoverImage>;
    MediaTag: ResolverTypeWrapper<MediaTag>;
    CharacterSort: CharacterSort;
    CharacterRole: CharacterRole;
    CharacterConnection: ResolverTypeWrapper<CharacterConnection>;
    CharacterEdge: ResolverTypeWrapper<CharacterEdge>;
    Character: ResolverTypeWrapper<Character>;
    CharacterName: ResolverTypeWrapper<CharacterName>;
    CharacterImage: ResolverTypeWrapper<CharacterImage>;
    MediaSort: MediaSort;
    StaffLanguage: StaffLanguage;
    StaffSort: StaffSort;
    Staff: ResolverTypeWrapper<Staff>;
    StaffName: ResolverTypeWrapper<StaffName>;
    StaffImage: ResolverTypeWrapper<StaffImage>;
    StaffRoleType: ResolverTypeWrapper<StaffRoleType>;
    StaffConnection: ResolverTypeWrapper<StaffConnection>;
    StaffEdge: ResolverTypeWrapper<StaffEdge>;
    StudioSort: StudioSort;
    StudioConnection: ResolverTypeWrapper<StudioConnection>;
    StudioEdge: ResolverTypeWrapper<StudioEdge>;
    Studio: ResolverTypeWrapper<Studio>;
    AiringSchedule: ResolverTypeWrapper<AiringSchedule>;
    AiringScheduleConnection: ResolverTypeWrapper<AiringScheduleConnection>;
    AiringScheduleEdge: ResolverTypeWrapper<AiringScheduleEdge>;
    MediaTrendSort: MediaTrendSort;
    MediaTrendConnection: ResolverTypeWrapper<MediaTrendConnection>;
    MediaTrendEdge: ResolverTypeWrapper<MediaTrendEdge>;
    MediaTrend: ResolverTypeWrapper<MediaTrend>;
    MediaExternalLink: ResolverTypeWrapper<MediaExternalLink>;
    ExternalLinkType: ExternalLinkType;
    MediaStreamingEpisode: ResolverTypeWrapper<MediaStreamingEpisode>;
    MediaRank: ResolverTypeWrapper<MediaRank>;
    MediaRankType: MediaRankType;
    MediaList: ResolverTypeWrapper<MediaList>;
    ReviewSort: ReviewSort;
    ReviewConnection: ResolverTypeWrapper<ReviewConnection>;
    ReviewEdge: ResolverTypeWrapper<ReviewEdge>;
    Review: ResolverTypeWrapper<Review>;
    ReviewRating: ReviewRating;
    RecommendationSort: RecommendationSort;
    RecommendationConnection: ResolverTypeWrapper<RecommendationConnection>;
    RecommendationEdge: ResolverTypeWrapper<RecommendationEdge>;
    Recommendation: ResolverTypeWrapper<Recommendation>;
    RecommendationRating: RecommendationRating;
    MediaStats: ResolverTypeWrapper<MediaStats>;
    ScoreDistribution: ResolverTypeWrapper<ScoreDistribution>;
    StatusDistribution: ResolverTypeWrapper<StatusDistribution>;
    AiringProgression: ResolverTypeWrapper<AiringProgression>;
    MediaRelation: MediaRelation;
    UserStatisticTypes: ResolverTypeWrapper<UserStatisticTypes>;
    UserStatistics: ResolverTypeWrapper<UserStatistics>;
    UserStatisticsSort: UserStatisticsSort;
    UserFormatStatistic: ResolverTypeWrapper<UserFormatStatistic>;
    UserStatusStatistic: ResolverTypeWrapper<UserStatusStatistic>;
    UserScoreStatistic: ResolverTypeWrapper<UserScoreStatistic>;
    UserLengthStatistic: ResolverTypeWrapper<UserLengthStatistic>;
    UserReleaseYearStatistic: ResolverTypeWrapper<UserReleaseYearStatistic>;
    UserStartYearStatistic: ResolverTypeWrapper<UserStartYearStatistic>;
    UserGenreStatistic: ResolverTypeWrapper<UserGenreStatistic>;
    UserTagStatistic: ResolverTypeWrapper<UserTagStatistic>;
    UserCountryStatistic: ResolverTypeWrapper<UserCountryStatistic>;
    UserVoiceActorStatistic: ResolverTypeWrapper<UserVoiceActorStatistic>;
    UserStaffStatistic: ResolverTypeWrapper<UserStaffStatistic>;
    UserStudioStatistic: ResolverTypeWrapper<UserStudioStatistic>;
    ModRole: ModRole;
    UserStats: ResolverTypeWrapper<UserStats>;
    UserActivityHistory: ResolverTypeWrapper<UserActivityHistory>;
    ListScoreStats: ResolverTypeWrapper<ListScoreStats>;
    GenreStats: ResolverTypeWrapper<GenreStats>;
    TagStats: ResolverTypeWrapper<TagStats>;
    StaffStats: ResolverTypeWrapper<StaffStats>;
    StudioStats: ResolverTypeWrapper<StudioStats>;
    YearStats: ResolverTypeWrapper<YearStats>;
    FormatStats: ResolverTypeWrapper<FormatStats>;
    UserPreviousName: ResolverTypeWrapper<UserPreviousName>;
    FuzzyDateInt: ResolverTypeWrapper<Scalars['FuzzyDateInt']['output']>;
    MediaListSort: MediaListSort;
    AiringSort: AiringSort;
    NotificationUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NotificationUnion']>;
    AiringNotification: ResolverTypeWrapper<AiringNotification>;
    FollowingNotification: ResolverTypeWrapper<FollowingNotification>;
    ActivityMessageNotification: ResolverTypeWrapper<ActivityMessageNotification>;
    MessageActivity: ResolverTypeWrapper<MessageActivity>;
    ActivityType: ActivityType;
    ActivityReply: ResolverTypeWrapper<ActivityReply>;
    ActivityMentionNotification: ResolverTypeWrapper<Omit<ActivityMentionNotification, 'activity'> & {
        activity?: Maybe<ResolversTypes['ActivityUnion']>;
    }>;
    ActivityUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ActivityUnion']>;
    TextActivity: ResolverTypeWrapper<TextActivity>;
    ListActivity: ResolverTypeWrapper<ListActivity>;
    ActivityReplyNotification: ResolverTypeWrapper<Omit<ActivityReplyNotification, 'activity'> & {
        activity?: Maybe<ResolversTypes['ActivityUnion']>;
    }>;
    ActivityReplySubscribedNotification: ResolverTypeWrapper<Omit<ActivityReplySubscribedNotification, 'activity'> & {
        activity?: Maybe<ResolversTypes['ActivityUnion']>;
    }>;
    ActivityLikeNotification: ResolverTypeWrapper<Omit<ActivityLikeNotification, 'activity'> & {
        activity?: Maybe<ResolversTypes['ActivityUnion']>;
    }>;
    ActivityReplyLikeNotification: ResolverTypeWrapper<Omit<ActivityReplyLikeNotification, 'activity'> & {
        activity?: Maybe<ResolversTypes['ActivityUnion']>;
    }>;
    ThreadCommentMentionNotification: ResolverTypeWrapper<ThreadCommentMentionNotification>;
    Thread: ResolverTypeWrapper<Thread>;
    ThreadCategory: ResolverTypeWrapper<ThreadCategory>;
    ThreadComment: ResolverTypeWrapper<ThreadComment>;
    ThreadCommentReplyNotification: ResolverTypeWrapper<ThreadCommentReplyNotification>;
    ThreadCommentSubscribedNotification: ResolverTypeWrapper<ThreadCommentSubscribedNotification>;
    ThreadCommentLikeNotification: ResolverTypeWrapper<ThreadCommentLikeNotification>;
    ThreadLikeNotification: ResolverTypeWrapper<ThreadLikeNotification>;
    RelatedMediaAdditionNotification: ResolverTypeWrapper<RelatedMediaAdditionNotification>;
    MediaDataChangeNotification: ResolverTypeWrapper<MediaDataChangeNotification>;
    MediaMergeNotification: ResolverTypeWrapper<MediaMergeNotification>;
    MediaDeletionNotification: ResolverTypeWrapper<MediaDeletionNotification>;
    ActivitySort: ActivitySort;
    ThreadSort: ThreadSort;
    ThreadCommentSort: ThreadCommentSort;
    LikeableType: LikeableType;
    MediaListCollection: ResolverTypeWrapper<MediaListCollection>;
    MediaListGroup: ResolverTypeWrapper<MediaListGroup>;
    ParsedMarkdown: ResolverTypeWrapper<ParsedMarkdown>;
    AniChartUser: ResolverTypeWrapper<AniChartUser>;
    SiteStatistics: ResolverTypeWrapper<SiteStatistics>;
    SiteTrendSort: SiteTrendSort;
    SiteTrendConnection: ResolverTypeWrapper<SiteTrendConnection>;
    SiteTrendEdge: ResolverTypeWrapper<SiteTrendEdge>;
    SiteTrend: ResolverTypeWrapper<SiteTrend>;
    ExternalLinkMediaType: ExternalLinkMediaType;
    NotificationOptionInput: NotificationOptionInput;
    MediaListOptionsInput: MediaListOptionsInput;
    ListActivityOptionInput: ListActivityOptionInput;
    FuzzyDateInput: FuzzyDateInput;
    Deleted: ResolverTypeWrapper<Deleted>;
    LikeableUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['LikeableUnion']>;
    AniChartHighlightInput: AniChartHighlightInput;
    InternalPage: ResolverTypeWrapper<Omit<InternalPage, 'notifications' | 'activities'> & {
        notifications?: Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>;
        activities?: Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>>;
    }>;
    SubmissionStatus: SubmissionStatus;
    SubmissionSort: SubmissionSort;
    MediaSubmission: ResolverTypeWrapper<MediaSubmission>;
    MediaSubmissionComparison: ResolverTypeWrapper<MediaSubmissionComparison>;
    MediaSubmissionEdge: ResolverTypeWrapper<MediaSubmissionEdge>;
    MediaCharacter: ResolverTypeWrapper<MediaCharacter>;
    CharacterSubmission: ResolverTypeWrapper<CharacterSubmission>;
    StaffSubmission: ResolverTypeWrapper<StaffSubmission>;
    RevisionHistory: ResolverTypeWrapper<RevisionHistory>;
    RevisionHistoryAction: RevisionHistoryAction;
    Report: ResolverTypeWrapper<Report>;
    ModAction: ResolverTypeWrapper<ModAction>;
    ModActionType: ModActionType;
    MediaTitleInput: MediaTitleInput;
    AiringScheduleInput: AiringScheduleInput;
    MediaExternalLinkInput: MediaExternalLinkInput;
    CharacterNameInput: CharacterNameInput;
    CharacterSubmissionConnection: ResolverTypeWrapper<CharacterSubmissionConnection>;
    CharacterSubmissionEdge: ResolverTypeWrapper<CharacterSubmissionEdge>;
    StaffNameInput: StaffNameInput;
    UserModData: ResolverTypeWrapper<UserModData>;
}>;
export type ResolversParentTypes = ResolversObject<{
    Query: {};
    Boolean: Scalars['Boolean']['output'];
    Continent: Continent;
    ContinentFilterInput: ContinentFilterInput;
    Country: Country;
    CountryFilterInput: CountryFilterInput;
    Float: Scalars['Float']['output'];
    ID: Scalars['ID']['output'];
    Int: Scalars['Int']['output'];
    Language: Language;
    LanguageFilterInput: LanguageFilterInput;
    State: State;
    String: Scalars['String']['output'];
    StringQueryOperatorInput: StringQueryOperatorInput;
    Subdivision: Subdivision;
    Mutation: {};
    Pet: Pet;
    BigInt: Scalars['BigInt']['output'];
    Category: Category;
    Tag: Tag;
    Order: Order;
    DateTime: Scalars['DateTime']['output'];
    JSON: Scalars['JSON']['output'];
    User: User;
    ApiResponse: ApiResponse;
    Pet_Input: Pet_Input;
    Category_Input: Category_Input;
    Tag_Input: Tag_Input;
    Order_Input: Order_Input;
    User_Input: User_Input;
    ObjMap: Scalars['ObjMap']['output'];
    Page: Omit<Page, 'notifications' | 'activities'> & {
        notifications?: Maybe<Array<Maybe<ResolversParentTypes['NotificationUnion']>>>;
        activities?: Maybe<Array<Maybe<ResolversParentTypes['ActivityUnion']>>>;
    };
    PageInfo: PageInfo;
    UserAvatar: UserAvatar;
    Json: Scalars['Json']['output'];
    UserOptions: UserOptions;
    NotificationOption: NotificationOption;
    ListActivityOption: ListActivityOption;
    MediaListOptions: MediaListOptions;
    MediaListTypeOptions: MediaListTypeOptions;
    Favourites: Favourites;
    MediaConnection: MediaConnection;
    MediaEdge: MediaEdge;
    Media: Media;
    MediaTitle: MediaTitle;
    FuzzyDate: FuzzyDate;
    CountryCode: Scalars['CountryCode']['output'];
    MediaTrailer: MediaTrailer;
    MediaCoverImage: MediaCoverImage;
    MediaTag: MediaTag;
    CharacterConnection: CharacterConnection;
    CharacterEdge: CharacterEdge;
    Character: Character;
    CharacterName: CharacterName;
    CharacterImage: CharacterImage;
    Staff: Staff;
    StaffName: StaffName;
    StaffImage: StaffImage;
    StaffRoleType: StaffRoleType;
    StaffConnection: StaffConnection;
    StaffEdge: StaffEdge;
    StudioConnection: StudioConnection;
    StudioEdge: StudioEdge;
    Studio: Studio;
    AiringSchedule: AiringSchedule;
    AiringScheduleConnection: AiringScheduleConnection;
    AiringScheduleEdge: AiringScheduleEdge;
    MediaTrendConnection: MediaTrendConnection;
    MediaTrendEdge: MediaTrendEdge;
    MediaTrend: MediaTrend;
    MediaExternalLink: MediaExternalLink;
    MediaStreamingEpisode: MediaStreamingEpisode;
    MediaRank: MediaRank;
    MediaList: MediaList;
    ReviewConnection: ReviewConnection;
    ReviewEdge: ReviewEdge;
    Review: Review;
    RecommendationConnection: RecommendationConnection;
    RecommendationEdge: RecommendationEdge;
    Recommendation: Recommendation;
    MediaStats: MediaStats;
    ScoreDistribution: ScoreDistribution;
    StatusDistribution: StatusDistribution;
    AiringProgression: AiringProgression;
    UserStatisticTypes: UserStatisticTypes;
    UserStatistics: UserStatistics;
    UserFormatStatistic: UserFormatStatistic;
    UserStatusStatistic: UserStatusStatistic;
    UserScoreStatistic: UserScoreStatistic;
    UserLengthStatistic: UserLengthStatistic;
    UserReleaseYearStatistic: UserReleaseYearStatistic;
    UserStartYearStatistic: UserStartYearStatistic;
    UserGenreStatistic: UserGenreStatistic;
    UserTagStatistic: UserTagStatistic;
    UserCountryStatistic: UserCountryStatistic;
    UserVoiceActorStatistic: UserVoiceActorStatistic;
    UserStaffStatistic: UserStaffStatistic;
    UserStudioStatistic: UserStudioStatistic;
    UserStats: UserStats;
    UserActivityHistory: UserActivityHistory;
    ListScoreStats: ListScoreStats;
    GenreStats: GenreStats;
    TagStats: TagStats;
    StaffStats: StaffStats;
    StudioStats: StudioStats;
    YearStats: YearStats;
    FormatStats: FormatStats;
    UserPreviousName: UserPreviousName;
    FuzzyDateInt: Scalars['FuzzyDateInt']['output'];
    NotificationUnion: ResolversUnionTypes<ResolversParentTypes>['NotificationUnion'];
    AiringNotification: AiringNotification;
    FollowingNotification: FollowingNotification;
    ActivityMessageNotification: ActivityMessageNotification;
    MessageActivity: MessageActivity;
    ActivityReply: ActivityReply;
    ActivityMentionNotification: Omit<ActivityMentionNotification, 'activity'> & {
        activity?: Maybe<ResolversParentTypes['ActivityUnion']>;
    };
    ActivityUnion: ResolversUnionTypes<ResolversParentTypes>['ActivityUnion'];
    TextActivity: TextActivity;
    ListActivity: ListActivity;
    ActivityReplyNotification: Omit<ActivityReplyNotification, 'activity'> & {
        activity?: Maybe<ResolversParentTypes['ActivityUnion']>;
    };
    ActivityReplySubscribedNotification: Omit<ActivityReplySubscribedNotification, 'activity'> & {
        activity?: Maybe<ResolversParentTypes['ActivityUnion']>;
    };
    ActivityLikeNotification: Omit<ActivityLikeNotification, 'activity'> & {
        activity?: Maybe<ResolversParentTypes['ActivityUnion']>;
    };
    ActivityReplyLikeNotification: Omit<ActivityReplyLikeNotification, 'activity'> & {
        activity?: Maybe<ResolversParentTypes['ActivityUnion']>;
    };
    ThreadCommentMentionNotification: ThreadCommentMentionNotification;
    Thread: Thread;
    ThreadCategory: ThreadCategory;
    ThreadComment: ThreadComment;
    ThreadCommentReplyNotification: ThreadCommentReplyNotification;
    ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification;
    ThreadCommentLikeNotification: ThreadCommentLikeNotification;
    ThreadLikeNotification: ThreadLikeNotification;
    RelatedMediaAdditionNotification: RelatedMediaAdditionNotification;
    MediaDataChangeNotification: MediaDataChangeNotification;
    MediaMergeNotification: MediaMergeNotification;
    MediaDeletionNotification: MediaDeletionNotification;
    MediaListCollection: MediaListCollection;
    MediaListGroup: MediaListGroup;
    ParsedMarkdown: ParsedMarkdown;
    AniChartUser: AniChartUser;
    SiteStatistics: SiteStatistics;
    SiteTrendConnection: SiteTrendConnection;
    SiteTrendEdge: SiteTrendEdge;
    SiteTrend: SiteTrend;
    NotificationOptionInput: NotificationOptionInput;
    MediaListOptionsInput: MediaListOptionsInput;
    ListActivityOptionInput: ListActivityOptionInput;
    FuzzyDateInput: FuzzyDateInput;
    Deleted: Deleted;
    LikeableUnion: ResolversUnionTypes<ResolversParentTypes>['LikeableUnion'];
    AniChartHighlightInput: AniChartHighlightInput;
    InternalPage: Omit<InternalPage, 'notifications' | 'activities'> & {
        notifications?: Maybe<Array<Maybe<ResolversParentTypes['NotificationUnion']>>>;
        activities?: Maybe<Array<Maybe<ResolversParentTypes['ActivityUnion']>>>;
    };
    MediaSubmission: MediaSubmission;
    MediaSubmissionComparison: MediaSubmissionComparison;
    MediaSubmissionEdge: MediaSubmissionEdge;
    MediaCharacter: MediaCharacter;
    CharacterSubmission: CharacterSubmission;
    StaffSubmission: StaffSubmission;
    RevisionHistory: RevisionHistory;
    Report: Report;
    ModAction: ModAction;
    MediaTitleInput: MediaTitleInput;
    AiringScheduleInput: AiringScheduleInput;
    MediaExternalLinkInput: MediaExternalLinkInput;
    CharacterNameInput: CharacterNameInput;
    CharacterSubmissionConnection: CharacterSubmissionConnection;
    CharacterSubmissionEdge: CharacterSubmissionEdge;
    StaffNameInput: StaffNameInput;
    UserModData: UserModData;
}>;
export type enumDirectiveArgs = {
    value?: Maybe<Scalars['String']['input']>;
};
export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type globalOptionsDirectiveArgs = {
    sourceName?: Maybe<Scalars['String']['input']>;
    endpoint?: Maybe<Scalars['String']['input']>;
    operationHeaders?: Maybe<Scalars['ObjMap']['input']>;
    queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
    queryParams?: Maybe<Scalars['ObjMap']['input']>;
};
export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type httpOperationDirectiveArgs = {
    path?: Maybe<Scalars['String']['input']>;
    operationSpecificHeaders?: Maybe<Scalars['ObjMap']['input']>;
    httpMethod?: Maybe<HTTPMethod>;
    isBinary?: Maybe<Scalars['Boolean']['input']>;
    requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
    queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
    queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
};
export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    continent?: Resolver<Maybe<ResolversTypes['Continent']>, ParentType, ContextType, RequireFields<QuerycontinentArgs, 'code'>>;
    continents?: Resolver<Array<ResolversTypes['Continent']>, ParentType, ContextType, RequireFields<QuerycontinentsArgs, 'filter'>>;
    countries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QuerycountriesArgs, 'filter'>>;
    country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QuerycountryArgs, 'code'>>;
    language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageArgs, 'code'>>;
    languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguagesArgs, 'filter'>>;
    findPetsByStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryfindPetsByStatusArgs, 'status'>>;
    findPetsByTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryfindPetsByTagsArgs, 'tags'>>;
    getPetById?: Resolver<ResolversTypes['Pet'], ParentType, ContextType, RequireFields<QuerygetPetByIdArgs, 'petId'>>;
    getOrderById?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QuerygetOrderByIdArgs, 'orderId'>>;
    getInventory?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    getUserByName?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuerygetUserByNameArgs, 'username'>>;
    loginUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryloginUserArgs, 'username' | 'password'>>;
    logoutUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    Page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<QueryPageArgs>>;
    Media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, Partial<QueryMediaArgs>>;
    MediaTrend?: Resolver<Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType, Partial<QueryMediaTrendArgs>>;
    AiringSchedule?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType, Partial<QueryAiringScheduleArgs>>;
    Character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, Partial<QueryCharacterArgs>>;
    Staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType, Partial<QueryStaffArgs>>;
    MediaList?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType, Partial<QueryMediaListArgs>>;
    MediaListCollection?: Resolver<Maybe<ResolversTypes['MediaListCollection']>, ParentType, ContextType, Partial<QueryMediaListCollectionArgs>>;
    GenreCollection?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    MediaTagCollection?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTag']>>>, ParentType, ContextType, Partial<QueryMediaTagCollectionArgs>>;
    User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
    Viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    Notification?: Resolver<Maybe<ResolversTypes['NotificationUnion']>, ParentType, ContextType, Partial<QueryNotificationArgs>>;
    Studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType, Partial<QueryStudioArgs>>;
    Review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, Partial<QueryReviewArgs>>;
    Activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, Partial<QueryActivityArgs>>;
    ActivityReply?: Resolver<Maybe<ResolversTypes['ActivityReply']>, ParentType, ContextType, Partial<QueryActivityReplyArgs>>;
    Following?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFollowingArgs, 'userId'>>;
    Follower?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFollowerArgs, 'userId'>>;
    Thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, Partial<QueryThreadArgs>>;
    ThreadComment?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, Partial<QueryThreadCommentArgs>>;
    Recommendation?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType, Partial<QueryRecommendationArgs>>;
    Like?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryLikeArgs>>;
    Markdown?: Resolver<Maybe<ResolversTypes['ParsedMarkdown']>, ParentType, ContextType, RequireFields<QueryMarkdownArgs, 'markdown'>>;
    AniChartUser?: Resolver<Maybe<ResolversTypes['AniChartUser']>, ParentType, ContextType>;
    SiteStatistics?: Resolver<Maybe<ResolversTypes['SiteStatistics']>, ParentType, ContextType>;
    ExternalLinkSourceCollection?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaExternalLink']>>>, ParentType, ContextType, Partial<QueryExternalLinkSourceCollectionArgs>>;
}>;
export type ContinentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Continent'] = ResolversParentTypes['Continent']> = ResolversObject<{
    code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    countries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
    awsRegion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    continent?: Resolver<ResolversTypes['Continent'], ParentType, ContextType>;
    currencies?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    emoji?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    emojiU?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<CountrynameArgs>>;
    native?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    phones?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    states?: Resolver<Array<ResolversTypes['State']>, ParentType, ContextType>;
    subdivisions?: Resolver<Array<ResolversTypes['Subdivision']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
    code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    native?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    rtl?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = ResolversObject<{
    code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SubdivisionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subdivision'] = ResolversParentTypes['Subdivision']> = ResolversObject<{
    code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    emoji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    uploadFile?: Resolver<Maybe<ResolversTypes['ApiResponse']>, ParentType, ContextType, RequireFields<MutationuploadFileArgs, 'petId'>>;
    addPet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationaddPetArgs, 'input'>>;
    updatePet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePetArgs, 'input'>>;
    updatePetWithForm?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePetWithFormArgs, 'petId'>>;
    deletePet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeletePetArgs, 'petId'>>;
    placeOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationplaceOrderArgs, 'input'>>;
    deleteOrder?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteOrderArgs, 'orderId'>>;
    createUsersWithArrayInput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcreateUsersWithArrayInputArgs, 'input'>>;
    createUsersWithListInput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcreateUsersWithListInputArgs, 'input'>>;
    updateUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'username' | 'input'>>;
    deleteUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'username'>>;
    createUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
    UpdateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
    SaveMediaListEntry?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType, Partial<MutationSaveMediaListEntryArgs>>;
    UpdateMediaListEntries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, Partial<MutationUpdateMediaListEntriesArgs>>;
    DeleteMediaListEntry?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteMediaListEntryArgs>>;
    DeleteCustomList?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteCustomListArgs>>;
    SaveTextActivity?: Resolver<Maybe<ResolversTypes['TextActivity']>, ParentType, ContextType, Partial<MutationSaveTextActivityArgs>>;
    SaveMessageActivity?: Resolver<Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType, Partial<MutationSaveMessageActivityArgs>>;
    SaveListActivity?: Resolver<Maybe<ResolversTypes['ListActivity']>, ParentType, ContextType, Partial<MutationSaveListActivityArgs>>;
    DeleteActivity?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteActivityArgs>>;
    ToggleActivityPin?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, Partial<MutationToggleActivityPinArgs>>;
    ToggleActivitySubscription?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, Partial<MutationToggleActivitySubscriptionArgs>>;
    SaveActivityReply?: Resolver<Maybe<ResolversTypes['ActivityReply']>, ParentType, ContextType, Partial<MutationSaveActivityReplyArgs>>;
    DeleteActivityReply?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteActivityReplyArgs>>;
    ToggleLike?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<MutationToggleLikeArgs>>;
    ToggleLikeV2?: Resolver<Maybe<ResolversTypes['LikeableUnion']>, ParentType, ContextType, Partial<MutationToggleLikeV2Args>>;
    ToggleFollow?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationToggleFollowArgs>>;
    ToggleFavourite?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, Partial<MutationToggleFavouriteArgs>>;
    UpdateFavouriteOrder?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, Partial<MutationUpdateFavouriteOrderArgs>>;
    SaveReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, Partial<MutationSaveReviewArgs>>;
    DeleteReview?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteReviewArgs>>;
    RateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, Partial<MutationRateReviewArgs>>;
    SaveRecommendation?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType, Partial<MutationSaveRecommendationArgs>>;
    SaveThread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, Partial<MutationSaveThreadArgs>>;
    DeleteThread?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteThreadArgs>>;
    ToggleThreadSubscription?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, Partial<MutationToggleThreadSubscriptionArgs>>;
    SaveThreadComment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType, Partial<MutationSaveThreadCommentArgs>>;
    DeleteThreadComment?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, Partial<MutationDeleteThreadCommentArgs>>;
    UpdateAniChartSettings?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, Partial<MutationUpdateAniChartSettingsArgs>>;
    UpdateAniChartHighlights?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, Partial<MutationUpdateAniChartHighlightsArgs>>;
}>;
export type PetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pet'] = ResolversParentTypes['Pet']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    photoUrls?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
    tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['mutationInput_addPet_input_status']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    petId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    shipDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['mutation_placeOrder_status']>, ParentType, ContextType>;
    complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime';
}
export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
    name: 'JSON';
}
export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<UseraboutArgs>>;
    avatar?: Resolver<Maybe<ResolversTypes['UserAvatar']>, ParentType, ContextType>;
    bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isFollower?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    bans?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    options?: Resolver<Maybe<ResolversTypes['UserOptions']>, ParentType, ContextType>;
    mediaListOptions?: Resolver<Maybe<ResolversTypes['MediaListOptions']>, ParentType, ContextType>;
    favourites?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, Partial<UserfavouritesArgs>>;
    statistics?: Resolver<Maybe<ResolversTypes['UserStatisticTypes']>, ParentType, ContextType>;
    unreadNotificationCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    donatorTier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    donatorBadge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    moderatorRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModRole']>>>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    stats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>;
    moderatorStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previousNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserPreviousName']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ApiResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiResponse'] = ResolversParentTypes['ApiResponse']> = ResolversObject<{
    code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
    name: 'ObjMap';
}
export type PageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = ResolversObject<{
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<PageusersArgs>>;
    media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, Partial<PagemediaArgs>>;
    characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, Partial<PagecharactersArgs>>;
    staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, Partial<PagestaffArgs>>;
    studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType, Partial<PagestudiosArgs>>;
    mediaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, Partial<PagemediaListArgs>>;
    airingSchedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType, Partial<PageairingSchedulesArgs>>;
    mediaTrends?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType, Partial<PagemediaTrendsArgs>>;
    notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, ParentType, ContextType, Partial<PagenotificationsArgs>>;
    followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PagefollowersArgs, 'userId'>>;
    following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PagefollowingArgs, 'userId'>>;
    activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>>, ParentType, ContextType, Partial<PageactivitiesArgs>>;
    activityReplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType, Partial<PageactivityRepliesArgs>>;
    threads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thread']>>>, ParentType, ContextType, Partial<PagethreadsArgs>>;
    threadComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, Partial<PagethreadCommentsArgs>>;
    reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, Partial<PagereviewsArgs>>;
    recommendations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType, Partial<PagerecommendationsArgs>>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<PagelikesArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
    total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserAvatarResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserAvatar'] = ResolversParentTypes['UserAvatar']> = ResolversObject<{
    large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
    name: 'Json';
}
export type UserOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserOptions'] = ResolversParentTypes['UserOptions']> = ResolversObject<{
    titleLanguage?: Resolver<Maybe<ResolversTypes['UserTitleLanguage']>, ParentType, ContextType>;
    displayAdultContent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    airingNotifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    profileColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    notificationOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationOption']>>>, ParentType, ContextType>;
    timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    activityMergeTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    staffNameLanguage?: Resolver<Maybe<ResolversTypes['UserStaffNameLanguage']>, ParentType, ContextType>;
    restrictMessagesToFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    disabledListActivity?: Resolver<Maybe<Array<Maybe<ResolversTypes['ListActivityOption']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type NotificationOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NotificationOption'] = ResolversParentTypes['NotificationOption']> = ResolversObject<{
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ListActivityOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ListActivityOption'] = ResolversParentTypes['ListActivityOption']> = ResolversObject<{
    disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaListOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaListOptions'] = ResolversParentTypes['MediaListOptions']> = ResolversObject<{
    scoreFormat?: Resolver<Maybe<ResolversTypes['ScoreFormat']>, ParentType, ContextType>;
    rowOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    useLegacyLists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    animeList?: Resolver<Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>;
    mangaList?: Resolver<Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>;
    sharedTheme?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    sharedThemeEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaListTypeOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaListTypeOptions'] = ResolversParentTypes['MediaListTypeOptions']> = ResolversObject<{
    sectionOrder?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    splitCompletedSectionByFormat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    theme?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    customLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    advancedScoring?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    advancedScoringEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FavouritesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Favourites'] = ResolversParentTypes['Favourites']> = ResolversObject<{
    anime?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, Partial<FavouritesanimeArgs>>;
    manga?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, Partial<FavouritesmangaArgs>>;
    characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, Partial<FavouritescharactersArgs>>;
    staff?: Resolver<Maybe<ResolversTypes['StaffConnection']>, ParentType, ContextType, Partial<FavouritesstaffArgs>>;
    studios?: Resolver<Maybe<ResolversTypes['StudioConnection']>, ParentType, ContextType, Partial<FavouritesstudiosArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    relationType?: Resolver<Maybe<ResolversTypes['MediaRelation']>, ParentType, ContextType, Partial<MediaEdgerelationTypeArgs>>;
    isMainStudio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
    characterRole?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
    characterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    roleNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dubGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    staffRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, Partial<MediaEdgevoiceActorsArgs>>;
    voiceActorRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffRoleType']>>>, ParentType, ContextType, Partial<MediaEdgevoiceActorRolesArgs>>;
    favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    idMal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['MediaTitle']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
    format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['MediaStatus']>, ParentType, ContextType, Partial<MediastatusArgs>>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MediadescriptionArgs>>;
    startDate?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    endDate?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    season?: Resolver<Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>;
    seasonYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    seasonInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    episodes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    chapters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    volumes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countryOfOrigin?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
    isLicensed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    source?: Resolver<Maybe<ResolversTypes['MediaSource']>, ParentType, ContextType, Partial<MediasourceArgs>>;
    hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    trailer?: Resolver<Maybe<ResolversTypes['MediaTrailer']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    coverImage?: Resolver<Maybe<ResolversTypes['MediaCoverImage']>, ParentType, ContextType>;
    bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    synonyms?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    averageScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    trending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTag']>>>, ParentType, ContextType>;
    relations?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType>;
    characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, Partial<MediacharactersArgs>>;
    staff?: Resolver<Maybe<ResolversTypes['StaffConnection']>, ParentType, ContextType, Partial<MediastaffArgs>>;
    studios?: Resolver<Maybe<ResolversTypes['StudioConnection']>, ParentType, ContextType, Partial<MediastudiosArgs>>;
    isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isFavouriteBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isAdult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    nextAiringEpisode?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>;
    airingSchedule?: Resolver<Maybe<ResolversTypes['AiringScheduleConnection']>, ParentType, ContextType, Partial<MediaairingScheduleArgs>>;
    trends?: Resolver<Maybe<ResolversTypes['MediaTrendConnection']>, ParentType, ContextType, Partial<MediatrendsArgs>>;
    externalLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaExternalLink']>>>, ParentType, ContextType>;
    streamingEpisodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaStreamingEpisode']>>>, ParentType, ContextType>;
    rankings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaRank']>>>, ParentType, ContextType>;
    mediaListEntry?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType>;
    reviews?: Resolver<Maybe<ResolversTypes['ReviewConnection']>, ParentType, ContextType, Partial<MediareviewsArgs>>;
    recommendations?: Resolver<Maybe<ResolversTypes['RecommendationConnection']>, ParentType, ContextType, Partial<MediarecommendationsArgs>>;
    stats?: Resolver<Maybe<ResolversTypes['MediaStats']>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    autoCreateForumThread?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isRecommendationBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isReviewBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaTitleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaTitle'] = ResolversParentTypes['MediaTitle']> = ResolversObject<{
    romaji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MediaTitleromajiArgs>>;
    english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MediaTitleenglishArgs>>;
    native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MediaTitlenativeArgs>>;
    userPreferred?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FuzzyDateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FuzzyDate'] = ResolversParentTypes['FuzzyDate']> = ResolversObject<{
    year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
    name: 'CountryCode';
}
export type MediaTrailerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaTrailer'] = ResolversParentTypes['MediaTrailer']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaCoverImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaCoverImage'] = ResolversParentTypes['MediaCoverImage']> = ResolversObject<{
    extraLarge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaTagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaTag'] = ResolversParentTypes['MediaTag']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isGeneralSpoiler?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isMediaSpoiler?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isAdult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterConnection'] = ResolversParentTypes['CharacterConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterEdge'] = ResolversParentTypes['CharacterEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, Partial<CharacterEdgevoiceActorsArgs>>;
    voiceActorRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffRoleType']>>>, ParentType, ContextType, Partial<CharacterEdgevoiceActorRolesArgs>>;
    media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
    favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['CharacterName']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['CharacterImage']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CharacterdescriptionArgs>>;
    gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dateOfBirth?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    age?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    bloodType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isFavouriteBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, Partial<CharactermediaArgs>>;
    updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterName'] = ResolversParentTypes['CharacterName']> = ResolversObject<{
    first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    middle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    alternative?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    alternativeSpoiler?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    userPreferred?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterImage'] = ResolversParentTypes['CharacterImage']> = ResolversObject<{
    large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Staff'] = ResolversParentTypes['Staff']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['StaffName']>, ParentType, ContextType>;
    language?: Resolver<Maybe<ResolversTypes['StaffLanguage']>, ParentType, ContextType>;
    languageV2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['StaffImage']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<StaffdescriptionArgs>>;
    primaryOccupations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dateOfBirth?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    dateOfDeath?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    yearsActive?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
    homeTown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    bloodType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isFavouriteBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    staffMedia?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, Partial<StaffstaffMediaArgs>>;
    characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, Partial<StaffcharactersArgs>>;
    characterMedia?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, Partial<StaffcharacterMediaArgs>>;
    updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    submissionStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    submissionNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffName'] = ResolversParentTypes['StaffName']> = ResolversObject<{
    first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    middle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    alternative?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    userPreferred?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffImage'] = ResolversParentTypes['StaffImage']> = ResolversObject<{
    large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffRoleTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffRoleType'] = ResolversParentTypes['StaffRoleType']> = ResolversObject<{
    voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    roleNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dubGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffConnection'] = ResolversParentTypes['StaffConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffEdge'] = ResolversParentTypes['StaffEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StudioConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StudioConnection'] = ResolversParentTypes['StudioConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StudioEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StudioEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StudioEdge'] = ResolversParentTypes['StudioEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isMain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StudioResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Studio'] = ResolversParentTypes['Studio']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    isAnimationStudio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, Partial<StudiomediaArgs>>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AiringScheduleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AiringSchedule'] = ResolversParentTypes['AiringSchedule']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    airingAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timeUntilAiring?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    episode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AiringScheduleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AiringScheduleConnection'] = ResolversParentTypes['AiringScheduleConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringScheduleEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AiringScheduleEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AiringScheduleEdge'] = ResolversParentTypes['AiringScheduleEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaTrendConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaTrendConnection'] = ResolversParentTypes['MediaTrendConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrendEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaTrendEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaTrendEdge'] = ResolversParentTypes['MediaTrendEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaTrendResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaTrend'] = ResolversParentTypes['MediaTrend']> = ResolversObject<{
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    trending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    averageScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    inProgress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    releasing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    episode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaExternalLinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaExternalLink'] = ResolversParentTypes['MediaExternalLink']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    site?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    siteId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['ExternalLinkType']>, ParentType, ContextType>;
    language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isDisabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaStreamingEpisodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaStreamingEpisode'] = ResolversParentTypes['MediaStreamingEpisode']> = ResolversObject<{
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaRankResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaRank'] = ResolversParentTypes['MediaRank']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['MediaRankType'], ParentType, ContextType>;
    format?: Resolver<ResolversTypes['MediaFormat'], ParentType, ContextType>;
    year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    season?: Resolver<Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>;
    allTime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    context?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaList'] = ResolversParentTypes['MediaList']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, Partial<MediaListscoreArgs>>;
    progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    progressVolumes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    repeat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    hiddenFromStatusLists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    customLists?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, Partial<MediaListcustomListsArgs>>;
    advancedScores?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    startedAt?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    completedAt?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ReviewConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReviewConnection'] = ResolversParentTypes['ReviewConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ReviewEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReviewEdge'] = ResolversParentTypes['ReviewEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaType?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ReviewbodyArgs>>;
    rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    ratingAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    userRating?: Resolver<Maybe<ResolversTypes['ReviewRating']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RecommendationConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RecommendationConnection'] = ResolversParentTypes['RecommendationConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecommendationEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RecommendationEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RecommendationEdge'] = ResolversParentTypes['RecommendationEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RecommendationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Recommendation'] = ResolversParentTypes['Recommendation']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    userRating?: Resolver<Maybe<ResolversTypes['RecommendationRating']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    mediaRecommendation?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaStats'] = ResolversParentTypes['MediaStats']> = ResolversObject<{
    scoreDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
    statusDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
    airingProgression?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringProgression']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ScoreDistributionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScoreDistribution'] = ResolversParentTypes['ScoreDistribution']> = ResolversObject<{
    score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StatusDistributionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StatusDistribution'] = ResolversParentTypes['StatusDistribution']> = ResolversObject<{
    status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AiringProgressionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AiringProgression'] = ResolversParentTypes['AiringProgression']> = ResolversObject<{
    episode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    watching?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStatisticTypesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStatisticTypes'] = ResolversParentTypes['UserStatisticTypes']> = ResolversObject<{
    anime?: Resolver<Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>;
    manga?: Resolver<Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStatisticsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStatistics'] = ResolversParentTypes['UserStatistics']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    standardDeviation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    episodesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    volumesRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    formats?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserFormatStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsformatsArgs>>;
    statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStatusStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsstatusesArgs>>;
    scores?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserScoreStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsscoresArgs>>;
    lengths?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserLengthStatistic']>>>, ParentType, ContextType, Partial<UserStatisticslengthsArgs>>;
    releaseYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserReleaseYearStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsreleaseYearsArgs>>;
    startYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStartYearStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsstartYearsArgs>>;
    genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserGenreStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsgenresArgs>>;
    tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserTagStatistic']>>>, ParentType, ContextType, Partial<UserStatisticstagsArgs>>;
    countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCountryStatistic']>>>, ParentType, ContextType, Partial<UserStatisticscountriesArgs>>;
    voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserVoiceActorStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsvoiceActorsArgs>>;
    staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStaffStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsstaffArgs>>;
    studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStudioStatistic']>>>, ParentType, ContextType, Partial<UserStatisticsstudiosArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserFormatStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserFormatStatistic'] = ResolversParentTypes['UserFormatStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStatusStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStatusStatistic'] = ResolversParentTypes['UserStatusStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserScoreStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserScoreStatistic'] = ResolversParentTypes['UserScoreStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserLengthStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserLengthStatistic'] = ResolversParentTypes['UserLengthStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserReleaseYearStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserReleaseYearStatistic'] = ResolversParentTypes['UserReleaseYearStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    releaseYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStartYearStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStartYearStatistic'] = ResolversParentTypes['UserStartYearStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    startYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserGenreStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserGenreStatistic'] = ResolversParentTypes['UserGenreStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserTagStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserTagStatistic'] = ResolversParentTypes['UserTagStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    tag?: Resolver<Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserCountryStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserCountryStatistic'] = ResolversParentTypes['UserCountryStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    country?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserVoiceActorStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserVoiceActorStatistic'] = ResolversParentTypes['UserVoiceActorStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    characterIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStaffStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStaffStatistic'] = ResolversParentTypes['UserStaffStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStudioStatisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStudioStatistic'] = ResolversParentTypes['UserStudioStatistic']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
    studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = ResolversObject<{
    watchedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    chaptersRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activityHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserActivityHistory']>>>, ParentType, ContextType>;
    animeStatusDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
    mangaStatusDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
    animeScoreDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
    mangaScoreDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
    animeListScores?: Resolver<Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>;
    mangaListScores?: Resolver<Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>;
    favouredGenresOverview?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenreStats']>>>, ParentType, ContextType>;
    favouredGenres?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenreStats']>>>, ParentType, ContextType>;
    favouredTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagStats']>>>, ParentType, ContextType>;
    favouredActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffStats']>>>, ParentType, ContextType>;
    favouredStaff?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffStats']>>>, ParentType, ContextType>;
    favouredStudios?: Resolver<Maybe<Array<Maybe<ResolversTypes['StudioStats']>>>, ParentType, ContextType>;
    favouredYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['YearStats']>>>, ParentType, ContextType>;
    favouredFormats?: Resolver<Maybe<Array<Maybe<ResolversTypes['FormatStats']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserActivityHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserActivityHistory'] = ResolversParentTypes['UserActivityHistory']> = ResolversObject<{
    date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ListScoreStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ListScoreStats'] = ResolversParentTypes['ListScoreStats']> = ResolversObject<{
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    standardDeviation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type GenreStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GenreStats'] = ResolversParentTypes['GenreStats']> = ResolversObject<{
    genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TagStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TagStats'] = ResolversParentTypes['TagStats']> = ResolversObject<{
    tag?: Resolver<Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffStats'] = ResolversParentTypes['StaffStats']> = ResolversObject<{
    staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StudioStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StudioStats'] = ResolversParentTypes['StudioStats']> = ResolversObject<{
    studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type YearStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['YearStats'] = ResolversParentTypes['YearStats']> = ResolversObject<{
    year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FormatStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FormatStats'] = ResolversParentTypes['FormatStats']> = ResolversObject<{
    format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserPreviousNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserPreviousName'] = ResolversParentTypes['UserPreviousName']> = ResolversObject<{
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface FuzzyDateIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FuzzyDateInt'], any> {
    name: 'FuzzyDateInt';
}
export type NotificationUnionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NotificationUnion'] = ResolversParentTypes['NotificationUnion']> = ResolversObject<{
    __resolveType: TypeResolveFn<'AiringNotification' | 'FollowingNotification' | 'ActivityMessageNotification' | 'ActivityMentionNotification' | 'ActivityReplyNotification' | 'ActivityReplySubscribedNotification' | 'ActivityLikeNotification' | 'ActivityReplyLikeNotification' | 'ThreadCommentMentionNotification' | 'ThreadCommentReplyNotification' | 'ThreadCommentSubscribedNotification' | 'ThreadCommentLikeNotification' | 'ThreadLikeNotification' | 'RelatedMediaAdditionNotification' | 'MediaDataChangeNotification' | 'MediaMergeNotification' | 'MediaDeletionNotification', ParentType, ContextType>;
}>;
export type AiringNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AiringNotification'] = ResolversParentTypes['AiringNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    animeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    episode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    contexts?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FollowingNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FollowingNotification'] = ResolversParentTypes['FollowingNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityMessageNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityMessageNotification'] = ResolversParentTypes['ActivityMessageNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MessageActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MessageActivity'] = ResolversParentTypes['MessageActivity']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    recipientId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    messengerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
    replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MessageActivitymessageArgs>>;
    isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isPrivate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    recipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    messenger?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityReplyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityReply'] = ResolversParentTypes['ActivityReply']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ActivityReplytextArgs>>;
    likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityMentionNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityMentionNotification'] = ResolversParentTypes['ActivityMentionNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityUnionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityUnion'] = ResolversParentTypes['ActivityUnion']> = ResolversObject<{
    __resolveType: TypeResolveFn<'TextActivity' | 'ListActivity' | 'MessageActivity', ParentType, ContextType>;
}>;
export type TextActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TextActivity'] = ResolversParentTypes['TextActivity']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
    replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<TextActivitytextArgs>>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isPinned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ListActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ListActivity'] = ResolversParentTypes['ListActivity']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
    replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    progress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isPinned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityReplyNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityReplyNotification'] = ResolversParentTypes['ActivityReplyNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityReplySubscribedNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityReplySubscribedNotification'] = ResolversParentTypes['ActivityReplySubscribedNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityLikeNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityLikeNotification'] = ResolversParentTypes['ActivityLikeNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ActivityReplyLikeNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityReplyLikeNotification'] = ResolversParentTypes['ActivityReplyLikeNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadCommentMentionNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadCommentMentionNotification'] = ResolversParentTypes['ThreadCommentMentionNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ThreadbodyArgs>>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    replyUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    replyCommentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    replyCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    viewCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isSticky?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    repliedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    replyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadCategory']>>>, ParentType, ContextType>;
    mediaCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadCategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadCategory'] = ResolversParentTypes['ThreadCategory']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadCommentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadComment'] = ResolversParentTypes['ThreadComment']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    threadId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ThreadCommentcommentArgs>>;
    likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    childComments?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadCommentReplyNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadCommentReplyNotification'] = ResolversParentTypes['ThreadCommentReplyNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadCommentSubscribedNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadCommentSubscribedNotification'] = ResolversParentTypes['ThreadCommentSubscribedNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadCommentLikeNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadCommentLikeNotification'] = ResolversParentTypes['ThreadCommentLikeNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ThreadLikeNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadLikeNotification'] = ResolversParentTypes['ThreadLikeNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    threadId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RelatedMediaAdditionNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelatedMediaAdditionNotification'] = ResolversParentTypes['RelatedMediaAdditionNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaDataChangeNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaDataChangeNotification'] = ResolversParentTypes['MediaDataChangeNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaMergeNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaMergeNotification'] = ResolversParentTypes['MediaMergeNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deletedMediaTitles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaDeletionNotificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaDeletionNotification'] = ResolversParentTypes['MediaDeletionNotification']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
    deletedMediaTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaListCollectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaListCollection'] = ResolversParentTypes['MediaListCollection']> = ResolversObject<{
    lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaListGroup']>>>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    hasNextChunk?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    statusLists?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>>>, ParentType, ContextType, Partial<MediaListCollectionstatusListsArgs>>;
    customLists?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>>>, ParentType, ContextType, Partial<MediaListCollectioncustomListsArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaListGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaListGroup'] = ResolversParentTypes['MediaListGroup']> = ResolversObject<{
    entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isCustomList?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isSplitCompletedList?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ParsedMarkdownResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ParsedMarkdown'] = ResolversParentTypes['ParsedMarkdown']> = ResolversObject<{
    html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type AniChartUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AniChartUser'] = ResolversParentTypes['AniChartUser']> = ResolversObject<{
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    settings?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    highlights?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SiteStatisticsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SiteStatistics'] = ResolversParentTypes['SiteStatistics']> = ResolversObject<{
    users?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticsusersArgs>>;
    anime?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticsanimeArgs>>;
    manga?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticsmangaArgs>>;
    characters?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticscharactersArgs>>;
    staff?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticsstaffArgs>>;
    studios?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticsstudiosArgs>>;
    reviews?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, Partial<SiteStatisticsreviewsArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SiteTrendConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SiteTrendConnection'] = ResolversParentTypes['SiteTrendConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteTrendEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteTrend']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SiteTrendEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SiteTrendEdge'] = ResolversParentTypes['SiteTrendEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['SiteTrend']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SiteTrendResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SiteTrend'] = ResolversParentTypes['SiteTrend']> = ResolversObject<{
    date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type DeletedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deleted'] = ResolversParentTypes['Deleted']> = ResolversObject<{
    deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LikeableUnionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LikeableUnion'] = ResolversParentTypes['LikeableUnion']> = ResolversObject<{
    __resolveType: TypeResolveFn<'ListActivity' | 'TextActivity' | 'MessageActivity' | 'ActivityReply' | 'Thread' | 'ThreadComment', ParentType, ContextType>;
}>;
export type InternalPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InternalPage'] = ResolversParentTypes['InternalPage']> = ResolversObject<{
    mediaSubmissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmission']>>>, ParentType, ContextType, Partial<InternalPagemediaSubmissionsArgs>>;
    characterSubmissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterSubmission']>>>, ParentType, ContextType, Partial<InternalPagecharacterSubmissionsArgs>>;
    staffSubmissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffSubmission']>>>, ParentType, ContextType, Partial<InternalPagestaffSubmissionsArgs>>;
    revisionHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['RevisionHistory']>>>, ParentType, ContextType, Partial<InternalPagerevisionHistoryArgs>>;
    reports?: Resolver<Maybe<Array<Maybe<ResolversTypes['Report']>>>, ParentType, ContextType, Partial<InternalPagereportsArgs>>;
    modActions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModAction']>>>, ParentType, ContextType, Partial<InternalPagemodActionsArgs>>;
    userBlockSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<InternalPageuserBlockSearchArgs>>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<InternalPageusersArgs>>;
    media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, Partial<InternalPagemediaArgs>>;
    characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, Partial<InternalPagecharactersArgs>>;
    staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, Partial<InternalPagestaffArgs>>;
    studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType, Partial<InternalPagestudiosArgs>>;
    mediaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, Partial<InternalPagemediaListArgs>>;
    airingSchedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType, Partial<InternalPageairingSchedulesArgs>>;
    mediaTrends?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType, Partial<InternalPagemediaTrendsArgs>>;
    notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, ParentType, ContextType, Partial<InternalPagenotificationsArgs>>;
    followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPagefollowersArgs, 'userId'>>;
    following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPagefollowingArgs, 'userId'>>;
    activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>>, ParentType, ContextType, Partial<InternalPageactivitiesArgs>>;
    activityReplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType, Partial<InternalPageactivityRepliesArgs>>;
    threads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thread']>>>, ParentType, ContextType, Partial<InternalPagethreadsArgs>>;
    threadComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, Partial<InternalPagethreadCommentsArgs>>;
    reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, Partial<InternalPagereviewsArgs>>;
    recommendations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType, Partial<InternalPagerecommendationsArgs>>;
    likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<InternalPagelikesArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaSubmissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaSubmission'] = ResolversParentTypes['MediaSubmission']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    assignee?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
    submitterStats?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    changes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    locked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    submission?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
    staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
    studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
    relations?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaEdge']>>>, ParentType, ContextType>;
    externalLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaSubmissionComparisonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaSubmissionComparison'] = ResolversParentTypes['MediaSubmissionComparison']> = ResolversObject<{
    submission?: Resolver<Maybe<ResolversTypes['MediaSubmissionEdge']>, ParentType, ContextType>;
    character?: Resolver<Maybe<ResolversTypes['MediaCharacter']>, ParentType, ContextType>;
    staff?: Resolver<Maybe<ResolversTypes['StaffEdge']>, ParentType, ContextType>;
    studio?: Resolver<Maybe<ResolversTypes['StudioEdge']>, ParentType, ContextType>;
    externalLink?: Resolver<Maybe<ResolversTypes['MediaExternalLink']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaSubmissionEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaSubmissionEdge'] = ResolversParentTypes['MediaSubmissionEdge']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    characterRole?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
    staffRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    roleNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dubGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    characterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isMain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    characterSubmission?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    voiceActorSubmission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    staffSubmission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
    externalLink?: Resolver<Maybe<ResolversTypes['MediaExternalLink']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MediaCharacterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaCharacter'] = ResolversParentTypes['MediaCharacter']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
    roleNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dubGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    characterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterSubmissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterSubmission'] = ResolversParentTypes['CharacterSubmission']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    submission?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    assignee?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
    notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    locked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type StaffSubmissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StaffSubmission'] = ResolversParentTypes['StaffSubmission']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    submission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    assignee?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
    notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    locked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RevisionHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RevisionHistory'] = ResolversParentTypes['RevisionHistory']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    action?: Resolver<Maybe<ResolversTypes['RevisionHistoryAction']>, ParentType, ContextType>;
    changes?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
    character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
    staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
    studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
    externalLink?: Resolver<Maybe<ResolversTypes['MediaExternalLink']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ReportResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    reporter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    reported?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    cleared?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ModActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ModAction'] = ResolversParentTypes['ModAction']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    mod?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['ModActionType']>, ParentType, ContextType>;
    objectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    objectType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterSubmissionConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterSubmissionConnection'] = ResolversParentTypes['CharacterSubmissionConnection']> = ResolversObject<{
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterSubmissionEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterSubmission']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type CharacterSubmissionEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacterSubmissionEdge'] = ResolversParentTypes['CharacterSubmissionEdge']> = ResolversObject<{
    node?: Resolver<Maybe<ResolversTypes['CharacterSubmission']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
    voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>;
    submittedVoiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffSubmission']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserModDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserModData'] = ResolversParentTypes['UserModData']> = ResolversObject<{
    alts?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    bans?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    ip?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    counts?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
    privacy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Query?: QueryResolvers<ContextType>;
    Continent?: ContinentResolvers<ContextType>;
    Country?: CountryResolvers<ContextType>;
    Language?: LanguageResolvers<ContextType>;
    State?: StateResolvers<ContextType>;
    Subdivision?: SubdivisionResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Pet?: PetResolvers<ContextType>;
    BigInt?: GraphQLScalarType;
    Category?: CategoryResolvers<ContextType>;
    Tag?: TagResolvers<ContextType>;
    Order?: OrderResolvers<ContextType>;
    DateTime?: GraphQLScalarType;
    JSON?: GraphQLScalarType;
    User?: UserResolvers<ContextType>;
    ApiResponse?: ApiResponseResolvers<ContextType>;
    ObjMap?: GraphQLScalarType;
    Page?: PageResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    UserAvatar?: UserAvatarResolvers<ContextType>;
    Json?: GraphQLScalarType;
    UserOptions?: UserOptionsResolvers<ContextType>;
    NotificationOption?: NotificationOptionResolvers<ContextType>;
    ListActivityOption?: ListActivityOptionResolvers<ContextType>;
    MediaListOptions?: MediaListOptionsResolvers<ContextType>;
    MediaListTypeOptions?: MediaListTypeOptionsResolvers<ContextType>;
    Favourites?: FavouritesResolvers<ContextType>;
    MediaConnection?: MediaConnectionResolvers<ContextType>;
    MediaEdge?: MediaEdgeResolvers<ContextType>;
    Media?: MediaResolvers<ContextType>;
    MediaTitle?: MediaTitleResolvers<ContextType>;
    FuzzyDate?: FuzzyDateResolvers<ContextType>;
    CountryCode?: GraphQLScalarType;
    MediaTrailer?: MediaTrailerResolvers<ContextType>;
    MediaCoverImage?: MediaCoverImageResolvers<ContextType>;
    MediaTag?: MediaTagResolvers<ContextType>;
    CharacterConnection?: CharacterConnectionResolvers<ContextType>;
    CharacterEdge?: CharacterEdgeResolvers<ContextType>;
    Character?: CharacterResolvers<ContextType>;
    CharacterName?: CharacterNameResolvers<ContextType>;
    CharacterImage?: CharacterImageResolvers<ContextType>;
    Staff?: StaffResolvers<ContextType>;
    StaffName?: StaffNameResolvers<ContextType>;
    StaffImage?: StaffImageResolvers<ContextType>;
    StaffRoleType?: StaffRoleTypeResolvers<ContextType>;
    StaffConnection?: StaffConnectionResolvers<ContextType>;
    StaffEdge?: StaffEdgeResolvers<ContextType>;
    StudioConnection?: StudioConnectionResolvers<ContextType>;
    StudioEdge?: StudioEdgeResolvers<ContextType>;
    Studio?: StudioResolvers<ContextType>;
    AiringSchedule?: AiringScheduleResolvers<ContextType>;
    AiringScheduleConnection?: AiringScheduleConnectionResolvers<ContextType>;
    AiringScheduleEdge?: AiringScheduleEdgeResolvers<ContextType>;
    MediaTrendConnection?: MediaTrendConnectionResolvers<ContextType>;
    MediaTrendEdge?: MediaTrendEdgeResolvers<ContextType>;
    MediaTrend?: MediaTrendResolvers<ContextType>;
    MediaExternalLink?: MediaExternalLinkResolvers<ContextType>;
    MediaStreamingEpisode?: MediaStreamingEpisodeResolvers<ContextType>;
    MediaRank?: MediaRankResolvers<ContextType>;
    MediaList?: MediaListResolvers<ContextType>;
    ReviewConnection?: ReviewConnectionResolvers<ContextType>;
    ReviewEdge?: ReviewEdgeResolvers<ContextType>;
    Review?: ReviewResolvers<ContextType>;
    RecommendationConnection?: RecommendationConnectionResolvers<ContextType>;
    RecommendationEdge?: RecommendationEdgeResolvers<ContextType>;
    Recommendation?: RecommendationResolvers<ContextType>;
    MediaStats?: MediaStatsResolvers<ContextType>;
    ScoreDistribution?: ScoreDistributionResolvers<ContextType>;
    StatusDistribution?: StatusDistributionResolvers<ContextType>;
    AiringProgression?: AiringProgressionResolvers<ContextType>;
    UserStatisticTypes?: UserStatisticTypesResolvers<ContextType>;
    UserStatistics?: UserStatisticsResolvers<ContextType>;
    UserFormatStatistic?: UserFormatStatisticResolvers<ContextType>;
    UserStatusStatistic?: UserStatusStatisticResolvers<ContextType>;
    UserScoreStatistic?: UserScoreStatisticResolvers<ContextType>;
    UserLengthStatistic?: UserLengthStatisticResolvers<ContextType>;
    UserReleaseYearStatistic?: UserReleaseYearStatisticResolvers<ContextType>;
    UserStartYearStatistic?: UserStartYearStatisticResolvers<ContextType>;
    UserGenreStatistic?: UserGenreStatisticResolvers<ContextType>;
    UserTagStatistic?: UserTagStatisticResolvers<ContextType>;
    UserCountryStatistic?: UserCountryStatisticResolvers<ContextType>;
    UserVoiceActorStatistic?: UserVoiceActorStatisticResolvers<ContextType>;
    UserStaffStatistic?: UserStaffStatisticResolvers<ContextType>;
    UserStudioStatistic?: UserStudioStatisticResolvers<ContextType>;
    UserStats?: UserStatsResolvers<ContextType>;
    UserActivityHistory?: UserActivityHistoryResolvers<ContextType>;
    ListScoreStats?: ListScoreStatsResolvers<ContextType>;
    GenreStats?: GenreStatsResolvers<ContextType>;
    TagStats?: TagStatsResolvers<ContextType>;
    StaffStats?: StaffStatsResolvers<ContextType>;
    StudioStats?: StudioStatsResolvers<ContextType>;
    YearStats?: YearStatsResolvers<ContextType>;
    FormatStats?: FormatStatsResolvers<ContextType>;
    UserPreviousName?: UserPreviousNameResolvers<ContextType>;
    FuzzyDateInt?: GraphQLScalarType;
    NotificationUnion?: NotificationUnionResolvers<ContextType>;
    AiringNotification?: AiringNotificationResolvers<ContextType>;
    FollowingNotification?: FollowingNotificationResolvers<ContextType>;
    ActivityMessageNotification?: ActivityMessageNotificationResolvers<ContextType>;
    MessageActivity?: MessageActivityResolvers<ContextType>;
    ActivityReply?: ActivityReplyResolvers<ContextType>;
    ActivityMentionNotification?: ActivityMentionNotificationResolvers<ContextType>;
    ActivityUnion?: ActivityUnionResolvers<ContextType>;
    TextActivity?: TextActivityResolvers<ContextType>;
    ListActivity?: ListActivityResolvers<ContextType>;
    ActivityReplyNotification?: ActivityReplyNotificationResolvers<ContextType>;
    ActivityReplySubscribedNotification?: ActivityReplySubscribedNotificationResolvers<ContextType>;
    ActivityLikeNotification?: ActivityLikeNotificationResolvers<ContextType>;
    ActivityReplyLikeNotification?: ActivityReplyLikeNotificationResolvers<ContextType>;
    ThreadCommentMentionNotification?: ThreadCommentMentionNotificationResolvers<ContextType>;
    Thread?: ThreadResolvers<ContextType>;
    ThreadCategory?: ThreadCategoryResolvers<ContextType>;
    ThreadComment?: ThreadCommentResolvers<ContextType>;
    ThreadCommentReplyNotification?: ThreadCommentReplyNotificationResolvers<ContextType>;
    ThreadCommentSubscribedNotification?: ThreadCommentSubscribedNotificationResolvers<ContextType>;
    ThreadCommentLikeNotification?: ThreadCommentLikeNotificationResolvers<ContextType>;
    ThreadLikeNotification?: ThreadLikeNotificationResolvers<ContextType>;
    RelatedMediaAdditionNotification?: RelatedMediaAdditionNotificationResolvers<ContextType>;
    MediaDataChangeNotification?: MediaDataChangeNotificationResolvers<ContextType>;
    MediaMergeNotification?: MediaMergeNotificationResolvers<ContextType>;
    MediaDeletionNotification?: MediaDeletionNotificationResolvers<ContextType>;
    MediaListCollection?: MediaListCollectionResolvers<ContextType>;
    MediaListGroup?: MediaListGroupResolvers<ContextType>;
    ParsedMarkdown?: ParsedMarkdownResolvers<ContextType>;
    AniChartUser?: AniChartUserResolvers<ContextType>;
    SiteStatistics?: SiteStatisticsResolvers<ContextType>;
    SiteTrendConnection?: SiteTrendConnectionResolvers<ContextType>;
    SiteTrendEdge?: SiteTrendEdgeResolvers<ContextType>;
    SiteTrend?: SiteTrendResolvers<ContextType>;
    Deleted?: DeletedResolvers<ContextType>;
    LikeableUnion?: LikeableUnionResolvers<ContextType>;
    InternalPage?: InternalPageResolvers<ContextType>;
    MediaSubmission?: MediaSubmissionResolvers<ContextType>;
    MediaSubmissionComparison?: MediaSubmissionComparisonResolvers<ContextType>;
    MediaSubmissionEdge?: MediaSubmissionEdgeResolvers<ContextType>;
    MediaCharacter?: MediaCharacterResolvers<ContextType>;
    CharacterSubmission?: CharacterSubmissionResolvers<ContextType>;
    StaffSubmission?: StaffSubmissionResolvers<ContextType>;
    RevisionHistory?: RevisionHistoryResolvers<ContextType>;
    Report?: ReportResolvers<ContextType>;
    ModAction?: ModActionResolvers<ContextType>;
    CharacterSubmissionConnection?: CharacterSubmissionConnectionResolvers<ContextType>;
    CharacterSubmissionEdge?: CharacterSubmissionEdgeResolvers<ContextType>;
    UserModData?: UserModDataResolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    enum?: enumDirectiveResolver<any, any, ContextType>;
    globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
    httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = CountriesGraphQlTypes.Context & PetStoreSwaggerApiTypes.Context & AnimeCharactersGraphQlTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare const pollingInterval: any;
export declare function getBuiltMesh(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
export declare function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext): {
    GetAnimeCharacter(variables: Exact<{
        id: number;
    }>, options?: TOperationContext): Promise<GetAnimeCharacterQuery>;
    GetCountry(variables: Exact<{
        code: string;
    }>, options?: TOperationContext): Promise<GetCountryQuery>;
    GetPetById(variables: Exact<{
        petId: bigint;
    }>, options?: TOperationContext): Promise<GetPetByIdQuery>;
};
export type GetAnimeCharacterQueryVariables = Exact<{
    id: Scalars['Int']['input'];
}>;
export type GetAnimeCharacterQuery = {
    Character?: Maybe<(Pick<Character, 'age' | 'description'> & {
        name?: Maybe<Pick<CharacterName, 'first' | 'last'>>;
        image?: Maybe<Pick<CharacterImage, 'large'>>;
    })>;
};
export type GetCountryQueryVariables = Exact<{
    code: Scalars['ID']['input'];
}>;
export type GetCountryQuery = {
    country?: Maybe<(Pick<Country, 'name' | 'native' | 'capital' | 'emoji' | 'currency'> & {
        languages: Array<Pick<Language, 'code' | 'name'>>;
    })>;
};
export type GetPetByIdQueryVariables = Exact<{
    petId: Scalars['BigInt']['input'];
}>;
export type GetPetByIdQuery = {
    getPetById: (Pick<Pet, 'name'> & {
        category?: Maybe<Pick<Category, 'id' | 'name'>>;
    });
};
export declare const GetAnimeCharacterDocument: DocumentNode<GetAnimeCharacterQuery, Exact<{
    id: Scalars['Int']['input'];
}>>;
export declare const GetCountryDocument: DocumentNode<GetCountryQuery, Exact<{
    code: Scalars['ID']['input'];
}>>;
export declare const GetPetByIdDocument: DocumentNode<GetPetByIdQuery, Exact<{
    petId: Scalars['BigInt']['input'];
}>>;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>;
export declare function getSdk<C, E>(requester: Requester<C, E>): {
    GetAnimeCharacter(variables: GetAnimeCharacterQueryVariables, options?: C): Promise<GetAnimeCharacterQuery>;
    GetCountry(variables: GetCountryQueryVariables, options?: C): Promise<GetCountryQuery>;
    GetPetById(variables: GetPetByIdQueryVariables, options?: C): Promise<GetPetByIdQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
