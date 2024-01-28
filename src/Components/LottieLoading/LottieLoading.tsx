import { View, Text, Dimensions } from "react-native";
import React, { Fragment } from "react";
import LottieView from "lottie-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export type LottieLoadingProps = {
  loading?: boolean;
};

const LottieLoading: React.FC<LottieLoadingProps> &
  React.FunctionComponent<LottieLoadingProps> = ({
  ...props
}: LottieLoadingProps): React.ReactNode & React.JSX.Element => {
  const { width, height } = Dimensions.get("window");

  return (
    <Fragment>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <LottieView
          source={{
            uri: "https://lottie.host/51d58d31-2d7a-4c2e-beb6-dd9f6cb1008f/N0vSWlFQNF.json",
          }}
          autoPlay
          loop
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(80),
          }}
        />
      </View>
    </Fragment>
  );
};

export default LottieLoading;
