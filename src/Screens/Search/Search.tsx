import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { SearchBar, Slider } from "@rneui/base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// @components
import { AutoSuggestions, MusicSheet } from "../../Components";

// @backend
import { YoutubeApi } from "../../Controllers/BackEnd/src/Client/index";

// @styles
import { SearchStyles as styles } from "../../StyleSheets/Screens/Search";
// Navigation-Props
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function Search(
  props: NativeStackHeaderProps
): JSX.Element & React.ReactNode {
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  useEffect(() => {
    const fetchSearchSuggestions = async () => {
      if (!input) {
        setSuggestions([]);
        return setInput("");
      }
      try {
        const data = await YoutubeApi.searchSuggestions(input);
        if (!data) return setSuggestions([]);
        setSuggestions(data);
      } catch (error: any | Error) {
        return setSuggestions([]);
      }
    };
    fetchSearchSuggestions();
  }, [input]);

  const onClearPress = () => {
    setInput("");
    setSuggestions([]);
  };
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.textInputContainer}>
            <View style={styles.searchIcon}>
              <Ionicons name="search" size={20} color="#c7c7c7" />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                selectionColor={"#d6d6d6"}
                cursorColor={"#d6d6d6"}
                value={input}
                returnKeyType="search"
                onSubmitEditing={() =>
                  props.navigation.navigate("SearchResults")
                }
                onChangeText={(text) => setInput(text)}
                placeholderTextColor={"#575757"}
                placeholder="Go on, search up something."
                style={styles.placeHolderTextColor}
              />
            </View>
            {input?.length > 0 ? (
              <View style={styles.searchIcon}>
                <TouchableOpacity onPress={onClearPress}>
                  <MaterialIcons name="clear" size={20} color="#c7c7c7" />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
        <AutoSuggestions
          onPress={(query) =>
            props.navigation.navigate("SearchResults", {
              query: query,
            })
          }
          suggestions={suggestions}
          onSuggestionPress={(key) => setInput(key)}
        />
      </SafeAreaView>
    </Fragment>
  );
}
