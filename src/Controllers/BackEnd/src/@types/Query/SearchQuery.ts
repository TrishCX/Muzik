export interface SearchData {
  data: LyricsDataData;
  extensions: Extensions;
}

export interface LyricsDataData {
  searchV2: SearchV2;
}

export interface SearchV2 {
  albumsV2: AlbumsV2;
  artists: GenresClass;
  episodes: Episodes;
  genres: GenresClass;
  playlists: Playlists;
  podcasts: Podcasts;
  audiobooks: Audiobooks;
  tracksV2: TracksV2;
  users: Users;
  topResultsV2: TopResultsV2;
  chipOrder: ChipOrder;
}

export interface AlbumsV2 {
  __typename: string;
  totalCount: number;
  items: AlbumsV2Item[];
}

export interface AlbumsV2Item {
  __typename: PurpleTypename;
  data: PurpleData;
}

export enum PurpleTypename {
  AlbumResponseWrapper = "AlbumResponseWrapper",
}

export interface PurpleData {
  __typename: FluffyTypename;
  uri: string;
  name: string;
  artists: DataArtists;
  coverArt: CoverArtElement;
  date: DateClass;
}

export enum FluffyTypename {
  Album = "Album",
}

export interface DataArtists {
  items: PurpleItem[];
}

export interface PurpleItem {
  uri: string;
  profile: Publisher;
}

export interface Publisher {
  name: string;
}

export interface CoverArtElement {
  sources: Source[];
  extractedColors: ExtractedColors;
}

export interface ExtractedColors {
  colorDark: ColorDark;
}

