import { makeContext } from "../Context";

export type ClientVersion = "2.20240102.07.00" | "0.1" | "1.20240124.01.00";
export type ClientName = "WEB_REMIX" | "WEB";

export async function makeRequest(
  url: string,
  body?: any,
  version?: ClientVersion,
  clientName?: ClientName
) {
  const context = makeContext({
    clientName: clientName || "WEB_REMIX",
    clientVersion: (version?.toString() as string) || "0.1",
  });

  const req = await fetch(url, {
    body: JSON.stringify({
      ...context,
      ...body,
    }),
    method: "POST",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      origin: "https://music.youtube.com",
    },
  });

  const res = await req.json();
  return res;
}
