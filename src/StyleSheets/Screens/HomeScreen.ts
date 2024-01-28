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
  container: {
    // flex: 1,
  },
  additionalTitleStyles: {
    marginLeft: 15,
  },
});
