import { makeRequest } from "../YoutubeRequest";
import type { YoutubeHomeResponse } from "../@types/index";
// @parser
import { YouTubeHomeParser } from "../Parsers";

export async function fetchYoutubeHome() {
  const responsiveBodyContent: YoutubeHomeResponse = (await makeRequest(
    `https://music.youtube.com/youtubei/v1/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`,
    {
      browseId: "FEmusic_home",
    }
  )) as YoutubeHomeResponse;
  const parsedQuery = YouTubeHomeParser(responsiveBodyContent);
}
