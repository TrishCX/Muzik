import { AlbumOfTrack } from "../../@types/Artists/GetArtist";
import type { GetArtist } from "../../@types/index";
import { formatDuration } from "../../Helpers/index";

export interface Tracks {
  title?: string;
  artists?: {
    uri?: string;
    profile?: {
      name?: string;
    };
  }[];
  duration?: string;
  durationInMS?: number;
  id?: string;
  playCount?: string;
  albumOfTrack?: AlbumOfTrack;
}
export interface Albums {
  id: string;
  title: string;
  songsCount: number;
  copyright: string[];
  coverArt?: string;
  date: any;
  label: string;
  uri: string;
}

export interface TopCities {
  city?: string | undefined;
  country?: string | undefined;
  region?: string | undefined;
  totalListeners?: number | undefined;
}

export interface Appears {
  title: string;
  year: number;
  coverArt?: string;
  id: string;
  artists: {
    uri?: string;
    profile?: {
      name?: string;
    };
  }[];
}

export function artistGetParser(body: GetArtist) {
  // Tracks
  const tracks: Tracks[] = [];

  // Albums
  const albumArray: Albums[] = [];
  const popularAlbumsArray: Albums[] = [];

  // Singles
  const singlesArray: Albums[] = [];
  const relatedArtistsArray: any[] = [];

  // Compilations
  const compilationsArray: Albums[] = [];
  const appearsOnArray: Appears[] = [];

  // Statistics
  const topCitiesArray: TopCities[] = [];

  // Profile
  const data = body.data.artistUnion;
  const externalLinks: { name: string; url?: string }[] = [];

  const profile = data.profile;
  const visuals = data.visuals;
  const relatedContent = data.relatedContent;

  const name = profile?.name;
  const biography = profile?.biography || undefined;

  const header = visuals?.headerImage?.sources?.at(-1)?.url || undefined;
  const image = visuals?.avatarImage.sources.at(-1)?.url;
  const gallery = visuals.gallery.items.map((item) => item.sources.at(-1)?.url);
  const verified = profile.verified;

  const listeners = data?.stats.monthlyListeners;
  const worldRank = data?.stats?.worldRank;
  const topTracks = data.discography.topTracks?.items;
  const albumCount = data.discography.albums?.totalCount;
  const albums = data.discography.albums?.items;
  const popularAlbums = data.discography.popularReleasesAlbums.items;
  const singlesTotalCount = data.discography.singles.totalCount;
  const singles = data.discography.singles.items;
  const latest = data?.discography.latest;

  const relatedArtists = relatedContent.relatedArtists?.items;
  const relatedArtistsCount = relatedContent.relatedArtists?.totalCount;
  const appearsOn = data.relatedContent.appearsOn.items;
  const appearsOnCount = data.relatedContent.appearsOn.totalCount;

  const compilations = data.discography?.compilations?.items;
  const compilationsCount = data.discography?.compilations?.totalCount;
  const links = data.profile.externalLinks?.items;
  const topCities = data.stats.topCities?.items;

  for (const link of links) {
    var _link: any = link as any;
    var _connectionName: string =
      link?.name?.charAt(0)?.toUpperCase() +
      link?.name?.slice(1)?.toLowerCase();
    var _connectionURL: string = _link?.url as string;

    externalLinks.push({
      name: _connectionName,
      url: _connectionURL,
    });
  }

  for (const { releases } of appearsOn) {
    for (const item of releases?.items) {
      appearsOnArray.push({
        title: item?.name,
        year: item.date.year,
        coverArt: item.coverArt.sources.at(-1)?.url,
        id: item.id,
        artists: item?.artists?.items as any,
      });
    }
  }
  for (const cities of topCities) {
    topCitiesArray.push({
      city: cities.city,
      country: cities.country,
      region: cities.region,
      totalListeners: cities.numberOfListeners,
    });
  }

  for (const { releases } of compilations) {
    for (const album of releases.items) {
      compilationsArray.push({
        id: album.id,
        title: album.name,
        songsCount: album.tracks.totalCount,
        copyright: album.copyright.items.map((v) => v.text),
        coverArt: album.coverArt.sources.at(-1)?.url,
        date: album.date,
        label: album.label,
        uri: album.uri,
      });
    }
  }

  for (const artist of relatedArtists) {
    relatedArtistsArray.push({
      id: artist.id,
      name: artist.profile.name,
      image: artist?.visuals?.avatarImage?.sources?.at(-1)?.url,
      uri: artist.uri,
    });
  }

  for (const { releases } of singles) {
    for (const album of releases?.items) {
      singlesArray.push({
        id: album.id,
        title: album.name,
        songsCount: album.tracks.totalCount,
        copyright: album.copyright.items.map((v) => v.text),
        coverArt: album.coverArt.sources.at(-1)?.url,
        date: album.date,
        label: album.label,
        uri: album.uri,
      });
    }
  }
  for (const album of popularAlbums) {
    popularAlbumsArray.push({
      id: album.id,
      title: album.name,
      songsCount: album.tracks.totalCount,
      copyright: album.copyright.items.map((v) => v.text),
      coverArt: album.coverArt.sources.at(-1)?.url,
      date: album.date,
      label: album.label,
      uri: album.uri,
    });
  }
  for (const { releases } of albums) {
    for (const album of releases.items) {
      albumArray.push({
        id: album.id,
        title: album.name,
        songsCount: album.tracks.totalCount,
        copyright: album.copyright.items.map((v) => v.text),
        coverArt: album.coverArt.sources.at(-1)?.url,
        date: album.date,
        label: album.label,
        uri: album.uri,
      });
    }
  }
  for (const { track } of topTracks) {
    tracks.push({
      title: track.name,
      artists: track.artists.items as any,
      duration: formatDuration(track.duration.totalMilliseconds),
      durationInMS: track.duration.totalMilliseconds,
      id: track.id,
      playCount: track.playcount,
      albumOfTrack: track.albumOfTrack,
    });
  }

  return {
    name,
    biography: biography.text,
    header,
    verified,
    gallery,
    image,
    topTracks: tracks,
    albums: albumArray,
    popularAlbums: popularAlbumsArray,
    singlesTotalCount,
    singles: singlesArray,
    albumCount,
    listeners,
    appearsOnCount,
    topCities: topCitiesArray,
    appearsOn: appearsOnArray,
    worldRank,
    compilations: compilationsArray,
    compilationsCount,
    latest: latest,
    relatedArtists: relatedArtistsArray,
    relatedArtistsCount,
    externalLinks,
  };
}
