import { StyleSheet, Dimensions } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 15,
    alignItems: "flex-end",
    flexDirection: "row",
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
});
