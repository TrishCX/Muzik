import { END_POINTS } from "../Constants/constants";
import { request } from "../Request";
import { artistGetParser } from "../Parsers/index";
// @ts-check
import type { GetArtist } from "../@types";

export async function getArtist(id: string) {
  const auth = await request.get(END_POINTS.ARTIST_GET(id));
  const body = auth as GetArtist;
  return artistGetParser(body);
}
