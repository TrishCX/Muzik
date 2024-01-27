import { View, Text, FlatList, Image } from "react-native";
import React, { Fragment } from "react";
import { ISongs } from "../../Controllers/BackEnd/src";
import { styles } from "./Tracks.styles";
import { useInitialFonts, Fonts } from "../../Hooks";
import { formatNameString } from "../../Helpers";

type TrackProps = {
  data: ISongs[];
};
export const Tracks: React.FC<TrackProps> &
  React.FunctionComponent<TrackProps> = ({
  ...props
}: TrackProps): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();
  return (
    <Fragment>
      <FlatList
        data={props.data}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const _name = formatNameString(item.album.name);

          return (
            <Fragment>
              <View style={styles.container}>
                <View>
                  <Image
                    source={{ uri: item.album.image }}
                    style={styles.image}
                  />
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      ...styles.title,
                      fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                    }}
                    numberOfLines={2}
                  >
                    {item?.name}
                  </Text>
                  <View style={styles.descriptiveContainer}>
                    <Text
                      style={{
                        ...styles.descriptiveText,
                        fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                      }}
                      numberOfLines={2}
                    >
                      {item.artists.map((artist) => artist.name).join(", ")} ∙{" "}
                      {item.album.name}
                    </Text>
                  </View>
                </View>
              </View>
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
};
