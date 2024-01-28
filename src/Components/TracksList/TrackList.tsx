import { View, Text, Dimensions, Image } from "react-native";
import React, { Fragment, useEffect, useRef, useState } from "react";
// @styles
import { styles } from "./TrackList.styles";
// @types
import type { ISongs } from "../../Controllers/BackEnd/src";
import Carousel from "react-native-snap-carousel";
// @constants
import { CarouselInitialViewContainerStyles } from "../../Constants/index";
import { useInitialFonts, Fonts } from "../../Hooks";

interface Props {
  data: ISongs[];
}
export const TrackList: React.FC<Props> & React.FunctionComponent<Props> = ({
  ...props
}: Props): React.JSX.Element => {
  const { width } = Dimensions.get("window");
  const FontLoaded: boolean = useInitialFonts();

  return (
    <Fragment>
      <View style={{ ...CarouselInitialViewContainerStyles }}>
        <Carousel
          data={props.data}
          keyExtractor={(_key, index) => index.toString()}
          itemWidth={width}
          loop={false}
          layout="stack"
          pagingEnabled={true}
          autoplay={false}
          sliderWidth={width - 100}
          renderItem={($) => {
            const item = $?.item as ISongs;
            const index = $?.index as number;
            return (
              <>
                <View
                  style={{
                    ...styles.container,
                  }}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.album.image }}
                      style={styles.image}
                    />
                  </View>

                  <View style={styles.descriptiveContainer}>
                    <View style={styles.titleContainer}>
                      <Text
                        style={{
                          ...styles.title,

                          fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </Fragment>
  );
};
