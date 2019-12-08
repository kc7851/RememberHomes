import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputs } from "../redux/actions";

import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function CustomCamera() {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);

  const [permission, setPermission] = useState(null);

  let camera = null;

  const askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    setPermission(status === "granted");
    // await FileSystem.deleteAsync(FileSystem.documentDirectory + 'photos');
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "photos"
    ).catch(e => {
      console.log(e, "Directory exists");
    });
  };

  const takePicture = () => {
    if (camera) {
      camera.takePictureAsync({ onPictureSaved: onPictureSaved });
    }
  };

  const onPictureSaved = async photo => {
    const fileName = `${Date.now()}`;

    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${fileName}.jpg`
    });
    const newInputs = {
      ...inputs,
      photos: [...inputs.photos, `${fileName}.jpg`]
    };
    dispatch(setInputs(newInputs));
    console.log("save photo");
  };

  useEffect(() => {
    askPermission();
  }, []);

  if (permission === null) {
    return <View />;
  } else if (permission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          ref={ref => {
            camera = ref;
          }}
        >
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBar}>
              <TouchableOpacity
                onPress={takePicture}
                style={{ alignSelf: "center" }}
              >
                <Ionicons name="ios-radio-button-on" size={70} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  bottomBar: {
    flex: 1,
    paddingBottom: 25,
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    justifyContent: "center"
  }
});

export default CustomCamera;
