import { request } from "../Request";
import { END_POINTS } from "../Constants/constants";
// @ts-check
import type { Credits } from "../@types";
// @parser
import { parseTrackCredits } from "../Parsers";

export async function getCredits(id: string) {
  const response = (await request.get(END_POINTS.CREDITS(id))) as Credits;
  const parsedCredits = parseTrackCredits(response);
  return parsedCredits;
}
