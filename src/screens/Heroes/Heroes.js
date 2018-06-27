import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Heroes.styles';
import * as SCREENS from '../../constants/screens';
import * as BUTTON_TYPES from '../../constants/buttonTypes';
import ButtonMU from '../../components/UI/ButtonMU/ButtonMU';

class Heroes extends Component {
  componentDidMount() {
    console.log('CDM : Heroes --- props', this.props);
  }

  onButtonPress = () => {
    this.props.navigation.navigate(SCREENS.HERO);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Heroes Screen</Text>
        <ButtonMU
          onPress={this.onButtonPress}
          btnType={BUTTON_TYPES.BASIC}
          title="Go to Details"
        />
      </View>
    );
  }
}

export default Heroes;
