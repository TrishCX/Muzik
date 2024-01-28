import { View, Text, Image } from "react-native";
import React, { Fragment } from "react";
import { AlbumFlatListStyles as styles } from "./AlbumFlatList.styles";

export interface AlbumFlatListRendererProps extends Font {
  id: string;
  title: string;
  songsCount: number;
  copyright: string[];
  coverArt: string;
  date: DateClass;
  label: string;
  uri: string;
}

interface DateClass {
  year: number;
  month: number;
  day: number;
  precision: string;
}
interface Font {
  fontFamily?: string;
}
const AlbumFlatListRenderer: React.FC<AlbumFlatListRendererProps> = ({
  ...props
}: AlbumFlatListRendererProps) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.coverArtContainer}>
          <Image style={styles.coverArt} source={{ uri: props.coverArt }} />
        </View>

        <View style={styles.detailContainer}>
          <Text
            style={{
              ...styles.titleStyles,
              fontFamily: props.fontFamily,
            }}
            numberOfLines={1}
          >
            {props.title}
          </Text>
          <View style={styles.descriptiveContentContainer}>
            <Text style={styles.descriptiveContentStyles}>
              {props.date.year} ∙ {props.songsCount !== 1 ? "Album" : "Singles"}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default AlbumFlatListRenderer;
