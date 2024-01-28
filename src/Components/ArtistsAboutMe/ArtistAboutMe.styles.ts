import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const rw = responsiveWidth;
const rh = responsiveHeight;

export const ArtistAboutMeStyles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 40,
    marginBottom: 0,
    borderRadius: 0,
    backgroundColor: "#1a1a1a",
    flex: 1,
  },
  galleryImage: {
    width: rw(90),
    height: rh(50),
  },
  titleContainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  descriptiveContentContainer: {},
  biographyContainer: {
    margin: 10,
    marginLeft: 15,
  },
  biography: {
    maxWidth: width - 30,
    color: "white",
  },
  statsContainer: {
    margin: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  countriesText: {
    color: "white",
    fontWeight: "bold",
  },
  statsDescriptiveContainer: {
    flexDirection: "column",
  },
  monthlyListenersText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  listenersContainer: {
    marginTop: 5,
  },
  listenersText: {
    color: "#828282",
  },
  seeMoreStyles: {
    color: "white",
    fontWeight: "bold",
  },
  seeLessStyles: {
    color: "white",

    fontWeight: "bold",
  },
});
