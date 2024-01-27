import { END_POINTS } from "../Constants/constants";
import { request } from "../Request";
import type { SpotifyPlaylist } from "../@types";
export interface ISongs {
  name?: string;
  artists?: { name: string; id: string }[];
  durationInMS?: number;
  labeledDuration?: string;
  album?: {
    name: string;
    id: string;
    image: string;
    artists: { name: string; id: string }[];
  };
  playCount?: string;
}
export interface ISpotifyPlaylist {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  totalSongs?: number;
  songs: ISongs[];
}
export async function getPlaylist(id: string): Promise<ISpotifyPlaylist> {
  const response = await request.get(END_POINTS.GET_PLAYLIST(id));
  const { data } = response as SpotifyPlaylist;
  const playlist = data.playlistV2;
  const name = playlist.name;
  const image = playlist.images.items.at(-1)?.sources?.at(-1)?.url;
  const description = playlist.description;
  const totalSongs = playlist.content.totalCount;
  const array: ISongs[] = [];
  const { content } = playlist;
  const items = content?.items || [];
  for (const songs of items) {
    const song = songs.itemV2?.data;
    const name = song.name;
    const artists = song.artists.items.map((artist) => ({
      name: artist?.profile.name,
      id: parser(artist.uri),
    }));
    const durationInMS = song.trackDuration.totalMilliseconds;
    const labeledDuration = getMSToDuration(
      song.trackDuration.totalMilliseconds
    );
    const album = {
      name: song.albumOfTrack.name,
      id: parser(song.albumOfTrack.uri),
      image: song.albumOfTrack.coverArt.sources.at(-1)?.url,
      artists: song.albumOfTrack.artists.items.map((artist) => ({
        name: artist.profile?.name,
        id: parser(artist.uri),
      })),
    };
    const playCount = song.playcount;
    array.push({
      name,
      artists,
      durationInMS,
      labeledDuration,
      album,
      playCount,
    });
  }
  return {
    name,
    songs: array,
    id,
    description,
    image,
    totalSongs,
  };
}

function parser(uri: string) {
  const uriParts = uri.split(":");
  const artistId = uriParts[uriParts.length - 1];
  return artistId;
}
function getMSToDuration(ms_duration: number): string {
  const seconds = Math.floor(ms_duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${remainingMinutes}:${remainingSeconds}`;
  } else if (remainingMinutes > 0) {
    return `${remainingMinutes}:${remainingSeconds}`;
  } else {
    return `${remainingSeconds}`;
  }
}
