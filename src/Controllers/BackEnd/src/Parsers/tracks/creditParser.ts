import { Credits, CreditArtist } from "../../@types";
interface Roles {
  title?: string;
  artists?: CreditArtist[];
}
export interface ICredits {
  title?: string;
  roles?: Roles[];
  sources?: string[];
}
export function parseTrackCredits(body: Credits): ICredits {
  const array: Roles[] = [];
  const data = body;
  const sources = data.sourceNames;
  const title = data.trackTitle;
  for (const item of data.roleCredits) {
    array.push({
      title: item.roleTitle,
      artists: item.artists,
    });
  }
  return {
    title,
    sources,
    roles: array,
  };
}
