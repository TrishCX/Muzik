export function parseArtistId(artistURI: string) {
  const regexPattern = /spotify:artist:(\w+)/;

  const match = regexPattern.exec(artistURI);

  if (match && match[1]) {
    const artistId = match[1];
    return artistId;
  } else {
    return undefined || null;
  }
}
