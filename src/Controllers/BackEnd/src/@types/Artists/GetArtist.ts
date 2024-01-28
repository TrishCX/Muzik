export interface GetArtist {
  data: ResData;
  extensions: Extensions;
}

export interface ResData {
  artistUnion: ArtistUnion;
}

export interface ArtistUnion {
  __typename: string;
  id: string;
  uri: string;
  saved: boolean;
  sharingInfo: SharingInfo;
  preRelease: null;
  profile: Profile;
  visuals: ArtistUnionVisuals;
  discography: Discography;
  stats: Stats;
  relatedContent: RelatedContent;
  goods: Goods;
}

export interface Discography {
  latest: Latest;
  popularReleasesAlbums: PopularReleasesAlbums;
  singles: Albums;
  albums: Albums;
  compilations: Albums;
  topTracks: TopTracks;
}

export interface Albums {
  totalCount: number;
  items: AlbumsItem[];
}

export interface AlbumsItem {
  releases: ExternalLinks;
}

export interface ExternalLinks {
  items: Latest[];
}

export interface Latest {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: LatestDate;
  coverArt: CoverArt;
  tracks: Tracks;
  label: LatestLabel;
  playability: Playability;
  sharingInfo: SharingInfo;
}

export interface Copyright {
  items: Biography[];
}

export interface Biography {
  type: BiographyType;
  text: string;
}

export enum BiographyType {
  Biography = "BIOGRAPHY",
  C = "C",
  P = "P",
}

export interface CoverArt {
  sources: ItemSource[];
}

export interface ItemSource {
  url: string;
  width: number | null;
  height: number | null;
}

export interface LatestDate {
  year: number;
  month: number;
  day: number;
  precision: Precision;
}

export enum Precision {
  Day = "DAY",
}

export enum LatestLabel {
  Columbia = "Columbia",
  ColumbiaLegacy = "Columbia/Legacy",
  DaftLifeLtdADAFrance = "Daft Life Ltd./ADA France",
  LegacyRecordings = "Legacy Recordings",
  WaltDisneyRecords = "Walt Disney Records",
}

export interface Playability {
  playable: boolean;
  reason: Reason;
}

export enum Reason {
  Playable = "PLAYABLE",
}

export interface SharingInfo {
  shareId: string;
  shareUrl: string;
}

export interface Tracks {
  totalCount: number;
}

export enum LatestType {
  Album = "ALBUM",
  Compilation = "COMPILATION",
  Single = "SINGLE",
}

export interface PopularReleasesAlbums {
  totalCount: number;
  items: Latest[];
}

export interface TopTracks {
  items: TopTracksItem[];
}

export interface TopTracksItem {
  uid: string;
  track: Track;
}

export interface Track {
  id: string;
  uri: string;
  name: string;
  playcount: string;
  discNumber: number;
  duration: Duration;
  playability: Playability;
  contentRating: ContentRating;
  artists: Artists;
  associations: Associations;
  albumOfTrack: AlbumOfTrack;
}

export interface AlbumOfTrack {
  uri: string;
  coverArt: BackgroundImage;
}

export interface BackgroundImage {
  sources: BackgroundImageSource[];
}

export interface BackgroundImageSource {
  url: string;
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: string;
  profile: UserLocation;
}

export interface UserLocation {
  name: null | string;
}

export interface Associations {
  associatedVideos: Tracks;
}

export interface ContentRating {
  label: ContentRatingLabel;
}

export enum ContentRatingLabel {
  None = "NONE",
}

export interface Duration {
  totalMilliseconds: number;
}

export interface Goods {
  events: Events;
  merch: Merch;
}

export interface Events {
  userLocation: UserLocation;
  concerts: Concerts;
}

export interface Concerts {
  totalCount: number;
  items: any[];
  pagingInfo: PagingInfo;
}

export interface PagingInfo {
  limit: number;
}

export interface Merch {
  items: MerchItem[];
}

export interface MerchItem {
  image: BackgroundImage;
  name: string;
  description: string;
  price: string;
  uri: string;
  url: string;
}

export interface Profile {
  name: string;
  verified: boolean;
  pinnedItem: PinnedItem;
  biography: Biography;
  externalLinks: ExternalLinks;
  playlistsV2: PlaylistsV2;
}

export interface PinnedItem {
  comment: string;
  type: string;
  backgroundImage: BackgroundImage;
  itemV2: ItemV2;
}

export interface ItemV2 {
  __typename: string;
  data: ItemV2Data;
}

export interface ItemV2Data {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  images: Gallery;
}

export enum PurpleTypename {
  Playlist = "Playlist",
}

export interface Gallery {
  items: CoverArt[];
}

export interface PlaylistsV2 {
  totalCount: number;
  items: PlaylistsV2Item[];
}

export interface PlaylistsV2Item {
  data: PurpleData;
}

export interface PurpleData {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  description: string;
  ownerV2: OwnerV2;
  images: Gallery;
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: FluffyTypename;
  name: string;
}

export enum FluffyTypename {
  User = "User",
}

export interface RelatedContent {
  appearsOn: AppearsOn;
  featuringV2: V2;
  discoveredOnV2: V2;
  relatedArtists: RelatedArtists;
}

export interface AppearsOn {
  totalCount: number;
  items: AppearsOnItem[];
}

export interface AppearsOnItem {
  releases: Releases;
}

export interface Releases {
  totalCount: number;
  items: ReleasesItem[];
}

export interface ReleasesItem {
  uri: string;
  id: string;
  name: string;
  type: LatestType;
  artists: Artists;
  coverArt: CoverArt;
  date: PurpleDate;
  sharingInfo: SharingInfo;
}

export interface PurpleDate {
  year: number;
}

export interface V2 {
  totalCount: number;
  items: DiscoveredOnV2Item[];
}

export interface DiscoveredOnV2Item {
  data: FluffyData;
}

export interface FluffyData {
  __typename: PurpleTypename;
  uri: string;
  id: string;
  ownerV2: OwnerV2;
  name: string;
  description: string;
  images: Images;
}

export interface Images {
  totalCount: number;
  items: CoverArt[];
}

export interface RelatedArtists {
  totalCount: number;
  items: RelatedArtistsItem[];
}

export interface RelatedArtistsItem {
  id: string;
  uri: string;
  profile: UserLocation;
  visuals: ItemVisuals;
}

export interface ItemVisuals {
  avatarImage: CoverArt;
}

export interface Stats {
  followers: number;
  monthlyListeners: number;
  worldRank: number;
  topCities: TopCities;
}

export interface TopCities {
  items: TopCitiesItem[];
}

export interface TopCitiesItem {
  numberOfListeners: number;
  city: string;
  country: string;
  region: string;
}

export interface ArtistUnionVisuals {
  gallery: Gallery;
  avatarImage: RImage;
  headerImage: RImage;
}

export interface RImage {
  sources: ItemSource[];
  extractedColors: ExtractedColors;
}

export interface ExtractedColors {
  colorRaw: ColorRaw;
}

export interface ColorRaw {
  hex: string;
}

export interface Extensions {}
