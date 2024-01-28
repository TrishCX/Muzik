import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "../../Screens/OnBoarding/index";
import MusicStack from "../MusicStack/MusicStack";

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="Landing" component={LandingScreen} /> */}
      <Screen name="MusicStack" component={MusicStack} />
    </Navigator>
  );
}

const styles = StyleSheet.create({});
