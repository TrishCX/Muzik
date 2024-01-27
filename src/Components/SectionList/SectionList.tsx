import { View, Text, FlatList, Image } from "react-native";
import React, { Fragment } from "react";
import type {
  IResponse,
  SectionResponse,
} from "../../Controllers/BackEnd/src/Sections";

import ListTitle from "../ListTitle/ListTitle";
import { useInitialFonts, Fonts } from "../../Hooks";
import { MusicFlatListStyles as styles } from "./SectionList.styles";
import { Entypo } from "@expo/vector-icons";

type SectionListProps = {
  data: SectionResponse[];
};

export const SectionList: React.FC<SectionListProps> &
  React.FunctionComponent<SectionListProps> = ({
  ...props
}: SectionListProps): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();
  return (
    <Fragment>
      <FlatList
        data={props.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      ...styles.title,
                      fontFamily: FontLoaded ? Fonts.Circular : null,
                    }}
                    numberOfLines={1}
                  >
                    {item?.name}
                  </Text>
                </View>
                <Text
                  numberOfLines={2}
                  style={{
                    ...styles.descriptiveText,
                    fontFamily: FontLoaded ? Fonts.CircularNormal : null,
                  }}
                >
                  {item?.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </Fragment>
  );
};
