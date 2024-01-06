import { request } from "../Request/index";
import { END_POINTS } from "../Constants/constants";
import { artistSearchParser } from "../Parsers";
import { ArtistSearch } from "../@types/index";

export async function searchArtistFetcher(query: string) {
  const auth = await request.get(END_POINTS.ARTIST_SEARCH(query));
  const body = auth as ArtistSearch;
  return artistSearchParser(body);
}
