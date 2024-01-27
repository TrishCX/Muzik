import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { Fragment } from "react";
import type { VideoResponse } from "../../../Controllers/BackEnd/src";
import { useInitialFonts, Fonts } from "../../../Hooks";
import Ripple from "react-native-material-ripple";
import { Feather } from "@expo/vector-icons";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from "react-native-reanimated";
import { NoResultsComponent } from "../../NoResultsComponent/NoResultsComponent";
type Props = {
  props: VideoResponse[];
};

export const VideoCardSheet: React.FC<Props> &
  React.FunctionComponent<Props> = ({
  props,
}: Props): JSX.Element & React.ReactNode & React.ReactElement => {
  const FontLoaded = useInitialFonts();
  let i: number;
  const filteredArray = props.filter(
    (item) => item.title !== undefined && item.exactYear !== undefined
  );

  return (
    <Fragment>
      {props.length ? (
        <FlatList
          data={filteredArray}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            if (!item.title) return;

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
                            uri: item.thumbnailURL,
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
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.title}
                        </Text>

                        <Text
                          style={{
                            ...styles.albumName,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.channel.name} ∙ {item.exactYear}
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
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <NoResultsComponent />
          </View>
        </>
      )}
    </Fragment>
  );
};

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
    resizeMode: "contain",
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
