import { parse } from "spotify-uri";

export function formatURI(uri: string) {
  if (
    uri.includes("spotify:playliist") ||
    uri.includes("spotify:section") ||
    uri.includes("spotify:album")
  ) {
    return undefined;
  } else {
    return parse(uri).id;
  }
}
