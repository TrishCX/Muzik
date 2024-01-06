import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from "react-native";
import React, { Fragment } from "react";
import { ListTitleStyles as styles } from "./ListTitle.styles";
import { Ionicons } from "@expo/vector-icons";

type ListTitleProps = {
  title: string;
  fontFamily?: string | null;
  includesArrow?: boolean;
  onArrowPress?: () => any | void;
  additionalTitleStyles?: StyleProp<TextStyle>;
};

const ListTitle: React.FC<ListTitleProps> = ({
  title,
  fontFamily,
  includesArrow,
  onArrowPress,
  additionalTitleStyles,
}: ListTitleProps) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={onArrowPress}>
          <View style={styles.contentContainer}>
            <Text
              style={{
                ...styles.titleStyles,
                fontFamily,
                ...(additionalTitleStyles as TextStyle),
              }}
            >
              {title}
            </Text>
            {includesArrow ? (
              <Ionicons
                style={styles.iconStyles}
                name="ios-chevron-forward-sharp"
                size={24}
                color="white"
              />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export { ListTitle as default };
