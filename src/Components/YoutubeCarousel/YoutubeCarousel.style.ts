import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

const rw = (w: number) => responsiveWidth(w);
const rh = (h: number) => responsiveHeight(h);
const rf = (f: number) => responsiveFontSize(f);

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // backgroundColor: "red",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: 200,
  },
  image: {
    height: "100%",
    width: "90%",
    borderRadius: 10,
    aspectRatio: 16 / 9,
  },
  descriptiveContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    color: "#fff" || "white",
    fontSize: 14,
    maxWidth: width - 100,
  },
  detailsContainer: {
    marginTop: 5,
  },
  descriptiveText: {
    color: "white",
    fontSize: 12,
  },
});
