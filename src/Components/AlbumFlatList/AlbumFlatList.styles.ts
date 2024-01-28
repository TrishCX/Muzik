import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const rw = responsiveWidth;
const rh = responsiveHeight;

export const AlbumFlatListStyles = StyleSheet.create({
  container: {},
  contentContainer: {},
  coverArtContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  coverArt: {
    width: rw(80),
    height: rw(80),
    borderRadius: rw(0),
  },
  detailContainer: {
    justifyContent: "center",

    marginLeft: 40,
    flexDirection: "column",
    marginTop: 10,
  },
  titleStyles: {
    color: "#fff",
    fontSize: 12,
    maxWidth: width - 90,
  },
  descriptiveContentContainer: {
    marginTop: 3,
  },
  descriptiveContentStyles: {
    color: "#999999",
    fontSize: 11,
  },
});
