import { View, FlatList, Text, Dimensions, Image } from "react-native";
import React, { Fragment } from "react";
import { ArtistAboutMeStyles as styles } from "./ArtistAboutMe.styles";
import ListTitle from "../ListTitle/ListTitle";
import { CarouselInitialViewContainerStyles } from "../../Constants/index";
import Carousel from "react-native-snap-carousel";
import ArtistsRelations from "../ArtistsRelations/ArtistsRelations";
import ReadMore from "@fawazahmed/react-native-read-more";
import cheerio from "react-native-cheerio";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";

// @types
type TopCities = {
  city: string;
  country: string;
  region: string;
  totalListeners: number;
  relatedArtists?: RelatedArtists[];
};

type RelatedArtists = {
  id: string;
  name: string;

  image: string;
  uri: string;
};
type Externals = {
  name?: string;
  url?: string;
};
type ArtistsAboutMeProps = {
  about: string;
  name: string;
  monthlyListeners: number;
  gallery?: string[];
  cities?: TopCities[];
  worldRank?: number;
  relatedArtists?: RelatedArtists[];
  externals?: Externals[];
};

const ArtistsAboutMe: React.FC<ArtistsAboutMeProps> &
  React.FunctionComponent<ArtistsAboutMeProps> = ({
  about,
  gallery,
  cities,
  monthlyListeners,
  worldRank,
  name,
  relatedArtists,
  externals,
}: ArtistsAboutMeProps): JSX.Element => {
  const { width, height } = Dimensions.get("window");

  const withoutHtml: string = about.replace(/<[^>]*>/g, "");

  const cleanAbout: string = withoutHtml.replace(/[^\w\s.,]/g, "");

  return (
    <Fragment>
      <View
        style={{
          ...styles.container,
        }}
      >
        <View style={{ ...CarouselInitialViewContainerStyles, marginTop: 30 }}>
          <Carousel
            data={gallery}
            layout="tinder"
            keyExtractor={(_key, index) => index.toString()}
            itemWidth={width}
            loop={false}
            autoplay={false}
            sliderWidth={width - 100}
            renderItem={({ item }) => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image source={{ uri: item }} style={styles.galleryImage} />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.titleContainer}>
          <ListTitle
            additionalTitleStyles={{
              fontSize: 20,
            }}
            title="About"
          />
        </View>

        <View style={styles.biographyContainer}>
          <ReadMore
            seeMoreStyle={styles.seeMoreStyles}
            seeLessStyle={styles.seeLessStyles}
            style={{
              ...styles.biography,
            }}
          >
            {cleanAbout}
          </ReadMore>
        </View>

        <View
          style={{
            ...styles.statsContainer,
          }}
        >
          <Text style={{ ...styles.monthlyListenersText }}>
            {monthlyListeners.toLocaleString()}
          </Text>
          <Text
            style={{
              ...styles.listenersText,
            }}
          >
            Monthly Listeners
          </Text>
        </View>

        <FlatList
          data={cities}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.statsContainer}>
                <View style={styles.statsDescriptiveContainer}>
                  <Text style={{ ...styles.countriesText }}>
                    {item.city}, {item.country}
                  </Text>
                  <View style={styles.listenersContainer}>
                    <Text
                      style={{
                        ...styles.listenersText,
                      }}
                    >
                      {item.totalListeners.toLocaleString()} listeners
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <View style={styles.titleContainer}>
          <ListTitle
            additionalTitleStyles={{
              fontSize: 20,
            }}
            title={`Similar to ${name}`}
            includesArrow
          />
        </View>

        <FlatList
          horizontal={true}
          data={relatedArtists}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <ArtistsRelations {...item} />}
        />
      </View>
    </Fragment>
  );
};

export default ArtistsAboutMe;
