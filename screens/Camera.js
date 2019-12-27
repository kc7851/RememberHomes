import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputs } from "../redux/actions";

import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { mkdir, move } from "../utils/fileSystem";
import { PHOTOS_DIR } from "../utils/fileSystem";

function CustomCamera() {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);

  const [permission, setPermission] = useState(null);

  let camera = null;

  const askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    setPermission(status === "granted");

    mkdir("photos");
  };

  const takePicture = () => {
    if (camera) {
      camera.takePictureAsync({ onPictureSaved: onPictureSaved });
    }
  };

  const onPictureSaved = async photo => {
    const fileName = `${Date.now()}`;

    const saved = `${PHOTOS_DIR}${fileName}.jpg`

    move(photo.uri, saved);

    const newInputs = {
      ...inputs,
      photos: [...inputs.photos, saved]
    };
    dispatch(setInputs(newInputs));
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
