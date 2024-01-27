import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 2,
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
