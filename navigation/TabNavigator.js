import { createBottomTabNavigator } from "react-navigation-tabs";

import HouseStack from "./HouseStack";
import InfoStack from "./InfoStack";
import WorldCupSwitch from "./WorldCupSwitch";

const TabNavigator = createBottomTabNavigator({
  HouseStack,
  WorldCupSwitch,
  InfoStack
});

export default TabNavigator;
