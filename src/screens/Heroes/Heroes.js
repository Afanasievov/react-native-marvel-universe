import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './Heroes.styles';
import * as SCREENS from '../../constants/screens';

class Heroes extends Component {
  componentDidMount() {
    console.log('CDM : Heroes --- props', this.props);
  }

  onButtonPress = () => {
    console.log('SCREENS.HERO: ', SCREENS.HERO);
    this.props.navigation.navigate(SCREENS.HERO);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Heroes Screen</Text>
        <Button onPress={this.onButtonPress} title="Go to Details" />
      </View>
    );
  }
}

export default Heroes;
