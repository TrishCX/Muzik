export interface SearchTracks {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  searchV2: SearchV2;
}

export interface SearchV2 {
  query: string;
  tracksV2: TracksV2;
}

export interface TracksV2 {
  totalCount: number;
  items: TracksV2Item[];
  pagingInfo: PagingInfo;
}

export interface TracksV2Item {
  matchedFields: MatchedField[];
  item: ItemItem;
}

export interface ItemItem {
  data: ItemData;
}

export interface ItemData {
  __typename: Typename;
  uri: string;
  id: string;
  name: string;
  albumOfTrack: AlbumOfTrack;
  artists: Artists;
  contentRating: ContentRating;
  duration: Duration;
  playability: Playability;
  associations: Associations;
}

export enum Typename {
  Track = "Track",
}

export interface AlbumOfTrack {
  uri: string;
  name: string;
  coverArt: CoverArt;
  id: string;
}

export interface CoverArt {
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
  width: number;
  height: number;
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

export interface Associations {
  associatedVideos: AssociatedVideos;
}

export interface AssociatedVideos {
  totalCount: number;
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

export interface Playability {
  playable: boolean;
}

export enum MatchedField {
  Name = "NAME",
}

export interface PagingInfo {
  nextOffset: number;
  limit: number;
}

export interface Extensions {
  requestIds: RequestIDS;
}

export interface RequestIDS {
  "/searchV2": SearchV2Class;
}

export interface SearchV2Class {
  "search-api": string;
}
