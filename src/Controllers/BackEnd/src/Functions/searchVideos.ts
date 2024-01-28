import { makeRequest } from "../YoutubeRequest/index";
import { END_POINTS } from "../Constants/constants";
// @ts-check
import type { Videos } from "../@types";
// @parser
import { parseVideo } from "../Parsers/index";
import { ExtraVideoSearch, VideoSearchTypes } from "../@types/index";
import { getExactYearFromRelativeString } from "../Extractors";

interface Props {
  term?: string;
  continuation?: string;
}
export interface VideoResponse {
  id?: string;
  title?: string;
  channel?: { name?: string; id: string };
  duration: string;
  durationInMS?: number;
  thumbnailURL?: string;
  labeledYear?: string;
  exactYear?: string;
}
export interface VideoResults {
  continuationToken?: string;
  content: VideoResponse[];
}

export async function searchVideos(props: Props) {
  const logic = {
    ...(props.continuation !== undefined
      ? {
          continuation: props.continuation,
        }
      : {
          param: "EgIQAQ%3D%3D",
          query: props.term,
        }),
  };
  const response = (await makeRequest(
    END_POINTS.YOUTUBE_SEARCH,
    {
      ...logic,
    },
    "2.20240102.07.00",
    "WEB"
  )) as ExtraVideoSearch | VideoSearchTypes;

  const parsedTerm = parser(
    props?.continuation !== undefined ? true : false,
    response
  );
  return parsedTerm;
}

function parser(
  isContinuationIncluded: boolean,
  body: VideoSearchTypes | ExtraVideoSearch | any
): VideoResults {
  const contentArray: VideoResponse[] = [];

  if (isContinuationIncluded) {
    const data =
      body.onResponseReceivedCommands[0].appendContinuationItemsAction
        .continuationItems;

    const continuationToken =
      data[1].continuationItemRenderer.continuationEndpoint.continuationCommand
        .token;

    const { contents } = data[0].itemSectionRenderer;

    for (const content of contents) {
      const video = content?.videoRenderer;

      const title = video?.title?.runs[0]?.text;

      const id = video?.videoId;
      const author = video?.ownerText?.runs[0]?.text;
      const authorId =
        video?.ownerText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId;
      const thumbnailURL = video?.thumbnail?.thumbnails.at(-1)?.url;
      const duration = video?.lengthText?.simpleText;

      const durationInMS = convertDurationToMilliseconds(duration);
      const labeledYear = video?.publishedTimeText?.simpleText;
      const exactYear = getExactYearFromRelativeString(labeledYear);
      contentArray.push({
        title,
        id,
        channel: {
          name: author,
          id: authorId,
        },
        duration,
        durationInMS,
        thumbnailURL: `${thumbnailURL}"`,
        labeledYear,
        exactYear,
      });
    }
    return {
      continuationToken,
      content: contentArray.filter((video) => video.exactYear !== null),
    };
  } else {
    const data =
      body?.contents?.twoColumnSearchResultsRenderer?.primaryContents
        ?.sectionListRenderer?.contents;

    const { token } =
      data[1].continuationItemRenderer.continuationEndpoint.continuationCommand;

    const continuationToken = token;

    const contents = data[0]?.itemSectionRenderer?.contents;

    for (const content of contents) {
      const video = content?.videoRenderer;

      const title = video?.title?.runs[0]?.text;
      const id = video?.videoId;
      const author = video?.ownerText?.runs[0]?.text;
      const authorId =
        video?.ownerText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId;
      const thumbnailURL = video?.thumbnail?.thumbnails.at(-1)?.url;
      const duration = video?.lengthText?.simpleText;
      const durationInMS = convertDurationToMilliseconds(duration);
      const labeledYear = video?.publishedTimeText?.simpleText;

      const exactYear = getExactYearFromRelativeString(labeledYear);

      contentArray.push({
        title,
        id,
        channel: {
          name: author,
          id: authorId,
        },
        duration,
        durationInMS,
        thumbnailURL: `${thumbnailURL}"`,
        labeledYear,
        exactYear: exactYear,
      });
    }
    return {
      continuationToken,
      content: contentArray,
    };
  }
  function convertDurationToMilliseconds(duration: string): number {
    if (!duration) return 0;
    const parts = duration?.split(":")?.map(Number);

    let totalMilliseconds = 0;
    if (parts.length === 2) {
      totalMilliseconds = parts[0] * 60 * 1000 + parts[1] * 1000;
    } else if (parts.length === 3) {
      totalMilliseconds =
        parts[0] * 60 * 60 * 1000 + parts[1] * 60 * 1000 + parts[2] * 1000;
    } else {
      throw new Error("Invalid duration format");
    }

    return totalMilliseconds;
  }
}
