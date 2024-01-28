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

export const LatestReleaseStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  icon: {},
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  contentContainer: {
    flexDirection: "row",
  },
  descriptiveContainer: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "column",
  },
  yearStyles: {
    fontSize: 10,
    color: "gray",
    fontWeight: "600",
  },
  titleContainer: {
    marginTop: 2,
  },
  title: {
    fontSize: 12,
    color: "white",
    maxWidth: width - 200,
  },
});
