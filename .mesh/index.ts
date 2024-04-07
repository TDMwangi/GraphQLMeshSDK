// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import OpenapiHandler from "@graphql-mesh/openapi"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { CountriesGraphQlTypes } from './sources/CountriesGraphQL/types';
import type { PetStoreSwaggerApiTypes } from './sources/PetStoreSwaggerAPI/types';
import type { AnimeCharactersGraphQlTypes } from './sources/AnimeCharactersGraphQL/types';
import * as importedModule$0 from "./sources/CountriesGraphQL/introspectionSchema";
import * as importedModule$1 from "./sources/PetStoreSwaggerAPI/schemaWithAnnotations";
import * as importedModule$2 from "./sources/AnimeCharactersGraphQL/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
  Json: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  FuzzyDateInt: { input: any; output: any; }
};

export type Query = {
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  /** Multiple status values can be provided with comma separated strings */
  findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @deprecated deprecated
   */
  findPetsByTags?: Maybe<Array<Maybe<Pet>>>;
  /** Returns a single pet */
  getPetById: Pet;
  /** For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions */
  getOrderById: Order;
  /** Returns a map of status codes to quantities */
  getInventory?: Maybe<Scalars['JSON']['output']>;
  /** Get user by user name */
  getUserByName: User;
  /** Logs user into the system */
  loginUser?: Maybe<Scalars['String']['output']>;
  /** Logs out current logged in user session */
  logoutUser?: Maybe<Scalars['JSON']['output']>;
  Page?: Maybe<Page>;
  /** Media query */
  Media?: Maybe<Media>;
  /** Media Trend query */
  MediaTrend?: Maybe<MediaTrend>;
  /** Airing schedule query */
  AiringSchedule?: Maybe<AiringSchedule>;
  /** Character query */
  Character?: Maybe<Character>;
  /** Staff query */
  Staff?: Maybe<Staff>;
  /** Media list query */
  MediaList?: Maybe<MediaList>;
  /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
  MediaListCollection?: Maybe<MediaListCollection>;
  /** Collection of all the possible media genres */
  GenreCollection?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Collection of all the possible media tags */
  MediaTagCollection?: Maybe<Array<Maybe<MediaTag>>>;
  /** User query */
  User?: Maybe<User>;
  /** Get the currently authenticated user */
  Viewer?: Maybe<User>;
  /** Notification query */
  Notification?: Maybe<NotificationUnion>;
  /** Studio query */
  Studio?: Maybe<Studio>;
  /** Review query */
  Review?: Maybe<Review>;
  /** Activity query */
  Activity?: Maybe<ActivityUnion>;
  /** Activity reply query */
  ActivityReply?: Maybe<ActivityReply>;
  /** Follow query */
  Following?: Maybe<User>;
  /** Follow query */
  Follower?: Maybe<User>;
  /** Thread query */
  Thread?: Maybe<Thread>;
  /** Comment query */
  ThreadComment?: Maybe<Array<Maybe<ThreadComment>>>;
  /** Recommendation query */
  Recommendation?: Maybe<Recommendation>;
  /** Like query */
  Like?: Maybe<User>;
  /** Provide AniList markdown to be converted to html (Requires auth) */
  Markdown?: Maybe<ParsedMarkdown>;
  AniChartUser?: Maybe<AniChartUser>;
  /** Site statistics query */
  SiteStatistics?: Maybe<SiteStatistics>;
  /** ExternalLinkSource collection query */
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
  /** uploads an image */
  uploadFile?: Maybe<ApiResponse>;
  /** Add a new pet to the store */
  addPet?: Maybe<Scalars['JSON']['output']>;
  /** Update an existing pet */
  updatePet?: Maybe<Scalars['JSON']['output']>;
  /** Updates a pet in the store with form data */
  updatePetWithForm?: Maybe<Scalars['JSON']['output']>;
  /** Deletes a pet */
  deletePet?: Maybe<Scalars['JSON']['output']>;
  /** Place an order for a pet */
  placeOrder: Order;
  /** For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors */
  deleteOrder?: Maybe<Scalars['JSON']['output']>;
  /** Creates list of users with given input array */
  createUsersWithArrayInput?: Maybe<Scalars['JSON']['output']>;
  /** Creates list of users with given input array */
  createUsersWithListInput?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  updateUser?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  deleteUser?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  createUser?: Maybe<Scalars['JSON']['output']>;
  UpdateUser?: Maybe<User>;
  /** Create or update a media list entry */
  SaveMediaListEntry?: Maybe<MediaList>;
  /** Update multiple media list entries to the same values */
  UpdateMediaListEntries?: Maybe<Array<Maybe<MediaList>>>;
  /** Delete a media list entry */
  DeleteMediaListEntry?: Maybe<Deleted>;
  /** Delete a custom list and remove the list entries from it */
  DeleteCustomList?: Maybe<Deleted>;
  /** Create or update text activity for the currently authenticated user */
  SaveTextActivity?: Maybe<TextActivity>;
  /** Create or update message activity for the currently authenticated user */
  SaveMessageActivity?: Maybe<MessageActivity>;
  /** Update list activity (Mod Only) */
  SaveListActivity?: Maybe<ListActivity>;
  /** Delete an activity item of the authenticated users */
  DeleteActivity?: Maybe<Deleted>;
  /** Toggle activity to be pinned to the top of the user's activity feed */
  ToggleActivityPin?: Maybe<ActivityUnion>;
  /** Toggle the subscription of an activity item */
  ToggleActivitySubscription?: Maybe<ActivityUnion>;
  /** Create or update an activity reply */
  SaveActivityReply?: Maybe<ActivityReply>;
  /** Delete an activity reply of the authenticated users */
  DeleteActivityReply?: Maybe<Deleted>;
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  ToggleLike?: Maybe<Array<Maybe<User>>>;
  /** Add or remove a like from a likeable type. */
  ToggleLikeV2?: Maybe<LikeableUnion>;
  /** Toggle the un/following of a user */
  ToggleFollow?: Maybe<User>;
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  ToggleFavourite?: Maybe<Favourites>;
  /** Update the order favourites are displayed in */
  UpdateFavouriteOrder?: Maybe<Favourites>;
  /** Create or update a review */
  SaveReview?: Maybe<Review>;
  /** Delete a review */
  DeleteReview?: Maybe<Deleted>;
  /** Rate a review */
  RateReview?: Maybe<Review>;
  /** Recommendation a media */
  SaveRecommendation?: Maybe<Recommendation>;
  /** Create or update a forum thread */
  SaveThread?: Maybe<Thread>;
  /** Delete a thread */
  DeleteThread?: Maybe<Deleted>;
  /** Toggle the subscription of a forum thread */
  ToggleThreadSubscription?: Maybe<Thread>;
  /** Create or update a thread comment */
  SaveThreadComment?: Maybe<ThreadComment>;
  /** Delete a thread comment */
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

/** Pet object that needs to be added to the store */
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

/** pet status in the store */
export type mutationInput_addPet_input_status =
  | 'available'
  | 'pending'
  | 'sold';

export type queryInput_findPetsByStatus_status_items =
  | 'available'
  | 'pending'
  | 'sold';

/** order placed for purchasing the pet */
export type Order = {
  id?: Maybe<Scalars['BigInt']['output']>;
  petId?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shipDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<mutation_placeOrder_status>;
  complete?: Maybe<Scalars['Boolean']['output']>;
};

/** Order Status */
export type mutation_placeOrder_status =
  | 'placed'
  | 'approved'
  | 'delivered';

/** Updated user object */
export type User = {
  /** The id of the user */
  id: Scalars['Int']['output'];
  username?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** User Status */
  userStatus?: Maybe<Scalars['Int']['output']>;
  /** The name of the user */
  name: Scalars['String']['output'];
  /** The bio written by user (Markdown) */
  about?: Maybe<Scalars['String']['output']>;
  /** The user's avatar images */
  avatar?: Maybe<UserAvatar>;
  /** The user's banner images */
  bannerImage?: Maybe<Scalars['String']['output']>;
  /** If the authenticated user if following this user */
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** If this user if following the authenticated user */
  isFollower?: Maybe<Scalars['Boolean']['output']>;
  /** If the user is blocked by the authenticated user */
  isBlocked?: Maybe<Scalars['Boolean']['output']>;
  bans?: Maybe<Scalars['Json']['output']>;
  /** The user's general options */
  options?: Maybe<UserOptions>;
  /** The user's media list options */
  mediaListOptions?: Maybe<MediaListOptions>;
  /** The users favourites */
  favourites?: Maybe<Favourites>;
  /** The users anime & manga list statistics */
  statistics?: Maybe<UserStatisticTypes>;
  /** The number of unread notifications the user has */
  unreadNotificationCount?: Maybe<Scalars['Int']['output']>;
  /** The url for the user page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The donation tier of the user */
  donatorTier?: Maybe<Scalars['Int']['output']>;
  /** Custom donation badge text */
  donatorBadge?: Maybe<Scalars['String']['output']>;
  /** The user's moderator roles if they are a site moderator */
  moderatorRoles?: Maybe<Array<Maybe<ModRole>>>;
  /** When the user's account was created. (Does not exist for accounts created before 2020) */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** When the user's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  stats?: Maybe<UserStats>;
  /**
   * If the user is a moderator or data moderator
   * @deprecated Deprecated. Replaced with moderatorRoles field.
   */
  moderatorStatus?: Maybe<Scalars['String']['output']>;
  /** The user's previously used names. */
  previousNames?: Maybe<Array<Maybe<UserPreviousName>>>;
};


/** Updated user object */
export type UseraboutArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Updated user object */
export type UserfavouritesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type ApiResponse = {
  code?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Pet object that needs to be added to the store */
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

/** order placed for purchasing the pet */
export type Order_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  petId?: InputMaybe<Scalars['BigInt']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shipDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<mutation_placeOrder_status>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Updated user object */
export type User_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** User Status */
  userStatus?: InputMaybe<Scalars['Int']['input']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

/** Page of data */
export type Page = {
  /** The pagination information */
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


/** Page of data */
export type PageusersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};


/** Page of data */
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


/** Page of data */
export type PagecharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


/** Page of data */
export type PagestaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Page of data */
export type PagestudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};


/** Page of data */
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


/** Page of data */
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


/** Page of data */
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


/** Page of data */
export type PagenotificationsArgs = {
  type?: InputMaybe<NotificationType>;
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};


/** Page of data */
export type PagefollowersArgs = {
  userId: Scalars['Int']['input'];
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};


/** Page of data */
export type PagefollowingArgs = {
  userId: Scalars['Int']['input'];
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};


/** Page of data */
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


/** Page of data */
export type PageactivityRepliesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  activityId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data */
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


/** Page of data */
export type PagethreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
};


