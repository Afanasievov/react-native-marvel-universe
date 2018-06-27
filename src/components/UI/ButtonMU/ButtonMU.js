import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, Platform } from 'react-native';
import getStyles from './ButtonMU.styles';

const buttonMU = (props) => {
  const styles = getStyles(props.btnType);
  const content = (
    <View
      style={[
        styles.button,
        props.disabled ? styles.disabled : null,
      ]}
    >
      <Text style={props.disabled ? styles.disabled : styles.text}>{props.title}</Text>
    </View>
  );

  if (props.disabled) {
    return content;
  }
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={props.onPress}>{content}</TouchableNativeFeedback>;
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export default buttonMU;
