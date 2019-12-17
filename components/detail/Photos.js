import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import * as FileSystem from "expo-file-system";
const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

function Photos({ houseId }) {
  const house = useSelector(state => state.houses).find(
    house => house.id == houseId
  );
  const photos = house.photos;
  const text = photos.length > 0 ? "사진" : "";

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>{text}</Text>
      </View>
      <ScrollView horizontal={true}>
        {photos &&
          photos.map((fileName, index) => {
            const url = { url: `${PHOTOS_DIR}/${fileName}` };
            return (
              <View key={fileName} style={styles.pictureWrapper}>
                <Image style={styles.picture} source={url} />
                {/* <Text>{index + 1}</Text> */}
                {/* <Photo
                key={fileName}
                uri=
                fileName={fileName}
                onDelete={undefined}
              /> */}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    position: "absolute",
    right: 0,
    left: 0,
    width: 300,
    height: 400,
    resizeMode: "contain"
  },
  pictureWrapper: {
    flexDirection: "row",
    height: 400,
    width: 300,
    // alignItems: "center",
    // justifyContent: "center",
    margin: 10,
    // backgroundColor: "#eee"
  }
});

export default Photos;
