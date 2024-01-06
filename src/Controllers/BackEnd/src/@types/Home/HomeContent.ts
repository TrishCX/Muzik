export interface Content {
  data: PurpleData;
  extensions: Extensions;
}

export interface PurpleData {
  browse: Browse;
}

export interface Browse {
  __typename: string;
  header: Header;
  uri: string;
  sections: Sections;
}

export interface Header {
  backgroundImage: null;
  color: Color;
  title: Title;
  subtitle: null;
}

export interface Color {
  hex: string;
}

export interface Title {
  transformedLabel: string;
}

export interface Sections {
  totalCount: number;
  pagingInfo: PagingInfo;
  items: SectionsItem[];
}

export interface SectionsItem {
  __typename: string;
  uri: string;
  data: ItemData;
  sectionItems: SectionItems;
  targetLocation: string;
}

export interface ItemData {
  __typename: string;
  title: Title;
  subtitle: null;
}

export interface SectionItems {
  totalCount: number;
  items: SectionItemsItem[];
}

export interface SectionItemsItem {
  uri: string;
  content: ItemContent;
}

export interface ItemContent {
  __typename: ContentTypename;
  data: FluffyData;
}

export enum ContentTypename {
  AlbumResponseWrapper = "AlbumResponseWrapper",
  PlaylistResponseWrapper = "PlaylistResponseWrapper",
}

export interface FluffyData {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  description?: string;
  images?: Images;
  format?: Format;
  attributes?: Attribute[];
  ownerV2?: OwnerV2;
  artists?: Artists;
  coverArt?: CoverArt;
}

export enum PurpleTypename {
  Album = "Album",
  Playlist = "Playlist",
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: string;
  profile: Profile;
}

export interface Profile {
  name: string;
}

export interface Attribute {
  key: Key;
  value: string;
}

export enum Key {
  Autoplay = "autoplay",
  CorrelationID = "correlation-id",
  EpisodeDescription = "episode_description",
  HeaderImageURLDesktop = "header_image_url_desktop",
  ImageURL = "image_url",
  IsAlgotorial = "isAlgotorial",
  MediaListConfig = "mediaListConfig",
  MoveFollowersJobID = "moveFollowersJobId",
  PrimaryColor = "primary_color",
  RecsHasArtists = "recs.hasArtists",
  RequestID = "request_id",
  Status = "status",
  TransformingShuffle = "transforming.shuffle",
  TransformingTimeout = "transforming.timeout",
  TransformingURL = "transforming.url",
  URI = "uri",
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export enum Format {
  Editorial = "editorial",
  FormatShowsShuffle = "format-shows-shuffle",
}

export interface Images {
  items: CoverArt[];
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: FluffyTypename;
  name: Name;
}

export enum FluffyTypename {
  User = "User",
}

export enum Name {
  Spotify = "Spotify",
}

export interface PagingInfo {
  nextOffset: null;
}

export interface Extensions {}
