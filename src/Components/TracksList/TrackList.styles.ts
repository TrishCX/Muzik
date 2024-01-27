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
  additionalTitleStyles: {
    marginLeft: 15,
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 5,
  },
  descriptiveContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  titleContainer: {
    marginTop: 10,
  },
});
