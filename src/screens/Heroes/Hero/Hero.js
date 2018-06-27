import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './Hero.styles';
import * as SCREENS from '../../../constants/screens';

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
        <Button onPress={this.onButtonPress} title="Go to Heroes" />
      </View>
    );
  }
}

export default Hero;
