import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ArtistsRelations as styles } from "./ArtistsRelations.styles";
import { formatNameString } from "../../Helpers";
import Ripple from "react-native-material-ripple";

type Props = {
  id: string;
  name: string;
  image?: string;
  uri?: string;
};

const ArtistsRelations: React.FC<Props> & React.FunctionComponent<Props> = ({
  name,
  image,
  id,
}: Props): JSX.Element => {
  const _name = formatNameString(name);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {name.length > 20 ? (
          <>
            {_name.map((username) => (
              <Text key={username} style={styles.artistsName}>
                {username}
              </Text>
            ))}
          </>
        ) : (
          <Text numberOfLines={0} style={styles.artistsName}>
            {name}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ArtistsRelations;
