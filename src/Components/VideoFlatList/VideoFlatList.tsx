import React, { Fragment } from "react";
import { VideoFlatListStyles as styles } from "./VideoFlatList.styles";
import { View, Text, Image } from "react-native";
import Ripple from "react-native-material-ripple";

export type VideTypes = {
  title: number;
  id: string;
  thumbnailURL: string;
  duration: number;
  durationInMS: number;
  exactYear: number;
  labeledYear: string;
  channel: string;
};

const VideoFlatList: React.FC<VideTypes> &
  React.FunctionComponent<VideTypes> = ({
  ...props
}: VideTypes): JSX.Element => {
  const channel = props.channel as any;

  return (
    <Fragment>
      <View style={styles.container}>
        <View
          style={{
            ...styles.imageContainer,
          }}
        >
          <Ripple
            // onLongPress={() => alert("Hello")}
            rippleSize={1000}
            rippleColor="#fff"
            rippleOpacity={0.89}
            rippleDuration={1000}
          >
            <Image
              source={{
                uri: `${props.thumbnailURL}`,
              }}
              style={{
                ...styles.image,
              }}
            />
          </Ripple>
        </View>

        <View style={styles.detailsContainer}>
          <Text
            style={{
              ...styles.titleStyles,
            }}
          >
            {props.title}
          </Text>

          <View style={styles.descriptiveContainer}>
            <Text style={styles.artistStyle}>
              {channel?.name} ∙ {props.exactYear}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default VideoFlatList;
