import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { useInitialFonts, Fonts } from "../../Hooks";
import { styles } from "./styles";

export const NoResultsComponent = (): JSX.Element &
  React.ReactNode &
  React.ReactElement => {
  const FontLoaded: boolean = useInitialFonts();

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: FontLoaded ? Fonts.Circular : null,
                fontSize: 40,
              }}
            >
              You're all
            </Text>

            <Text
              style={{
                color: "white",
                fontFamily: FontLoaded ? Fonts.Circular : null,
                fontSize: 30,
              }}
            >
              Caught up
            </Text>
          </View>

          <View style={styles.smileContainer}>
            <Text
              style={{
                color: "white",
                fontFamily: FontLoaded ? Fonts.Circular : null,
                fontSize: 45,
              }}
            >{`:(`}</Text>
          </View>
        </View>

        <View style={styles.descriptiveContainer}>
          <Text
            style={{
              color: "#bdbdbd",
              fontSize: 12,
              fontFamily: FontLoaded ? Fonts.CircularNormal : null,
            }}
          >
            Maybe try going for some other query?
          </Text>
        </View>
      </View>
    </Fragment>
  );
};
