import type { Videos, MusicShelfRendererContent } from "../../@types";

export interface IVideos {
  title: string;
  thumbnailURL: string;
  artists: { name: string; id?: string }[];
  videoId: string;
}
export function parseVideo(body: Videos) {
  const searchTracks: IVideos[] = [];
  const { contents } = body;
  const items =
    contents?.tabbedSearchResultsRenderer?.tabs[0]?.tabRenderer?.content?.sectionListRenderer?.contents?.pop()
      ?.musicShelfRenderer?.contents!;

  for (const result of items) {
    const flexColumns = result.musicResponsiveListItemRenderer.flexColumns[0];
    const artistsColumns =
      result.musicResponsiveListItemRenderer.flexColumns[1];
    const title =
      flexColumns.musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
    const videoId: string =
      flexColumns?.musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.navigationEndpoint?.watchEndpoint?.videoId.toString() as string;
    const thumbnailURL: string =
      result.musicResponsiveListItemRenderer.thumbnail?.musicThumbnailRenderer.thumbnail.thumbnails.pop()
        ?.url as string;
    const artists = listArtists(
      artistsColumns.musicResponsiveListItemFlexColumnRenderer.text.runs
    );

    searchTracks.push({ title, thumbnailURL, artists, videoId });
  }
  return searchTracks;
}

function listArtists(data: any[]): { name: string; id?: string }[] {
  const artists: { name: string; id?: string }[] = [];
  data.forEach((item) => {
    if (
      item.navigationEndpoint &&
      item.navigationEndpoint.browseEndpoint
        .browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig
        .pageType === "MUSIC_PAGE_TYPE_ARTIST"
    ) {
      artists.push({
        name: item.text,
        id: item.navigationEndpoint.browseEndpoint.browseId,
      });
    }
  });
  if (artists.length === 0) {
    const delimiterIndex = data.findIndex((item) => item.text === " • ");
    if (delimiterIndex !== -1) {
      data
        .filter((item, index) => index < delimiterIndex && item.name !== " & ")
        .forEach((item) => artists.push({ name: item.text }));
    }
  }
  return artists;
}
