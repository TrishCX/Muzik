import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const SearchStyles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#0f0f0f",
    borderRadius: 10,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5.0,

    marginBottom: 10,
    width: width - 50,
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  placeHolderTextColor: {
    color: "#c4c4c4",
  },
});
