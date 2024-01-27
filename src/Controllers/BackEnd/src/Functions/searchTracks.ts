import { END_POINTS } from "../Constants/constants";
import { request } from "../Request";
// @ts-check
import type { SearchTracks } from "../@types";
import { searchTracksParser } from "../Parsers";

export async function searchTracks(term: string, offset: number | 0) {
  const formattedTerm: string = term.replace(/\s+/g, "+");

  const response = (await request.get(
    END_POINTS.TRACK_SEARCH(`${formattedTerm}`, Number(offset))
  )) as SearchTracks;
  const entries = searchTracksParser(response);
  return console.log(response);
}
