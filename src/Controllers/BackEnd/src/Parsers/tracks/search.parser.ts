import { type SearchTracks } from "../../@types";
import { parseArtistId } from "../../Helpers/index";

export interface ISong {
  coverArt: string;
  title: string;
  id: string;
  durationInMS: number;
  artists: { name?: string; id?: string | null }[];
  album: any;
  nextOffSet: number;
}

export function searchTracksParser(body: SearchTracks) {
  const item = body.data?.searchV2.tracksV2;
  const nextOffSet: number = item?.pagingInfo.nextOffset;
  const array: ISong[] = [];
  for (var song of item.items) {
    const selectedSong = song.item.data;
    const coverArt: string = selectedSong.albumOfTrack.coverArt.sources.at(-1)
      ?.url as string;
    const title: string = selectedSong.name;
    const id: string = selectedSong.id;
    const durationInMS: number = selectedSong.duration.totalMilliseconds;
    const artists = selectedSong.artists.items.map((artist) => ({
      name: artist.profile?.name,
      id: parseArtistId(artist.uri),
    }));
    const album = selectedSong.albumOfTrack;
    array.push({
      coverArt,
      title,
      id,
      durationInMS,
      album,
      nextOffSet,
      artists: artists,
    });
  }
  return array;
}
