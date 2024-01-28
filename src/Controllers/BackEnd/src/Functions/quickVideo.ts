import { getExactYearFromRelativeString } from "../Extractors";

export type Video = {
  title?: string;
  id?: string;
  thumbnailURL?: string;
  duration?: string;
  durationInMS?: number | null;
  exactYear?: number | null;
  labeledYear?: string | undefined;
  channel?: string;
};

export async function quickVideo(term: string) {
  // const response = await Youtube.search(`${term}`, { searchType: "VIDEO" });
  // console.log(response);
  // const array: Video[] = [];
  // for (const video of response?.videos) {
  //   const year = getExactYearFromRelativeString(
  //     video.uploaded?.toString() as string
  //   );
  //   array.push({
  //     title: video?.title,
  //     id: video?.id,
  //     thumbnailURL: video.thumbnail,
  //     duration: video.duration_raw,
  //     durationInMS: video.duration * 1000,
  //     exactYear: year,
  //     labeledYear: video.uploaded,
  //     channel: video?.channel?.name,
  //   });
  // }
  // return array;
}
