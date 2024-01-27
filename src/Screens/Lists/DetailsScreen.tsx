import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { Fragment, useLayoutEffect, useState } from "react";
// @Backend
import { getAlbum } from "../../Controllers/BackEnd/src/index";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { AlbumDetails } from "../../Components/index";
import { IAlbum } from "../../Controllers/BackEnd/src/Parsers";

export default function DetailsScreen(props: NativeStackHeaderProps) {
  const params = props?.route?.params as any;
  const type = params?.type;
  const [album, setAlbum] = useState<IAlbum>();

  useLayoutEffect(() => {
    const data = params?.data;

    const _id = extractIdFromSpotifyString(data);
    const fetchAlbum = async () => {
      const response = await getAlbum(_id);

      return setAlbum(response);
    };
    fetchAlbum();
  }, []);

  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
        {type === "Album" ? (
          !album ? (
            <ActivityIndicator size={"large"} color={"gray"} />
          ) : (
            <AlbumDetails content={{ ...album }} />
          )
        ) : (
          <></>
        )}
      </SafeAreaView>
    </Fragment>
  );
}

function extractIdFromSpotifyString(spotifyString: string): string | null {
  const idRegex: RegExp = /[^:]+$/;

  const match = idRegex.exec(spotifyString);

  const id: string | null = match ? match[0] : null;

  return id;
}
