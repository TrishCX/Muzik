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
export const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 0,
  },
  title: {
    color: "white",
    maxWidth: 120,
    fontSize: rf(1.5),
  },
  imageContainer: {},

  image: {
    width: rw(25),
    height: rw(25),
    borderRadius: 1,
  },
  descriptiveContainer: {
    flexDirection: "row",
  },
  descriptiveText: {
    color: "#808080",
    fontSize: 10,

    maxWidth: 120,
  },
});
