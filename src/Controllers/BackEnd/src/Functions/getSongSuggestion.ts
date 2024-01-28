import { END_POINTS } from "../Constants/constants";
import { request } from "../Request";
import type { TrackSuggestion } from "../@types/index";
// @parser
import { parseTrackSuggestion, ISuggestions } from "../Parsers/index";

export async function getSongSuggestion(id: string) {
  const response = await request.get(END_POINTS.TRACK_SUGGESTION(id));
  const parsedQuery = response as TrackSuggestion;
  const parsedData: ISuggestions[] = parseTrackSuggestion(parsedQuery);
  return parsedData;
}
