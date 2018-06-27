import { createStackNavigator } from 'react-navigation';

import * as SCREENS from '../../constants/screens';
import Heroes from '../../screens/Heroes/Heroes';
import Hero from '../../screens/Heroes/Hero/Hero';

export default createStackNavigator(
  {
    [SCREENS.HEROES]: { screen: Heroes },
    [SCREENS.HERO]: { screen: Hero },
  },
  {
    initialRouteName: SCREENS.HEROES,
  },
);
