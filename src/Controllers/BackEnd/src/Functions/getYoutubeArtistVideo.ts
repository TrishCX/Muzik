import { AR, Type } from "../@types";
import { makeRequest } from "../YoutubeRequest";

export async function search_ytArtistVideos(term: string) {
  const _id = await search_ytArtist(term.toString());
  const videos = await search_ytVideos(_id[0]);
  return videos;
}

export interface ArtistVideo {
  _id?: string | number;
  title?: string;
  thumbnail?: string;
}

async function search_ytArtist(name: string) {
  const request = await makeRequest(
    "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false",
    {
      params: "EgWKAQIgAWoSEAkQAxAEEA4QChAFEBEQEBAV",
      query: `${name}`,
    },
    "1.20240124.01.00",
    "WEB_REMIX"
  );
  const response = request as Type;

  const data =
    response.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer;
  const contents = data.content.sectionListRenderer.contents[0];
  const ids: string[] = [];
  contents.musicShelfRenderer.contents.map((content) => {
    const baseContent = content.musicResponsiveListItemRenderer;
    const id = baseContent.navigationEndpoint.browseEndpoint?.browseId;
    ids.push(id);
  });
  return ids;
}

async function search_ytVideos(id: string) {
  const videos: ArtistVideo[] = [];

  const request = await makeRequest(
    "https://music.youtube.com/youtubei/v1/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false",
    {
      browseId: `${id}`,
    },
    "1.20240124.01.00",
    "WEB_REMIX"
  );
  const response = (await request) as AR;

  const data = response.contents.singleColumnBrowseResultsRenderer.tabs[0];
  const tab = data.tabRenderer.content.sectionListRenderer;
  const content = tab.contents.filter(
    (filter) =>
      filter.musicCarouselShelfRenderer?.header
        .musicCarouselShelfBasicHeaderRenderer.title.runs[0].text === "Videos"
  );

  const playlistId =
    content[0]?.musicCarouselShelfRenderer?.header.musicCarouselShelfBasicHeaderRenderer.title.runs[0].navigationEndpoint?.browseEndpoint.browseId.replace(
      "VL",
      ""
    );
  const params =
    content[0]?.musicCarouselShelfRenderer?.header
      .musicCarouselShelfBasicHeaderRenderer.title.runs[0].navigationEndpoint
      ?.browseEndpoint.params;

  for (const response of content) {
    const base = response.musicCarouselShelfRenderer;
    base?.contents.map((content) => {
      const video = content.musicTwoRowItemRenderer;
      if (!video.navigationEndpoint.watchEndpoint?.videoId) return;
      videos.push({
        title: video.title.runs[0].text,
        _id: video.navigationEndpoint.watchEndpoint?.videoId,
        thumbnail: `${
          video.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails.at(
            -1
          )?.url
        }"`,
      });
    });
  }

  return {
    videos,
    playlistId,
    params,
  };
}
