import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const rw = responsiveWidth;
const rh = responsiveHeight;
const rf = responsiveFontSize;

export const MusicFlatListStyles = StyleSheet.create({
  additionalTitleStyles: {
    marginLeft: 15,
  },
  container: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: "row",
    marginRight: 20,
  },
  image: {
    width: rw(30),
    height: rw(30),
    borderRadius: 0.5,
  },
  detailsContainer: {
    // flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,

    // borderBottomWidth: 0.2,
    // borderBottomColor: "gray",
    width: width - 90,
  },
  descriptiveText: {
    color: "#8f8f8f",
    fontSize: 10,
    maxWidth: 120,
  },
  dotIcon: {
    width,
  },
  titleContainer: {},
  title: {
    color: "white",
    maxWidth: 120,
  },
  artistsContainer: {
    // marginTop: 5,
  },
  artists: {
    color: "gray",
    fontSize: 12,

    maxWidth: responsiveWidth(65),
  },
});
