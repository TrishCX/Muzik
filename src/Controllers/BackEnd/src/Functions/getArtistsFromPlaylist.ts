import Native from "react-native";
import { SpotifyPlaylist } from "../@types";
import { END_POINTS } from "../Constants/constants";
import { request } from "../Request/index";

const getArtistsFromPlaylist = async (playlistId: string) => {
  const response = (await request.get(
    END_POINTS.GET_PLAYLIST(playlistId)
  )) as SpotifyPlaylist;
  const { data } = response;
  const playlist = data.playlistV2;

  for (const content of playlist.content?.items) {
    const artist = content.itemV2?.data;
    artist.artists.items.map(({ profile, uri }) => {});
  }
  return "";
};

export { getArtistsFromPlaylist };
