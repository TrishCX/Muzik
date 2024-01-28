import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./HomeHeader.styles";

// Hooks
import { useInitialFonts, Fonts } from "../../../Hooks";

type HomeHeaderProps = {
  title: string;
  subtitle?: string;
};

export const HomeHeader: React.FC<HomeHeaderProps> &
  React.FunctionComponent<HomeHeaderProps> = ({
  ...props
}: HomeHeaderProps): JSX.Element & React.ReactNode => {
  const fontLoaded = useInitialFonts();

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <Text
            style={{
              ...styles.title,
              fontFamily: fontLoaded ? Fonts.Circular : null,
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              ...styles.subtitle,
              fontFamily: fontLoaded ? Fonts.CircularNormal : null,
            }}
          >
            {props.subtitle}
          </Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};
