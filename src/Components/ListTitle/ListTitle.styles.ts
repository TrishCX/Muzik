import { StyleSheet } from "react-native";

export const ListTitleStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyles: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  iconStyles: {
    top: 0.5,
  },
  imageContainer: {
    marginLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  detailsContainer: {
    flexDirection: "column",
  },
  descriptiveTextContainer: {
    marginLeft: 15,
  },
  descriptiveText: {
    color: "#808080",
    fontSize: 10,
    // maxWidth: 150,
  },
});
