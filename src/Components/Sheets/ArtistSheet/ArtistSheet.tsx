import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { Fragment } from "react";

import { useInitialFonts, Fonts } from "../../../Hooks";
import Ripple from "react-native-material-ripple";
import { Feather } from "@expo/vector-icons";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";

import { NoResultsComponent } from "../../NoResultsComponent/NoResultsComponent";
import { Artists } from "../../../Controllers/BackEnd/src";

type Props = {
  props: Artists[];
};
const ArtistSheet: React.FC<Props> = ({ props }: Props): JSX.Element => {
  const FontLoaded = useInitialFonts();
  return (
    <Fragment>
      {props.length ? (
        <FlatList
          data={props}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (!item.name) return;

            return (
              <Fragment>
                <Ripple
                  rippleDuration={400}
                  rippleColor="gray"
                  rippleOpacity={0.3}
                >
                  <Animated.View
                    entering={FadeInUp.duration(1000).delay(index * 300)}
                    exiting={FadeOutDown.duration(500).delay(index * 100)}
                    style={{
                      ...styles.container,
                      marginBottom: index === props.length - 1 ? 40 : 0,
                    }}
                  >
                    <View style={styles.contentContainer}>
                      <View
                        style={{
                          ...styles.numbers,
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
                            uri: item.image,
                          }}
                          style={styles.image}
                        />
                      </View>

                      <View style={styles.detailsContainer}>
                        <Text
                          numberOfLines={2}
                          style={{
                            ...styles.name,
                            maxWidth: 180,
                            fontFamily: FontLoaded ? Fonts.Circular : null,
                          }}
                        >
                          {item.name}
                        </Text>

                        <Text
                          style={{
                            ...styles.albumName,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.verified ? "Verified" : null}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.icon}>
                      <Feather name="chevron-right" size={24} color="white" />
                    </View>
                  </Animated.View>
                </Ripple>
              </Fragment>
            );
          }}
        />
      ) : (
        <>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <NoResultsComponent />
          </View>
        </>
      )}
    </Fragment>
  );
};

export default ArtistSheet;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flexDirection: "row",
  },
  image: {
    width: 90,
    height: 90,

    borderRadius: 100,
  },
  numbers: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 10,
    left: 1,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 15,
  },
  name: { color: "white" },
  albumName: { color: "gray", marginTop: 0, fontSize: 12 },
  icon: {
    marginRight: 20,
    justifyContent: "center",
  },
});
