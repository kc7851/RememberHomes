import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Platform, StatusBar } from "react-native";
import StackApp from "./navigation/AppNavigator";

import store from "./store";

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <StackApp />
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/robot-dev.png"),
      require("./assets/robot-prod.png")
    ])
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
