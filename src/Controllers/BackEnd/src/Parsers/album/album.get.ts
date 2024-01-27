import { GetAlbum, CopyRight } from "../../@types";
import { parse } from "spotify-uri";
import { parseArtistId } from "../../Helpers/index";

interface Artists {
  name: string;
  id: string;
  image: string;
}
interface TrackArtists {
  name: string;
  id: string;
}

interface CopyRights {
  type: string;
  text?: string;
}

interface Tracks {
  name?: string;
  id?: string;
  durationMilliSeconds?: number;
  artists?: TrackArtists[];
  trackNumber?: number;
}
export interface IAlbum {
  name: string;
  artists: Artists[];
  date: string;
  initialDate?: string;
  image: string;
  copyrights: CopyRights[];
  tracks: Tracks[];
  type: string;
}
export function parseAlbum(body: GetAlbum): IAlbum {
  const tracksArray: Tracks[] = [];
  const data = body.data;
  const album = data?.albumUnion;
  const name = album?.name;
  const artists = album?.artists?.items.map((a) => ({
    name: a?.profile.name,
    id: a.id,
    image: a.visuals.avatarImage.sources?.at(-1)?.url,
  }));
  const date = new Date(album?.date?.isoString).toLocaleDateString();
  const image = album?.coverArt?.sources[0]?.url;
  const tracks = album.tracks.items;
  const type = album.type;
  const initialDate = album.date.isoString;

  const copyrights = album.copyright.items;
  for (const { track } of tracks) {
    tracksArray.push({
      name: track.name,
      id: extractIdFromSpotifyString(track.uri),
      durationMilliSeconds: track.duration?.totalMilliseconds,
      artists: track.artists.items.map((s) => ({
        name: s.profile.name,
        id: parseArtistId(s.uri) as string,
      })),
      trackNumber: track.trackNumber,
    });
  }
  return {
    name,
    artists: artists as Artists[],
    copyrights,
    date,
    image,
    tracks: tracksArray,
    type,
    initialDate,
  };
}
function extractIdFromSpotifyString(spotifyString: string): string | null {
  // Regular expression to match the ID after the last colon
  const idRegex: RegExp = /[^:]+$/;

  // Extracting the ID using the exec method
  const match = idRegex.exec(spotifyString);

  // Checking if there is a match and extracting the ID
  const id: string | null = match ? match[0] : null;

  return id;
}
