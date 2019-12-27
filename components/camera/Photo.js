import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button
} from "react-native";

function Photo({ uri, onDelete }) {
  return (
    <View style={styles.pictureWrapper}>
      <Image style={styles.picture} source={{ uri }} />
      <View style={styles.pictureDelete}>
        <Button title="X" onPress={() => onDelete(uri)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    position: "absolute",
    right: 0,
    left: 0,
    height: 300,
    resizeMode: "contain"
  },
  pictureDelete: {
    flex: 0.1,
    position: "absolute",
    right: 0,
    left: 280,
    top: 0,
    bottom: 150,
  },
  pictureWrapper: {
    flexDirection: "row",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#eee"
  }
});

export default Photo;
