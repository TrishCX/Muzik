import { View, Text } from "react-native";
import React from "react";

type LoadingProps = {
  loading: boolean;
};

export const Loading: React.FC<LoadingProps> &
  React.FunctionComponent<LoadingProps> = (): JSX.Element & React.ReactNode => {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
};
