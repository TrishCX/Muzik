import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
// @styles
import { SearchStyles as styles } from "./TextInput.styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AutoSuggestions from "../AutoSuggestions/AutoSuggestions";
import { YoutubeApi } from "../../Controllers/BackEnd/src/Client";

type Props = {
  onSubmitEditing?: (query: string) => any | void;
  onClearPress?: () => any | void;
  onPress?: (query: string) => any | void;
  onChange?: (query: string) => any | void;
};

export const TextInputComponent = ({ ...props }: Props) => {
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const onClearPress = () => {
    setInput("");
    props.onClearPress();
    props.onChange("");
  };

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

  return (
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
            onSubmitEditing={() => {
              setInput("");
              return props.onSubmitEditing(input);
            }}
            onChangeText={(text) => {
              setInput(text);
              props.onChange(text);
            }}
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
      <AutoSuggestions
        onPress={(query) => {
          setInput("");
          return props.onPress(query);
        }}
        suggestions={suggestions}
        onSuggestionPress={(key) => setInput(key)}
      />
    </View>
  );
};
