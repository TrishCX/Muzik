import { StyleSheet, Dimensions } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
const { width } = Dimensions.get("window");
export const VerticalTrackStyleSheet = StyleSheet.create({
  container: {
    margin: 5,
  },
  contentContainer: {
    flexDirection: "row",
    marginRight: 20,
  },
  coverArt: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  detailsContainer: {
    // flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,

    // borderBottomWidth: 0.2,
    // borderBottomColor: "gray",
    width: width - 90,
  },
  dotIcon: {
    width,
  },
  titleContainer: {},
  title: {
    color: "white",
    maxWidth: responsiveWidth(60),
  },
  artistsContainer: {
    // marginTop: 5,
  },
  artists: {
    color: "gray",
    fontSize: 12,

    maxWidth: responsiveWidth(60),
  },
});
