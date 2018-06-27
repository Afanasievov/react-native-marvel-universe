import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Hero.styles';
import * as SCREENS from '../../../constants/screens';
import * as BUTTON_TYPES from '../../../constants/buttonTypes';
import ButtonMU from '../../../components/UI/ButtonMU/ButtonMU';

class Hero extends Component {
  componentDidMount() {
    console.log('CDM : Hero --- props', this.props);
  }

  onButtonPress = () => {
    console.log('SCREENS.HEROES: ', SCREENS.HEROES);
    this.props.navigation.navigate(SCREENS.HEROES);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hero Info</Text>
        <ButtonMU
          onPress={this.onButtonPress}
          btnType={BUTTON_TYPES.PRIMARY}
          title="Go to Heroes"
        />
      </View>
    );
  }
}

export default Hero;
