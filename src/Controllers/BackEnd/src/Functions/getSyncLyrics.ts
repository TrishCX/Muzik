import { END_POINTS } from "../Constants/constants";

export interface Lyrics {
  text?: string;
  startTimeMS?: string | number;
  endTimeMS?: string | number;
}
export async function getSyncLyrics(trackId: string) {
  try {
    const URL: string = `${END_POINTS.LYRICS_API}=${trackId}`;
    const response = await fetch(URL).then((res) => res.json());
    const lyrics: Lyrics[] = [];
    response.lines.map((data: any) => {
      return lyrics.push({
        text: data?.words,
        startTimeMS: data.startTimeMs,
        endTimeMS: data.endTimeMs,
      });
    });
    return lyrics;
  } catch (error: unknown | any) {
    return undefined;
  }
}