export interface ColorDark {
  hex: string;
  isFallback: boolean;
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface DateClass {
  year: number;
}

export interface GenresClass {
  totalCount: number;
  items: GenresItem[];
}

export interface GenresItem {
  __typename: TentacledTypename;
  data: FluffyData;
}

export enum TentacledTypename {
  ArtistResponseWrapper = "ArtistResponseWrapper",
}

export interface FluffyData {
  __typename: StickyTypename;
  uri: string;
  profile: Profile;
  visuals: Visuals;
}

export enum StickyTypename {
  Artist = "Artist",
}

export interface Profile {
  name: string;
  verified: boolean;
}

export interface Visuals {
  avatarImage: CoverArtElement;
}

export interface Audiobooks {
  totalCount: number;
  items: AudiobooksItem[];
}

export interface AudiobooksItem {
  __typename: IndigoTypename;
  data: TentacledData;
}

export enum IndigoTypename {
  AudiobookResponseWrapper = "AudiobookResponseWrapper",
}

export interface TentacledData {
  __typename: IndecentTypename;
}

export enum IndecentTypename {
  RestrictedContent = "RestrictedContent",
}

export interface ChipOrder {
  items: ChipOrderItem[];
}

export interface ChipOrderItem {
  typeName: string;
}

export interface Episodes {
  totalCount: number;
  items: EpisodesItem[];
}

export interface EpisodesItem {
  __typename: HilariousTypename;
  data: StickyData;
}

export enum HilariousTypename {
  EpisodeResponseWrapper = "EpisodeResponseWrapper",
}

export interface StickyData {
  __typename: AmbitiousTypename;
  uri: string;
  name: string;
  coverArt: CoverArtElement;
  duration: Duration;
  releaseDate: ReleaseDate;
  playedState: PlayedState;
  mediaTypes: MediaType[];
  podcastV2: PodcastV2;
  description: string;
  contentRating: ContentRating;
}

export enum AmbitiousTypename {
  Episode = "Episode",
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  Explicit = "EXPLICIT",
  None = "NONE",
}

export interface Duration {
  totalMilliseconds: number;
}

export enum MediaType {
  Audio = "AUDIO",
}

export interface PlayedState {
  playPositionMilliseconds: number;
  state: State;
}

export enum State {
  NotStarted = "NOT_STARTED",
}

export interface PodcastV2 {
  __typename: PodcastV2Typename;
  data: PodcastV2Data;
}

export enum PodcastV2Typename {
  PodcastResponseWrapper = "PodcastResponseWrapper",
}

export interface PodcastV2Data {
  __typename: CunningTypename;
  uri: string;
  name: string;
  coverArt: DataCoverArt;
  mediaType: MediaType;
  publisher: Publisher;
}

export enum CunningTypename {
  Podcast = "Podcast",
}

export interface DataCoverArt {
  sources: Source[];
}

export interface ReleaseDate {
  isoString: string;
  precision: Precision;
}

export enum Precision {
  Minute = "MINUTE",
}

export interface Playlists {
  totalCount: number;
  items: FeaturedElement[];
}

export interface FeaturedElement {
  __typename: FeaturedTypename;
  data: FeaturedData;
}

export enum FeaturedTypename {
  PlaylistResponseWrapper = "PlaylistResponseWrapper",
}

export interface FeaturedData {
  __typename: MagentaTypename;
  uri: string;
  name: string;
  description: string;
  images: Images;
  format: string;
  attributes: Attribute[];
  ownerV2: OwnerV2;
}

export enum MagentaTypename {
  Playlist = "Playlist",
}

export interface Attribute {
  key: string;
  value: string;
}

export interface Images {
  items: CoverArtElement[];
}

export interface OwnerV2 {
  __typename: OwnerV2Typename;
  data: OwnerV2Data;
}

export enum OwnerV2Typename {
  UserResponseWrapper = "UserResponseWrapper",
}

export interface OwnerV2Data {
  __typename: FriskyTypename;
  name: string;
  uri: string;
  username: string;
  avatar: DataCoverArt | null;
}

export enum FriskyTypename {
  User = "User",
}

export interface Podcasts {
  totalCount: number;
  items: PodcastsItem[];
}

export interface PodcastsItem {
  __typename: PodcastV2Typename;
  data: IndigoData;
}

export interface IndigoData {
  __typename: CunningTypename;
  uri: string;
  name: string;
  coverArt: CoverArtElement;
  publisher: Publisher;
  mediaType: MediaType;
  topics: Topics;
}

export interface Topics {
  items: TopicsItem[];
}

export interface TopicsItem {
  __typename: string;
  title: string;
  uri: string;
}

export interface TopResultsV2 {
  itemsV2: ItemsV2[];
  featured: FeaturedElement[];
}

export interface ItemsV2 {
  matchedFields: string[];
  item: ItemsV2Item;
}

export interface ItemsV2Item {
  __typename: string;
  data: IndecentData;
}

export interface IndecentData {
  __typename?: string;
  uri: string;
  id?: string;
  name?: string;
  albumOfTrack?: AlbumOfTrack;
  artists?: DataArtists;
  contentRating?: ContentRating;
  duration?: Duration;
  playability?: Playability;
  associations?: Associations;
  profile?: Profile;
  visuals?: Visuals;
  description?: string;
  images?: Images;
  format?: string;
  attributes?: any[];
  ownerV2?: OwnerV2;
}

export interface AlbumOfTrack {
  uri: string;
  name: string;
  coverArt: CoverArtElement;
  id: string;
}

export interface Associations {
  associatedVideos: AssociatedVideos;
}

export interface AssociatedVideos {
  totalCount: number;
}

export interface Playability {
  playable: boolean;
}

export interface TracksV2 {
  totalCount: number;
  items: TracksV2Item[];
}

export interface TracksV2Item {
  matchedFields: string[];
  item: ItemItem;
}

export interface ItemItem {
  __typename: MischievousTypename;
  data: HilariousData;
}

export enum MischievousTypename {
  TrackResponseWrapper = "TrackResponseWrapper",
}

export interface HilariousData {
  __typename: BraggadociousTypename;
  uri: string;
  id: string;
  name: string;
  albumOfTrack: AlbumOfTrack;
  artists: DataArtists;
  contentRating: ContentRating;
  duration: Duration;
  playability: Playability;
  associations: Associations;
}

export enum BraggadociousTypename {
  Track = "Track",
}

export interface Users {
  totalCount: number;
  items: UsersItem[];
}

export interface UsersItem {
  __typename: OwnerV2Typename;
  data: AmbitiousData;
}

export interface AmbitiousData {
  __typename: FriskyTypename;
  uri: string;
  id: string;
  displayName: string;
  username: string;
  avatar: CoverArtElement;
}

export interface Extensions {
  requestIds: RequestIDS;
}

export interface RequestIDS {
  "/searchV2": SearchV2V2;
  "/searchV2/topResultsV2": SearchV2V2;
}

export interface SearchV2V2 {
  "search-api": string;
}
