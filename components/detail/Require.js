import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Require({ title, description, unit }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}:</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
        <Text style={styles.unitText}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "center"
  },
  title: {
    flex: 0.5,
    justifyContent: "center"
  },
  description: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  titleText: {
    fontSize: 20,
    justifyContent: "center"
  },
  descriptionText: {
    fontSize: 20,
    justifyContent: "center"
  },
  unitText: { fontSize: 14, alignItems: "flex-end", justifyContent: "center" }
});

export default Require;
