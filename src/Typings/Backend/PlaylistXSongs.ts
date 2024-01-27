import type { ISongs } from "../../Controllers/BackEnd/src";

export interface PlaylistXSongs {
  title?: string;
  description?: string;
  songs?: ISongs[];
  image?: string;
}
