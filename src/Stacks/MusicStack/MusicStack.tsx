import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ArtistScreen, Search, Profile } from "../../Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from "react-native-animated-nav-tab-bar";

// @Screens-Stack
import { SearchStack } from "../Screens/SearchStack";
import { MusicSheet } from "../../Components";
import EntryStack from "../EntryStack/EntryStack";

const { Navigator, Screen } = AnimatedTabBarNavigator();

export default function MusicStack() {
  return (
    <>
      <Navigator
        appearance={{
          tabBarBackground: "#141414",
          shadow: true,
          floating: false,
          whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
          dotSize: DotSize.SMALL,
        }}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "#858585",
          activeBackgroundColor: "white",
        }}
        screenOptions={{
          headerShown: true,
        }}
      >
        <Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="home" size={24} color={color as any} />
            ),
          }}
          name="Home"
          component={EntryStack}
        />

        <Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="search1" size={24} color={color as any} />
            ),
          }}
        />
        <Screen
          name="Profile"
          component={ArtistScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="music-box-multiple-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
