import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import * as WebBrowser from "expo-web-browser";

function InfoList({ title, array }) {
  const open = url => WebBrowser.openBrowserAsync(url);

  return (
    <View style={styles.componentsContainer}>
      <Text style={{ fontSize: 24, paddingBottom: 10 }}>{title}</Text>
      <FlatList
        data={array}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => open(item.url)}
            >
              <Text style={styles.listItem}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  componentsContainer: {
    padding: 15,
    alignItems: "center"
  },
  listItem: {
    paddingVertical: 5,
    fontSize: 18,
    overflow: "hidden"
  }
});

export default InfoList;
