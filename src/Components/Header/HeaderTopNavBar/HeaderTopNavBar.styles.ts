import { StyleSheet, Dimensions } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    marginLeft: 10,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    backgroundColor: "#212121",
    borderRadius: 90,
    marginTop: 20,
  },
});
