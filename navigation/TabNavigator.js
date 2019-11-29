import { createBottomTabNavigator } from "react-navigation-tabs";

import HouseStack from "./HouseStack";
import HelpStack from "./HelpStack";

const TabNavigator = createBottomTabNavigator({
  HouseStack,
  HelpStack
});

export default TabNavigator;
