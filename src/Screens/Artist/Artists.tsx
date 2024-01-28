import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { artist } from "../../artist";
import { ArtistStyles as styles } from "../../StyleSheets/Screens/Artist";
import { videos } from "../../videos";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import { Feather, Ionicons } from "@expo/vector-icons";
import { getCredits } from "../../Controllers/BackEnd/src/index";

// @Components
import {
  DisplayList,
  ListTitle,
  AlbumFlatListRendererProps,
  VideoFlatList,
  ArtistsAboutMe,
  MusicFlatList,
  LatestRelease,
  HeaderTopNavBar,
  HeaderTopNavigationBar,
  HeaderNavigation,
} from "../../Components";

import Carousel, { Pagination } from "react-native-snap-carousel";
import * as Constants from "../../Constants/index";

import { chunkArray, hasDynamicIsland } from "../../Helpers/index";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "../../Constants/index";
import { VerticalTracks } from "../../Components/index";

import { useFonts } from "expo-font";
import CarouselPagination from "../../Components/CarouselPagination/CarouselPagination";

export default function Artists() {
  const data = artist.data;
  const dynamicIsland = hasDynamicIsland();
  const { width } = Dimensions.get("window");

  const [fontLoaded] = useFonts({
    Josefin: require("../../Fonts/Josefin_Sans/static/JosefinSans-Medium.ttf"),
    Gotham: require("../../Fonts/Spotify-Font/Gotham-Bold.otf"),
    GothamMedium: require("../../Fonts/Spotify-Font/GothamBold.ttf"),
    Lexend: require("../../Fonts/Lexend_Deca/static/LexendDeca-Regular.ttf"),
    Mulish: require("../../Fonts/Mulish/static/Mulish-Bold.ttf"),
    Metropolis: require("../../Fonts/Metropolis/Metropolis-SemiBold.otf"),
    Circular: require("../../Fonts/Circular/CircularSpotifyText-Bold.otf"),
    CircularNormal: require("../../Fonts/Circular/CircularSpotifyText-Medium.otf"),
  });
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <Fragment>
      <LinearGradient
        colors={Colors.backgroundColors}
        style={{
          backgroundColor: "#141414",
          flex: 1,
        }}
      >
        <AnimatedScrollView
          TopNavBarComponent={
            <HeaderNavigation
              dynamicIsland={dynamicIsland}
              image={data.image}
              includeImage={true}
              title={data.name}
              font={fontLoaded ? "CircularNormal" : null}
            />
          }
          HeaderComponent={
            <HeaderTopNavigationBar
              font={fontLoaded ? "Circular" : null}
              name={data.name}
              onIconPress={() => alert("pressed")}
            />
          }
          HeaderNavbarComponent={
            <HeaderTopNavBar
              externalBackStyles={{
                bottom: 20,
                right: 10,
              }}
              externalStarStyles={{
                bottom: 20,
                left: 0,
              }}
              star={true}
            />
          }
          headerImage={{
            uri: data.header,
          }}
          imageStyle={{
            ...styles.imageStyle,
          }}
          topBarHeight={dynamicIsland ? 100 : 90}
        >
          <View
            style={{
              marginTop: 30,
            }}
          >
            <LatestRelease
              {...data.latest}
              font={fontLoaded ? "CircularNormal" : null}
            />

            <View
              style={{
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              <ListTitle
                fontFamily={fontLoaded ? "Circular" : null}
                title={"Popular"}
                includesArrow={true}
              />
            </View>
            <View
              style={{
                left: 20,
              }}
            >
              <DisplayList
                array={data.topTracks}
                chunkSize={4}
                keyExtractor={(key) => key.id}
                renderItem={(item, index) => {
                  return (
                    <Fragment>
                      <VerticalTracks
                        font={fontLoaded ? "CircularNormal" : null}
                        title={item.title}
                        playCount={item.playCount}
                        coverArt={
                          item.albumOfTrack.coverArt.sources?.at(-1).url
                        }
                        artists={item.artists}
                      />
                    </Fragment>
                  );
                }}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
            }}
          >
            <View
              style={{
                marginBottom: 20,
                marginLeft: 10,
              }}
            >
              <ListTitle
                fontFamily={fontLoaded ? "Circular" : null}
                title={`Essentials Releases`}
              />
            </View>
            <View
              style={{
                ...Constants.CarouselInitialViewContainerStyles,
              }}
            >
              <Carousel
                horizontal
                onSnapToItem={(item) => setActiveSlide(item)}
                showsHorizontalScrollIndicator={false}
                data={data.popularAlbums}
                layout="default"
                keyExtractor={(_key, index) => index.toString()}
                loop={true}
                autoplay={true}
                sliderWidth={width - 100}
                itemWidth={width}
                contentContainerStyle={{}}
                renderItem={({ item, index }) => {
                  return (
                    <AlbumFlatListRendererProps
                      fontFamily={fontLoaded ? "CircularNormal" : null}
                      {...item}
                    />
                  );
                }}
              />
            </View>
            <CarouselPagination
              activeDotIndex={activeSlide}
              length={data.popularAlbums.length}
              inActiveDotStyles={{}}
            />
          </View>

          <View
            style={{
              marginTop: 20,
            }}
          >
            <View
              style={{
                marginBottom: 20,
                marginLeft: 10,
              }}
            >
              <ListTitle
                fontFamily={fontLoaded ? "Circular" : null}
                includesArrow={true}
                title={`Singles & EP`}
              />
            </View>

            <View
              style={{
                ...Constants.CarouselInitialViewContainerStyles,
                marginLeft: 10,
              }}
            >
              <FlatList
                data={data.singles}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                renderItem={({ item }) => {
                  return (
                    <Fragment>
                      <MusicFlatList
                        {...item}
                        copyright={item.copyright.toString() as string}
                        label={item.label.toString() as string}
                        image={item.coverArt}
                        _id={item?.id}
                        _font={fontLoaded ? "CircularNormal" : null}
                      />
                    </Fragment>
                  );
                }}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 0,
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <ListTitle
                title={`Music Videos`}
                fontFamily={fontLoaded ? "Circular" : null}
                includesArrow
              />
            </View>
            <View
              style={{
                ...Constants.CarouselInitialViewContainerStyles,
              }}
            >
              <Carousel
                horizontal
                // onSnapToItem={(item) => setActiveSlide(item)}
                showsHorizontalScrollIndicator={false}
                data={videos}
                layout="default"
                keyExtractor={(_key, index) => index.toString()}
                loop={false}
                autoplay={false}
                sliderWidth={width - 100}
                itemWidth={width}
                contentContainerStyle={{}}
                renderItem={({ item, index }) => {
                  return (
                    <Fragment>
                      <VideoFlatList
                        fontFamily={fontLoaded ? "CircularNormal" : null}
                        {...item}
                      />
                    </Fragment>
                  );
                }}
              />
            </View>
          </View>
          <ArtistsAboutMe
            _font={fontLoaded ? "Circular" : null}
            _descriptiveFont={fontLoaded ? "CircularNormal" : null}
            monthlyListeners={data.listeners}
            worldRank={data.worldRank}
            cities={data.topCities}
            gallery={data.gallery}
            about={data.biography}
            name={data.name}
            externals={data.externalLinks}
            relatedArtists={data.relatedArtists}
          />
        </AnimatedScrollView>
      </LinearGradient>
      <StatusBar
        animated={true}
        backgroundColor={"transparent"}
        barStyle="default"
        translucent={true}
        hidden={false}
      />
    </Fragment>
  );
}
