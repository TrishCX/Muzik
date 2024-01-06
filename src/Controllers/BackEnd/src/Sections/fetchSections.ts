import { request } from "../Request";
import { END_POINTS } from "../Constants/constants";
import type { SectionContent } from "../@types";
import { parse as parser } from "spotify-uri";
import { formatURI, formatAssets, fetchType } from "../Helpers";

interface SectionResponse {
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

    array.push({
      name: __item?.name,
      description: __item?.description,
      artists:
        __item?.artists?.items.map((artist) => ({
          name: artist.profile?.name,
          id: parser(artist.uri).id,
        })) || undefined,
      id: formatURI(__item?.uri),
      type: fetchType(__item?.uri),
      image: formatAssets(__item),
    });
  }
  return {
    title: title,
    content: array,
    nextOffSet,
  };
}
