import { TrackSuggestion } from "../../@types";
export interface ISuggestions {
  title?: string;
  id?: string;
  durationMilliseconds?: number;
  coverArt?: string;
  albumId?: string;
  playCount?: number | string;
  artists?: {
    id: string;
    name: string;
  }[];
}
export function parseTrackSuggestion(body: TrackSuggestion) {
  const item = body.data.seoRecommended?.items;
  const array: ISuggestions[] = [];
  for (const response of item) {
    const { data } = response;
    const title = data?.name;
    const artists = data.artists.items.map((artist) => ({
      id: artist.id,
      name: artist?.profile.name,
    }));
    const id = data?.id;
    const durationMilliseconds = data?.duration.totalMilliseconds;
    const coverArt = data.albumOfTrack.coverArt?.sources.at(-1)?.url;
    const albumId = data?.albumOfTrack.id;
    const playCount = data?.playcount;
    array.push({
      title,
      artists,
      id,
      durationMilliseconds,
      coverArt,
      albumId,
      playCount,
    });
  }
  return array;
}
