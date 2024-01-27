import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  Image,
} from "react-native";
import React, { Fragment } from "react";
import { ListTitleStyles as styles } from "./ListTitle.styles";
import { Ionicons } from "@expo/vector-icons";

type ListTitleProps = {
  title: string;
  descriptiveText?: string;
  fontFamily?: string | null;
  includesArrow?: boolean;
  onArrowPress?: () => any | void;
  additionalTitleStyles?: StyleProp<TextStyle>;
  descriptiveStyles?: StyleProp<TextStyle>;
  image?: string;
  descriptiveFont?: string;
};

const ListTitle: React.FC<ListTitleProps> &
  React.FunctionComponent<ListTitleProps> = ({
  title,
  descriptiveText,
  fontFamily,
  includesArrow,
  onArrowPress,
  additionalTitleStyles,
  image,
  descriptiveStyles,
  descriptiveFont,
}: ListTitleProps): React.ReactNode & React.JSX.Element => {
  const withoutHtml: string = descriptiveText?.replace(/<[^>]*>/g, "");

  const cleanDescriptiveText: string = withoutHtml?.replace(/[^\w\s.,]/g, "");

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={onArrowPress}>
          <View style={styles.contentContainer}>
            {image ? (
              <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
              </View>
            ) : null}

            {descriptiveText ? (
              <View style={styles.detailsContainer}>
                <Text
                  style={{
                    ...styles.titleStyles,
                    fontFamily,
                    ...(additionalTitleStyles as TextStyle),
                  }}
                >
                  {title}
                </Text>
                <View style={styles.descriptiveTextContainer}>
                  <Text
                    numberOfLines={2}
                    style={{
                      ...styles.descriptiveText,
                      fontFamily: descriptiveFont,
                      ...(descriptiveStyles as TextStyle),
                    }}
                  >
                    {cleanDescriptiveText}
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  ...styles.titleStyles,
                  fontFamily,
                  ...(additionalTitleStyles as TextStyle),
                }}
              >
                {title}
              </Text>
            )}
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
