import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React, { Fragment } from "react";
import Ripple from "react-native-material-ripple";
import { Feather } from "@expo/vector-icons";
import { NoResultsComponent } from "../../NoResultsComponent/NoResultsComponent";
import { useInitialFonts, Fonts } from "../../../Hooks";
interface List {
  list: any;
}
const MusicSheetCard = ({ list }: List) => {
  const FontLoaded = useInitialFonts();

  return (
    <Fragment>
      {list.length ? (
        <FlatList
          data={list}
          showsHorizontalScrollIndicator={true}
          indicatorStyle="white"
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Fragment>
                <Ripple
                  rippleDuration={400}
                  rippleColor="gray"
                  rippleOpacity={0.3}
                >
                  <View
                    style={{
                      ...styles.container,
                      marginBottom: index === list.length - 1 ? 40 : 0,
                    }}
                  >
                    <View style={styles.contentContainer}>
                      <View
                        style={{
                          ...styles.numbers,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {index + 1}.
                        </Text>
                      </View>

                      <View>
                        <Image
                          source={{
                            uri: !item?.coverArt
                              ? item.album?.image
                              : item.coverArt,
                          }}
                          style={styles.image}
                        />
                      </View>

                      <View style={styles.detailsContainer}>
                        <Text
                          numberOfLines={2}
                          style={{
                            ...styles.name,
                            maxWidth: 200,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.name}
                        </Text>

                        <Text
                          style={{
                            ...styles.albumName,
                            fontFamily: FontLoaded
                              ? Fonts.CircularNormal
                              : null,
                          }}
                        >
                          {item.album?.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.icon}>
                      <Feather name="chevron-right" size={24} color="white" />
                    </View>
                  </View>
                </Ripple>
              </Fragment>
            );
          }}
        />
      ) : (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <NoResultsComponent />
        </View>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
  },
  numbers: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 10,
    left: 1,
  },
  detailsContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  name: { color: "white" },
  albumName: { color: "gray", marginTop: 0, fontSize: 12 },
  icon: {
    marginRight: 20,
    justifyContent: "center",
  },
});
export default MusicSheetCard;
