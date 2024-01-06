import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../Screens";
const { Navigator, Screen } = createNativeStackNavigator();

export default function MusicStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
}
