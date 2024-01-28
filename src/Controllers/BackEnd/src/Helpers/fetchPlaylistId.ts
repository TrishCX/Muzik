export function parsePlaylistId(spotifyURI: string) {
  const regexPattern = /spotify:playlist:(\w+)/;

  const match = regexPattern.exec(spotifyURI);

  if (match && match[1]) {
    const playlistId = match[1];
    return playlistId;
  } else {
    return undefined || null;
  }
}
