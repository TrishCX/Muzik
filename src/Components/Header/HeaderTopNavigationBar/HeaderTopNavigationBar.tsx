import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { Fragment } from "react";
import { Image } from "react-native-reanimated/lib/typescript/Animated";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "./HeaderTopNavigationBar.styles";

type Props = {
  name?: string;
  onIconPress?: () => void | any;
  font?: string;
};

export const HeaderTopNavigationBar: React.FC<Props> = ({
  ...props
}: Props): JSX.Element => {
  return (
    <Fragment>
      <View style={styles.headerContainer}>
        <View
          style={{
            marginLeft: 10,
            left: 20,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              ...styles.artistName,
              fontFamily: props.font,
            }}
          >
            {props.name}
          </Text>
        </View>
        <TouchableOpacity onPress={props.onIconPress}>
          <View style={styles.playButton}>
            <Feather name="play" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};
