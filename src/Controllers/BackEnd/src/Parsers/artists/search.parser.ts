import type { ArtistSearch, SearchArtistResponse } from "../../@types/index";
import { parseId } from "../../Helpers/index";

export function artistSearchParser(body: ArtistSearch) {
  const { data } = body;
  const items = data.searchV2.artists.items;
  const array: SearchArtistResponse[] = [];
  for (const response of items) {
    const visuals = response.data?.visuals.avatarImage?.sources
      .at(-1)
      ?.url.toString() as string;
    if (!visuals) continue;

    const name = response.data.profile.name.toString();
    const verified = response.data.profile.verified;
    const color =
      response?.data?.visuals?.avatarImage?.extractedColors?.colorDark?.hex ||
      undefined;
    const id = parseId(response.data.uri);
    array.push({ id, name, avatar: visuals, color, verified });
  }

  return array;
}
