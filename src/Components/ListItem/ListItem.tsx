import { View, Text, Image } from "react-native";
import React, { Fragment } from "react";
import styles from "./ListItem.styles";
import { Fonts, useInitialFonts } from "../../Hooks";
import Ripple from "react-native-material-ripple";

type ListItemProps = {
  _length: number;
  _index: number;
  name: string;
  image: string;
  year?: string;
  artists?: any;
  onPress?: (props: ListItemProps) => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  ...props
}: ListItemProps): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();

  return (
    <Fragment>
      <Ripple onPress={() => props.onPress(props)}>
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
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              numberOfLines={2}
              style={{
                ...styles.name,
                fontFamily: FontLoaded ? Fonts.CircularNormal : null,
              }}
            >
              {props.name}
            </Text>

            <Text style={styles.artists}>
              {props.artists.map((item) => item?.name).join(", ")} ∙{" "}
              {props.year}
            </Text>
          </View>
        </View>
      </Ripple>
    </Fragment>
  );
};
