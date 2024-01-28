import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { Fragment } from "react";
import { styles } from "./AutoSuggestions.styles";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useInitialFonts, Fonts } from "../../Hooks";

type AutoSuggestionsProps = {
  onSuggestionPress?: (suggestion: string) => void | any;
  suggestions: string[];
  onPress?: (query: string) => any | void;
};
const AutoSuggestions: React.FC<AutoSuggestionsProps> &
  React.FunctionComponent<AutoSuggestionsProps> = ({
  ...props
}: AutoSuggestionsProps): React.ReactNode & JSX.Element => {
  const FontLoaded = useInitialFonts();

  return (
    <Fragment>
      {!props.suggestions?.length ? null : (
        <FlatList
          scrollEnabled={false}
          data={props.suggestions}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Fragment>
                <TouchableOpacity onPress={() => props.onPress(item)}>
                  <View style={styles.container}>
                    <AntDesign name="search1" size={20} color="white" />

                    <View style={styles.iconsContainer}>
                      <View style={styles.textContainer}>
                        <Text
                          style={{
                            ...styles.text,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => props.onSuggestionPress(item)}
                      >
                        <Entypo name="text" size={20} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Fragment>
            );
          }}
        />
      )}
    </Fragment>
  );
};

export default AutoSuggestions;
