import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Search,
  SearchResults,
  DisplaySongs,
  DetailsScreen,
} from "../../../Screens";
// @Events
import { EventRegister } from "react-native-event-listeners";
// @Hooks
import { useInitialFonts, Fonts } from "../../../Hooks";

const { Navigator, Screen } = createNativeStackNavigator();

export const SearchStack = (): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SearchScreen" component={Search} options={{}} />
      <Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          animation: "ios",
        }}
      />

      <Screen name="DetailsScreen" component={DetailsScreen} options={{}} />

      <Screen
        name="DisplayList"
        component={DisplaySongs}
        options={({ route, navigation }: any) => ({
          headerShown: true,
          headerLargeTitle: true,
          title: route.params?.keyTitle,
          gestureEnabled: true,
          presentation: "formSheet",
          animation: "ios",
          headerShadowVisible: true,
          headerTransparent: true,
          autoHideHomeIndicator: true,
          animationTypeForReplace: "push",
          headerSearchBarOptions: {
            placeholder: "Search",
            disableBackButtonOverride: true,
            obscureBackground: false,
            hideNavigationBar: true,
            textColor: "white",
            onChangeText: (text) =>
              EventRegister.emit("ChangeText", text.nativeEvent.text),
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: FontLoaded
              ? Fonts.CircularNormal
              : (null as unknown as string),
          },
          headerTitleAlign: "center",
        })}
      />
    </Navigator>
  );
};
