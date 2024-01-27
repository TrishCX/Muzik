import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  upperStarView: {
    width,
  },
  headerTopImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
