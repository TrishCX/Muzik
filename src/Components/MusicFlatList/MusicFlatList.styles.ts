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
  container: {
    marginBottom: 40,
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: rw(30),
    height: rw(30),
    borderRadius: 5,
  },
  titleContentContainer: {
    marginTop: 5,
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    maxWidth: 100,
    fontSize: 12,
    fontWeight: "500",
  },
  descriptiveContainer: {
    marginTop: 2,
  },
  descriptiveText: {
    fontSize: 11,
    color: "#616161",
    maxWidth: 120,
  },
});
