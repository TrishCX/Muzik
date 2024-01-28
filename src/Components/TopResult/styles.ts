import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  descriptiveContentContainer: {
    marginTop: 2,
  },
  name: {
    maxWidth: width - 200,
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    bottom: -25,
    marginTop: 20,
  },
  icon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  boxContainer: {
    width: width - 50,
    height: responsiveHeight(20),
    backgroundColor: "#171717",
    borderRadius: 10,
    marginTop: 10,
  },
  contentContainer: {
    justifyContent: "center",
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 0,
  },
  imageContainer: {
    marginTop: 15,
    marginLeft: 20,
  },
});

export default styles;
