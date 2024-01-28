import { END_POINTS } from "../Constants/constants";
import { makeRequest } from "../YoutubeRequest";
// @parser
import { parsePlaylistVideo } from "../Parsers/index";
import { Playlist } from "../@types";

export async function getVideoPlaylist(playlistId: string) {
  try {
    const response = (await makeRequest(
      END_POINTS.PLAYLIST_GET(playlistId),
      {
        browseId: `VL${playlistId}`,
      },
      "0.1"
    )) as Playlist;
    const parsedQuery = parsePlaylistVideo(response);
    return parsedQuery;
  } catch (error: any) {
    return [];
  }
}
