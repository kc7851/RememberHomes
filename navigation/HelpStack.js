import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import HelpList from "../screens/HelpList";
import HelpDetail from "../screens/HelpDetail";

const HelpStack = createStackNavigator(
  {
    HelpList: {
      screen: HelpList,
      navigationOptions: () => ({
        title: "필수 정보 리스트",
        headerTitleStyle: {
          fontSize: 24
        }
      })
    },
    HelpDetail: {
      screen: HelpDetail,
      navigationOptions: () => ({
        title: "상세 정보",
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

HelpStack.navigationOptions = {
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

export default HelpStack;