/** Page of data */
export type PagereviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};


/** Page of data */
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


/** Page of data */
export type PagelikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

export type PageInfo = {
  /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
  total?: Maybe<Scalars['Int']['output']>;
  /** The count on a page */
  perPage?: Maybe<Scalars['Int']['output']>;
  /** The current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** The last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  /** If there is another page */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};

/** User sort enums */
export type UserSort =
  | 'ID'
  | 'ID_DESC'
  | 'USERNAME'
  | 'USERNAME_DESC'
  | 'WATCHED_TIME'
  | 'WATCHED_TIME_DESC'
  | 'CHAPTERS_READ'
  | 'CHAPTERS_READ_DESC'
  | 'SEARCH_MATCH';

/** A user's avatars */
export type UserAvatar = {
  /** The avatar of user at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The avatar of user at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** A user's general options */
export type UserOptions = {
  /** The language the user wants to see media titles in */
  titleLanguage?: Maybe<UserTitleLanguage>;
  /** Whether the user has enabled viewing of 18+ content */
  displayAdultContent?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the user receives notifications when a show they are watching aires */
  airingNotifications?: Maybe<Scalars['Boolean']['output']>;
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  profileColor?: Maybe<Scalars['String']['output']>;
  /** Notification options */
  notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>;
  /** The user's timezone offset (Auth user only) */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
  activityMergeTime?: Maybe<Scalars['Int']['output']>;
  /** The language the user wants to see staff and character names in */
  staffNameLanguage?: Maybe<UserStaffNameLanguage>;
  /** Whether the user only allow messages from users they follow */
  restrictMessagesToFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** The list activity types the user has disabled from being created from list updates */
  disabledListActivity?: Maybe<Array<Maybe<ListActivityOption>>>;
};

/** The language the user wants to see media titles in */
export type UserTitleLanguage =
  /** The romanization of the native language title */
  | 'ROMAJI'
  /** The official english title */
  | 'ENGLISH'
  /** Official title in it's native language */
  | 'NATIVE'
  /** The romanization of the native language title, stylised by media creator */
  | 'ROMAJI_STYLISED'
  /** The official english title, stylised by media creator */
  | 'ENGLISH_STYLISED'
  /** Official title in it's native language, stylised by media creator */
  | 'NATIVE_STYLISED';

/** Notification option */
export type NotificationOption = {
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** Whether this type of notification is enabled */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Notification type enum */
export type NotificationType =
  /** A user has sent you message */
  | 'ACTIVITY_MESSAGE'
  /** A user has replied to your activity */
  | 'ACTIVITY_REPLY'
  /** A user has followed you */
  | 'FOLLOWING'
  /** A user has mentioned you in their activity */
  | 'ACTIVITY_MENTION'
  /** A user has mentioned you in a forum comment */
  | 'THREAD_COMMENT_MENTION'
  /** A user has commented in one of your subscribed forum threads */
  | 'THREAD_SUBSCRIBED'
  /** A user has replied to your forum comment */
  | 'THREAD_COMMENT_REPLY'
  /** An anime you are currently watching has aired */
  | 'AIRING'
  /** A user has liked your activity */
  | 'ACTIVITY_LIKE'
  /** A user has liked your activity reply */
  | 'ACTIVITY_REPLY_LIKE'
  /** A user has liked your forum thread */
  | 'THREAD_LIKE'
  /** A user has liked your forum comment */
  | 'THREAD_COMMENT_LIKE'
  /** A user has replied to activity you have also replied to */
  | 'ACTIVITY_REPLY_SUBSCRIBED'
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  | 'RELATED_MEDIA_ADDITION'
  /** An anime or manga has had a data change that affects how a user may track it in their lists */
  | 'MEDIA_DATA_CHANGE'
  /** Anime or manga entries on the user's list have been merged into a single entry */
  | 'MEDIA_MERGE'
  /** An anime or manga on the user's list has been deleted from the site */
  | 'MEDIA_DELETION';

/** The language the user wants to see staff and character names in */
export type UserStaffNameLanguage =
  /** The romanization of the staff or character's native name, with western name ordering */
  | 'ROMAJI_WESTERN'
  /** The romanization of the staff or character's native name */
  | 'ROMAJI'
  /** The staff or character's name in their native language */
  | 'NATIVE';

export type ListActivityOption = {
  disabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<MediaListStatus>;
};

/** Media list watching/reading status enum. */
export type MediaListStatus =
  /** Currently watching/reading */
  | 'CURRENT'
  /** Planning to watch/read */
  | 'PLANNING'
  /** Finished watching/reading */
  | 'COMPLETED'
  /** Stopped watching/reading before completing */
  | 'DROPPED'
  /** Paused watching/reading */
  | 'PAUSED'
  /** Re-watching/reading */
  | 'REPEATING';

/** A user's list options */
export type MediaListOptions = {
  /** The score format the user is using for media lists */
  scoreFormat?: Maybe<ScoreFormat>;
  /** The default order list rows should be displayed in */
  rowOrder?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer used */
  useLegacyLists?: Maybe<Scalars['Boolean']['output']>;
  /** The user's anime list options */
  animeList?: Maybe<MediaListTypeOptions>;
  /** The user's manga list options */
  mangaList?: Maybe<MediaListTypeOptions>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme?: Maybe<Scalars['Json']['output']>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Media list scoring type */
export type ScoreFormat =
  /** An integer from 0-100 */
  | 'POINT_100'
  /** A float from 0-10 with 1 decimal place */
  | 'POINT_10_DECIMAL'
  /** An integer from 0-10 */
  | 'POINT_10'
  /** An integer from 0-5. Should be represented in Stars */
  | 'POINT_5'
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  | 'POINT_3';

/** A user's list options for anime or manga lists */
export type MediaListTypeOptions = {
  /** The order each list should be displayed in */
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  theme?: Maybe<Scalars['Json']['output']>;
  /** The names of the user's custom lists */
  customLists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The names of the user's advanced scoring sections */
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: Maybe<Scalars['Boolean']['output']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  /** Favourite anime */
  anime?: Maybe<MediaConnection>;
  /** Favourite manga */
  manga?: Maybe<MediaConnection>;
  /** Favourite characters */
  characters?: Maybe<CharacterConnection>;
  /** Favourite staff */
  staff?: Maybe<StaffConnection>;
  /** Favourite studios */
  studios?: Maybe<StudioConnection>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesanimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesmangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritescharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesstaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesstudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaConnection = {
  edges?: Maybe<Array<Maybe<MediaEdge>>>;
  nodes?: Maybe<Array<Maybe<Media>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Media connection edge */
export type MediaEdge = {
  node?: Maybe<Media>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The type of relation to the parent model */
  relationType?: Maybe<MediaRelation>;
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  isMainStudio: Scalars['Boolean']['output'];
  /** The characters in the media voiced by the parent actor */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** The characters role in the media */
  characterRole?: Maybe<CharacterRole>;
  /** Media specific character name */
  characterName?: Maybe<Scalars['String']['output']>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** The role of the staff member in the production of the media */
  staffRole?: Maybe<Scalars['String']['output']>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
  /** The order the media should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
};


/** Media connection edge */
export type MediaEdgerelationTypeArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** Media connection edge */
export type MediaEdgevoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Media connection edge */
export type MediaEdgevoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** Anime or Manga */
export type Media = {
  /** The id of the media */
  id: Scalars['Int']['output'];
  /** The mal id of the media */
  idMal?: Maybe<Scalars['Int']['output']>;
  /** The official titles of the media in various languages */
  title?: Maybe<MediaTitle>;
  /** The type of the media; anime or manga */
  type?: Maybe<MediaType>;
  /** The format the media was released in */
  format?: Maybe<MediaFormat>;
  /** The current releasing status of the media */
  status?: Maybe<MediaStatus>;
  /** Short description of the media's story and characters */
  description?: Maybe<Scalars['String']['output']>;
  /** The first official release date of the media */
  startDate?: Maybe<FuzzyDate>;
  /** The last official release date of the media */
  endDate?: Maybe<FuzzyDate>;
  /** The season the media was initially released in */
  season?: Maybe<MediaSeason>;
  /** The season year the media was initially released in */
  seasonYear?: Maybe<Scalars['Int']['output']>;
  /**
   * The year & season the media was initially released in
   * @deprecated
   */
  seasonInt?: Maybe<Scalars['Int']['output']>;
  /** The amount of episodes the anime has when complete */
  episodes?: Maybe<Scalars['Int']['output']>;
  /** The general length of each anime episode in minutes */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The amount of chapters the manga has when complete */
  chapters?: Maybe<Scalars['Int']['output']>;
  /** The amount of volumes the manga has when complete */
  volumes?: Maybe<Scalars['Int']['output']>;
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  countryOfOrigin?: Maybe<Scalars['CountryCode']['output']>;
  /** If the media is officially licensed or a self-published doujin release */
  isLicensed?: Maybe<Scalars['Boolean']['output']>;
  /** Source type the media was adapted from. */
  source?: Maybe<MediaSource>;
  /** Official Twitter hashtags for the media */
  hashtag?: Maybe<Scalars['String']['output']>;
  /** Media trailer or advertisement */
  trailer?: Maybe<MediaTrailer>;
  /** When the media's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** The cover images of the media */
  coverImage?: Maybe<MediaCoverImage>;
  /** The banner image of the media */
  bannerImage?: Maybe<Scalars['String']['output']>;
  /** The genres of the media */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Alternative titles of the media */
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']['output']>;
  /** Mean score of all the user's scores of the media */
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']['output']>;
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of related activity in the past hour */
  trending?: Maybe<Scalars['Int']['output']>;
  /** The amount of user's who have favourited the media */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** List of tags that describes elements and themes of the media */
  tags?: Maybe<Array<Maybe<MediaTag>>>;
  /** Other media in the same or connecting franchise */
  relations?: Maybe<MediaConnection>;
  /** The characters in the media */
  characters?: Maybe<CharacterConnection>;
  /** The staff who produced the media */
  staff?: Maybe<StaffConnection>;
  /** The companies who produced the media */
  studios?: Maybe<StudioConnection>;
  /** If the media is marked as favourite by the current authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the media is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** If the media is intended only for 18+ adult audiences */
  isAdult?: Maybe<Scalars['Boolean']['output']>;
  /** The media's next episode airing schedule */
  nextAiringEpisode?: Maybe<AiringSchedule>;
  /** The media's entire airing schedule */
  airingSchedule?: Maybe<AiringScheduleConnection>;
  /** The media's daily trend stats */
  trends?: Maybe<MediaTrendConnection>;
  /** External links to another site related to the media */
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>;
  /** Data and links to legal streaming episodes on external sites */
  streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>;
  /** The ranking of the media in a particular time span and format compared to other media */
  rankings?: Maybe<Array<Maybe<MediaRank>>>;
  /** The authenticated user's media list entry for the media */
  mediaListEntry?: Maybe<MediaList>;
  /** User reviews of the media */
  reviews?: Maybe<ReviewConnection>;
  /** User recommendations for similar media */
  recommendations?: Maybe<RecommendationConnection>;
  stats?: Maybe<MediaStats>;
  /** The url for the media page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** If the media should have forum thread automatically created for it on airing episode release */
  autoCreateForumThread?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is blocked from being recommended to/from */
  isRecommendationBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is blocked from being reviewed */
  isReviewBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
};


/** Anime or Manga */
export type MediastatusArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediadescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Anime or Manga */
export type MediasourceArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediacharactersArgs = {
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
  role?: InputMaybe<CharacterRole>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediastaffArgs = {
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediastudiosArgs = {
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Anime or Manga */
export type MediaairingScheduleArgs = {
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediatrendsArgs = {
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediareviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Anime or Manga */
export type MediarecommendationsArgs = {
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** The official titles of the media in various languages */
export type MediaTitle = {
  /** The romanization of the native language title */
  romaji?: Maybe<Scalars['String']['output']>;
  /** The official english title */
  english?: Maybe<Scalars['String']['output']>;
  /** Official title in it's native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};


/** The official titles of the media in various languages */
export type MediaTitleromajiArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The official titles of the media in various languages */
export type MediaTitleenglishArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The official titles of the media in various languages */
export type MediaTitlenativeArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Media type enum, anime or manga. */
export type MediaType =
  /** Japanese Anime */
  | 'ANIME'
  /** Asian comic */
  | 'MANGA';

/** The format the media was released in */
export type MediaFormat =
  /** Anime broadcast on television */
  | 'TV'
  /** Anime which are under 15 minutes in length and broadcast on television */
  | 'TV_SHORT'
  /** Anime movies with a theatrical release */
  | 'MOVIE'
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  | 'SPECIAL'
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  | 'OVA'
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  | 'ONA'
  /** Short anime released as a music video */
  | 'MUSIC'
  /** Professionally published manga with more than one chapter */
  | 'MANGA'
  /** Written books released as a series of light novels */
  | 'NOVEL'
  /** Manga with just one chapter */
  | 'ONE_SHOT';

/** The current releasing status of the media */
export type MediaStatus =
  /** Has completed and is no longer being released */
  | 'FINISHED'
  /** Currently releasing */
  | 'RELEASING'
  /** To be released at a later date */
  | 'NOT_YET_RELEASED'
  /** Ended before the work could be finished */
  | 'CANCELLED'
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  | 'HIATUS';

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
  /** Numeric Year (2017) */
  year?: Maybe<Scalars['Int']['output']>;
  /** Numeric Month (3) */
  month?: Maybe<Scalars['Int']['output']>;
  /** Numeric Day (24) */
  day?: Maybe<Scalars['Int']['output']>;
};

export type MediaSeason =
  /** Months December to February */
  | 'WINTER'
  /** Months March to May */
  | 'SPRING'
  /** Months June to August */
  | 'SUMMER'
  /** Months September to November */
  | 'FALL';

/** Source type the media was adapted from */
export type MediaSource =
  /** An original production not based of another work */
  | 'ORIGINAL'
  /** Asian comic book */
  | 'MANGA'
  /** Written work published in volumes */
  | 'LIGHT_NOVEL'
  /** Video game driven primary by text and narrative */
  | 'VISUAL_NOVEL'
  /** Video game */
  | 'VIDEO_GAME'
  /** Other */
  | 'OTHER'
  /** Version 2+ only. Written works not published in volumes */
  | 'NOVEL'
  /** Version 2+ only. Self-published works */
  | 'DOUJINSHI'
  /** Version 2+ only. Japanese Anime */
  | 'ANIME'
  /** Version 3 only. Written works published online */
  | 'WEB_NOVEL'
  /** Version 3 only. Live action media such as movies or TV show */
  | 'LIVE_ACTION'
  /** Version 3 only. Games excluding video games */
  | 'GAME'
  /** Version 3 only. Comics excluding manga */
  | 'COMIC'
  /** Version 3 only. Multimedia project */
  | 'MULTIMEDIA_PROJECT'
  /** Version 3 only. Picture book */
  | 'PICTURE_BOOK';

/** Media trailer or advertisement */
export type MediaTrailer = {
  /** The trailer video id */
  id?: Maybe<Scalars['String']['output']>;
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  site?: Maybe<Scalars['String']['output']>;
  /** The url for the thumbnail image of the video */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type MediaCoverImage = {
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  extraLarge?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at a large size */
  large?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
  /** Average #hex color of cover image */
  color?: Maybe<Scalars['String']['output']>;
};

/** A tag that describes a theme or element of the media */
export type MediaTag = {
  /** The id of the tag */
  id: Scalars['Int']['output'];
  /** The name of the tag */
  name: Scalars['String']['output'];
  /** A general description of the tag */
  description?: Maybe<Scalars['String']['output']>;
  /** The categories of tags this tag belongs to */
  category?: Maybe<Scalars['String']['output']>;
  /** The relevance ranking of the tag out of the 100 for this media */
  rank?: Maybe<Scalars['Int']['output']>;
  /** If the tag could be a spoiler for any media */
  isGeneralSpoiler?: Maybe<Scalars['Boolean']['output']>;
  /** If the tag is a spoiler for this media */
  isMediaSpoiler?: Maybe<Scalars['Boolean']['output']>;
  /** If the tag is only for adult 18+ media */
  isAdult?: Maybe<Scalars['Boolean']['output']>;
  /** The user who submitted the tag */
  userId?: Maybe<Scalars['Int']['output']>;
};

/** Character sort enums */
export type CharacterSort =
  | 'ID'
  | 'ID_DESC'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  /** Order manually decided by moderators */
  | 'RELEVANCE';

/** The role the character plays in the media */
export type CharacterRole =
  /** A primary character role in the media */
  | 'MAIN'
  /** A supporting character role in the media */
  | 'SUPPORTING'
  /** A background character in the media */
  | 'BACKGROUND';

export type CharacterConnection = {
  edges?: Maybe<Array<Maybe<CharacterEdge>>>;
  nodes?: Maybe<Array<Maybe<Character>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Character connection edge */
export type CharacterEdge = {
  node?: Maybe<Character>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** Media specific character name */
  name?: Maybe<Scalars['String']['output']>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
  /** The media the character is in */
  media?: Maybe<Array<Maybe<Media>>>;
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
};


/** Character connection edge */
export type CharacterEdgevoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Character connection edge */
export type CharacterEdgevoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** A character that features in an anime or manga */
export type Character = {
  /** The id of the character */
  id: Scalars['Int']['output'];
  /** The names of the character */
  name?: Maybe<CharacterName>;
  /** Character images */
  image?: Maybe<CharacterImage>;
  /** A general description of the character */
  description?: Maybe<Scalars['String']['output']>;
  /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The character's birth date */
  dateOfBirth?: Maybe<FuzzyDate>;
  /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
  age?: Maybe<Scalars['String']['output']>;
  /** The characters blood type */
  bloodType?: Maybe<Scalars['String']['output']>;
  /** If the character is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the character is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** The url for the character page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Media that includes the character */
  media?: Maybe<MediaConnection>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** The amount of user's who have favourited the character */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
};


/** A character that features in an anime or manga */
export type CharacterdescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A character that features in an anime or manga */
export type CharactermediaArgs = {
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** The names of the character */
export type CharacterName = {
  /** The character's given name */
  first?: Maybe<Scalars['String']['output']>;
  /** The character's middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The character's surname */
  last?: Maybe<Scalars['String']['output']>;
  /** The character's first and last name */
  full?: Maybe<Scalars['String']['output']>;
  /** The character's full name in their native language */
  native?: Maybe<Scalars['String']['output']>;
  /** Other names the character might be referred to as */
  alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

export type CharacterImage = {
  /** The character's image of media at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The character's image of media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** Media sort enums */
export type MediaSort =
  | 'ID'
  | 'ID_DESC'
  | 'TITLE_ROMAJI'
  | 'TITLE_ROMAJI_DESC'
  | 'TITLE_ENGLISH'
  | 'TITLE_ENGLISH_DESC'
  | 'TITLE_NATIVE'
  | 'TITLE_NATIVE_DESC'
  | 'TYPE'
  | 'TYPE_DESC'
  | 'FORMAT'
  | 'FORMAT_DESC'
  | 'START_DATE'
  | 'START_DATE_DESC'
  | 'END_DATE'
  | 'END_DATE_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC'
  | 'EPISODES'
  | 'EPISODES_DESC'
  | 'DURATION'
  | 'DURATION_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'CHAPTERS'
  | 'CHAPTERS_DESC'
  | 'VOLUMES'
  | 'VOLUMES_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC';

/** The primary language of the voice actor */
export type StaffLanguage =
  /** Japanese */
  | 'JAPANESE'
  /** English */
  | 'ENGLISH'
  /** Korean */
  | 'KOREAN'
  /** Italian */
  | 'ITALIAN'
  /** Spanish */
  | 'SPANISH'
  /** Portuguese */
  | 'PORTUGUESE'
  /** French */
  | 'FRENCH'
  /** German */
  | 'GERMAN'
  /** Hebrew */
  | 'HEBREW'
  /** Hungarian */
  | 'HUNGARIAN';

/** Staff sort enums */
export type StaffSort =
  | 'ID'
  | 'ID_DESC'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'LANGUAGE'
  | 'LANGUAGE_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  /** Order manually decided by moderators */
  | 'RELEVANCE';

/** Voice actors or production staff */
export type Staff = {
  /** The id of the staff member */
  id: Scalars['Int']['output'];
  /** The names of the staff member */
  name?: Maybe<StaffName>;
  /**
   * The primary language the staff member dub's in
   * @deprecated Replaced with languageV2
   */
  language?: Maybe<StaffLanguage>;
  /** The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu */
  languageV2?: Maybe<Scalars['String']['output']>;
  /** The staff images */
  image?: Maybe<StaffImage>;
  /** A general description of the staff member */
  description?: Maybe<Scalars['String']['output']>;
  /** The person's primary occupations */
  primaryOccupations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<FuzzyDate>;
  dateOfDeath?: Maybe<FuzzyDate>;
  /** The person's age in years */
  age?: Maybe<Scalars['Int']['output']>;
  /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
  yearsActive?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The persons birthplace or hometown */
  homeTown?: Maybe<Scalars['String']['output']>;
  /** The persons blood type */
  bloodType?: Maybe<Scalars['String']['output']>;
  /** If the staff member is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the staff member is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** The url for the staff page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Media where the staff member has a production role */
  staffMedia?: Maybe<MediaConnection>;
  /** Characters voiced by the actor */
  characters?: Maybe<CharacterConnection>;
  /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
  characterMedia?: Maybe<MediaConnection>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** Staff member that the submission is referencing */
  staff?: Maybe<Staff>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** Status of the submission */
  submissionStatus?: Maybe<Scalars['Int']['output']>;
  /** Inner details of submission status */
  submissionNotes?: Maybe<Scalars['String']['output']>;
  /** The amount of user's who have favourited the staff member */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
};


/** Voice actors or production staff */
export type StaffdescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Voice actors or production staff */
export type StaffstaffMediaArgs = {
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Voice actors or production staff */
export type StaffcharactersArgs = {
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** Voice actors or production staff */
export type StaffcharacterMediaArgs = {
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** The names of the staff member */
export type StaffName = {
  /** The person's given name */
  first?: Maybe<Scalars['String']['output']>;
  /** The person's middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The person's surname */
  last?: Maybe<Scalars['String']['output']>;
  /** The person's first and last name */
  full?: Maybe<Scalars['String']['output']>;
  /** The person's full name in their native language */
  native?: Maybe<Scalars['String']['output']>;
  /** Other names the staff member might be referred to as (pen names) */
  alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

export type StaffImage = {
  /** The person's image of media at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The person's image of media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** Voice actor role for a character */
export type StaffRoleType = {
  /** The voice actors of the character */
  voiceActor?: Maybe<Staff>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars['String']['output']>;
};

export type StaffConnection = {
  edges?: Maybe<Array<Maybe<StaffEdge>>>;
  nodes?: Maybe<Array<Maybe<Staff>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Staff connection edge */
export type StaffEdge = {
  node?: Maybe<Staff>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The role of the staff member in the production of the media */
  role?: Maybe<Scalars['String']['output']>;
  /** The order the staff should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
};

/** Studio sort enums */
export type StudioSort =
  | 'ID'
  | 'ID_DESC'
  | 'NAME'
  | 'NAME_DESC'
  | 'SEARCH_MATCH'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC';

export type StudioConnection = {
  edges?: Maybe<Array<Maybe<StudioEdge>>>;
  nodes?: Maybe<Array<Maybe<Studio>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Studio connection edge */
export type StudioEdge = {
  node?: Maybe<Studio>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** If the studio is the main animation studio of the anime */
  isMain: Scalars['Boolean']['output'];
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
};

/** Animation or production company */
export type Studio = {
  /** The id of the studio */
  id: Scalars['Int']['output'];
  /** The name of the studio */
  name: Scalars['String']['output'];
  /** If the studio is an animation studio or a different kind of company */
  isAnimationStudio: Scalars['Boolean']['output'];
  /** The media the studio has worked on */
  media?: Maybe<MediaConnection>;
  /** The url for the studio page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** If the studio is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** The amount of user's who have favourited the studio */
  favourites?: Maybe<Scalars['Int']['output']>;
};


/** Animation or production company */
export type StudiomediaArgs = {
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export type AiringSchedule = {
  /** The id of the airing schedule item */
  id: Scalars['Int']['output'];
  /** The time the episode airs at */
  airingAt: Scalars['Int']['output'];
  /** Seconds until episode starts airing */
  timeUntilAiring: Scalars['Int']['output'];
  /** The airing episode number */
  episode: Scalars['Int']['output'];
  /** The associate media id of the airing episode */
  mediaId: Scalars['Int']['output'];
  /** The associate media of the airing episode */
  media?: Maybe<Media>;
};

export type AiringScheduleConnection = {
  edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>;
  nodes?: Maybe<Array<Maybe<AiringSchedule>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** AiringSchedule connection edge */
export type AiringScheduleEdge = {
  node?: Maybe<AiringSchedule>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
};

/** Media trend sort enums */
export type MediaTrendSort =
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'DATE'
  | 'DATE_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC'
  | 'EPISODE'
  | 'EPISODE_DESC';

export type MediaTrendConnection = {
  edges?: Maybe<Array<Maybe<MediaTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Media trend connection edge */
export type MediaTrendEdge = {
  node?: Maybe<MediaTrend>;
};

/** Daily media statistics */
export type MediaTrend = {
  /** The id of the tag */
  mediaId: Scalars['Int']['output'];
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']['output'];
  /** The amount of media activity on the day */
  trending: Scalars['Int']['output'];
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']['output']>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']['output']>;
  /** The number of users with watching/reading the media */
  inProgress?: Maybe<Scalars['Int']['output']>;
  /** If the media was being released at this time */
  releasing: Scalars['Boolean']['output'];
  /** The episode number of the anime released on this day */
  episode?: Maybe<Scalars['Int']['output']>;
  /** The related media */
  media?: Maybe<Media>;
};

/** An external link to another site related to the media or staff member */
export type MediaExternalLink = {
  /** The id of the external link */
  id: Scalars['Int']['output'];
  /** The url of the external link or base url of link source */
  url?: Maybe<Scalars['String']['output']>;
  /** The links website site name */
  site: Scalars['String']['output'];
  /** The links website site id */
  siteId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ExternalLinkType>;
  /** Language the site content is in. See Staff language field for values. */
  language?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
  icon?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
};

export type ExternalLinkType =
  | 'INFO'
  | 'STREAMING'
  | 'SOCIAL';

/** Data and links to legal streaming episodes on external sites */
export type MediaStreamingEpisode = {
  /** Title of the episode */
  title?: Maybe<Scalars['String']['output']>;
  /** Url of episode image thumbnail */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The url of the episode */
  url?: Maybe<Scalars['String']['output']>;
  /** The site location of the streaming episodes */
  site?: Maybe<Scalars['String']['output']>;
};

/** The ranking of a media in a particular time span and format compared to other media */
export type MediaRank = {
  /** The id of the rank */
  id: Scalars['Int']['output'];
  /** The numerical rank of the media */
  rank: Scalars['Int']['output'];
  /** The type of ranking */
  type: MediaRankType;
  /** The format the media is ranked within */
  format: MediaFormat;
  /** The year the media is ranked within */
  year?: Maybe<Scalars['Int']['output']>;
  /** The season the media is ranked within */
  season?: Maybe<MediaSeason>;
  /** If the ranking is based on all time instead of a season/year */
  allTime?: Maybe<Scalars['Boolean']['output']>;
  /** String that gives context to the ranking type and time span */
  context: Scalars['String']['output'];
};

/** The type of ranking */
export type MediaRankType =
  /** Ranking is based on the media's ratings/score */
  | 'RATED'
  /** Ranking is based on the media's popularity */
  | 'POPULAR';

/** List of anime or manga */
export type MediaList = {
  /** The id of the list entry */
  id: Scalars['Int']['output'];
  /** The id of the user owner of the list entry */
  userId: Scalars['Int']['output'];
  /** The id of the media */
  mediaId: Scalars['Int']['output'];
  /** The watching/reading status */
  status?: Maybe<MediaListStatus>;
  /** The score of the entry */
  score?: Maybe<Scalars['Float']['output']>;
  /** The amount of episodes/chapters consumed by the user */
  progress?: Maybe<Scalars['Int']['output']>;
  /** The amount of volumes read by the user */
  progressVolumes?: Maybe<Scalars['Int']['output']>;
  /** The amount of times the user has rewatched/read the media */
  repeat?: Maybe<Scalars['Int']['output']>;
  /** Priority of planning */
  priority?: Maybe<Scalars['Int']['output']>;
  /** If the entry should only be visible to authenticated user */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** Text notes */
  notes?: Maybe<Scalars['String']['output']>;
  /** If the entry shown be hidden from non-custom lists */
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']['output']>;
  /** Map of booleans for which custom lists the entry are in */
  customLists?: Maybe<Scalars['Json']['output']>;
  /** Map of advanced scores with name keys */
  advancedScores?: Maybe<Scalars['Json']['output']>;
  /** When the entry was started by the user */
  startedAt?: Maybe<FuzzyDate>;
  /** When the entry was completed by the user */
  completedAt?: Maybe<FuzzyDate>;
  /** When the entry data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  media?: Maybe<Media>;
  user?: Maybe<User>;
};


/** List of anime or manga */
export type MediaListscoreArgs = {
  format?: InputMaybe<ScoreFormat>;
};


/** List of anime or manga */
export type MediaListcustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Review sort enums */
export type ReviewSort =
  | 'ID'
  | 'ID_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'RATING'
  | 'RATING_DESC'
  | 'CREATED_AT'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC';

export type ReviewConnection = {
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<Review>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Review connection edge */
export type ReviewEdge = {
  node?: Maybe<Review>;
};

/** A Review that features in an anime or manga */
export type Review = {
  /** The id of the review */
  id: Scalars['Int']['output'];
  /** The id of the review's creator */
  userId: Scalars['Int']['output'];
  /** The id of the review's media */
  mediaId: Scalars['Int']['output'];
  /** For which type of media the review is for */
  mediaType?: Maybe<MediaType>;
  /** A short summary of the review */
  summary?: Maybe<Scalars['String']['output']>;
  /** The main review body text */
  body?: Maybe<Scalars['String']['output']>;
  /** The total user rating of the review */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The amount of user ratings of the review */
  ratingAmount?: Maybe<Scalars['Int']['output']>;
  /** The rating of the review by currently authenticated user */
  userRating?: Maybe<ReviewRating>;
  /** The review score of the media */
  score?: Maybe<Scalars['Int']['output']>;
  /** If the review is not yet publicly published and is only viewable by creator */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The url for the review page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The time of the thread creation */
  createdAt: Scalars['Int']['output'];
  /** The time of the thread last update */
  updatedAt: Scalars['Int']['output'];
  /** The creator of the review */
  user?: Maybe<User>;
  /** The media the review is of */
  media?: Maybe<Media>;
};


/** A Review that features in an anime or manga */
export type ReviewbodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Review rating enums */
export type ReviewRating =
  | 'NO_VOTE'
  | 'UP_VOTE'
  | 'DOWN_VOTE';

/** Recommendation sort enums */
export type RecommendationSort =
  | 'ID'
  | 'ID_DESC'
  | 'RATING'
  | 'RATING_DESC';

export type RecommendationConnection = {
  edges?: Maybe<Array<Maybe<RecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<Recommendation>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Recommendation connection edge */
export type RecommendationEdge = {
  node?: Maybe<Recommendation>;
};

/** Media recommendation */
export type Recommendation = {
  /** The id of the recommendation */
  id: Scalars['Int']['output'];
  /** Users rating of the recommendation */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The rating of the recommendation by currently authenticated user */
  userRating?: Maybe<RecommendationRating>;
  /** The media the recommendation is from */
  media?: Maybe<Media>;
  /** The recommended media */
  mediaRecommendation?: Maybe<Media>;
  /** The user that first created the recommendation */
  user?: Maybe<User>;
};

/** Recommendation rating enums */
export type RecommendationRating =
  | 'NO_RATING'
  | 'RATE_UP'
  | 'RATE_DOWN';

/** A media's statistics */
export type MediaStats = {
  scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  /** @deprecated Replaced by MediaTrends */
  airingProgression?: Maybe<Array<Maybe<AiringProgression>>>;
};

/** A user's list score distribution. */
export type ScoreDistribution = {
  score?: Maybe<Scalars['Int']['output']>;
  /** The amount of list entries with this score */
  amount?: Maybe<Scalars['Int']['output']>;
};

/** The distribution of the watching/reading status of media or a user's list */
export type StatusDistribution = {
  /** The day the activity took place (Unix timestamp) */
  status?: Maybe<MediaListStatus>;
  /** The amount of entries with this status */
  amount?: Maybe<Scalars['Int']['output']>;
};

/** Score & Watcher stats for airing anime by episode and mid-week */
export type AiringProgression = {
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  episode?: Maybe<Scalars['Float']['output']>;
  /** The average score for the media */
  score?: Maybe<Scalars['Float']['output']>;
  /** The amount of users watching the anime */
  watching?: Maybe<Scalars['Int']['output']>;
};

/** Type of relation media has to its parent. */
export type MediaRelation =
  /** An adaption of this media into a different format */
  | 'ADAPTATION'
  /** Released before the relation */
  | 'PREQUEL'
  /** Released after the relation */
  | 'SEQUEL'
  /** The media a side story is from */
  | 'PARENT'
  /** A side story of the parent media */
  | 'SIDE_STORY'
  /** Shares at least 1 character */
  | 'CHARACTER'
  /** A shortened and summarized version */
  | 'SUMMARY'
  /** An alternative version of the same media */
  | 'ALTERNATIVE'
  /** An alternative version of the media with a different primary focus */
  | 'SPIN_OFF'
  /** Other */
  | 'OTHER'
  /** Version 2 only. The source material the media was adapted from */
  | 'SOURCE'
  /** Version 2 only. */
  | 'COMPILATION'
  /** Version 2 only. */
  | 'CONTAINS';

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

/** User statistics sort enum */
export type UserStatisticsSort =
  | 'ID'
  | 'ID_DESC'
  | 'COUNT'
  | 'COUNT_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC'
  | 'MEAN_SCORE'
  | 'MEAN_SCORE_DESC';

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

/** Mod role enums */
export type ModRole =
  /** An AniList administrator */
  | 'ADMIN'
  /** A head developer of AniList */
  | 'LEAD_DEVELOPER'
  /** An AniList developer */
  | 'DEVELOPER'
  /** A lead community moderator */
  | 'LEAD_COMMUNITY'
  /** A community moderator */
  | 'COMMUNITY'
  /** A discord community moderator */
  | 'DISCORD_COMMUNITY'
  /** A lead anime data moderator */
  | 'LEAD_ANIME_DATA'
  /** An anime data moderator */
  | 'ANIME_DATA'
  /** A lead manga data moderator */
  | 'LEAD_MANGA_DATA'
  /** A manga data moderator */
  | 'MANGA_DATA'
  /** A lead social media moderator */
  | 'LEAD_SOCIAL_MEDIA'
  /** A social media moderator */
  | 'SOCIAL_MEDIA'
  /** A retired moderator */
  | 'RETIRED'
  /** A character data moderator */
  | 'CHARACTER_DATA'
  /** A staff data moderator */
  | 'STAFF_DATA';

/** A user's statistics */
export type UserStats = {
  /** The amount of anime the user has watched in minutes */
  watchedTime?: Maybe<Scalars['Int']['output']>;
  /** The amount of manga chapters the user has read */
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

/** A user's activity history stats. */
export type UserActivityHistory = {
  /** The day the activity took place (Unix timestamp) */
  date?: Maybe<Scalars['Int']['output']>;
  /** The amount of activity on the day */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The level of activity represented on a 1-10 scale */
  level?: Maybe<Scalars['Int']['output']>;
};

/** User's list score statistics */
export type ListScoreStats = {
  meanScore?: Maybe<Scalars['Int']['output']>;
  standardDeviation?: Maybe<Scalars['Int']['output']>;
};

/** User's genre statistics */
export type GenreStats = {
  genre?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The amount of time in minutes the genre has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** User's tag statistics */
export type TagStats = {
  tag?: Maybe<MediaTag>;
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The amount of time in minutes the tag has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** User's staff statistics */
export type StaffStats = {
  staff?: Maybe<Staff>;
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The amount of time in minutes the staff member has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** User's studio statistics */
export type StudioStats = {
  studio?: Maybe<Studio>;
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The amount of time in minutes the studio's works have been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** User's year statistics */
export type YearStats = {
  year?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
};

/** User's format statistics */
export type FormatStats = {
  format?: Maybe<MediaFormat>;
  amount?: Maybe<Scalars['Int']['output']>;
};

/** A user's previous name */
export type UserPreviousName = {
  /** A previous name of the user. */
  name?: Maybe<Scalars['String']['output']>;
  /** When the user first changed from this name. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** When the user most recently changed from this name. */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

/** Media list sort enums */
export type MediaListSort =
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC'
  | 'PROGRESS_VOLUMES'
  | 'PROGRESS_VOLUMES_DESC'
  | 'REPEAT'
  | 'REPEAT_DESC'
  | 'PRIORITY'
  | 'PRIORITY_DESC'
  | 'STARTED_ON'
  | 'STARTED_ON_DESC'
  | 'FINISHED_ON'
  | 'FINISHED_ON_DESC'
  | 'ADDED_TIME'
  | 'ADDED_TIME_DESC'
  | 'UPDATED_TIME'
  | 'UPDATED_TIME_DESC'
  | 'MEDIA_TITLE_ROMAJI'
  | 'MEDIA_TITLE_ROMAJI_DESC'
  | 'MEDIA_TITLE_ENGLISH'
  | 'MEDIA_TITLE_ENGLISH_DESC'
  | 'MEDIA_TITLE_NATIVE'
  | 'MEDIA_TITLE_NATIVE_DESC'
  | 'MEDIA_POPULARITY'
  | 'MEDIA_POPULARITY_DESC';

/** Airing schedule sort enums */
export type AiringSort =
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'TIME'
  | 'TIME_DESC'
  | 'EPISODE'
  | 'EPISODE_DESC';

/** Notification union type */
export type NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification;

/** Notification for when an episode of anime airs */
export type AiringNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the aired anime */
  animeId: Scalars['Int']['output'];
  /** The episode number that just aired */
  episode: Scalars['Int']['output'];
  /** The notification context text */
  contexts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
};

/** Notification for when the authenticated user is followed by another user */
export type FollowingNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who followed the authenticated user */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The liked activity */
  user?: Maybe<User>;
};

/** Notification for when a user is send an activity message */
export type ActivityMessageNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The if of the user who send the message */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity message */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The message activity */
  message?: Maybe<MessageActivity>;
  /** The user who sent the message */
  user?: Maybe<User>;
};

/** User message activity */
export type MessageActivity = {
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** The user id of the activity's recipient */
  recipientId?: Maybe<Scalars['Int']['output']>;
  /** The user id of the activity's sender */
  messengerId?: Maybe<Scalars['Int']['output']>;
  /** The type of the activity */
  type?: Maybe<ActivityType>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The message text (Markdown) */
  message?: Maybe<Scalars['String']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the message is private and only viewable to the sender and recipients */
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The user who the activity message was sent to */
  recipient?: Maybe<User>;
  /** The user who sent the activity message */
  messenger?: Maybe<User>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
};


/** User message activity */
export type MessageActivitymessageArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Activity type enum. */
export type ActivityType =
  /** A text activity */
  | 'TEXT'
  /** A anime list update activity */
  | 'ANIME_LIST'
  /** A manga list update activity */
  | 'MANGA_LIST'
  /** A text message activity sent to another user */
  | 'MESSAGE'
  /** Anime & Manga list update, only used in query arguments */
  | 'MEDIA_LIST';

/** Replay to an activity item */
export type ActivityReply = {
  /** The id of the reply */
  id: Scalars['Int']['output'];
  /** The id of the replies creator */
  userId?: Maybe<Scalars['Int']['output']>;
  /** The id of the parent activity */
  activityId?: Maybe<Scalars['Int']['output']>;
  /** The reply text */
  text?: Maybe<Scalars['String']['output']>;
  /** The amount of likes the reply has */
  likeCount: Scalars['Int']['output'];
  /** If the currently authenticated user liked the reply */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** The time the reply was created at */
  createdAt: Scalars['Int']['output'];
  /** The user who created reply */
  user?: Maybe<User>;
  /** The users who liked the reply */
  likes?: Maybe<Array<Maybe<User>>>;
};


/** Replay to an activity item */
export type ActivityReplytextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type ActivityMentionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity where mentioned */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
};

/** Activity union type */
export type ActivityUnion = TextActivity | ListActivity | MessageActivity;

/** User text activity */
export type TextActivity = {
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']['output']>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The status text (Markdown) */
  text?: Maybe<Scalars['String']['output']>;
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The user who created the activity */
  user?: Maybe<User>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
};


/** User text activity */
export type TextActivitytextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** User list activity (anime & manga updates) */
export type ListActivity = {
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']['output']>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The list item's textual status */
  status?: Maybe<Scalars['String']['output']>;
  /** The list progress made */
  progress?: Maybe<Scalars['String']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The owner of the activity */
  user?: Maybe<User>;
  /** The associated media to the activity update */
  media?: Maybe<Media>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
};

/** Notification for when a user replies to the authenticated users activity */
export type ActivityReplyNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
};

/** Notification for when a user replies to activity the authenticated user has replied to */
export type ActivityReplySubscribedNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
};

/** Notification for when a activity is liked */
export type ActivityLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was liked */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who liked the activity */
  user?: Maybe<User>;
};

/** Notification for when a activity reply is liked */
export type ActivityReplyLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who liked to the activity reply */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity where the reply which was liked */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who liked the activity reply */
  user?: Maybe<User>;
};

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type ThreadCommentMentionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the comment where mentioned */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The thread comment that included the @ mention */
  comment?: Maybe<ThreadComment>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
};

/** Forum Thread */
export type Thread = {
  /** The id of the thread */
  id: Scalars['Int']['output'];
  /** The title of the thread */
  title?: Maybe<Scalars['String']['output']>;
  /** The text body of the thread (Markdown) */
  body?: Maybe<Scalars['String']['output']>;
  /** The id of the thread owner user */
  userId: Scalars['Int']['output'];
  /** The id of the user who most recently commented on the thread */
  replyUserId?: Maybe<Scalars['Int']['output']>;
  /** The id of the most recent comment on the thread */
  replyCommentId?: Maybe<Scalars['Int']['output']>;
  /** The number of comments on the thread */
  replyCount?: Maybe<Scalars['Int']['output']>;
  /** The number of times users have viewed the thread */
  viewCount?: Maybe<Scalars['Int']['output']>;
  /** If the thread is locked and can receive comments */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the thread is stickied and should be displayed at the top of the page */
  isSticky?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the thread */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the thread has */
  likeCount: Scalars['Int']['output'];
  /** If the currently authenticated user liked the thread */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** The time of the last reply */
  repliedAt?: Maybe<Scalars['Int']['output']>;
  /** The time of the thread creation */
  createdAt: Scalars['Int']['output'];
  /** The time of the thread last update */
  updatedAt: Scalars['Int']['output'];
  /** The owner of the thread */
  user?: Maybe<User>;
  /** The user to last reply to the thread */
  replyUser?: Maybe<User>;
  /** The users who liked the thread */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The url for the thread page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The categories of the thread */
  categories?: Maybe<Array<Maybe<ThreadCategory>>>;
  /** The media categories of the thread */
  mediaCategories?: Maybe<Array<Maybe<Media>>>;
};


/** Forum Thread */
export type ThreadbodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A forum thread category */
export type ThreadCategory = {
  /** The id of the category */
  id: Scalars['Int']['output'];
  /** The name of the category */
  name: Scalars['String']['output'];
};

/** Forum Thread Comment */
export type ThreadComment = {
  /** The id of the comment */
  id: Scalars['Int']['output'];
  /** The user id of the comment's owner */
  userId?: Maybe<Scalars['Int']['output']>;
  /** The id of thread the comment belongs to */
  threadId?: Maybe<Scalars['Int']['output']>;
  /** The text content of the comment (Markdown) */
  comment?: Maybe<Scalars['String']['output']>;
  /** The amount of likes the comment has */
  likeCount: Scalars['Int']['output'];
  /** If the currently authenticated user liked the comment */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** The url for the comment page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The time of the comments creation */
  createdAt: Scalars['Int']['output'];
  /** The time of the comments last update */
  updatedAt: Scalars['Int']['output'];
  /** The thread the comment belongs to */
  thread?: Maybe<Thread>;
  /** The user who created the comment */
  user?: Maybe<User>;
  /** The users who liked the comment */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The comment's child reply comments */
  childComments?: Maybe<Scalars['Json']['output']>;
  /** If the comment tree is locked and may not receive replies or edits */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
};


/** Forum Thread Comment */
export type ThreadCommentcommentArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Notification for when a user replies to your forum thread comment */
export type ThreadCommentReplyNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who create the comment reply */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the reply comment */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
};

/** Notification for when a user replies to a subscribed forum thread */
export type ThreadCommentSubscribedNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who commented on the thread */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the new comment in the subscribed thread */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The user who replied to the subscribed thread */
  user?: Maybe<User>;
};

/** Notification for when a thread comment is liked */
export type ThreadCommentLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was liked */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The thread comment that was liked */
  comment?: Maybe<ThreadComment>;
  /** The user who liked the activity */
  user?: Maybe<User>;
};

/** Notification for when a thread is liked */
export type ThreadLikeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the thread which was liked */
  threadId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The liked thread comment */
  comment?: Maybe<ThreadComment>;
  /** The user who liked the activity */
  user?: Maybe<User>;
};

/** Notification for when new media is added to the site */
export type RelatedMediaAdditionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the new media */
  mediaId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
};

/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export type MediaDataChangeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the media that received data changes */
  mediaId: Scalars['Int']['output'];
  /** The reason for the media data change */
  context?: Maybe<Scalars['String']['output']>;
  /** The reason for the media data change */
  reason?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The media that received data changes */
  media?: Maybe<Media>;
};

/** Notification for when a media entry is merged into another for a user who had it on their list */
export type MediaMergeNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the media that was merged into */
  mediaId: Scalars['Int']['output'];
  /** The title of the deleted media */
  deletedMediaTitles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The reason for the media data change */
  context?: Maybe<Scalars['String']['output']>;
  /** The reason for the media merge */
  reason?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The media that was merged into */
  media?: Maybe<Media>;
};

/** Notification for when a media tracked in a user's list is deleted from the site */
export type MediaDeletionNotification = {
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The title of the deleted media */
  deletedMediaTitle?: Maybe<Scalars['String']['output']>;
  /** The reason for the media deletion */
  context?: Maybe<Scalars['String']['output']>;
  /** The reason for the media deletion */
  reason?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
};

/** Activity sort enums */
export type ActivitySort =
  | 'ID'
  | 'ID_DESC'
  | 'PINNED';

/** Thread sort enums */
export type ThreadSort =
  | 'ID'
  | 'ID_DESC'
  | 'TITLE'
  | 'TITLE_DESC'
  | 'CREATED_AT'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'REPLIED_AT'
  | 'REPLIED_AT_DESC'
  | 'REPLY_COUNT'
  | 'REPLY_COUNT_DESC'
  | 'VIEW_COUNT'
  | 'VIEW_COUNT_DESC'
  | 'IS_STICKY'
  | 'SEARCH_MATCH';

/** Thread comments sort enums */
export type ThreadCommentSort =
  | 'ID'
  | 'ID_DESC';

/** Types that can be liked */
export type LikeableType =
  | 'THREAD'
  | 'THREAD_COMMENT'
  | 'ACTIVITY'
  | 'ACTIVITY_REPLY';

/** List of anime or manga */
export type MediaListCollection = {
  /** Grouped media list entries */
  lists?: Maybe<Array<Maybe<MediaListGroup>>>;
  /** The owner of the list */
  user?: Maybe<User>;
  /** If there is another chunk */
  hasNextChunk?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
};


/** List of anime or manga */
export type MediaListCollectionstatusListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};


/** List of anime or manga */
export type MediaListCollectioncustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

/** List group of anime or manga entries */
export type MediaListGroup = {
  /** Media list entries */
  entries?: Maybe<Array<Maybe<MediaList>>>;
  name?: Maybe<Scalars['String']['output']>;
  isCustomList?: Maybe<Scalars['Boolean']['output']>;
  isSplitCompletedList?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<MediaListStatus>;
};

/** Provides the parsed markdown as html */
export type ParsedMarkdown = {
  /** The parsed markdown as html */
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

/** Site trend sort enums */
export type SiteTrendSort =
  | 'DATE'
  | 'DATE_DESC'
  | 'COUNT'
  | 'COUNT_DESC'
  | 'CHANGE'
  | 'CHANGE_DESC';

export type SiteTrendConnection = {
  edges?: Maybe<Array<Maybe<SiteTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<SiteTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Site trend connection edge */
export type SiteTrendEdge = {
  node?: Maybe<SiteTrend>;
};

/** Daily site statistics */
export type SiteTrend = {
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  /** The change from yesterday */
  change: Scalars['Int']['output'];
};

export type ExternalLinkMediaType =
  | 'ANIME'
  | 'MANGA'
  | 'STAFF';

/** Notification option input */
export type NotificationOptionInput = {
  /** The type of notification */
  type?: InputMaybe<NotificationType>;
  /** Whether this type of notification is enabled */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The order each list should be displayed in */
  sectionOrder?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: InputMaybe<Scalars['Boolean']['input']>;
  /** The names of the user's custom lists */
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The names of the user's advanced scoring sections */
  advancedScoring?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** list theme */
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type ListActivityOptionInput = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<MediaListStatus>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Year (2017) */
  year?: InputMaybe<Scalars['Int']['input']>;
  /** Numeric Month (3) */
  month?: InputMaybe<Scalars['Int']['input']>;
  /** Numeric Day (24) */
  day?: InputMaybe<Scalars['Int']['input']>;
};

/** Deleted data type */
export type Deleted = {
  /** If an item has been successfully deleted */
  deleted?: Maybe<Scalars['Boolean']['output']>;
};

/** Likeable union type */
export type LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment;

export type AniChartHighlightInput = {
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  highlight?: InputMaybe<Scalars['String']['input']>;
};

/** Page of data (Used for internal use only) */
export type InternalPage = {
  mediaSubmissions?: Maybe<Array<Maybe<MediaSubmission>>>;
  characterSubmissions?: Maybe<Array<Maybe<CharacterSubmission>>>;
  staffSubmissions?: Maybe<Array<Maybe<StaffSubmission>>>;
  revisionHistory?: Maybe<Array<Maybe<RevisionHistory>>>;
  reports?: Maybe<Array<Maybe<Report>>>;
  modActions?: Maybe<Array<Maybe<ModAction>>>;
  userBlockSearch?: Maybe<Array<Maybe<User>>>;
  /** The pagination information */
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


/** Page of data (Used for internal use only) */
export type InternalPagemediaSubmissionsArgs = {
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  submissionId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SubmissionStatus>;
  type?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagecharacterSubmissionsArgs = {
  characterId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SubmissionStatus>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagestaffSubmissionsArgs = {
  staffId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SubmissionStatus>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagerevisionHistoryArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPagereportsArgs = {
  reporterId?: InputMaybe<Scalars['Int']['input']>;
  reportedId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPagemodActionsArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
  modId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageuserBlockSearchArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageusersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
export type InternalPagecharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagestaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagestudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
export type InternalPagenotificationsArgs = {
  type?: InputMaybe<NotificationType>;
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagefollowersArgs = {
  userId: Scalars['Int']['input'];
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagefollowingArgs = {
  userId: Scalars['Int']['input'];
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
export type InternalPageactivityRepliesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  activityId?: InputMaybe<Scalars['Int']['input']>;
};


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
export type InternalPagethreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPagereviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};


/** Page of data (Used for internal use only) */
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


/** Page of data (Used for internal use only) */
export type InternalPagelikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

/** Submission status */
export type SubmissionStatus =
  | 'PENDING'
  | 'REJECTED'
  | 'PARTIALLY_ACCEPTED'
  | 'ACCEPTED';

/** Submission sort enums */
export type SubmissionSort =
  | 'ID'
  | 'ID_DESC';

/** Media submission */
export type MediaSubmission = {
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** User submitter of the submission */
  submitter?: Maybe<User>;
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  submitterStats?: Maybe<Scalars['Json']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  changes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Whether the submission is locked */
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

/** Media submission with comparison to current data */
export type MediaSubmissionComparison = {
  submission?: Maybe<MediaSubmissionEdge>;
  character?: Maybe<MediaCharacter>;
  staff?: Maybe<StaffEdge>;
  studio?: Maybe<StudioEdge>;
  externalLink?: Maybe<MediaExternalLink>;
};

export type MediaSubmissionEdge = {
  /** The id of the direct submission */
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

/** Internal - Media characters separated */
export type MediaCharacter = {
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  roleNotes?: Maybe<Scalars['String']['output']>;
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** Media specific character name */
  characterName?: Maybe<Scalars['String']['output']>;
  /** The characters in the media voiced by the parent actor */
  character?: Maybe<Character>;
  /** The voice actor of the character */
  voiceActor?: Maybe<Staff>;
};

/** A submission for a character that features in an anime or manga */
export type CharacterSubmission = {
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Character that the submission is referencing */
  character?: Maybe<Character>;
  /** The character submission changes */
  submission?: Maybe<Character>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
};

/** A submission for a staff that features in an anime or manga */
export type StaffSubmission = {
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Staff that the submission is referencing */
  staff?: Maybe<Staff>;
  /** The staff submission changes */
  submission?: Maybe<Staff>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
};

/** Feed of mod edit activity */
export type RevisionHistory = {
  /** The id of the media */
  id: Scalars['Int']['output'];
  /** The action taken on the objects */
  action?: Maybe<RevisionHistoryAction>;
  /** A JSON object of the fields that changed */
  changes?: Maybe<Scalars['Json']['output']>;
  /** The user who made the edit to the object */
  user?: Maybe<User>;
  /** The media the mod feed entry references */
  media?: Maybe<Media>;
  /** The character the mod feed entry references */
  character?: Maybe<Character>;
  /** The staff member the mod feed entry references */
  staff?: Maybe<Staff>;
  /** The studio the mod feed entry references */
  studio?: Maybe<Studio>;
  /** The external link source the mod feed entry references */
  externalLink?: Maybe<MediaExternalLink>;
  /** When the mod feed entry was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
};

/** Revision history actions */
export type RevisionHistoryAction =
  | 'CREATE'
  | 'EDIT';

export type Report = {
  id: Scalars['Int']['output'];
  reporter?: Maybe<User>;
  reported?: Maybe<User>;
  reason?: Maybe<Scalars['String']['output']>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  cleared?: Maybe<Scalars['Boolean']['output']>;
};

export type ModAction = {
  /** The id of the action */
  id: Scalars['Int']['output'];
  user?: Maybe<User>;
  mod?: Maybe<User>;
  type?: Maybe<ModActionType>;
  objectId?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
};

export type ModActionType =
  | 'NOTE'
  | 'BAN'
  | 'DELETE'
  | 'EDIT'
  | 'EXPIRE'
  | 'REPORT'
  | 'RESET'
  | 'ANON';

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The romanization of the native language title */
  romaji?: InputMaybe<Scalars['String']['input']>;
  /** The official english title */
  english?: InputMaybe<Scalars['String']['input']>;
  /** Official title in it's native language */
  native?: InputMaybe<Scalars['String']['input']>;
};

export type AiringScheduleInput = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  timeUntilAiring?: InputMaybe<Scalars['Int']['input']>;
};

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
  /** The id of the external link */
  id: Scalars['Int']['input'];
  /** The url of the external link */
  url: Scalars['String']['input'];
  /** The site location of the external link */
  site: Scalars['String']['input'];
};

/** The names of the character */
export type CharacterNameInput = {
  /** The character's given name */
  first?: InputMaybe<Scalars['String']['input']>;
  /** The character's middle name */
  middle?: InputMaybe<Scalars['String']['input']>;
  /** The character's surname */
  last?: InputMaybe<Scalars['String']['input']>;
  /** The character's full name in their native language */
  native?: InputMaybe<Scalars['String']['input']>;
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CharacterSubmissionConnection = {
  edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
  nodes?: Maybe<Array<Maybe<CharacterSubmission>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** CharacterSubmission connection edge */
export type CharacterSubmissionEdge = {
  node?: Maybe<CharacterSubmission>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
  /** The submitted voice actors of the character */
  submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>;
};

/** The names of the staff member */
export type StaffNameInput = {
  /** The person's given name */
  first?: InputMaybe<Scalars['String']['input']>;
  /** The person's middle name */
  middle?: InputMaybe<Scalars['String']['input']>;
  /** The person's surname */
  last?: InputMaybe<Scalars['String']['input']>;
  /** The person's full name in their native language */
  native?: InputMaybe<Scalars['String']['input']>;
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** User data for moderators */
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
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  NotificationUnion: ( AiringNotification ) | ( FollowingNotification ) | ( ActivityMessageNotification ) | ( Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<RefType['ActivityUnion']> } ) | ( Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<RefType['ActivityUnion']> } ) | ( Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<RefType['ActivityUnion']> } ) | ( Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<RefType['ActivityUnion']> } ) | ( Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<RefType['ActivityUnion']> } ) | ( ThreadCommentMentionNotification ) | ( ThreadCommentReplyNotification ) | ( ThreadCommentSubscribedNotification ) | ( ThreadCommentLikeNotification ) | ( ThreadLikeNotification ) | ( RelatedMediaAdditionNotification ) | ( MediaDataChangeNotification ) | ( MediaMergeNotification ) | ( MediaDeletionNotification );
  ActivityUnion: ( TextActivity ) | ( ListActivity ) | ( MessageActivity );
  LikeableUnion: ( ListActivity ) | ( TextActivity ) | ( MessageActivity ) | ( ActivityReply ) | ( Thread ) | ( ThreadComment );
}>;


/** Mapping between all available schema types and the resolvers types */
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
  Page: ResolverTypeWrapper<Omit<Page, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>> }>;
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
  ActivityMentionNotification: ResolverTypeWrapper<Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ActivityUnion']>;
  TextActivity: ResolverTypeWrapper<TextActivity>;
  ListActivity: ResolverTypeWrapper<ListActivity>;
  ActivityReplyNotification: ResolverTypeWrapper<Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityReplySubscribedNotification: ResolverTypeWrapper<Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityLikeNotification: ResolverTypeWrapper<Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityReplyLikeNotification: ResolverTypeWrapper<Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
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
  InternalPage: ResolverTypeWrapper<Omit<InternalPage, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>> }>;
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

/** Mapping between all available schema types and the resolvers parents */
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
  Page: Omit<Page, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversParentTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversParentTypes['ActivityUnion']>>> };
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
  ActivityMentionNotification: Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityUnion: ResolversUnionTypes<ResolversParentTypes>['ActivityUnion'];
  TextActivity: TextActivity;
  ListActivity: ListActivity;
  ActivityReplyNotification: Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityReplySubscribedNotification: Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityLikeNotification: Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityReplyLikeNotification: Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
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
  InternalPage: Omit<InternalPage, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversParentTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversParentTypes['ActivityUnion']>>> };
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


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/CountriesGraphQL/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/PetStoreSwaggerAPI/schemaWithAnnotations":
      return Promise.resolve(importedModule$1) as T;
    
    case ".mesh/sources/AnimeCharactersGraphQL/introspectionSchema":
      return Promise.resolve(importedModule$2) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const countriesGraphQlTransforms = [];
const animeCharactersGraphQlTransforms = [];
const petStoreSwaggerApiTransforms = [];
const additionalTypeDefs = [] as any[];
const countriesGraphQlHandler = new GraphqlHandler({
              name: "CountriesGraphQL",
              config: {"endpoint":"https://countries.trevorblades.com/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("CountriesGraphQL"),
              logger: logger.child("CountriesGraphQL"),
              importFn,
            });
const animeCharactersGraphQlHandler = new GraphqlHandler({
              name: "AnimeCharactersGraphQL",
              config: {"endpoint":"https://graphql.anilist.co"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("AnimeCharactersGraphQL"),
              logger: logger.child("AnimeCharactersGraphQL"),
              importFn,
            });
const petStoreSwaggerApiHandler = new OpenapiHandler({
              name: "PetStoreSwaggerAPI",
              config: {"source":"https://petstore.swagger.io/v2/swagger.json"},
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
        }
sources[1] = {
          name: 'AnimeCharactersGraphQL',
          handler: animeCharactersGraphQlHandler,
          transforms: animeCharactersGraphQlTransforms
        }
sources[2] = {
          name: 'PetStoreSwaggerAPI',
          handler: petStoreSwaggerApiHandler,
          transforms: petStoreSwaggerApiTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
const documentHashMap = {
        "8716219f1d0d9eb539c5d75834271437bb1f0cb380dbf6524c09d5e3c31a9b01": GetAnimeCharacterDocument,
"3ff8a0a8d49d3e40b2a1d64163a54c717efb4cb98f389375e937f3d5c2821b4d": GetPetByIdDocument,
"4dcdc18961b94f41ba059827f6703996b459be503d6504e01892758959d09e16": GetCountryDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
      }))

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
        document: GetAnimeCharacterDocument,
        get rawSDL() {
          return printWithCache(GetAnimeCharacterDocument);
        },
        location: 'GetAnimeCharacterDocument.graphql',
        sha256Hash: '8716219f1d0d9eb539c5d75834271437bb1f0cb380dbf6524c09d5e3c31a9b01'
      },{
        document: GetPetByIdDocument,
        get rawSDL() {
          return printWithCache(GetPetByIdDocument);
        },
        location: 'GetPetByIdDocument.graphql',
        sha256Hash: '3ff8a0a8d49d3e40b2a1d64163a54c717efb4cb98f389375e937f3d5c2821b4d'
      },{
        document: GetCountryDocument,
        get rawSDL() {
          return printWithCache(GetCountryDocument);
        },
        location: 'GetCountryDocument.graphql',
        sha256Hash: '4dcdc18961b94f41ba059827f6703996b459be503d6504e01892758959d09e16'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetAnimeCharacterQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetAnimeCharacterQuery = { Character?: Maybe<(
    Pick<Character, 'age' | 'description'>
    & { name?: Maybe<Pick<CharacterName, 'first' | 'last'>>, image?: Maybe<Pick<CharacterImage, 'large'>> }
  )> };

export type GetCountryQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type GetCountryQuery = { country?: Maybe<(
    Pick<Country, 'name' | 'native' | 'capital' | 'emoji' | 'currency'>
    & { languages: Array<Pick<Language, 'code' | 'name'>> }
  )> };

export type GetPetByIdQueryVariables = Exact<{
  petId: Scalars['BigInt']['input'];
}>;


export type GetPetByIdQuery = { getPetById: (
    Pick<Pet, 'name'>
    & { category?: Maybe<Pick<Category, 'id' | 'name'>> }
  ) };


export const GetAnimeCharacterDocument = gql`
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
    ` as unknown as DocumentNode<GetAnimeCharacterQuery, GetAnimeCharacterQueryVariables>;
export const GetCountryDocument = gql`
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
    ` as unknown as DocumentNode<GetCountryQuery, GetCountryQueryVariables>;
export const GetPetByIdDocument = gql`
    query GetPetById($petId: BigInt!) {
  getPetById(petId: $petId) {
    name
    category {
      id
      name
    }
  }
}
    ` as unknown as DocumentNode<GetPetByIdQuery, GetPetByIdQueryVariables>;




export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetAnimeCharacter(variables: GetAnimeCharacterQueryVariables, options?: C): Promise<GetAnimeCharacterQuery> {
      return requester<GetAnimeCharacterQuery, GetAnimeCharacterQueryVariables>(GetAnimeCharacterDocument, variables, options) as Promise<GetAnimeCharacterQuery>;
    },
    GetCountry(variables: GetCountryQueryVariables, options?: C): Promise<GetCountryQuery> {
      return requester<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, variables, options) as Promise<GetCountryQuery>;
    },
    GetPetById(variables: GetPetByIdQueryVariables, options?: C): Promise<GetPetByIdQuery> {
      return requester<GetPetByIdQuery, GetPetByIdQueryVariables>(GetPetByIdDocument, variables, options) as Promise<GetPetByIdQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;