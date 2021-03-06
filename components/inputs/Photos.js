import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import Photo from "../camera/Photo";
import { setInputs } from "../../redux/actions";

function Photos() {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const photos = inputs.photos;
  const text = photos.length > 0 ? "사진:" : "";

  const onDeletePhoto = fileName => {
    const newPhotos = photos.filter(photo => photo !== fileName);
    const newInputs = {
      ...inputs,
      photos: newPhotos
    };
    dispatch(setInputs(newInputs));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>{text}</Text>
      </View>
      {photos &&
        photos.map(url => {
          return (
            <Photo
              key={url}
              uri={url}
              onDelete={onDeletePhoto}
            />
          );
        })}
    </View>
  );
}

export default Photos;
