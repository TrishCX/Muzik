import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Points } from "../../Constants";
import { useFonts } from "expo-font";

export function LandingScreen() {
  const [fontLoaded, error] = useFonts({
    GothamBold: require("../../Fonts/Spotify-Font/Gotham-Black.otf"),
  });

  return (
    <React.Fragment>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        colors={Colors.backgroundColors}
        start={{
          ...Points.start,
        }}
        end={{
          ...Points.end,
        }}
      >
        <Text
          style={{
            fontFamily: fontLoaded ? "GothamBold" : null,
            fontSize: 30,
            color: "#fff",
          }}
        >
          This is a test
        </Text>
      </LinearGradient>
      <StatusBar showHideTransition="fade" hidden />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
