export function fetchType(uri: string) {
  if (uri.includes("spotify:playlist")) return "playlist";
  if (uri.includes("spotify:section")) return "section";
  if (uri.includes("spotify:album")) return "album";
  else return "track";
}
