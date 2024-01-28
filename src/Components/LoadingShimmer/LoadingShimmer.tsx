import { View, Text, SafeAreaView, Dimensions, FlatList } from "react-native";
import React, { Fragment } from "react";

import { MotiView, ScrollView } from "moti";
import { Skeleton } from "moti/skeleton";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { styles } from "./LoadingShimmer.styles";

type Props = {
  loading: boolean;
};

export const LoadingShimmer: React.FC<Props> &
  React.FunctionComponent<Props> = ({
  loading,
}: Props): JSX.Element & React.ReactNode => {
  const shimmerColors: string[] = ["#050505", "#171717", "#050505"];
  const { width } = Dimensions.get("window");
  const arrayData: number[] = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <MotiView
        transition={{
          type: "timing",
        }}
        style={[
          styles.container,
          {
            padding: 16,
          },
        ]}
      >
        <Skeleton.Group show={loading}>
          <View>
            <View style={{ marginLeft: 10 }}>
              <Skeleton width={150} height={20} radius={10} />
            </View>
            <View style={styles.videoContainer}>
              <Skeleton width={width - 50} height={200} radius={10} />
            </View>
          </View>

          <View style={{ marginLeft: 10, marginTop: 40 }}>
            <Skeleton width={150} height={20} radius={10} />
          </View>

          <FlatList
            data={arrayData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ index }) => (
              <Fragment>
                <Animated.View
                  entering={FadeIn.delay(index * 100)}
                  exiting={FadeOut.delay(index * 100)}
                  style={styles.rowContainer}
                >
                  <Skeleton width={120} height={120} radius={"square"} />
                </Animated.View>
              </Fragment>
            )}
          />

          <View style={{ marginLeft: 10, marginTop: 40 }}>
            <Skeleton width={150} height={20} radius={10} />
          </View>

          <View style={styles.trendingVideos}>
            <Skeleton width={250} height={250} radius={5} />
          </View>
        </Skeleton.Group>
      </MotiView>
    </SafeAreaView>
  );
};
