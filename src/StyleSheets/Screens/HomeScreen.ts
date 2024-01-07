import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const rh = responsiveHeight;
const rw = responsiveWidth;

export const HomeStyleSheet = StyleSheet.create({
  headerContentContainer: {},
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 15,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  headerTopImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: "column",
    marginRight: 10,
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  upperStarView: {
    // alignItems: "flex-end",
    width,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 45,
    height: 45,
    borderRadius: 100,

    shadowColor: "#1f1f1f",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 25,
    marginRight: 25,
    right: 15,
  },
  artistName: {
    color: "white",
    fontSize: responsiveFontSize(5),
    fontWeight: "bold",
    maxWidth: width - 80,
  },
  imageStyle: {
    height: responsiveHeight(50),
  },
  iconStyle: {},
});
