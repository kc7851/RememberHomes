import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: TabNavigator,
  })
);
