import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Touchable,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { Fragment } from "react";
import { styles } from "./HeaderNavigation.styles";
import { Ionicons } from "@expo/vector-icons";

type HeaderNavigationProps = {
  dynamicIsland?: boolean;
  title?: string;
  image?: string;
  onBackPress?: () => void | any;
  onStarPress?: () => void | any;
  font?: string;
  includeImage?: boolean;
  additionalContainerStyle?: StyleProp<ViewStyle>;
  additionalTitleStyle?: StyleProp<ViewStyle>;
};

export const HeaderNavigation: React.FC<HeaderNavigationProps> &
  React.FunctionComponent<HeaderNavigationProps> = ({
  ...props
}: HeaderNavigationProps): JSX.Element => {
  return (
    <Fragment>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,

          backgroundColor: "black",
        }}
      >
        <SafeAreaView
          style={{
            ...(props.additionalContainerStyle as any),
            flexDirection: "row",
            ...styles.upperStarView,
            justifyContent: "space-between",
          }}
        >
          <View style={{ left: 10, marginTop: props.dynamicIsland ? 0 : 20 }}>
            <TouchableOpacity onPress={props.onBackPress}>
              <Ionicons name="ios-chevron-back" size={20} color="#c2c2c2" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              ...(props.additionalTitleStyle as any),
              justifyContent: "center",
              alignItems: "center",
              marginTop: props.dynamicIsland ? 0 : 20,
              flexDirection: "row",
            }}
          >
            {!props.includeImage ? null : (
              <View style={{ marginRight: 10 }}>
                <Image
                  source={{
                    uri: props.image,
                  }}
                  style={styles.headerTopImage}
                />
              </View>
            )}
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                fontFamily: props.font,
                maxWidth: 230,
              }}
              numberOfLines={1}
            >
              {props.title}
            </Text>
          </View>
          <View style={{ right: 10, marginTop: props.dynamicIsland ? 0 : 20 }}>
            <TouchableOpacity onPress={props.onStarPress}>
              <Ionicons name="star-outline" size={20} color="#c2c2c2" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Fragment>
  );
};
