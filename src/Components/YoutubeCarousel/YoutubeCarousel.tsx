import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import React, { Fragment } from "react";
import { VideoResponse } from "../../Controllers/BackEnd/src";
import { styles } from "./YoutubeCarousel.style";
import { useInitialFonts, Fonts } from "../../Hooks/index";
import * as Constants from "../../Constants/index";
import Ripple from "react-native-material-ripple";

type YoutubeCarouselProps = {
  data: VideoResponse[];
};

export const YoutubeCarousel: React.FC<YoutubeCarouselProps> &
  React.FunctionComponent<YoutubeCarouselProps> = ({
  ...props
}: YoutubeCarouselProps): React.ReactNode & JSX.Element => {
  const filteredData = props?.data?.filter((v) => v.thumbnailURL !== undefined);
  const fontLoaded = useInitialFonts();

  return (
    // <View style={{ ...Constants.CarouselInitialViewContainerStyles }}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(_key, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.thumbnailURL === `undefined"`) return;
          if (!item.exactYear) return;
          const withoutParentheses = item.title.replace(/(\([^)]*\))/g, "");

          const title = withoutParentheses.replace(/(\[[^\]]*\])/g, "");

          return (
            <Fragment>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Ripple
                    rippleSize={1000}
                    rippleColor="#fff"
                    rippleOpacity={0.45}
                    rippleDuration={1000}
                    rippleContainerBorderRadius={10}
                  >
                    <Image
                      resizeMode="cover"
                      source={{ uri: item?.thumbnailURL }}
                      style={styles.image}
                    />
                  </Ripple>
                </View>

                <View style={styles.descriptiveContainer}>
                  <Text
                    style={{
                      ...styles.title,
                      fontFamily: fontLoaded
                        ? Fonts.CircularNormal
                        : (null as unknown as string),
                    }}
                  >
                    {title}
                  </Text>

                  <Text style={styles.descriptiveText}>
                    {item.channel.name} • {item.exactYear}
                  </Text>
                </View>
              </View>
            </Fragment>
          );
        }}
      />
    // </View>
  );
};
