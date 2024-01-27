import { useState, useEffect } from "react";
import { searchVideos, VideoResults } from "../Controllers/BackEnd/src";

type Props = { continuationToken?: string; query?: string };

export function useYoutubeVideos(props: Props) {
  const [videos, setVideos] = useState<VideoResults>();
  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await searchVideos({
        continuation: props?.continuationToken || undefined,
        term: props.query,
      });
      setVideos(videos);
    };
    fetchVideos();
  }, []);
  return videos;
}
