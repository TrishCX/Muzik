import { StyleSheet, Dimensions } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  iconsContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
    width: responsiveWidth(90),
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    color: "white",
    fontSize: 13.5,
  },
});
