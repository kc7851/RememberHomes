import * as FileSystem from "expo-file-system";

export const PHOTOS_DIR = FileSystem.documentDirectory + "photos/";

export const mkdir = async name => {
  const file = await FileSystem.getInfoAsync(
    FileSystem.documentDirectory + name
  );
  if (!file.exists) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + name
    ).catch(e => {
      console.log(e);
    });
  }
};

export const move = async (from, to) => {
  await FileSystem.moveAsync({ from, to });
};

export const cleaner = async savedList => {
  const fileList = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
  fileList.filter(file => savedList.indexOf(PHOTOS_DIR + file) < 0)
    .forEach(remove);
};

const remove = async name => {
  await FileSystem.deleteAsync(PHOTOS_DIR + name);
};
