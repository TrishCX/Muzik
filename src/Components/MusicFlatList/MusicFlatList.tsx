import { View, Text, Image } from "react-native";
import React, { Fragment } from "react";
import { MusicFlatListStyles as styles } from "./MusicFlatList.styles";
import { formatNameString } from "../../Helpers";
import Ripple from "react-native-material-ripple";

type MusicFlatListProps = {
  title?: string;
  songCount?: string;
  image?: string;
  _id?: string;
  date?: {
    year: number;
    month: number;
    day: number;
    precision: string;
  };
  copyright?: string;
  label?: string;
  uri?: string;
};

const MusicFlatList: React.FC<MusicFlatListProps> &
  React.FunctionComponent<MusicFlatListProps> = ({
  ...props
}: MusicFlatListProps): JSX.Element => {
  const _formattedName = formatNameString(props.title);
  if (!_formattedName) return;

  return (
    <Fragment>
      <View style={{ ...styles.container }}>
        <View style={styles.imageContainer}>
          <Ripple rippleColor="white" rippleOpacity={0.96}>
            <Image
              source={{
                uri: props.image,
              }}
              style={styles.image}
            />
          </Ripple>
        </View>

        <View style={styles.titleContentContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
          <View style={styles.descriptiveContainer}>
            <Text style={styles.descriptiveText}>
              Singles ∙ {props.date.year}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...styles.descriptiveText,
              }}
            >
              {props.copyright}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default MusicFlatList;
