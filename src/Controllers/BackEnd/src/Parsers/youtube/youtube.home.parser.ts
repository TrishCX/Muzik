import {
  YoutubeHomeResponse,
  MusicCarouselShelfRendererContent,
} from "../../@types";

interface ArrayType {
  headerTitle: string;
  headerSubtitle: string;
  content: MusicCarouselShelfRendererContent;
}

export function YouTubeHomeParser(BodyContent: YoutubeHomeResponse) {
  const { contents, background } = BodyContent;

  const data = contents?.singleColumnBrowseResultsRenderer?.tabs;
  const item = data[0];
  const { tabRenderer } = item;
  const content = tabRenderer;
  const sectionContent = content?.content.sectionListRenderer;
  const sectionList = sectionContent.contents;
  const arrayHome: ArrayType[] = [];

  for (let { musicCarouselShelfRenderer } of sectionList) {
    const shelf = musicCarouselShelfRenderer;
    const headerContent = shelf?.header;
    const headerRuns = headerContent?.musicCarouselShelfBasicHeaderRenderer;

    const headerTitle: string | undefined = headerRuns?.title?.runs[0].text;
    const strapLine: string | undefined = headerRuns?.strapline?.runs[0]?.text;

    const scraper = shelf?.contents as MusicCarouselShelfRendererContent;
    arrayHome.push({
      headerTitle: headerTitle?.toString() as string,
      headerSubtitle: strapLine?.toString() as string,
      content: scraper,
    });
  }
  const filtered: any = arrayHome.filter((v: any) => v !== undefined);

  const combinedArray: MusicCarouselShelfRendererContent[] = [
    ...filtered[0].content,
    ...filtered[1].content,
  ];

  const homeContent: any[] = [];

  for (const response of combinedArray) {
    const data = response?.musicTwoRowItemRenderer;
    const item = response.musicResponsiveListItemRenderer;

    const title: string | undefined = data?.title.runs[0].text;
    const subtitle: string | undefined = data?.subtitle.runs[0].text;

    const id: string | undefined =
      data?.navigationEndpoint.browseEndpoint.browseId;
    const formattedID: string | undefined = id?.replace("VL", "");
    const thumbnailURL: string =
      data?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails?.at(
        -1
      )?.url as string;

    homeContent.push({
      title,
      subtitle,
      id: formattedID,
      thumbnailURL,
    });
  }

  const filteredArray = homeContent.filter((v) => v.title !== undefined);
  const filteredHome = arrayHome.filter((v) => v.headerTitle !== undefined);
  const formation = filteredHome;
}
