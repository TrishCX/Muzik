import { request } from "../Request";
import { END_POINTS } from "../Constants/constants";
// @ts-check;
import type { HomeContent } from "../@types";
import parser from "./parser";

export async function fetchHomeContent(id: string) {
  const response = await request.get(END_POINTS.GENRES_GET(id));
  const content = response as HomeContent;
  const parsed = parser(content);
  return parsed;
}
