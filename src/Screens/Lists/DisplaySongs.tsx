import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { Fragment, useLayoutEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import {
  Artists,
  ISearchAlbum,
  ISongs,
  VerdictResults,
  VerdictSongs,
  VideoResponse,
} from "../../Controllers/BackEnd/src";
// @Hooks
import { useInitialFonts, Fonts } from "../../Hooks";
import { Feather } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
// @Events
import { EventRegister } from "react-native-event-listeners";

import {
  AlbumSheet,
  ArtistsSheet,
  MusicSheetCard,
  VideoCardSheet,
} from "../../Components";

interface IData {
  name: string;
  artist: string;
  album: string;
  image: string;
  url?: string;
  year?: string;
}

interface ParamsKey {
  keyTitle: string;
  data: IData[];
}

export default function DisplaySongs({ route }: NativeStackHeaderProps) {
  const params = route?.params as any;
  const keyTitle = params?.keyTitle as string;

  const data = params?.data;
  const responsiveData = data as VerdictSongs[];
  const [list, setList] = useState<VerdictSongs[]>(responsiveData);
  const [videos, setVideos] = useState<VideoResponse[]>(data);
  const [albums, setAlbums] = useState<ISearchAlbum[]>(data);
  const [artists, setArtists] = useState<Artists[]>(data);
  const FontLoaded = useInitialFonts();

  useLayoutEffect(() => {
    const listener = EventRegister.addEventListener("ChangeText", (text) => {
      if (keyTitle === "Songs") {
        if (!text) return setList(responsiveData);

        const newList = responsiveData.filter((item) => {
          return item.name.toLowerCase().includes(text.toLowerCase());
        });
        setList(newList);
      } else if (keyTitle === "Videos") {
        if (!text) return setVideos(data);
        const newList = data.filter((item) => {
          if (!item?.title) return;

          return item.title?.toLowerCase().includes(text.toLowerCase());
        });
        setVideos(newList);
      } else if (keyTitle === "Albums") {
        if (!text) return setAlbums(data);
        const newList = data.filter((item) => {
          if (!item?.name) return;

          return item.name?.toLowerCase().includes(text.toLowerCase());
        });
        setAlbums(newList);
      } else if (keyTitle === "Artists") {
        if (!text) return setArtists(data);
        const newList = data.filter((item) => {
          if (!item?.name) return;

          return item.name?.toLowerCase().includes(text.toLowerCase());
        });
        setArtists(newList);
      }
    });
    return () => {
      EventRegister.removeEventListener(listener.toString());
    };
  }, []);

  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
        {keyTitle === "Songs" ? (
          <MusicSheetCard list={list} />
        ) : keyTitle === "Videos" ? (
          <VideoCardSheet props={videos} />
        ) : keyTitle === "Albums" ? (
          <AlbumSheet props={albums} />
        ) : (
          <ArtistsSheet props={artists} />
        )}
      </SafeAreaView>
    </Fragment>
  );
}
