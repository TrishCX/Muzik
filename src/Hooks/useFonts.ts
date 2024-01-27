import { useFonts } from "expo-font";
export enum Fonts {
  Circular = "Circular",
  CircularNormal = "CircularNormal",
}

export function useInitialFonts() {
  const [fontsLoaded] = useFonts({
    Circular: require("../Fonts/Circular/CircularSpotifyText-Bold.otf"),
    CircularNormal: require("../Fonts/Circular/CircularSpotifyText-Medium.otf"),
  });

  return fontsLoaded;
}
