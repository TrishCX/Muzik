import { END_POINTS } from "../Constants/constants";
import { request } from "../Request";
// @parser
import { parseAlbum } from "../Parsers/index";
// @types
import { GetAlbum } from "../@types/index";

export async function getAlbum(id: string) {
  const response = (await request.get(END_POINTS.ALBUM_GET(id))) as GetAlbum;
  const parsedQuery = parseAlbum(response);
  return parsedQuery;
}
