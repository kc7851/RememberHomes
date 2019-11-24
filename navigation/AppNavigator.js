import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HouseList from "../screens/HouseList";
import HouseInputs from "../screens/HouseInputs";
import HouseDetail from "../screens/HouseDetail";

const MainNavigator = createStackNavigator(
  {
    HouseList: {
      screen: HouseList,
      navigationOptions: () => ({
        title: `리스트`
      })
    },
    HouseInputs: {
      screen: HouseInputs,
      navigationOptions: () => ({
        title: `정보 입력`
      })
    },
    HouseDetail: {
      screen: HouseDetail,
      navigationOptions: () => ({
        title: `상세 정보`
      })
    }
  },
  {
    initialRouteName: "HouseList"
  }
);

const StackApp = createAppContainer(MainNavigator);

export default StackApp;
