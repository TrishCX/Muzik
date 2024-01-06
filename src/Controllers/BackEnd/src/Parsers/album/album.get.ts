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

  const copyrights = album.copyright.items.filter(
    ({ type }) => type === CopyRight.C
  );
  for (const { track } of tracks) {
    tracksArray.push({
      name: track.name,
      id: parse(track.uri).id,
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
  };
}
