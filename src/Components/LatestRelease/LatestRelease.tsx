import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { Fragment } from "react";
import { LatestReleaseStyles as styles } from "./LatestRelease.styles";
import { formatYear } from "../../Helpers/index";
import { FontAwesome5 } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";

export interface ILatest {
  id: string;
  uri: string;
  name: string;
  type: string;
  copyright: Copyright;
  date: DateClass;
  coverArt: CoverArt;
  tracks: Tracks;
  label: string;
  playability: Playability;
  sharingInfo: SharingInfo;
  font?: string;
}

export interface Copyright {
  items: Item[];
}

export interface Item {
  type: string;
  text: string;
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface DateClass {
  year: number;
  month: number;
  day: number;
  precision: string;
}

export interface Playability {
  playable: boolean;
  reason: string;
}

export interface SharingInfo {
  shareId: string;
  shareUrl: string;
}

export interface Tracks {
  totalCount: number;
}

const LatestRelease: React.FC<ILatest> & React.FunctionComponent<ILatest> = ({
  ...props
}: ILatest): JSX.Element => {
  const formattedYear: string = formatYear(props.date);

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Ripple rippleOpacity={0.95} rippleColor="gray" rippleDuration={500}>
            <Image
              source={{
                uri: props.coverArt.sources.at(-1).url,
              }}
              style={styles.image}
            />
          </Ripple>
          <Ripple
            rippleOpacity={1}
            rippleContainerBorderRadius={4}
            rippleColor="gray"
            rippleDuration={500}
          >
            <View style={styles.descriptiveContainer}>
              <Text style={{ ...styles.yearStyles, fontFamily: props.font }}>
                {formattedYear}
              </Text>

              <View style={styles.titleContainer}>
                <Text
                  style={{ ...styles.title, fontFamily: props.font }}
                  numberOfLines={2}
                >
                  {props.name}
                </Text>
              </View>

              <Text style={{ ...styles.yearStyles, fontFamily: props.font }}>
                {props.type.charAt(0).toUpperCase() +
                  props.type.slice(1).toLowerCase()}
              </Text>
            </View>
          </Ripple>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <FontAwesome5 name="chevron-right" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default LatestRelease;
