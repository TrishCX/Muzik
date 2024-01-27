import { View, Text, Image } from "react-native";
import React, { Fragment } from "react";
import styles from "./styles";
import { Fonts, useInitialFonts } from "../../Hooks";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  _id: string;
  name: string;
  image?: string;
  verified?: boolean;
  _length: number;
  _index: number;
};

const Artists: React.FC<Props> & React.FunctionComponent<Props> = ({
  ...props
}: Props): React.ReactNode & React.JSX.Element => {
  const FontLoaded = useInitialFonts();

  return (
    <Fragment>
      <View
        style={{
          ...styles.container,
          marginRight: props?._index === props._length - 1 ? 5 : 30,
        }}
      >
        <View>
          <Image
            source={{
              uri: props.image,
            }}
            style={styles.image}
          />

          {props.verified ? (
            <View style={styles.absoluteIconContainer}>
              <MaterialIcons name="verified" size={20} color="white" />
            </View>
          ) : null}
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              numberOfLines={2}
              style={{
                ...styles.name,
                fontFamily: FontLoaded ? Fonts.CircularNormal : null,
              }}
            >
              {props.name}
            </Text>
            <Text style={styles.artists}>Artist</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Artists;
