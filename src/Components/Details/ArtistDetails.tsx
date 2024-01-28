import { View, Text, Dimensions, FlatList } from "react-native";
import React, { Fragment, useState } from "react";
import { useInitialFonts, Fonts } from "../../Hooks";
import { hasDynamicIsland } from "../../Helpers";
import { ArtistStyles as styles } from "../../StyleSheets/Screens/Artist";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../Constants";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import {
  HeaderNavigation,
  HeaderTopNavBar,
  HeaderTopNavigationBar,
} from "../Header";
import LatestRelease from "../LatestRelease/LatestRelease";

import AlbumFlatListRendererProps from "../AlbumFlatList/AlbumFlatList";
import ListTitle from "../ListTitle/ListTitle";
import MusicFlatList from "../MusicFlatList/MusicFlatList";
import DisplayList from "../DisplayList/DisplayList";
import VerticalTracks from "../VerticalTracks/VerticalTracks";
import VideoFlatList from "../VideoFlatList/VideoFlatList";
import CarouselPagination from "../CarouselPagination/CarouselPagination";
import Carousel, { Pagination } from "react-native-snap-carousel";
import * as Constants from "../../Constants/index";
import { ArtistVideo, VideoResults } from "../../Controllers/BackEnd/src";
import ArtistsAboutMe from "../ArtistsAboutMe/ArtistsAboutMe";

type Props = {
  data: any;
  channelName: string;
  onBackPress: () => any | void;
  videos?: ArtistVideo[];
};
export const ArtistDetails = ({
  data,
  onBackPress,
  videos,
  channelName,
}: Props) => {
  const FontLoaded: boolean = useInitialFonts();

  const dynamicIsland = hasDynamicIsland();
  const { width } = Dimensions.get("window");
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
              onBackPress={onBackPress}
              font={FontLoaded ? "CircularNormal" : null}
            />
          }
          HeaderComponent={
            <HeaderTopNavigationBar
              font={FontLoaded ? "Circular" : null}
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
              onBackPress={onBackPress}
              externalStarStyles={{
                bottom: 20,
                left: 0,
              }}
              star={true}
            />
          }
          headerImage={{
            uri: !data?.header ? data?.image : data.header,
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
            {data?.latest ? (
              <LatestRelease
                {...data.latest}
                font={FontLoaded ? "CircularNormal" : null}
              />
            ) : null}

            <View
              style={{
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              <ListTitle
                fontFamily={FontLoaded ? "Circular" : null}
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
                keyExtractor={(key, index) => index.toString()}
                renderItem={(item: any, index) => {
                  return (
                    <Fragment>
                      <VerticalTracks
                        font={FontLoaded ? "CircularNormal" : null}
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
                fontFamily={FontLoaded ? "Circular" : null}
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
                      fontFamily={FontLoaded ? "CircularNormal" : null}
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
                fontFamily={FontLoaded ? "Circular" : null}
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
                    <MusicFlatList
                      {...item}
                      copyright={item.copyright.toString() as string}
                      label={item.label.toString() as string}
                      image={item.coverArt}
                      _id={item?.id}
                      _font={FontLoaded ? Fonts.CircularNormal : null}
                    />
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
                fontFamily={FontLoaded ? "Circular" : null}
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
                renderItem={({ item, index }: any) => {
                  return (
                    <VideoFlatList
                      fontFamily={FontLoaded ? Fonts.CircularNormal : null}
                      thumbnailURL={item.thumbnail}
                      title={item.title}
                      channel={{
                        name: channelName,
                      }}
                      exactYear={"YouTube"}
                      {...(item as any)}
                    />
                  );
                }}
              />
            </View>
          </View>

          <ArtistsAboutMe
            _font={FontLoaded ? "Circular" : null}
            _descriptiveFont={FontLoaded ? "CircularNormal" : null}
            monthlyListeners={data.listeners}
            worldRank={data.worldRank}
            cities={data.topCities}
            gallery={data.gallery}
            about={
              !data?.biography ? `No about me for the artist` : data.biography
            }
            name={data.name}
            externals={data.externalLinks}
            relatedArtists={data.relatedArtists}
          />
        </AnimatedScrollView>
      </LinearGradient>
    </Fragment>
  );
};
