export interface SectionContent {
  data: PurpleData;
  extensions: Extensions;
}

export interface PurpleData {
  browseSection: BrowseSection;
}

export interface BrowseSection {
  __typename: string;
  data: BrowseSectionData;
  sectionItems: SectionItems;
}

export interface BrowseSectionData {
  __typename: string;
  title: Title;
  subtitle: null;
}

export interface Title {
  transformedLabel: string;
}

export interface SectionItems {
  totalCount: number;
  pagingInfo: PagingInfo;
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
  __typename: DataTypename;
  uri: string;
  name: string;
  description?: string;
  images?: Images;
  format?: string;
  attributes?: Attribute[];
  ownerV2?: OwnerV2;
  artists?: Artists;
  coverArt?: CoverArt;
}

export enum DataTypename {
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
  key: string;
  value: string;
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface Images {
  items: CoverArt[];
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: string;
  name: string;
}

export interface PagingInfo {
  nextOffset: number | null;
}

export interface Extensions {}
