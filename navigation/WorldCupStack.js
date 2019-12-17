import React from "react";
import { Platform } from "react-native";
import { createSwitchNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import WorldCupStart from "../screens/WorldCupStart";
import WorldCupPlay from "../screens/WorldCupPlay";
import WorldCupFinish from "../screens/WorldCupFinish";

const WorldCupStack = createSwitchNavigator(
  {
    WorldCupStart: {
      screen: WorldCupStart
    },
    WorldCupPlay: {
      screen: WorldCupPlay
    },
    WorldCupFinish: {
      screen: WorldCupFinish
    }
  },
  {
    initialRouteName: "WorldCupStart"
  }
);

WorldCupStack.navigationOptions = {
  tabBarLabel: "집 월드컵",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-trophy" : "md-trophy"}
    />
  )
};

export default WorldCupStack;
