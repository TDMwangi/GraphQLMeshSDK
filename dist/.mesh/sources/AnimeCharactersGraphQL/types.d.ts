import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';
export declare namespace AnimeCharactersGraphQlTypes {
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
    type Query = {
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
    type QueryPageArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type QueryMediaArgs = {
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
    type QueryMediaTrendArgs = {
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
    type QueryAiringScheduleArgs = {
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
    type QueryCharacterArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
    };
    type QueryStaffArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type QueryMediaListArgs = {
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
    type QueryMediaListCollectionArgs = {
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
    type QueryMediaTagCollectionArgs = {
        status?: InputMaybe<Scalars['Int']['input']>;
    };
    type QueryUserArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        name?: InputMaybe<Scalars['String']['input']>;
        isModerator?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type QueryNotificationArgs = {
        type?: InputMaybe<NotificationType>;
        resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
        type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
    };
    type QueryStudioArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
    };
    type QueryReviewArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        mediaType?: InputMaybe<MediaType>;
        sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
    };
    type QueryActivityArgs = {
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
    type QueryActivityReplyArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        activityId?: InputMaybe<Scalars['Int']['input']>;
    };
    type QueryFollowingArgs = {
        userId: Scalars['Int']['input'];
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type QueryFollowerArgs = {
        userId: Scalars['Int']['input'];
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type QueryThreadArgs = {
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
    type QueryThreadCommentArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        threadId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
    };
    type QueryRecommendationArgs = {
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
    type QueryLikeArgs = {
        likeableId?: InputMaybe<Scalars['Int']['input']>;
        type?: InputMaybe<LikeableType>;
    };
    type QueryMarkdownArgs = {
        markdown: Scalars['String']['input'];
    };
    type QueryExternalLinkSourceCollectionArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        type?: InputMaybe<ExternalLinkType>;
        mediaType?: InputMaybe<ExternalLinkMediaType>;
    };
    type Page = {
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
    type PageusersArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        name?: InputMaybe<Scalars['String']['input']>;
        isModerator?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type PagemediaArgs = {
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
    type PagecharactersArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
    };
    type PagestaffArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type PagestudiosArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
    };
    type PagemediaListArgs = {
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
    type PageairingSchedulesArgs = {
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
    type PagemediaTrendsArgs = {
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
    type PagenotificationsArgs = {
        type?: InputMaybe<NotificationType>;
        resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
        type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
    };
    type PagefollowersArgs = {
        userId: Scalars['Int']['input'];
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type PagefollowingArgs = {
        userId: Scalars['Int']['input'];
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type PageactivitiesArgs = {
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
    type PageactivityRepliesArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        activityId?: InputMaybe<Scalars['Int']['input']>;
    };
    type PagethreadsArgs = {
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
    type PagethreadCommentsArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        threadId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
    };
    type PagereviewsArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        mediaType?: InputMaybe<MediaType>;
        sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
    };
    type PagerecommendationsArgs = {
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
    type PagelikesArgs = {
        likeableId?: InputMaybe<Scalars['Int']['input']>;
        type?: InputMaybe<LikeableType>;
    };
    type PageInfo = {
        total?: Maybe<Scalars['Int']['output']>;
        perPage?: Maybe<Scalars['Int']['output']>;
        currentPage?: Maybe<Scalars['Int']['output']>;
        lastPage?: Maybe<Scalars['Int']['output']>;
        hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    };
    type UserSort = 'ID' | 'ID_DESC' | 'USERNAME' | 'USERNAME_DESC' | 'WATCHED_TIME' | 'WATCHED_TIME_DESC' | 'CHAPTERS_READ' | 'CHAPTERS_READ_DESC' | 'SEARCH_MATCH';
    type User = {
        id: Scalars['Int']['output'];
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
    type UseraboutArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type UserfavouritesArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
    };
    type UserAvatar = {
        large?: Maybe<Scalars['String']['output']>;
        medium?: Maybe<Scalars['String']['output']>;
    };
    type UserOptions = {
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
    type UserTitleLanguage = 'ROMAJI' | 'ENGLISH' | 'NATIVE' | 'ROMAJI_STYLISED' | 'ENGLISH_STYLISED' | 'NATIVE_STYLISED';
    type NotificationOption = {
        type?: Maybe<NotificationType>;
        enabled?: Maybe<Scalars['Boolean']['output']>;
    };
    type NotificationType = 'ACTIVITY_MESSAGE' | 'ACTIVITY_REPLY' | 'FOLLOWING' | 'ACTIVITY_MENTION' | 'THREAD_COMMENT_MENTION' | 'THREAD_SUBSCRIBED' | 'THREAD_COMMENT_REPLY' | 'AIRING' | 'ACTIVITY_LIKE' | 'ACTIVITY_REPLY_LIKE' | 'THREAD_LIKE' | 'THREAD_COMMENT_LIKE' | 'ACTIVITY_REPLY_SUBSCRIBED' | 'RELATED_MEDIA_ADDITION' | 'MEDIA_DATA_CHANGE' | 'MEDIA_MERGE' | 'MEDIA_DELETION';
    type UserStaffNameLanguage = 'ROMAJI_WESTERN' | 'ROMAJI' | 'NATIVE';
    type ListActivityOption = {
        disabled?: Maybe<Scalars['Boolean']['output']>;
        type?: Maybe<MediaListStatus>;
    };
    type MediaListStatus = 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED' | 'REPEATING';
    type MediaListOptions = {
        scoreFormat?: Maybe<ScoreFormat>;
        rowOrder?: Maybe<Scalars['String']['output']>;
        useLegacyLists?: Maybe<Scalars['Boolean']['output']>;
        animeList?: Maybe<MediaListTypeOptions>;
        mangaList?: Maybe<MediaListTypeOptions>;
        sharedTheme?: Maybe<Scalars['Json']['output']>;
        sharedThemeEnabled?: Maybe<Scalars['Boolean']['output']>;
    };
    type ScoreFormat = 'POINT_100' | 'POINT_10_DECIMAL' | 'POINT_10' | 'POINT_5' | 'POINT_3';
    type MediaListTypeOptions = {
        sectionOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']['output']>;
        theme?: Maybe<Scalars['Json']['output']>;
        customLists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        advancedScoring?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        advancedScoringEnabled?: Maybe<Scalars['Boolean']['output']>;
    };
    type Favourites = {
        anime?: Maybe<MediaConnection>;
        manga?: Maybe<MediaConnection>;
        characters?: Maybe<CharacterConnection>;
        staff?: Maybe<StaffConnection>;
        studios?: Maybe<StudioConnection>;
    };
    type FavouritesanimeArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type FavouritesmangaArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type FavouritescharactersArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type FavouritesstaffArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type FavouritesstudiosArgs = {
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediaConnection = {
        edges?: Maybe<Array<Maybe<MediaEdge>>>;
        nodes?: Maybe<Array<Maybe<Media>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type MediaEdge = {
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
    type MediaEdgerelationTypeArgs = {
        version?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediaEdgevoiceActorsArgs = {
        language?: InputMaybe<StaffLanguage>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type MediaEdgevoiceActorRolesArgs = {
        language?: InputMaybe<StaffLanguage>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type Media = {
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
    type MediastatusArgs = {
        version?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediadescriptionArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediasourceArgs = {
        version?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediacharactersArgs = {
        sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
        role?: InputMaybe<CharacterRole>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediastaffArgs = {
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediastudiosArgs = {
        sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
        isMain?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaairingScheduleArgs = {
        notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediatrendsArgs = {
        sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
        releasing?: InputMaybe<Scalars['Boolean']['input']>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediareviewsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediarecommendationsArgs = {
        sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediaTitle = {
        romaji?: Maybe<Scalars['String']['output']>;
        english?: Maybe<Scalars['String']['output']>;
        native?: Maybe<Scalars['String']['output']>;
        userPreferred?: Maybe<Scalars['String']['output']>;
    };
    type MediaTitleromajiArgs = {
        stylised?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaTitleenglishArgs = {
        stylised?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaTitlenativeArgs = {
        stylised?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaType = 'ANIME' | 'MANGA';
    type MediaFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT';
    type MediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';
    type FuzzyDate = {
        year?: Maybe<Scalars['Int']['output']>;
        month?: Maybe<Scalars['Int']['output']>;
        day?: Maybe<Scalars['Int']['output']>;
    };
    type MediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
    type MediaSource = 'ORIGINAL' | 'MANGA' | 'LIGHT_NOVEL' | 'VISUAL_NOVEL' | 'VIDEO_GAME' | 'OTHER' | 'NOVEL' | 'DOUJINSHI' | 'ANIME' | 'WEB_NOVEL' | 'LIVE_ACTION' | 'GAME' | 'COMIC' | 'MULTIMEDIA_PROJECT' | 'PICTURE_BOOK';
    type MediaTrailer = {
        id?: Maybe<Scalars['String']['output']>;
        site?: Maybe<Scalars['String']['output']>;
        thumbnail?: Maybe<Scalars['String']['output']>;
    };
    type MediaCoverImage = {
        extraLarge?: Maybe<Scalars['String']['output']>;
        large?: Maybe<Scalars['String']['output']>;
        medium?: Maybe<Scalars['String']['output']>;
        color?: Maybe<Scalars['String']['output']>;
    };
    type MediaTag = {
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
    type CharacterSort = 'ID' | 'ID_DESC' | 'ROLE' | 'ROLE_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC' | 'RELEVANCE';
    type CharacterRole = 'MAIN' | 'SUPPORTING' | 'BACKGROUND';
    type CharacterConnection = {
        edges?: Maybe<Array<Maybe<CharacterEdge>>>;
        nodes?: Maybe<Array<Maybe<Character>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type CharacterEdge = {
        node?: Maybe<Character>;
        id?: Maybe<Scalars['Int']['output']>;
        role?: Maybe<CharacterRole>;
        name?: Maybe<Scalars['String']['output']>;
        voiceActors?: Maybe<Array<Maybe<Staff>>>;
        voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
        media?: Maybe<Array<Maybe<Media>>>;
        favouriteOrder?: Maybe<Scalars['Int']['output']>;
    };
    type CharacterEdgevoiceActorsArgs = {
        language?: InputMaybe<StaffLanguage>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type CharacterEdgevoiceActorRolesArgs = {
        language?: InputMaybe<StaffLanguage>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type Character = {
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
    type CharacterdescriptionArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type CharactermediaArgs = {
        sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
        type?: InputMaybe<MediaType>;
        onList?: InputMaybe<Scalars['Boolean']['input']>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type CharacterName = {
        first?: Maybe<Scalars['String']['output']>;
        middle?: Maybe<Scalars['String']['output']>;
        last?: Maybe<Scalars['String']['output']>;
        full?: Maybe<Scalars['String']['output']>;
        native?: Maybe<Scalars['String']['output']>;
        alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        alternativeSpoiler?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        userPreferred?: Maybe<Scalars['String']['output']>;
    };
    type CharacterImage = {
        large?: Maybe<Scalars['String']['output']>;
        medium?: Maybe<Scalars['String']['output']>;
    };
    type MediaSort = 'ID' | 'ID_DESC' | 'TITLE_ROMAJI' | 'TITLE_ROMAJI_DESC' | 'TITLE_ENGLISH' | 'TITLE_ENGLISH_DESC' | 'TITLE_NATIVE' | 'TITLE_NATIVE_DESC' | 'TYPE' | 'TYPE_DESC' | 'FORMAT' | 'FORMAT_DESC' | 'START_DATE' | 'START_DATE_DESC' | 'END_DATE' | 'END_DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODES' | 'EPISODES_DESC' | 'DURATION' | 'DURATION_DESC' | 'STATUS' | 'STATUS_DESC' | 'CHAPTERS' | 'CHAPTERS_DESC' | 'VOLUMES' | 'VOLUMES_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC';
    type StaffLanguage = 'JAPANESE' | 'ENGLISH' | 'KOREAN' | 'ITALIAN' | 'SPANISH' | 'PORTUGUESE' | 'FRENCH' | 'GERMAN' | 'HEBREW' | 'HUNGARIAN';
    type StaffSort = 'ID' | 'ID_DESC' | 'ROLE' | 'ROLE_DESC' | 'LANGUAGE' | 'LANGUAGE_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC' | 'RELEVANCE';
    type Staff = {
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
    type StaffdescriptionArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type StaffstaffMediaArgs = {
        sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
        type?: InputMaybe<MediaType>;
        onList?: InputMaybe<Scalars['Boolean']['input']>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type StaffcharactersArgs = {
        sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type StaffcharacterMediaArgs = {
        sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
        onList?: InputMaybe<Scalars['Boolean']['input']>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type StaffName = {
        first?: Maybe<Scalars['String']['output']>;
        middle?: Maybe<Scalars['String']['output']>;
        last?: Maybe<Scalars['String']['output']>;
        full?: Maybe<Scalars['String']['output']>;
        native?: Maybe<Scalars['String']['output']>;
        alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        userPreferred?: Maybe<Scalars['String']['output']>;
    };
    type StaffImage = {
        large?: Maybe<Scalars['String']['output']>;
        medium?: Maybe<Scalars['String']['output']>;
    };
    type StaffRoleType = {
        voiceActor?: Maybe<Staff>;
        roleNotes?: Maybe<Scalars['String']['output']>;
        dubGroup?: Maybe<Scalars['String']['output']>;
    };
    type StaffConnection = {
        edges?: Maybe<Array<Maybe<StaffEdge>>>;
        nodes?: Maybe<Array<Maybe<Staff>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type StaffEdge = {
        node?: Maybe<Staff>;
        id?: Maybe<Scalars['Int']['output']>;
        role?: Maybe<Scalars['String']['output']>;
        favouriteOrder?: Maybe<Scalars['Int']['output']>;
    };
    type StudioSort = 'ID' | 'ID_DESC' | 'NAME' | 'NAME_DESC' | 'SEARCH_MATCH' | 'FAVOURITES' | 'FAVOURITES_DESC';
    type StudioConnection = {
        edges?: Maybe<Array<Maybe<StudioEdge>>>;
        nodes?: Maybe<Array<Maybe<Studio>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type StudioEdge = {
        node?: Maybe<Studio>;
        id?: Maybe<Scalars['Int']['output']>;
        isMain: Scalars['Boolean']['output'];
        favouriteOrder?: Maybe<Scalars['Int']['output']>;
    };
    type Studio = {
        id: Scalars['Int']['output'];
        name: Scalars['String']['output'];
        isAnimationStudio: Scalars['Boolean']['output'];
        media?: Maybe<MediaConnection>;
        siteUrl?: Maybe<Scalars['String']['output']>;
        isFavourite: Scalars['Boolean']['output'];
        favourites?: Maybe<Scalars['Int']['output']>;
    };
    type StudiomediaArgs = {
        sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
        isMain?: InputMaybe<Scalars['Boolean']['input']>;
        onList?: InputMaybe<Scalars['Boolean']['input']>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type AiringSchedule = {
        id: Scalars['Int']['output'];
        airingAt: Scalars['Int']['output'];
        timeUntilAiring: Scalars['Int']['output'];
        episode: Scalars['Int']['output'];
        mediaId: Scalars['Int']['output'];
        media?: Maybe<Media>;
    };
    type AiringScheduleConnection = {
        edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>;
        nodes?: Maybe<Array<Maybe<AiringSchedule>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type AiringScheduleEdge = {
        node?: Maybe<AiringSchedule>;
        id?: Maybe<Scalars['Int']['output']>;
    };
    type MediaTrendSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'DATE' | 'DATE_DESC' | 'SCORE' | 'SCORE_DESC' | 'POPULARITY' | 'POPULARITY_DESC' | 'TRENDING' | 'TRENDING_DESC' | 'EPISODE' | 'EPISODE_DESC';
    type MediaTrendConnection = {
        edges?: Maybe<Array<Maybe<MediaTrendEdge>>>;
        nodes?: Maybe<Array<Maybe<MediaTrend>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type MediaTrendEdge = {
        node?: Maybe<MediaTrend>;
    };
    type MediaTrend = {
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
    type MediaExternalLink = {
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
    type ExternalLinkType = 'INFO' | 'STREAMING' | 'SOCIAL';
    type MediaStreamingEpisode = {
        title?: Maybe<Scalars['String']['output']>;
        thumbnail?: Maybe<Scalars['String']['output']>;
        url?: Maybe<Scalars['String']['output']>;
        site?: Maybe<Scalars['String']['output']>;
    };
    type MediaRank = {
        id: Scalars['Int']['output'];
        rank: Scalars['Int']['output'];
        type: MediaRankType;
        format: MediaFormat;
        year?: Maybe<Scalars['Int']['output']>;
        season?: Maybe<MediaSeason>;
        allTime?: Maybe<Scalars['Boolean']['output']>;
        context: Scalars['String']['output'];
    };
    type MediaRankType = 'RATED' | 'POPULAR';
    type MediaList = {
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
    type MediaListscoreArgs = {
        format?: InputMaybe<ScoreFormat>;
    };
    type MediaListcustomListsArgs = {
        asArray?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ReviewSort = 'ID' | 'ID_DESC' | 'SCORE' | 'SCORE_DESC' | 'RATING' | 'RATING_DESC' | 'CREATED_AT' | 'CREATED_AT_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC';
    type ReviewConnection = {
        edges?: Maybe<Array<Maybe<ReviewEdge>>>;
        nodes?: Maybe<Array<Maybe<Review>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type ReviewEdge = {
        node?: Maybe<Review>;
    };
    type Review = {
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
    type ReviewbodyArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ReviewRating = 'NO_VOTE' | 'UP_VOTE' | 'DOWN_VOTE';
    type RecommendationSort = 'ID' | 'ID_DESC' | 'RATING' | 'RATING_DESC';
    type RecommendationConnection = {
        edges?: Maybe<Array<Maybe<RecommendationEdge>>>;
        nodes?: Maybe<Array<Maybe<Recommendation>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type RecommendationEdge = {
        node?: Maybe<Recommendation>;
    };
    type Recommendation = {
        id: Scalars['Int']['output'];
        rating?: Maybe<Scalars['Int']['output']>;
        userRating?: Maybe<RecommendationRating>;
        media?: Maybe<Media>;
        mediaRecommendation?: Maybe<Media>;
        user?: Maybe<User>;
    };
    type RecommendationRating = 'NO_RATING' | 'RATE_UP' | 'RATE_DOWN';
    type MediaStats = {
        scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
        statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
        airingProgression?: Maybe<Array<Maybe<AiringProgression>>>;
    };
    type ScoreDistribution = {
        score?: Maybe<Scalars['Int']['output']>;
        amount?: Maybe<Scalars['Int']['output']>;
    };
    type StatusDistribution = {
        status?: Maybe<MediaListStatus>;
        amount?: Maybe<Scalars['Int']['output']>;
    };
    type AiringProgression = {
        episode?: Maybe<Scalars['Float']['output']>;
        score?: Maybe<Scalars['Float']['output']>;
        watching?: Maybe<Scalars['Int']['output']>;
    };
    type MediaRelation = 'ADAPTATION' | 'PREQUEL' | 'SEQUEL' | 'PARENT' | 'SIDE_STORY' | 'CHARACTER' | 'SUMMARY' | 'ALTERNATIVE' | 'SPIN_OFF' | 'OTHER' | 'SOURCE' | 'COMPILATION' | 'CONTAINS';
    type UserStatisticTypes = {
        anime?: Maybe<UserStatistics>;
        manga?: Maybe<UserStatistics>;
    };
    type UserStatistics = {
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
    type UserStatisticsformatsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsstatusesArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsscoresArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticslengthsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsreleaseYearsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsstartYearsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsgenresArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticstagsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticscountriesArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsvoiceActorsArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsstaffArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsstudiosArgs = {
        limit?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
    };
    type UserStatisticsSort = 'ID' | 'ID_DESC' | 'COUNT' | 'COUNT_DESC' | 'PROGRESS' | 'PROGRESS_DESC' | 'MEAN_SCORE' | 'MEAN_SCORE_DESC';
    type UserFormatStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        format?: Maybe<MediaFormat>;
    };
    type UserStatusStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        status?: Maybe<MediaListStatus>;
    };
    type UserScoreStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        score?: Maybe<Scalars['Int']['output']>;
    };
    type UserLengthStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        length?: Maybe<Scalars['String']['output']>;
    };
    type UserReleaseYearStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        releaseYear?: Maybe<Scalars['Int']['output']>;
    };
    type UserStartYearStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        startYear?: Maybe<Scalars['Int']['output']>;
    };
    type UserGenreStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        genre?: Maybe<Scalars['String']['output']>;
    };
    type UserTagStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        tag?: Maybe<MediaTag>;
    };
    type UserCountryStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        country?: Maybe<Scalars['CountryCode']['output']>;
    };
    type UserVoiceActorStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        voiceActor?: Maybe<Staff>;
        characterIds: Array<Maybe<Scalars['Int']['output']>>;
    };
    type UserStaffStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        staff?: Maybe<Staff>;
    };
    type UserStudioStatistic = {
        count: Scalars['Int']['output'];
        meanScore: Scalars['Float']['output'];
        minutesWatched: Scalars['Int']['output'];
        chaptersRead: Scalars['Int']['output'];
        mediaIds: Array<Maybe<Scalars['Int']['output']>>;
        studio?: Maybe<Studio>;
    };
    type ModRole = 'ADMIN' | 'LEAD_DEVELOPER' | 'DEVELOPER' | 'LEAD_COMMUNITY' | 'COMMUNITY' | 'DISCORD_COMMUNITY' | 'LEAD_ANIME_DATA' | 'ANIME_DATA' | 'LEAD_MANGA_DATA' | 'MANGA_DATA' | 'LEAD_SOCIAL_MEDIA' | 'SOCIAL_MEDIA' | 'RETIRED' | 'CHARACTER_DATA' | 'STAFF_DATA';
    type UserStats = {
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
    type UserActivityHistory = {
        date?: Maybe<Scalars['Int']['output']>;
        amount?: Maybe<Scalars['Int']['output']>;
        level?: Maybe<Scalars['Int']['output']>;
    };
    type ListScoreStats = {
        meanScore?: Maybe<Scalars['Int']['output']>;
        standardDeviation?: Maybe<Scalars['Int']['output']>;
    };
    type GenreStats = {
        genre?: Maybe<Scalars['String']['output']>;
        amount?: Maybe<Scalars['Int']['output']>;
        meanScore?: Maybe<Scalars['Int']['output']>;
        timeWatched?: Maybe<Scalars['Int']['output']>;
    };
    type TagStats = {
        tag?: Maybe<MediaTag>;
        amount?: Maybe<Scalars['Int']['output']>;
        meanScore?: Maybe<Scalars['Int']['output']>;
        timeWatched?: Maybe<Scalars['Int']['output']>;
    };
    type StaffStats = {
        staff?: Maybe<Staff>;
        amount?: Maybe<Scalars['Int']['output']>;
        meanScore?: Maybe<Scalars['Int']['output']>;
        timeWatched?: Maybe<Scalars['Int']['output']>;
    };
    type StudioStats = {
        studio?: Maybe<Studio>;
        amount?: Maybe<Scalars['Int']['output']>;
        meanScore?: Maybe<Scalars['Int']['output']>;
        timeWatched?: Maybe<Scalars['Int']['output']>;
    };
    type YearStats = {
        year?: Maybe<Scalars['Int']['output']>;
        amount?: Maybe<Scalars['Int']['output']>;
        meanScore?: Maybe<Scalars['Int']['output']>;
    };
    type FormatStats = {
        format?: Maybe<MediaFormat>;
        amount?: Maybe<Scalars['Int']['output']>;
    };
    type UserPreviousName = {
        name?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        updatedAt?: Maybe<Scalars['Int']['output']>;
    };
    type MediaListSort = 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'SCORE' | 'SCORE_DESC' | 'STATUS' | 'STATUS_DESC' | 'PROGRESS' | 'PROGRESS_DESC' | 'PROGRESS_VOLUMES' | 'PROGRESS_VOLUMES_DESC' | 'REPEAT' | 'REPEAT_DESC' | 'PRIORITY' | 'PRIORITY_DESC' | 'STARTED_ON' | 'STARTED_ON_DESC' | 'FINISHED_ON' | 'FINISHED_ON_DESC' | 'ADDED_TIME' | 'ADDED_TIME_DESC' | 'UPDATED_TIME' | 'UPDATED_TIME_DESC' | 'MEDIA_TITLE_ROMAJI' | 'MEDIA_TITLE_ROMAJI_DESC' | 'MEDIA_TITLE_ENGLISH' | 'MEDIA_TITLE_ENGLISH_DESC' | 'MEDIA_TITLE_NATIVE' | 'MEDIA_TITLE_NATIVE_DESC' | 'MEDIA_POPULARITY' | 'MEDIA_POPULARITY_DESC';
    type AiringSort = 'ID' | 'ID_DESC' | 'MEDIA_ID' | 'MEDIA_ID_DESC' | 'TIME' | 'TIME_DESC' | 'EPISODE' | 'EPISODE_DESC';
    type NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification;
    type AiringNotification = {
        id: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        animeId: Scalars['Int']['output'];
        episode: Scalars['Int']['output'];
        contexts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        media?: Maybe<Media>;
    };
    type FollowingNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        user?: Maybe<User>;
    };
    type ActivityMessageNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        activityId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        message?: Maybe<MessageActivity>;
        user?: Maybe<User>;
    };
    type MessageActivity = {
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
    type MessageActivitymessageArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ActivityType = 'TEXT' | 'ANIME_LIST' | 'MANGA_LIST' | 'MESSAGE' | 'MEDIA_LIST';
    type ActivityReply = {
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
    type ActivityReplytextArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ActivityMentionNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        activityId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        activity?: Maybe<ActivityUnion>;
        user?: Maybe<User>;
    };
    type ActivityUnion = TextActivity | ListActivity | MessageActivity;
    type TextActivity = {
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
    type TextActivitytextArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ListActivity = {
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
    type ActivityReplyNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        activityId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        activity?: Maybe<ActivityUnion>;
        user?: Maybe<User>;
    };
    type ActivityReplySubscribedNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        activityId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        activity?: Maybe<ActivityUnion>;
        user?: Maybe<User>;
    };
    type ActivityLikeNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        activityId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        activity?: Maybe<ActivityUnion>;
        user?: Maybe<User>;
    };
    type ActivityReplyLikeNotification = {
        id: Scalars['Int']['output'];
        userId: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        activityId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        activity?: Maybe<ActivityUnion>;
        user?: Maybe<User>;
    };
    type ThreadCommentMentionNotification = {
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
    type Thread = {
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
    type ThreadbodyArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ThreadCategory = {
        id: Scalars['Int']['output'];
        name: Scalars['String']['output'];
    };
    type ThreadComment = {
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
    type ThreadCommentcommentArgs = {
        asHtml?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type ThreadCommentReplyNotification = {
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
    type ThreadCommentSubscribedNotification = {
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
    type ThreadCommentLikeNotification = {
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
    type ThreadLikeNotification = {
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
    type RelatedMediaAdditionNotification = {
        id: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        mediaId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        media?: Maybe<Media>;
    };
    type MediaDataChangeNotification = {
        id: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        mediaId: Scalars['Int']['output'];
        context?: Maybe<Scalars['String']['output']>;
        reason?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        media?: Maybe<Media>;
    };
    type MediaMergeNotification = {
        id: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        mediaId: Scalars['Int']['output'];
        deletedMediaTitles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        context?: Maybe<Scalars['String']['output']>;
        reason?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        media?: Maybe<Media>;
    };
    type MediaDeletionNotification = {
        id: Scalars['Int']['output'];
        type?: Maybe<NotificationType>;
        deletedMediaTitle?: Maybe<Scalars['String']['output']>;
        context?: Maybe<Scalars['String']['output']>;
        reason?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
    };
    type ActivitySort = 'ID' | 'ID_DESC' | 'PINNED';
    type ThreadSort = 'ID' | 'ID_DESC' | 'TITLE' | 'TITLE_DESC' | 'CREATED_AT' | 'CREATED_AT_DESC' | 'UPDATED_AT' | 'UPDATED_AT_DESC' | 'REPLIED_AT' | 'REPLIED_AT_DESC' | 'REPLY_COUNT' | 'REPLY_COUNT_DESC' | 'VIEW_COUNT' | 'VIEW_COUNT_DESC' | 'IS_STICKY' | 'SEARCH_MATCH';
    type ThreadCommentSort = 'ID' | 'ID_DESC';
    type LikeableType = 'THREAD' | 'THREAD_COMMENT' | 'ACTIVITY' | 'ACTIVITY_REPLY';
    type MediaListCollection = {
        lists?: Maybe<Array<Maybe<MediaListGroup>>>;
        user?: Maybe<User>;
        hasNextChunk?: Maybe<Scalars['Boolean']['output']>;
        statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
        customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
    };
    type MediaListCollectionstatusListsArgs = {
        asArray?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaListCollectioncustomListsArgs = {
        asArray?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaListGroup = {
        entries?: Maybe<Array<Maybe<MediaList>>>;
        name?: Maybe<Scalars['String']['output']>;
        isCustomList?: Maybe<Scalars['Boolean']['output']>;
        isSplitCompletedList?: Maybe<Scalars['Boolean']['output']>;
        status?: Maybe<MediaListStatus>;
    };
    type ParsedMarkdown = {
        html?: Maybe<Scalars['String']['output']>;
    };
    type AniChartUser = {
        user?: Maybe<User>;
        settings?: Maybe<Scalars['Json']['output']>;
        highlights?: Maybe<Scalars['Json']['output']>;
    };
    type SiteStatistics = {
        users?: Maybe<SiteTrendConnection>;
        anime?: Maybe<SiteTrendConnection>;
        manga?: Maybe<SiteTrendConnection>;
        characters?: Maybe<SiteTrendConnection>;
        staff?: Maybe<SiteTrendConnection>;
        studios?: Maybe<SiteTrendConnection>;
        reviews?: Maybe<SiteTrendConnection>;
    };
    type SiteStatisticsusersArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteStatisticsanimeArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteStatisticsmangaArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteStatisticscharactersArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteStatisticsstaffArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteStatisticsstudiosArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteStatisticsreviewsArgs = {
        sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
        page?: InputMaybe<Scalars['Int']['input']>;
        perPage?: InputMaybe<Scalars['Int']['input']>;
    };
    type SiteTrendSort = 'DATE' | 'DATE_DESC' | 'COUNT' | 'COUNT_DESC' | 'CHANGE' | 'CHANGE_DESC';
    type SiteTrendConnection = {
        edges?: Maybe<Array<Maybe<SiteTrendEdge>>>;
        nodes?: Maybe<Array<Maybe<SiteTrend>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type SiteTrendEdge = {
        node?: Maybe<SiteTrend>;
    };
    type SiteTrend = {
        date: Scalars['Int']['output'];
        count: Scalars['Int']['output'];
        change: Scalars['Int']['output'];
    };
    type ExternalLinkMediaType = 'ANIME' | 'MANGA' | 'STAFF';
    type Mutation = {
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
    type MutationUpdateUserArgs = {
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
    type MutationSaveMediaListEntryArgs = {
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
    type MutationUpdateMediaListEntriesArgs = {
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
    type MutationDeleteMediaListEntryArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationDeleteCustomListArgs = {
        customList?: InputMaybe<Scalars['String']['input']>;
        type?: InputMaybe<MediaType>;
    };
    type MutationSaveTextActivityArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        text?: InputMaybe<Scalars['String']['input']>;
        locked?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationSaveMessageActivityArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        message?: InputMaybe<Scalars['String']['input']>;
        recipientId?: InputMaybe<Scalars['Int']['input']>;
        private?: InputMaybe<Scalars['Boolean']['input']>;
        locked?: InputMaybe<Scalars['Boolean']['input']>;
        asMod?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationSaveListActivityArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        locked?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationDeleteActivityArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationToggleActivityPinArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        pinned?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationToggleActivitySubscriptionArgs = {
        activityId?: InputMaybe<Scalars['Int']['input']>;
        subscribe?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationSaveActivityReplyArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        activityId?: InputMaybe<Scalars['Int']['input']>;
        text?: InputMaybe<Scalars['String']['input']>;
        asMod?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationDeleteActivityReplyArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationToggleLikeArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        type?: InputMaybe<LikeableType>;
    };
    type MutationToggleLikeV2Args = {
        id?: InputMaybe<Scalars['Int']['input']>;
        type?: InputMaybe<LikeableType>;
    };
    type MutationToggleFollowArgs = {
        userId?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationToggleFavouriteArgs = {
        animeId?: InputMaybe<Scalars['Int']['input']>;
        mangaId?: InputMaybe<Scalars['Int']['input']>;
        characterId?: InputMaybe<Scalars['Int']['input']>;
        staffId?: InputMaybe<Scalars['Int']['input']>;
        studioId?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationUpdateFavouriteOrderArgs = {
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
    type MutationSaveReviewArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        body?: InputMaybe<Scalars['String']['input']>;
        summary?: InputMaybe<Scalars['String']['input']>;
        score?: InputMaybe<Scalars['Int']['input']>;
        private?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationDeleteReviewArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationRateReviewArgs = {
        reviewId?: InputMaybe<Scalars['Int']['input']>;
        rating?: InputMaybe<ReviewRating>;
    };
    type MutationSaveRecommendationArgs = {
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
        rating?: InputMaybe<RecommendationRating>;
    };
    type MutationSaveThreadArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        title?: InputMaybe<Scalars['String']['input']>;
        body?: InputMaybe<Scalars['String']['input']>;
        categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        mediaCategories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sticky?: InputMaybe<Scalars['Boolean']['input']>;
        locked?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationDeleteThreadArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationToggleThreadSubscriptionArgs = {
        threadId?: InputMaybe<Scalars['Int']['input']>;
        subscribe?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationSaveThreadCommentArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        threadId?: InputMaybe<Scalars['Int']['input']>;
        parentCommentId?: InputMaybe<Scalars['Int']['input']>;
        comment?: InputMaybe<Scalars['String']['input']>;
        locked?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MutationDeleteThreadCommentArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
    };
    type MutationUpdateAniChartSettingsArgs = {
        titleLanguage?: InputMaybe<Scalars['String']['input']>;
        outgoingLinkProvider?: InputMaybe<Scalars['String']['input']>;
        theme?: InputMaybe<Scalars['String']['input']>;
        sort?: InputMaybe<Scalars['String']['input']>;
    };
    type MutationUpdateAniChartHighlightsArgs = {
        highlights?: InputMaybe<Array<InputMaybe<AniChartHighlightInput>>>;
    };
    type NotificationOptionInput = {
        type?: InputMaybe<NotificationType>;
        enabled?: InputMaybe<Scalars['Boolean']['input']>;
    };
    type MediaListOptionsInput = {
        sectionOrder?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
        splitCompletedSectionByFormat?: InputMaybe<Scalars['Boolean']['input']>;
        customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
        advancedScoring?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
        advancedScoringEnabled?: InputMaybe<Scalars['Boolean']['input']>;
        theme?: InputMaybe<Scalars['String']['input']>;
    };
    type ListActivityOptionInput = {
        disabled?: InputMaybe<Scalars['Boolean']['input']>;
        type?: InputMaybe<MediaListStatus>;
    };
    type FuzzyDateInput = {
        year?: InputMaybe<Scalars['Int']['input']>;
        month?: InputMaybe<Scalars['Int']['input']>;
        day?: InputMaybe<Scalars['Int']['input']>;
    };
    type Deleted = {
        deleted?: Maybe<Scalars['Boolean']['output']>;
    };
    type LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment;
    type AniChartHighlightInput = {
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        highlight?: InputMaybe<Scalars['String']['input']>;
    };
    type InternalPage = {
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
    type InternalPagemediaSubmissionsArgs = {
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        submissionId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        assigneeId?: InputMaybe<Scalars['Int']['input']>;
        status?: InputMaybe<SubmissionStatus>;
        type?: InputMaybe<MediaType>;
        sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
    };
    type InternalPagecharacterSubmissionsArgs = {
        characterId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        assigneeId?: InputMaybe<Scalars['Int']['input']>;
        status?: InputMaybe<SubmissionStatus>;
        sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
    };
    type InternalPagestaffSubmissionsArgs = {
        staffId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        assigneeId?: InputMaybe<Scalars['Int']['input']>;
        status?: InputMaybe<SubmissionStatus>;
        sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
    };
    type InternalPagerevisionHistoryArgs = {
        userId?: InputMaybe<Scalars['Int']['input']>;
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        characterId?: InputMaybe<Scalars['Int']['input']>;
        staffId?: InputMaybe<Scalars['Int']['input']>;
        studioId?: InputMaybe<Scalars['Int']['input']>;
    };
    type InternalPagereportsArgs = {
        reporterId?: InputMaybe<Scalars['Int']['input']>;
        reportedId?: InputMaybe<Scalars['Int']['input']>;
    };
    type InternalPagemodActionsArgs = {
        userId?: InputMaybe<Scalars['Int']['input']>;
        modId?: InputMaybe<Scalars['Int']['input']>;
    };
    type InternalPageuserBlockSearchArgs = {
        search?: InputMaybe<Scalars['String']['input']>;
    };
    type InternalPageusersArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        name?: InputMaybe<Scalars['String']['input']>;
        isModerator?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type InternalPagemediaArgs = {
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
    type InternalPagecharactersArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
    };
    type InternalPagestaffArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
    };
    type InternalPagestudiosArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        search?: InputMaybe<Scalars['String']['input']>;
        id_not?: InputMaybe<Scalars['Int']['input']>;
        id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
        sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
    };
    type InternalPagemediaListArgs = {
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
    type InternalPageairingSchedulesArgs = {
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
    type InternalPagemediaTrendsArgs = {
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
    type InternalPagenotificationsArgs = {
        type?: InputMaybe<NotificationType>;
        resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
        type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
    };
    type InternalPagefollowersArgs = {
        userId: Scalars['Int']['input'];
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type InternalPagefollowingArgs = {
        userId: Scalars['Int']['input'];
        sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
    };
    type InternalPageactivitiesArgs = {
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
    type InternalPageactivityRepliesArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        activityId?: InputMaybe<Scalars['Int']['input']>;
    };
    type InternalPagethreadsArgs = {
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
    type InternalPagethreadCommentsArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        threadId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
    };
    type InternalPagereviewsArgs = {
        id?: InputMaybe<Scalars['Int']['input']>;
        mediaId?: InputMaybe<Scalars['Int']['input']>;
        userId?: InputMaybe<Scalars['Int']['input']>;
        mediaType?: InputMaybe<MediaType>;
        sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
    };
    type InternalPagerecommendationsArgs = {
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
    type InternalPagelikesArgs = {
        likeableId?: InputMaybe<Scalars['Int']['input']>;
        type?: InputMaybe<LikeableType>;
    };
    type SubmissionStatus = 'PENDING' | 'REJECTED' | 'PARTIALLY_ACCEPTED' | 'ACCEPTED';
    type SubmissionSort = 'ID' | 'ID_DESC';
    type MediaSubmission = {
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
    type MediaSubmissionComparison = {
        submission?: Maybe<MediaSubmissionEdge>;
        character?: Maybe<MediaCharacter>;
        staff?: Maybe<StaffEdge>;
        studio?: Maybe<StudioEdge>;
        externalLink?: Maybe<MediaExternalLink>;
    };
    type MediaSubmissionEdge = {
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
    type MediaCharacter = {
        id?: Maybe<Scalars['Int']['output']>;
        role?: Maybe<CharacterRole>;
        roleNotes?: Maybe<Scalars['String']['output']>;
        dubGroup?: Maybe<Scalars['String']['output']>;
        characterName?: Maybe<Scalars['String']['output']>;
        character?: Maybe<Character>;
        voiceActor?: Maybe<Staff>;
    };
    type CharacterSubmission = {
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
    type StaffSubmission = {
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
    type RevisionHistory = {
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
    type RevisionHistoryAction = 'CREATE' | 'EDIT';
    type Report = {
        id: Scalars['Int']['output'];
        reporter?: Maybe<User>;
        reported?: Maybe<User>;
        reason?: Maybe<Scalars['String']['output']>;
        createdAt?: Maybe<Scalars['Int']['output']>;
        cleared?: Maybe<Scalars['Boolean']['output']>;
    };
    type ModAction = {
        id: Scalars['Int']['output'];
        user?: Maybe<User>;
        mod?: Maybe<User>;
        type?: Maybe<ModActionType>;
        objectId?: Maybe<Scalars['Int']['output']>;
        objectType?: Maybe<Scalars['String']['output']>;
        data?: Maybe<Scalars['String']['output']>;
        createdAt: Scalars['Int']['output'];
    };
    type ModActionType = 'NOTE' | 'BAN' | 'DELETE' | 'EDIT' | 'EXPIRE' | 'REPORT' | 'RESET' | 'ANON';
    type MediaTitleInput = {
        romaji?: InputMaybe<Scalars['String']['input']>;
        english?: InputMaybe<Scalars['String']['input']>;
        native?: InputMaybe<Scalars['String']['input']>;
    };
    type AiringScheduleInput = {
        airingAt?: InputMaybe<Scalars['Int']['input']>;
        episode?: InputMaybe<Scalars['Int']['input']>;
        timeUntilAiring?: InputMaybe<Scalars['Int']['input']>;
    };
    type MediaExternalLinkInput = {
        id: Scalars['Int']['input'];
        url: Scalars['String']['input'];
        site: Scalars['String']['input'];
    };
    type CharacterNameInput = {
        first?: InputMaybe<Scalars['String']['input']>;
        middle?: InputMaybe<Scalars['String']['input']>;
        last?: InputMaybe<Scalars['String']['input']>;
        native?: InputMaybe<Scalars['String']['input']>;
        alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
        alternativeSpoiler?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    };
    type CharacterSubmissionConnection = {
        edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
        nodes?: Maybe<Array<Maybe<CharacterSubmission>>>;
        pageInfo?: Maybe<PageInfo>;
    };
    type CharacterSubmissionEdge = {
        node?: Maybe<CharacterSubmission>;
        role?: Maybe<CharacterRole>;
        voiceActors?: Maybe<Array<Maybe<Staff>>>;
        submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>;
    };
    type StaffNameInput = {
        first?: InputMaybe<Scalars['String']['input']>;
        middle?: InputMaybe<Scalars['String']['input']>;
        last?: InputMaybe<Scalars['String']['input']>;
        native?: InputMaybe<Scalars['String']['input']>;
        alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    };
    type UserModData = {
        alts?: Maybe<Array<Maybe<User>>>;
        bans?: Maybe<Scalars['Json']['output']>;
        ip?: Maybe<Scalars['Json']['output']>;
        counts?: Maybe<Scalars['Json']['output']>;
        privacy?: Maybe<Scalars['Int']['output']>;
        email?: Maybe<Scalars['String']['output']>;
    };
    type QuerySdk = {
        Page: InContextSdkMethod<Query['Page'], QueryPageArgs, MeshContext>;
        Media: InContextSdkMethod<Query['Media'], QueryMediaArgs, MeshContext>;
        MediaTrend: InContextSdkMethod<Query['MediaTrend'], QueryMediaTrendArgs, MeshContext>;
        AiringSchedule: InContextSdkMethod<Query['AiringSchedule'], QueryAiringScheduleArgs, MeshContext>;
        Character: InContextSdkMethod<Query['Character'], QueryCharacterArgs, MeshContext>;
        Staff: InContextSdkMethod<Query['Staff'], QueryStaffArgs, MeshContext>;
        MediaList: InContextSdkMethod<Query['MediaList'], QueryMediaListArgs, MeshContext>;
        MediaListCollection: InContextSdkMethod<Query['MediaListCollection'], QueryMediaListCollectionArgs, MeshContext>;
        GenreCollection: InContextSdkMethod<Query['GenreCollection'], {}, MeshContext>;
        MediaTagCollection: InContextSdkMethod<Query['MediaTagCollection'], QueryMediaTagCollectionArgs, MeshContext>;
        User: InContextSdkMethod<Query['User'], QueryUserArgs, MeshContext>;
        Viewer: InContextSdkMethod<Query['Viewer'], {}, MeshContext>;
        Notification: InContextSdkMethod<Query['Notification'], QueryNotificationArgs, MeshContext>;
        Studio: InContextSdkMethod<Query['Studio'], QueryStudioArgs, MeshContext>;
        Review: InContextSdkMethod<Query['Review'], QueryReviewArgs, MeshContext>;
        Activity: InContextSdkMethod<Query['Activity'], QueryActivityArgs, MeshContext>;
        ActivityReply: InContextSdkMethod<Query['ActivityReply'], QueryActivityReplyArgs, MeshContext>;
        Following: InContextSdkMethod<Query['Following'], QueryFollowingArgs, MeshContext>;
        Follower: InContextSdkMethod<Query['Follower'], QueryFollowerArgs, MeshContext>;
        Thread: InContextSdkMethod<Query['Thread'], QueryThreadArgs, MeshContext>;
        ThreadComment: InContextSdkMethod<Query['ThreadComment'], QueryThreadCommentArgs, MeshContext>;
        Recommendation: InContextSdkMethod<Query['Recommendation'], QueryRecommendationArgs, MeshContext>;
        Like: InContextSdkMethod<Query['Like'], QueryLikeArgs, MeshContext>;
        Markdown: InContextSdkMethod<Query['Markdown'], QueryMarkdownArgs, MeshContext>;
        AniChartUser: InContextSdkMethod<Query['AniChartUser'], {}, MeshContext>;
        SiteStatistics: InContextSdkMethod<Query['SiteStatistics'], {}, MeshContext>;
        ExternalLinkSourceCollection: InContextSdkMethod<Query['ExternalLinkSourceCollection'], QueryExternalLinkSourceCollectionArgs, MeshContext>;
    };
    type MutationSdk = {
        UpdateUser: InContextSdkMethod<Mutation['UpdateUser'], MutationUpdateUserArgs, MeshContext>;
        SaveMediaListEntry: InContextSdkMethod<Mutation['SaveMediaListEntry'], MutationSaveMediaListEntryArgs, MeshContext>;
        UpdateMediaListEntries: InContextSdkMethod<Mutation['UpdateMediaListEntries'], MutationUpdateMediaListEntriesArgs, MeshContext>;
        DeleteMediaListEntry: InContextSdkMethod<Mutation['DeleteMediaListEntry'], MutationDeleteMediaListEntryArgs, MeshContext>;
        DeleteCustomList: InContextSdkMethod<Mutation['DeleteCustomList'], MutationDeleteCustomListArgs, MeshContext>;
        SaveTextActivity: InContextSdkMethod<Mutation['SaveTextActivity'], MutationSaveTextActivityArgs, MeshContext>;
        SaveMessageActivity: InContextSdkMethod<Mutation['SaveMessageActivity'], MutationSaveMessageActivityArgs, MeshContext>;
        SaveListActivity: InContextSdkMethod<Mutation['SaveListActivity'], MutationSaveListActivityArgs, MeshContext>;
        DeleteActivity: InContextSdkMethod<Mutation['DeleteActivity'], MutationDeleteActivityArgs, MeshContext>;
        ToggleActivityPin: InContextSdkMethod<Mutation['ToggleActivityPin'], MutationToggleActivityPinArgs, MeshContext>;
        ToggleActivitySubscription: InContextSdkMethod<Mutation['ToggleActivitySubscription'], MutationToggleActivitySubscriptionArgs, MeshContext>;
        SaveActivityReply: InContextSdkMethod<Mutation['SaveActivityReply'], MutationSaveActivityReplyArgs, MeshContext>;
        DeleteActivityReply: InContextSdkMethod<Mutation['DeleteActivityReply'], MutationDeleteActivityReplyArgs, MeshContext>;
        ToggleLike: InContextSdkMethod<Mutation['ToggleLike'], MutationToggleLikeArgs, MeshContext>;
        ToggleLikeV2: InContextSdkMethod<Mutation['ToggleLikeV2'], MutationToggleLikeV2Args, MeshContext>;
        ToggleFollow: InContextSdkMethod<Mutation['ToggleFollow'], MutationToggleFollowArgs, MeshContext>;
        ToggleFavourite: InContextSdkMethod<Mutation['ToggleFavourite'], MutationToggleFavouriteArgs, MeshContext>;
        UpdateFavouriteOrder: InContextSdkMethod<Mutation['UpdateFavouriteOrder'], MutationUpdateFavouriteOrderArgs, MeshContext>;
        SaveReview: InContextSdkMethod<Mutation['SaveReview'], MutationSaveReviewArgs, MeshContext>;
        DeleteReview: InContextSdkMethod<Mutation['DeleteReview'], MutationDeleteReviewArgs, MeshContext>;
        RateReview: InContextSdkMethod<Mutation['RateReview'], MutationRateReviewArgs, MeshContext>;
        SaveRecommendation: InContextSdkMethod<Mutation['SaveRecommendation'], MutationSaveRecommendationArgs, MeshContext>;
        SaveThread: InContextSdkMethod<Mutation['SaveThread'], MutationSaveThreadArgs, MeshContext>;
        DeleteThread: InContextSdkMethod<Mutation['DeleteThread'], MutationDeleteThreadArgs, MeshContext>;
        ToggleThreadSubscription: InContextSdkMethod<Mutation['ToggleThreadSubscription'], MutationToggleThreadSubscriptionArgs, MeshContext>;
        SaveThreadComment: InContextSdkMethod<Mutation['SaveThreadComment'], MutationSaveThreadCommentArgs, MeshContext>;
        DeleteThreadComment: InContextSdkMethod<Mutation['DeleteThreadComment'], MutationDeleteThreadCommentArgs, MeshContext>;
        UpdateAniChartSettings: InContextSdkMethod<Mutation['UpdateAniChartSettings'], MutationUpdateAniChartSettingsArgs, MeshContext>;
        UpdateAniChartHighlights: InContextSdkMethod<Mutation['UpdateAniChartHighlights'], MutationUpdateAniChartHighlightsArgs, MeshContext>;
    };
    type SubscriptionSdk = {};
    type Context = {
        ["AnimeCharactersGraphQL"]: {
            Query: QuerySdk;
            Mutation: MutationSdk;
            Subscription: SubscriptionSdk;
        };
    };
}
