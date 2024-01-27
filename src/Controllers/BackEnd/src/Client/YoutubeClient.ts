import { makeRequest } from "../YoutubeRequest";
import { END_POINTS } from "../Constants/constants";

export class YoutubeClient {
  async searchSuggestions(query: string) {
    const response = await makeRequest(END_POINTS.YOUTUBE_SEARCH_SUGGESTIONS, {
      input: query,
    });
    const queries: string[] = [];
    response.contents[0]?.searchSuggestionsSectionRenderer?.contents?.map(
      (response: any) => {
        const parsedQuery = response.searchSuggestionRenderer;
        const searchEndPoint = parsedQuery.navigationEndpoint?.searchEndpoint
          ?.query as string;
        queries.push(searchEndPoint);
      }
    );
    return queries;
  }
}
