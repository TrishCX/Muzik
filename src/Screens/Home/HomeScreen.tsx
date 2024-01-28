import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
// @Backend
import {
  VideoResponse,
  VideoResults,
  home,
  searchVideos,
  getPlaylist,
} from "../../Controllers/BackEnd/src/index";
import { Colors, HomeContent, Points } from "../../Constants/index";
import { HomeStyleSheet as styles } from "../../StyleSheets/Screens/HomeScreen";

// @Types
import {
  IResponse,
  fetchSections,
} from "../../Controllers/BackEnd/src/Sections";
import type { ISongs } from "../../Controllers/BackEnd/src/index";
import type { PlaylistXSongs } from "../../Typings/index";

// @Expo
import { LinearGradient } from "expo-linear-gradient";

// @Custom-Hooks
import { Fonts, useInitialFonts, useYoutubeVideos } from "../../Hooks";

// @Components
import { HomeHeader as Header } from "../../Components/Header/index";
import { ListTitle, MusicSheet, YoutubeCarousel } from "../../Components";
import { SectionList, TrackList } from "../../Components/index";
import { Tracks } from "../../Components/index";
import { LoadingShimmer } from "../../Components/index";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  // Fonts
  const Font = useInitialFonts();
  const Normal = Font ? Fonts.CircularNormal : null;
  const Circular = Font ? Fonts.Circular : null;

  // States
  const [musicVideos, setMusicVideos] = useState<VideoResponse[]>();
  const [sections, setSections] = useState<IResponse>();
  const [topTracks, setTopTracks] = useState<ISongs[]>();
  const [randomSection, setRandomSection] = useState<IResponse>();
  const [secondaryTracks, setSecondaryTracks] = useState<PlaylistXSongs>();
  const [lastSection, setLastSection] = useState<IResponse>();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const sectionIDS = HomeContent.SECTION_IDS;
      const randomSectionId =
        sectionIDS[Math.floor(Math.random() * sectionIDS.length)];
      const randomize = Math.random() < 0.5;
      const response = await fetchSections(
        randomSectionId.id,
        randomSectionId.offSet !== 0
          ? randomize === true || randomize
            ? randomSectionId.offSet
            : 0
          : 0
      );
      setRandomSection(response);
    };
    fetchPlaylist();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await searchVideos({
        term: "New Music Videos",
      });
      setMusicVideos(response?.content);
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const getSections = async () => {
      const _firstSectionContent = await fetchSections(
        "0JQ5IMCbQBLx2bk4MeMEPd"
      );
      setSections(_firstSectionContent);
    };
    getSections();
  }, []);

  useEffect(() => {
    const __getTopTracks = async () => {
      const idsLength = HomeContent.PLAYLIST_IDS[1].ids.length;
      const shuffledID =
        HomeContent.PLAYLIST_IDS[1].ids[Math.floor(Math.random() * idsLength)];

      const __content = await getPlaylist(shuffledID);

      const __topTracks = __content?.songs;
      setTopTracks(__topTracks.slice(0, 8));
    };

    __getTopTracks();
  }, []);

  useEffect(() => {
    const __getSecondaryTracks = async () => {
      const idsLength = HomeContent.PLAYLIST_IDS[0].ids.length;

      const shuffledID =
        HomeContent.PLAYLIST_IDS[0].ids[Math.floor(Math.random() * idsLength)];

      const __secondaryPlaylist = await getPlaylist(shuffledID);
      const __title = __secondaryPlaylist.name;
      const __secondaryTracks = __secondaryPlaylist.songs;
      const __description: string = __secondaryPlaylist?.description;
      const __imageURI: string = __secondaryPlaylist?.image;

      setSecondaryTracks({
        title: __title,
        songs: __secondaryTracks.slice(0, 8),
        description: __description,
        image: __imageURI,
      });
    };
    __getSecondaryTracks();
  }, []);

  useEffect(() => {
    const fetchSectionRequest = async () => {
      const sectionId: string = `0JQ5IMCbQBLkPv90EI1Nkn`;
      const response = await fetchSections(sectionId);
      setLastSection(response);
    };
    fetchSectionRequest();
  }, []);

  return (
    <Fragment>
      {!sections?.content?.length &&
      !topTracks?.length &&
      !randomSection?.content?.length &&
      !lastSection?.content?.length &&
      !secondaryTracks?.songs?.length ? (
        <LoadingShimmer loading={true} />
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ backgroundColor: "black", flexGrow: 1 }}
        >
          <SafeAreaView>
            <Header
              title="Welcome back!"
              subtitle={"What do you feel like today?"}
            />
            <ListTitle
              title={`New Released Music Videos`}
              fontFamily={Circular}
              additionalTitleStyles={styles.additionalTitleStyles}
            />
            <YoutubeCarousel data={musicVideos} />
            {!sections?.content?.length ? (
              <Text style={{ color: "white" }}>Loading...</Text>
            ) : (
              <Fragment>
                <ListTitle
                  title={sections.title}
                  fontFamily={Circular}
                  additionalTitleStyles={styles.additionalTitleStyles}
                />
                <SectionList data={sections.content} />
              </Fragment>
            )}
            <ListTitle
              title={"Trending"}
              fontFamily={Circular}
              includesArrow
              onArrowPress={() =>
                navigation.navigate("DisplayList", {
                  keyTitle: "Songs",
                  subKeyTitle: "Trending",
                  data: topTracks,
                })
              }
              additionalTitleStyles={{ ...styles.additionalTitleStyles }}
            />
            {!topTracks?.length ? (
              <Text style={{ color: "white" }}>Loading...</Text>
            ) : (
              <TrackList data={topTracks} />
            )}
            {!randomSection?.content?.length ? (
              <Text style={{ color: "white" }}>Loading...</Text>
            ) : (
              <>
                <ListTitle
                  title={randomSection?.title}
                  fontFamily={Circular}
                  additionalTitleStyles={styles.additionalTitleStyles}
                />
                <SectionList data={randomSection.content} />
              </>
            )}

            {!secondaryTracks?.songs?.length ? (
              <Text style={{ color: "white" }}>Loading...</Text>
            ) : (
              <>
                <ListTitle
                  title={secondaryTracks.title}
                  fontFamily={Circular}
                  includesArrow={false}
                  descriptiveFont={Normal}
                  descriptiveText={secondaryTracks.description}
                  additionalTitleStyles={styles.additionalTitleStyles}
                  image={secondaryTracks?.image}
                />

                <Tracks data={secondaryTracks.songs} />
              </>
            )}

            <ListTitle
              title={lastSection?.title}
              fontFamily={Circular}
              additionalTitleStyles={styles.additionalTitleStyles}
            />

            <SectionList data={lastSection?.content} />
          </SafeAreaView>
        </ScrollView>
      )}
    </Fragment>
  );
}
