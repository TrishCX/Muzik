import {
  View,
  Text,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./HeaderTopNavBar.styles";

type HeaderTopNavBarProps = {
  onBackPress?: () => any;
  onStarPress?: () => any;
  star?: boolean;
  externalBackStyles?: StyleProp<ViewStyle>;
  externalStarStyles?: StyleProp<ViewStyle>;
};

export const HeaderTopNavBar: React.FC<HeaderTopNavBarProps> &
  React.FunctionComponent<HeaderTopNavBarProps> = ({
  ...props
}: HeaderTopNavBarProps): JSX.Element => {
  const { onBackPress, onStarPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <View
          style={{
            ...(props.externalBackStyles as any),
            ...styles.iconContainer,
          }}
        >
          <Ionicons name="ios-chevron-back" size={15} color="white" />
        </View>
      </TouchableOpacity>

      {!props.star ? null : (
        <TouchableOpacity onPress={onStarPress}>
          <View
            style={{
              ...(props.externalStarStyles as any),
              ...styles.iconContainer,
            }}
          >
            <Ionicons name="star-outline" size={15} color="white" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
