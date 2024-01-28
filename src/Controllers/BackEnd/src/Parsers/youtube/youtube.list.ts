import type { Playlist } from "../../@types";

export interface IPlaylist {
  title: string;
  videoId: string;
  thumbnailURL: string;
  artists: { name: string; id?: string }[];
  durationLabel: string;
  durationMilliSeconds: number;
}

export function parsePlaylistVideo(body: Playlist) {
  const playlistArray: IPlaylist[] = [];
  const { contents } = body;
  const { singleColumnBrowseResultsRenderer } = contents;
  const { tabs } = singleColumnBrowseResultsRenderer;
  const tabList = tabs[0].tabRenderer.content.sectionListRenderer?.contents[0];
  const playlistContent = tabList.musicPlaylistShelfRenderer.contents;
  for (const playlist of playlistContent) {
    const list = playlist?.musicResponsiveListItemRenderer;
    const flexColumns =
      list.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer;
    const title: string = flexColumns?.text?.runs![0]?.text as string;
    const videoId: string = flexColumns?.text.runs![0].navigationEndpoint
      ?.watchEndpoint?.videoId as string;

    const thumbnailURL: string =
      list.thumbnail?.musicThumbnailRenderer.thumbnail?.thumbnails?.at(-1)
        ?.url as string;

    const artists: { name: string; id?: string }[] | undefined = listArtists(
      list?.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer.text
        ?.runs as any
    );
    const durationLabel: string =
      list.fixedColumns[0].musicResponsiveListItemFixedColumnRenderer.text
        .runs[0].text;
    const durationMilliSeconds: number = parseDuration(durationLabel) * 1000;
    playlistArray.push({
      title,
      videoId,
      thumbnailURL,
      artists,
      durationLabel,
      durationMilliSeconds,
    });
  }
  return playlistArray;
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
function parseDuration(durationLabel: string): number {
  const durationList = durationLabel.split(":");
  return durationList.length === 3
    ? parseInt(durationList[0], 10) * 3600 +
        parseInt(durationList[1], 10) * 60 +
        parseInt(durationList[2], 10)
    : parseInt(durationList[0], 10) * 60 + parseInt(durationList[1], 10);
}
