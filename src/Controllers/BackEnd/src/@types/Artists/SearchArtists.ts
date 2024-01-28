export interface ArtistSearch {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  searchV2: SearchV2;
}

export interface SearchV2 {
  query: string;
  artists: Artists;
}

export interface Artists {
  totalCount: number;
  items: Item[];
  pagingInfo: PagingInfo;
}

export interface Item {
  data: ItemData;
}

export interface ItemData {
  __typename: Typename;
  uri: string;
  profile: Profile;
  visuals: Visuals;
}

export enum Typename {
  Artist = "Artist",
}

export interface Profile {
  name: string;
  verified: boolean;
}

export interface Visuals {
  avatarImage: AvatarImage | null;
}

export interface AvatarImage {
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

export interface SearchArtistResponse {
  id: string;
  name: string;
  avatar: string;
  color?: string;
  verified?: boolean;
}
