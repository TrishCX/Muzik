export interface TrackSuggestion {
  data: Data;
  extensions: Extensions;
}
export interface Data {
  seoRecommended: SEORecommended;
}

export interface SEORecommended {
  items: SEORecommendedItem[];
}

export interface SEORecommendedItem {
  data: ItemData;
}

export interface ItemData {
  __typename: string;
  id: string;
  uri: string;
  name: string;
  artists: Artists;
  duration: Duration;
  contentRating: ContentRating;
  playability: Playability;
  playcount: string;
  albumOfTrack: AlbumOfTrack;
}

export interface AlbumOfTrack {
  uri: string;
  id: string;
  coverArt: CoverArt;
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  width: number;
  height: number;
  url: string;
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  id: string;
  uri: string;
  profile: Profile;
}

export interface Profile {
  name: string;
}

export interface ContentRating {
  label: string;
}

export interface Duration {
  totalMilliseconds: number;
}

export interface Playability {
  playable: boolean;
}

export interface Extensions {}

// export interface TrackSuggestion {
//   data: DataData;
//   extensions: Extensions;
// }

// export interface DataData {
//   trackUnion: TrackUnion;
// }

// export interface TrackUnion {
//   __typename: string;
//   id: string;
//   uri: string;
//   name: string;
//   contentRating: ContentRating;
//   duration: Duration;
//   playability: TrackUnionPlayability;
//   trackNumber: number;
//   playcount: string;
//   saved: boolean;
//   sharingInfo: SharingInfo;
//   firstArtist: FirstArtist;
//   otherArtists: OtherArtists;
//   albumOfTrack: TrackUnionAlbumOfTrack;
// }

// export interface TrackUnionAlbumOfTrack {
//   id: string;
//   copyright: Copyright;
//   courtesyLine: string;
//   name: string;
//   type: Type;
//   uri: string;
//   playability: AlbumOfTrackPlayability;
//   date: DateClass;
//   sharingInfo: SharingInfo;
//   tracks: Tracks;
//   coverArt: CoverArt;
// }

// export interface Copyright {
//   totalCount: number;
//   items: CopyrightItem[];
// }

// export interface CopyrightItem {
//   text: string;
//   type: string;
// }

// export interface CoverArt {
//   extractedColors: ExtractedColors;
//   sources: Source[];
// }

// export interface ExtractedColors {
//   colorRaw: ColorRaw;
// }

// export interface ColorRaw {
//   hex: string;
// }

// export interface Source {
//   width: number;
//   height: number;
//   url: string;
// }

// export interface DateClass {
//   isoString: string;
//   precision: Precision;
//   year: number;
// }

// export enum Precision {
//   Day = "DAY",
// }

// export interface AlbumOfTrackPlayability {
//   playable: boolean;
// }

// export interface SharingInfo {
//   shareId: string;
//   shareUrl: string;
// }

// export interface Tracks {
//   totalCount: number;
//   items: TracksItem[];
// }

// export interface TracksItem {
//   track: PurpleTrack;
// }

// export interface PurpleTrack {
//   uri: string;
//   trackNumber: number;
// }

// export enum Type {
//   Album = "ALBUM",
//   Single = "SINGLE",
// }

// export interface ContentRating {
//   label: Label;
// }

// export enum Label {
//   Explicit = "EXPLICIT",
//   None = "NONE",
// }

// export interface Duration {
//   totalMilliseconds: number;
// }

// export interface FirstArtist {
//   totalCount: number;
//   items: FirstArtistItem[];
// }

// export interface FirstArtistItem {
//   id: string;
//   uri: URI;
//   visuals: Visuals;
//   profile: Profile;
//   discography: Discography;
//   relatedContent: RelatedContent;
// }

// export interface Discography {
//   singles: Albums;
//   albums: Albums;
//   popularReleasesAlbums: OtherArtists;
//   topTracks: TopTracks;
// }

// export interface Albums {
//   totalCount: number;
//   items: AlbumsItem[];
// }

// export interface AlbumsItem {
//   releases: OtherArtists;
// }

// export interface OtherArtists {
//   items: OtherArtistsItem[];
// }

// export interface OtherArtistsItem {
//   name: string;
//   type: Type;
//   uri: string;
//   playability: AlbumOfTrackPlayability;
//   date: DateClass;
//   sharingInfo: SharingInfo;
//   tracks: Tracks;
//   coverArt: CoverArt;
// }

// export interface TopTracks {
//   items: TopTracksItem[];
// }

// export interface TopTracksItem {
//   track: FluffyTrack;
// }

// export interface FluffyTrack {
//   artists: Artists;
//   albumOfTrack: TrackAlbumOfTrack;
//   playability: AlbumOfTrackPlayability;
//   playcount: string;
//   previews: Previews;
//   duration: Duration;
//   contentRating: ContentRating;
//   name: string;
//   uri: string;
//   id: string;
// }

// export interface TrackAlbumOfTrack {
//   name: string;
//   uri: string;
//   coverArt: CoverArt;
// }

// export interface Artists {
//   items: ArtistsItem[];
// }

// export interface ArtistsItem {
//   uri: URI;
//   profile: Profile;
// }

// export interface Profile {
//   name: string;
// }

// export enum URI {
//   SpotifyArtist00FQb4JTyendYWaN8PK0Wa = "spotify:artist:00FQb4jTyendYWaN8pK0wa",
//   SpotifyArtist2KGBy2WHvF0VdZyqiVCkDT = "spotify:artist:2kGBy2WHvF0VdZyqiVCkDT",
// }

// export interface Previews {
//   audioPreviews: AudioPreviews;
// }

// export interface AudioPreviews {
//   items: AudioPreviewsItem[];
// }

// export interface AudioPreviewsItem {
//   url: string;
// }

// export interface RelatedContent {
//   relatedArtists: RelatedArtists;
// }

// export interface RelatedArtists {
//   totalCount: number;
//   items: RelatedArtistsItem[];
// }

// export interface RelatedArtistsItem {
//   id: string;
//   uri: string;
//   profile: Profile;
//   visuals: Visuals;
// }

// export interface Visuals {
//   avatarImage: AvatarImage;
// }

// export interface AvatarImage {
//   sources: Source[];
// }

// export interface TrackUnionPlayability {
//   playable: boolean;
//   reason: string;
// }

// export interface Extensions {}
