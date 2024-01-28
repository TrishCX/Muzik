function ARTIST_SEARCH(term: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchArtists&variables=%7B%22searchTerm%22%3A%22${term}%22%2C%22offset%22%3A0%2C%22limit%22%3A30%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%224e7cdd33163874d9db5e08e6fabc51ac3a1c7f3588f4190fc04c5b863f6b82bd%22%7D%7D`;
  return URL;
}

function SEARCH_QUERY(query: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchDesktop&variables=%7B%22searchTerm%22%3A%22${query}%22%2C%22offset%22%3A0%2C%22limit%22%3A10%2C%22numberOfTopResults%22%3A5%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22da03293d92a2cfc5e24597dcdc652c0ad135e1c64a78fddbf1478a7e096bea44%22%7D%7D`;
  return URL;
}
function ARTIST_GET(id: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryArtistOverview&variables=%7B%22uri%22%3A%22spotify%3Aartist%3A${id}%22%2C%22locale%22%3A%22%22%2C%22includePrerelease%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223a747b83568580814534e662a2569a6978ac3ad2e449ff751a859abe05dec995%22%7D%7D`;
  return URL;
}
function ALBUM_GET(id: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=getAlbum&variables=%7B%22uri%22%3A%22spotify%3Aalbum%3A${id}%22%2C%22locale%22%3A%22%22%2C%22offset%22%3A0%2C%22limit%22%3A50%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2246ae954ef2d2fe7732b4b2b4022157b2e18b7ea84f70591ceb164e4de1b5d5d3%22%7D%7D`;
  return URL;
}
function TRACK_SEARCH(query: string, offset: number | 0) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchTracks&variables=%7B%22searchTerm%22%3A%22${query}%22%2C%22offset%22%3A${offset}%2C%22limit%22%3A100%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%229a7c5b5016c7512f42285602edf542fa9c6a657a4fe657fe9c397a980617b2b3%22%7D%7D`;
  return URL;
}

function VIDEO_SEARCH(query: string) {
  const URL: string = `https://music.youtube.com/youtubei/v1/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;
  return URL;
}
function TRACK_SUGGESTION(browseId: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=internalLinkRecommenderTrack&variables=%7B%22uri%22%3A%22spotify%3Atrack%3A${browseId}%22%2C%22strategy%22%3A%22CONTENT_ONLY%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2297f52864d50ba62ab761a7bff47f1a9921d9e357316f7d60ad84ae3788eea4cf%22%7D%7D`;
  return URL;
}
function GENRES_GET(browseId: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=browsePage&variables=%7B%22pagePagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A10%7D%2C%22sectionPagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A10%7D%2C%22uri%22%3A%22spotify%3Apage%3A${browseId}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2208ddbd3d93eb0be629d5912e130a3f94ace1cc84c9fc6d47a4076f67c3bfbaab%22%7D%7D`;
  return URL;
}

function GET_PLAYLIST(id: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchPlaylist&variables=%7B%22uri%22%3A%22spotify%3Aplaylist%3A${id}%22%2C%22offset%22%3A0%2C%22limit%22%3A25%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2273a3b3470804983e4d55d83cd6cc99715019228fd999d51429cc69473a18789d%22%7D%7D`;
  return URL;
}

function PLAYLIST_GET(browseId?: string) {
  const URL: string = `https://music.youtube.com/youtubei/v1/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`;
  return URL;
}

function SECTIONS_GET(sectionId: string, offSet?: number) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=browseSection&variables=%7B%22pagination%22%3A%7B%22offset%22%3A${
    offSet || 0
  }%2C%22limit%22%3A20%7D%2C%22uri%22%3A%22spotify%3Asection%3A${sectionId}%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2249ee421d41b319f3f3ae7b652a4438230d192efe31c92fc29707b96e584bcaac%22%7D%7D`;
  return URL;
}

function CREDITS(id: string) {
  const URL: string = `https://spclient.wg.spotify.com/track-credits-view/v0/experimental/${id}/credits`;
  return URL;
}

export const END_POINTS = {
  ARTIST_SEARCH,
  ARTIST_GET,
  TRACK_SEARCH,
  TRACK_SUGGESTION,
  GENRES_GET,
  ALBUM_GET,
  SECTIONS_GET,
  CREDITS,
  SEARCH_QUERY,
  GET_PLAYLIST,
  VIDEO_SEARCH,
  HOME_CONTENT: [
    // "0JQ5DAqbMKFz6FAsUtgAab",
    // "0JQ5DAqbMKFFzDl7qN9Apr",
    // "0JQ5DAqbMKFAXlCG6QvYQ4",
    // "0JQ5DAudkNjCgYMM0TZXDw",
    "0JQ5DAqbMKFEC4WFtoNRpw",
  ],
  PLAYLIST_GET,
  YOUTUBE_SEARCH:
    "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
  LYRICS_API: "https://spotify-lyric-api-984e7b4face0.herokuapp.com/?trackid",
  YOUTUBE_SEARCH_SUGGESTIONS:
    "https://music.youtube.com/youtubei/v1/music/get_search_suggestions?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false",
};
