import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import Animated, { BounceOut, FadeIn, FadeOut } from "react-native-reanimated";

// @Backend
import {
  searchTracks,
  searchVideos,
  searchQuery,
  VerdictResults,
} from "../../Controllers/BackEnd/src/index";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

// @Fonts
import { useInitialFonts, Fonts } from "../../Hooks";

// @Components
import {
  DisplayList,
  ListItem,
  ListTitle,
  TextInputComponent,
  TopResult,
  VerticalTracks,
  Artists,
  AutoSuggestions,
  YoutubeCarousel,
  MusicSheet,
} from "../../Components/index";
import LottieLoading from "../../Components/LottieLoading/LottieLoading";

export default function SearchResults(
  props: NativeStackHeaderProps
): JSX.Element & React.ReactNode {
  const params = props.route.params as any;
  const query = params?.query as string;

  const [results, setResults] = useState<VerdictResults>();
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [searchInputQuery, setSearchQuery] = useState<string>("");
  const FontLoaded = useInitialFonts();
  const { width } = Dimensions.get("window");
  useEffect(() => {
    const fetchQuery = async () => {
      const response = await searchQuery(query, 0);

      setResults(response);
    };
    fetchQuery();
  }, []);
  const onPress = async (query) => {
    setInput("");
    setResults(undefined);
    setSearchQuery(query === "" ? input : query);
    const response = await searchQuery(input, 0);
    setResults(response);
  };

  return (
    <Fragment>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: "black", flex: 1 }}
      >
        <SafeAreaView style={{}}>
          <View style={styles.textInputContainer}>
            <TextInputComponent
              onChange={(text) => setInput(text)}
              onClearPress={() => {}}
              onPress={onPress}
              onSubmitEditing={onPress}
            />
          </View>

          {input !== "" ? null : !results && !results?.songs?.length ? (
            <LottieLoading />
          ) : (
            <Fragment>
              <View style={styles.resultTextContainer}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    fontFamily: FontLoaded ? Fonts.Circular : null,
                  }}
                >
                  Showing results for{" "}
                  <Text
                    style={{
                      fontFamily: FontLoaded ? Fonts.Circular : null,
                      color: "white",
                    }}
                  >
                    "{!searchInputQuery ? query : searchInputQuery}"
                  </Text>
                </Text>
              </View>
              <View style={styles.listTitleContainer}>
                <ListTitle
                  title="Top result"
                  fontFamily={FontLoaded ? Fonts.Circular : null}
                  additionalTitleStyles={{ fontSize: 25 }}
                />

                {!results ? (
                  <Text>Loading</Text>
                ) : (
                  <TopResult content={results?.topResults} />
                )}
              </View>

              <View style={styles.listTitleContainer}>
                <ListTitle
                  title="Songs"
                  onArrowPress={() =>
                    props.navigation.navigate("DisplayList", {
                      keyTitle: "Songs",
                      data: results.songs,
                    })
                  }
                  fontFamily={FontLoaded ? Fonts.Circular : null}
                  additionalTitleStyles={{ fontSize: 25 }}
                />
                <View style={{}}>
                  {!results?.songs.length ? (
                    <Text>Loading</Text>
                  ) : (
                    <View style={{}}>
                      <DisplayList
                        chunkSize={4}
                        array={results?.songs}
                        keyExtractor={(key) => key._id}
                        renderItem={({ ...item }) => (
                          <View
                            style={{
                              maxWidth: width - 30,
                            }}
                          >
                            <VerticalTracks
                              coverArt={item.coverArt}
                              playCount={"0"}
                              title={item.name}
                              artists={item.artists}
                              font={FontLoaded ? Fonts.CircularNormal : null}
                            />
                          </View>
                        )}
                      />
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.listTitleContainer}>
                <ListTitle
                  onArrowPress={() =>
                    props.navigation.navigate("DisplayList", {
                      keyTitle: "Albums",
                      data: results.albums,
                    })
                  }
                  title="Albums"
                  includesArrow
                  fontFamily={FontLoaded ? Fonts.Circular : null}
                  additionalTitleStyles={{ fontSize: 25 }}
                />

                <View>
                  <FlatList
                    horizontal={true}
                    data={results?.albums}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <ListItem
                        onPress={() =>
                          props.navigation.navigate("DetailsScreen", {
                            type: "Album",
                            data: item._id,
                          })
                        }
                        _length={results.albums.length}
                        _index={index}
                        name={item.name}
                        image={item.coverArt}
                        artists={item.artists}
                        year={item.date.toString()}
                      />
                    )}
                  />
                </View>
              </View>

              <View
                style={{
                  top: 10,
                  marginLeft: 25,
                }}
              >
                <ListTitle
                  includesArrow
                  onArrowPress={() =>
                    props.navigation.navigate("DisplayList", {
                      keyTitle: "Videos",
                      data: results.videos,
                    })
                  }
                  title="Videos"
                  fontFamily={FontLoaded ? Fonts.Circular : null}
                  additionalTitleStyles={{ fontSize: 25 }}
                />
              </View>
              <YoutubeCarousel data={results?.videos} />

              <View style={styles.listTitleContainer}>
                <ListTitle
                  title="Artists"
                  onArrowPress={() =>
                    props.navigation.navigate("DisplayList", {
                      keyTitle: "Artists",
                      data: results.artists,
                    })
                  }
                  includesArrow
                  fontFamily={FontLoaded ? Fonts.Circular : null}
                  additionalTitleStyles={{ fontSize: 25 }}
                />

                <FlatList
                  horizontal
                  data={results?.artists}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <Artists
                      _onPress={() =>
                        props.navigation.navigate("DetailsScreen", {
                          type: "Artist",
                          data: item._id,
                        })
                      }
                      _length={results.artists.length}
                      _index={index}
                      _id={item._id}
                      name={item.name}
                      image={item.image}
                      verified={item.verified}
                    />
                  )}
                />
              </View>
            </Fragment>
          )}
        </SafeAreaView>
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  resultTextContainer: {
    marginLeft: 25,
    marginTop: 10,
  },
  listTitleContainer: {
    marginLeft: 25,
    marginTop: 20,
  },
});
