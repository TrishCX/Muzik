import { SPClient } from "./client";
import { getAccessToken } from "../Helpers";

export async function fetchCanvas(id: string) {
  const { accessToken } = await getAccessToken();
  const client = await SPClient.create(accessToken as string);
  const result = await client.postCanvasRequest(`spotify:track:${id}`);

  if (result.canvases && result.canvases.length > 0 && result.canvases[0].url) {
    return result.canvases[0].url as string;
  } else {
    return undefined;
  }
}
