import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const rw = responsiveWidth;
const rh = responsiveHeight;

export const VideoFlatListStyles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 10,
  },
  imageContainer: {},
  image: {
    width: width,
    height: 200,
    borderRadius: 10,
    aspectRatio: 16 / 9,
  },
  detailsContainer: {
    marginTop: 10,
    flexDirection: "column",
  },
  titleStyles: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  artistStyle: {
    color: "#7d7d7d",
    fontSize: 12,
  },
  descriptiveContainer: {
    marginTop: 3,
  },
});
