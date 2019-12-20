import { createBottomTabNavigator } from "react-navigation-tabs";

import HouseStack from "./HouseStack";
import HelpStack from "./HelpStack";
import WorldCupSwitch from "./WorldCupSwitch";

const TabNavigator = createBottomTabNavigator({
  HouseStack,
  WorldCupSwitch,
  HelpStack
});

export default TabNavigator;
