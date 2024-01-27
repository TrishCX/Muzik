import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { Fragment, useLayoutEffect } from "react";
import { IAlbum } from "../../Controllers/BackEnd/src/Parsers";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import { useInitialFonts, Fonts } from "../../Hooks";
import {
  convertMillisecondsToLabel,
  hasDynamicIsland,
  splitString,
} from "../../Helpers/index";
import { LeftButton, RightButton, SwipeView } from "easy-swipe-view";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import Ripple from "react-native-material-ripple";
import { HeaderNavigation, HeaderTopNavBar } from "../Header";
type Props = {
  content: IAlbum;
};
export const AlbumDetails: React.FC<Props> & React.FunctionComponent<Props> = ({
  content,
}: Props): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();

  const inputDate = new Date(content.initialDate);
  const formattedDate = inputDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const HeaderTopImage = () => (
    <View style={style.imageContainer}>
      <Image source={{ uri: content.image }} style={style.image} />
    </View>
  );
  const dynamicIsland = hasDynamicIsland();
  const name = splitString(content.name);

  return (
    <AnimatedScrollView
      TopNavBarComponent={
        <HeaderNavigation
          includeImage={false}
          additionalTitleStyle={{ left: 5 }}
          additionalContainerStyle={{
            bottom: 5,
          }}
          dynamicIsland={dynamicIsland}
          font={FontLoaded ? Fonts.CircularNormal : null}
          image={content.image}
          title={content.name}
        />
      }
      HeaderNavbarComponent={
        <HeaderTopNavBar
          externalBackStyles={{
            bottom: 20,
            right: 10,
          }}
          star={true}
          externalStarStyles={{
            bottom: 20,
            left: 0,
          }}
        />
      }
      HeaderComponent={<HeaderTopImage />}
    >
      <View style={style.container}>
        <View style={style.descriptiveContentContainer}>
          {name.map((n, i) => (
            <View style={{ flexDirection: "column" }}>
              <Text
                key={i}
                style={{
                  ...style.text,
                  fontFamily: FontLoaded ? Fonts.Circular : null,
                }}
              >
                {n}
              </Text>
            </View>
          ))}

          <View style={style.artistContentContainer}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: content.artists[0].image }}
                style={style.artistImage}
              />
              <Text
                style={{
                  ...style.descriptiveText,
                  fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                }}
              >
                {content.artists.map((artist) => artist.name).join(", ")}
                ・Album・{content.date}
              </Text>
            </View>
          </View>
        </View>

        <View style={style.buttonRowContainer}>
          <View style={style.iconsContainer}>
            <Octicons name="download" size={20} color="white" />
          </View>
          <View style={style.iconsContainer}>
            <MaterialIcons name="my-library-add" size={20} color="white" />
          </View>

          <View style={style.playButtonContainer}>
            <MaterialIcons name="play-arrow" size={30} color="black" />
          </View>
          <View style={style.iconsContainer}>
            <Ionicons name="share-outline" size={20} color="white" />
          </View>
          <View style={style.iconsContainer}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color="white"
            />
          </View>
        </View>
      </View>
      <FlatList
        data={content.tracks}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Fragment>
              <GestureHandlerRootView>
                <Ripple
                  rippleDuration={400}
                  rippleColor="gray"
                  rippleOpacity={0.3}
                >
                  <View
                    style={{
                      ...style._container,
                      marginBottom:
                        index === content.tracks.length - 1 ? 40 : 0,
                    }}
                  >
                    <View style={style.contentContainer}>
                      <View
                        style={{
                          ...style.numbers,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {index + 1}.
                        </Text>
                      </View>

                      <View>
                        <Image
                          source={{
                            uri: content.image,
                          }}
                          style={style._image}
                        />
                      </View>

                      <View style={style.detailsContainer}>
                        <Text
                          numberOfLines={2}
                          style={{
                            ...style.name,
                            maxWidth: 200,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.name}
                        </Text>

                        <Text
                          numberOfLines={1}
                          style={{
                            ...style.albumName,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.artists.map((artist) => artist.name).join(", ")}
                          ・
                          {convertMillisecondsToLabel(
                            item.durationMilliSeconds
                          )}
                        </Text>
                      </View>
                    </View>
                    <View style={style.icon}>
                      <MaterialCommunityIcons
                        name="dots-vertical"
                        size={22}
                        color="white"
                      />
                    </View>
                  </View>
                </Ripple>
              </GestureHandlerRootView>
            </Fragment>
          );
        }}
      />

      <View style={style.copyRightContainer}>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontFamily: FontLoaded ? Fonts.Circular : null,
          }}
        >
          {formattedDate}
        </Text>

        <Text
          style={{
            ...style.copyRightText,
            fontFamily: FontLoaded ? Fonts.CircularNormal : null,
          }}
        >
          {content.copyrights.map((copyright) => `${copyright.text}`)}
        </Text>
      </View>
    </AnimatedScrollView>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
  descriptiveContentContainer: {},
  buttonRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: 280,
  },
  image: {
    width: 250,
    height: 250,
  },
  copyRightContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  copyRightText: {
    fontSize: 12,
    color: "#b3b3b3",
  },
  text: {
    color: "white",
    fontSize: 24,
    maxWidth: 300,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  playButtonContainer: {
    width: 65,
    height: 65,
    backgroundColor: "white",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
  iconsContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#0f0f0f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  descriptiveText: {
    color: "white",
    fontSize: 13,
  },
  artistImage: {
    width: 30,
    height: 30,
    backgroundColor: "red",
  },
  artistContentContainer: {
    flexDirection: "row",
  },

  _container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flexDirection: "row",
  },
  _image: {
    width: 60,
    height: 60,
  },
  numbers: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 10,
    left: 1,
  },
  detailsContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  name: { color: "white" },
  albumName: { color: "gray", marginTop: 0, fontSize: 12, maxWidth: 200 },
  icon: {
    marginRight: 20,
    justifyContent: "center",
  },
});
