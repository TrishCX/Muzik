import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  containerShimmer: {
    width: 120,
    height: 30,
    borderRadius: 5,
  },
  videoContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainerShimmer: {
    width: width - 50,
    height: 200,
    borderRadius: 10,
  },
  rowContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  trendingVideos: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
