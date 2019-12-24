import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import InfoList from "../screens/InfoList";

const InfoStack = createStackNavigator(
  {
    InfoList: {
      screen: InfoList,
      navigationOptions: () => ({
        title: "필수 정보 리스트",
        headerTitleStyle: {
          fontSize: 24
        }
      })
    }
  },
  {
    headerMode: `${Platform.OS === "ios" ? "float" : "screen"}`,
    headerBackTitleVisible: false,
    headerTransitionPreset: "uikit"
  }
);

InfoStack.navigationOptions = {
  tabBarLabel: "필수정보",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default InfoStack;
