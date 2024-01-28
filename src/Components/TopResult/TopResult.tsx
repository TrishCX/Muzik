import { View, Text, TouchableOpacity } from "react-native";
import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  IndecentData,
  TopResultsV2,
} from "../../Controllers/BackEnd/src/@types/Query/SearchQuery";
import styles from "./styles";
import { Image } from "react-native";
import { TopResults } from "../../Controllers/BackEnd/src";
import { Fonts, useInitialFonts } from "../../Hooks";

interface Props {
  content?: TopResults;
}
const TopResult = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();

  return (
    <Fragment>
      <View style={styles.boxContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: props.content?.coverArt }}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text
              numberOfLines={2}
              style={{
                color: "white",
                fontFamily: FontLoaded ? Fonts.Circular : null,
                ...styles.name,
              }}
            >
              {props.content?.name}
            </Text>
            <View style={styles.descriptiveContentContainer}>
              <Text
                numberOfLines={2}
                style={{ color: "gray", fontSize: 10, ...styles.name }}
              >
                {props.content.__typename} ∙ {props?.content.album?.name}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View style={styles.icon}>
                <Ionicons name="play" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default TopResult;
