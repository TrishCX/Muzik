import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  absoluteIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#121212",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -10,
    top: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    color: "white",
    maxWidth: 100,
    fontSize: 12,
  },
  artists: {
    color: "gray",
    fontSize: 10,
    maxWidth: 110,
  },
});

export default styles;
