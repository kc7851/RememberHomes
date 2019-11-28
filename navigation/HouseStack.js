import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import HouseList from "../screens/HouseList";
import HouseInputs from "../screens/HouseInputs";
import HouseDetail from "../screens/HouseDetail";

const HouseStack = createStackNavigator(
    {
      HouseList: {
        screen: HouseList,
        navigationOptions: () => ({
          title: "리스트",
          headerTitleStyle: {
            fontSize: 24
          }
        })
      },
      HouseInputs: {
        screen: HouseInputs,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.title}`,
          headerTitleStyle: {
            fontSize: 24
          }
        })
      },
      HouseDetail: {
        screen: HouseDetail,
        navigationOptions: () => ({
          title: "집 상세",
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
  
  HouseStack.navigationOptions = {
    tabBarLabel: "리스트",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "ios-home" : "md-home"}
      />
    )
  };

  export default HouseStack;