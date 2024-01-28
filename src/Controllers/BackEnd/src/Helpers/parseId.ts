import { parse } from "spotify-uri";
export function parseId(uri: string) {
  return parse(uri).id;
}
