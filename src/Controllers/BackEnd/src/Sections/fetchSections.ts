import { request } from "../Request";
import { END_POINTS } from "../Constants/constants";
import type { SectionContent } from "../@types";
import { formatURI, formatAssets, fetchType } from "../Helpers";

export interface SectionResponse {
  name?: string;
  id?: string;
  type?: string;
  image?: string;
  description?: String | string;
  artists?: {
    name: string;
    id: string;
  }[];
}

export interface IResponse {
  title: string;
  content: SectionResponse[];
  nextOffSet: number | null;
}

export async function fetchSections(
  id: string,
  offSet?: number
): Promise<IResponse> {
  const array: SectionResponse[] = [];
  const response = await request.get(`${END_POINTS.SECTIONS_GET(id, offSet)}`);
  const data = response as SectionContent;
  const parse = data.data?.browseSection;
  const sectionList = parse?.sectionItems?.items;
  const nextOffSet: number | null = parse.sectionItems.pagingInfo.nextOffset;

  let title: any;
  for (const item of sectionList) {
    const { content } = item;

    const initialData = content?.data;
    const __item = initialData;

    title = data.data?.browseSection?.data?.title?.transformedLabel;
    const _artists = __item?.artists?.items?.map((a) => {
      if (!a.uri && !a.profile?.name) return;

      return {
        name: a.profile?.name,
        id: parser(a.uri),
      };
    });

    array.push({
      name: __item.name,
      description: __item.description,
      id: parser(__item.uri),
      artists: _artists,
      type: fetchType(__item.uri),
      image: formatAssets(__item),
    });
  }

  return {
    title: title,
    content: array,
    nextOffSet,
  };
}

function parser(uri: string) {
  const uriParts = uri.split(":");
  const artistId = uriParts[uriParts.length - 1];
  return artistId;
}
