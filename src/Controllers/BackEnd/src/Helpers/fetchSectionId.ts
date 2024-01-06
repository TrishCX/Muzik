export function parseSectionId(spotifyString: string) {
  const regexPattern = /spotify:section:(\w+)/;

  const match = regexPattern.exec(spotifyString);

  if (match && match[1]) {
    const sectionId = match[1];
    return sectionId;
  } else {
    return undefined || null;
  }
}
