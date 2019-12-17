import { createBottomTabNavigator } from "react-navigation-tabs";

import HouseStack from "./HouseStack";
import HelpStack from "./HelpStack";
import WorldCupStack from "./WorldCupStack";

const TabNavigator = createBottomTabNavigator({
  HouseStack,
  WorldCupStack,
  HelpStack
});

export default TabNavigator;
