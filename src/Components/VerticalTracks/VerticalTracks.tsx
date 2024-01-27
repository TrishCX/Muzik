import { View, Text, Image } from "react-native";
import React, { Fragment } from "react";
import { VerticalTrackStyleSheet as styles } from "./VerticalTracks.styles";
import { Entypo } from "@expo/vector-icons";

export type VerticalTracksProps = {
  title: string;

  playCount: string;
  coverArt: string;
  artists?: any[];
  font?: string;
};

const VerticalTracks = ({
  title,
  coverArt,
  artists,
  playCount,
  font,
}: VerticalTracksProps) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            backgroundColor: "red",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              top: 10,
              position: "absolute",
              right: 20,
            }}
          >
            <Entypo name="dots-three-horizontal" size={15} color="white" />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Image
              source={{
                uri: coverArt,
              }}
              style={styles.coverArt}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <Text
                numberOfLines={1}
                style={{ ...styles.title, fontFamily: font }}
              >
                {title}
              </Text>
            </View>

            <View style={styles.artistsContainer}>
              <Text
                numberOfLines={1}
                style={{ ...styles.artists, fontFamily: font }}
              >
                {artists
                  .map((a) => {
                    if (a?.profile) {
                      return a.profile.name;
                    } else {
                      return a?.name;
                    }
                  })
                  .join(", ")}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default VerticalTracks;
