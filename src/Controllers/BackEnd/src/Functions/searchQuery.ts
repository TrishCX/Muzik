import type { SearchData } from "../@types/index";
import { END_POINTS } from "../Constants/constants";
import { parseArtistId } from "../Helpers";
import { request } from "../Request";
import { type VideoResponse, searchVideos } from "./searchVideos";
// ts-check

// @Interfaces
export interface IArtists {
  name: string;
  id: string;
}

export interface IAlbum {
  name: string;
  id: string;
}

export interface VerdictSongs {
  _id: string;
  name: string;
  coverArt: string;
  artists: IArtists[];
  album: IAlbum;
  durationInMS: number;
}

interface ISongs {
  _id: string;
  name: string;
  coverArt: string;
  artists: IArtists[];
  album: IAlbum;
  durationInMS: number;
}
export interface Artists {
  _id?: string;
  name?: string;
  image?: string;
  verified?: boolean;
}
export interface ISearch {
  songs: ISongs[];
}

export interface ISearchAlbum {
  _id: string;
  name: string;
  coverArt: string;
  artists: IArtists[];
  date: string | number;
  type: string;
}
export interface VerdictResults {
  topResults?: TopResults;
  albums?: ISearchAlbum[];
  songs?: ISongs[];
  artists?: Artists[];
  videos?: VideoResponse[];
}

export interface TopResults {
  id: string;
  coverArt?: string;
  artists?: Artists[];
  album?: IAlbum;
  durationInMS: number;
  _id: string;
  type: string;
  name?: string;
  __typename?: string;
  uri?: string;
}
export async function searchQuery(
  query: string,
  offset?: number
): Promise<VerdictResults> {
  const formattedTerm: string = query.replace(/\s+/g, "+");
  const videos = await searchVideos({
    term: query,
  });
  const response = (await request.get(
    END_POINTS.SEARCH_QUERY(formattedTerm)
  )) as SearchData;
  const parsedResponse = parser(response);
  return {
    ...parsedResponse,
    videos: videos.content,
  };
}

function parser(body: SearchData): VerdictResults {
  const data = body.data.searchV2;

  const _topResults = data.topResultsV2.itemsV2[0];
  const topRes = _topResults.item?.data;
  const topResult: TopResults = {
    __typename: topRes.__typename,
    uri: topRes.uri,
    name: topRes.name,
    id: topRes.id,
    coverArt: topRes.albumOfTrack?.coverArt?.sources?.at(-1).url,
    artists: topRes.artists.items.map((artist) => ({
      name: artist?.profile?.name,
      id: parseArtistId(artist.uri),
    })),
    album: {
      name: topRes.albumOfTrack.name,
      id: topRes.albumOfTrack.id,
    },
    durationInMS: topRes.duration.totalMilliseconds,
    _id: topRes.id,
    type: topRes.__typename.toLowerCase(),
  };
  const albums = data.albumsV2.items;

  const songs: ISongs[] = [];
  const artists = data.artists.items;
  const artistsArray: Artists[] = [];
  const searchAlbums: ISearchAlbum[] = [];

  for (const album of albums) {
    const V1 = album?.data;
    if (!V1) return;
    const name: string = V1?.name;
    const _id: string = parseId(V1.uri);
    const coverArt = V1.coverArt.sources?.at(-1).url;
    const artists = V1.artists.items.map((artist) => ({
      name: artist?.profile?.name,
      id: parseArtistId(artist.uri),
    }));
    const date = V1.date.year;
    const type = V1.__typename.toLowerCase();
    searchAlbums.push({
      _id,
      name,
      coverArt,
      artists,
      date,
      type,
    });
  }

  for (const artist of artists) {
    const V1 = artist.data;
    if (!V1) return;
    const name = V1.profile.name;
    const _id = parseArtistId(V1.uri);
    const verified = V1.profile?.verified;
    const image = V1.visuals.avatarImage?.sources?.at(-1).url;

    artistsArray.push({
      _id,
      name,
      verified,
      image,
    });
  }

  const tracks = data.tracksV2?.items;
  for (const response of tracks) {
    const V1 = response?.item?.data;
    if (!V1) return;
    const _id = V1?.id;
    const name = V1?.name;

    const coverArt = V1.albumOfTrack?.coverArt?.sources?.at(-1).url;
    const artists = V1.artists.items.map((artist) => ({
      name: artist?.profile?.name,
      id: parseArtistId(artist.uri),
    }));
    const album = {
      name: V1.albumOfTrack?.name,
      id: V1.albumOfTrack?.id,
    };
    const durationInMS = V1.duration.totalMilliseconds;

    songs.push({
      album,
      artists,
      coverArt,
      durationInMS,
      name,
      _id,
    });
  }
  return {
    topResults: topResult,
    albums: searchAlbums,
    artists: artistsArray,
    songs: songs,
  };
}

function parseId(uri: string) {
  const match = uri?.match(/spotify:album:(\w+)/);
  const albumId = match[0];
  return albumId;
}
