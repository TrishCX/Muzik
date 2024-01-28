import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { Fragment, useLayoutEffect, useState } from "react";
// @Backend
import {
  VideoResults,
  getAlbum,
  getArtist,
  searchVideos,
  search_ytArtistVideos,
} from "../../Controllers/BackEnd/src/index";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { AlbumDetails, ArtistDetails } from "../../Components/index";
import { IAlbum } from "../../Controllers/BackEnd/src/Parsers";

export default function DetailsScreen(props: NativeStackHeaderProps) {
  const params = props?.route?.params as any;
  const type = params?.type;
  const [album, setAlbum] = useState<IAlbum>();
  const [artist, setArtist] = useState<any>();
  const [videos, setVideos] = useState<any>();

  useLayoutEffect(() => {
    const data = params?.data;

    if (type === "Album") {
      const _id = extractIdFromSpotifyString(data);
      const fetchAlbum = async () => {
        const response = await getAlbum(_id);

        return setAlbum(response);
      };
      fetchAlbum();
    } else if (type === "Artist") {
      const fetchArtist = async () => {
        const response = await getArtist(data);
        const videoResponse = await search_ytArtistVideos(response.name);

        setVideos(videoResponse);
        return setArtist(response);
      };
      fetchArtist();
    }
  }, []);

  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
        {type === "Album" ? (
          !album ? (
            <ActivityIndicator size={"large"} color={"gray"} />
          ) : (
            <AlbumDetails
              onBackPress={() => props.navigation.goBack()}
              content={{ ...album }}
            />
          )
        ) : (
          <>
            {!artist ? (
              <ActivityIndicator size={"large"} color={"gray"} />
            ) : (
              <>
                <ArtistDetails
                  channelName={artist.name}
                  videos={videos.videos}
                  onBackPress={() => props.navigation.goBack()}
                  data={artist}
                />
              </>
            )}
          </>
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
