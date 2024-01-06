import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { HomeStyleSheet as styles } from "../../StyleSheets/Screens/HomeScreen";
import { artist } from "../../artist";
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
} from "../../Components";
import Carousel, { Pagination } from "react-native-snap-carousel";
import * as Constants from "../../Constants/index";

import { chunkArray, hasDynamicIsland } from "../../Helpers/index";
import { LinearGradient } from "expo-linear-gradient";

import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import { Colors } from "../../Constants/index";
import { VerticalTracks } from "../../Components/index";
import { useFonts } from "expo-font";
import CarouselPagination from "../../Components/CarouselPagination/CarouselPagination";

export default function HomeScreen() {
  const data = artist.data;
  const dynamicIsland = hasDynamicIsland();
  const { width, height } = Dimensions.get("window");

  const [fontLoaded] = useFonts({
    Josefin: require("../../Fonts/Josefin_Sans/static/JosefinSans-Medium.ttf"),
    Gotham: require("../../Fonts/Spotify-Font/Gotham-Bold.otf"),
    GothamMedium: require("../../Fonts/Spotify-Font/GothamBold.ttf"),
    Lexend: require("../../Fonts/Lexend_Deca/static/LexendDeca-Regular.ttf"),
    Mulish: require("../../Fonts/Mulish/static/Mulish-Bold.ttf"),
    Metropolis: require("../../Fonts/Metropolis/Metropolis-SemiBold.otf"),
  });
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const HeaderComponent = (): JSX.Element => {
    return (
      <Fragment>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            bottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              ...styles.upperStarView,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Ionicons
                style={{
                  ...styles.iconStyle,
                }}
                name="ios-chevron-back"
                size={22}
                color="white"
              />
            </View>
            <View
              style={{
                marginRight: 20,
                shadowColor: "#171717",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons
                style={{
                  ...styles.iconStyle,
                }}
                name="star-outline"
                size={22}
                color="white"
              />
            </View>
          </View>
        </View>

        <View style={styles.headerContainer}>
          <View
            style={{
              marginLeft: 10,
              left: 20,
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                ...styles.artistName,
                fontFamily: fontLoaded ? "Gotham" : "GothamMedium",
              }}
            >
              {data.name}
            </Text>
          </View>

          <View style={styles.playButton}>
            <Feather name="play" size={20} color="black" />
          </View>
        </View>
      </Fragment>
    );
  };

  const HeaderNavigationBar = (): JSX.Element => {
    return (
      <Fragment>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,

            backgroundColor: "black",
          }}
        >
          <SafeAreaView
            style={{
              flexDirection: "row",
              ...styles.upperStarView,
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginLeft: 35, marginTop: dynamicIsland ? 0 : 20 }}>
              <Ionicons name="ios-chevron-back" size={20} color="#c2c2c2" />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: dynamicIsland ? 0 : 20,
                flexDirection: "row",
              }}
            >
              <View style={{ marginRight: 10 }}>
                <Image
                  source={{
                    uri: data.image,
                  }}
                  style={styles.headerTopImage}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {data.name}
              </Text>
            </View>
            <View
              style={{ marginRight: 35, marginTop: dynamicIsland ? 0 : 20 }}
            >
              <Ionicons name="star-outline" size={20} color="#c2c2c2" />
            </View>
          </SafeAreaView>
        </View>
      </Fragment>
    );
  };

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
            <>
              <HeaderNavigationBar />
            </>
          }
          HeaderComponent={
            <>
              <HeaderComponent />
            </>
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
            <View
              style={{
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              <ListTitle
                fontFamily={null}
                title={"Popular"}
                includesArrow={true}
              />
            </View>
            <View
              style={{
                left: 10,
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
              <ListTitle fontFamily={null} title={`Essentials Releases`} />
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
                      fontFamily={fontLoaded ? "Lexend" : null}
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
              marginTop: 0,
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <ListTitle title={`Music Videos`} includesArrow />
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
                        fontFamily={fontLoaded ? "Metropolis" : null}
                        {...item}
                      />
                    </Fragment>
                  );
                }}
              />
            </View>
          </View>
          <ArtistsAboutMe
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
        translucent={true}
        barStyle="default"
        backgroundColor={"transparent"}
      />
    </Fragment>
  );
}
