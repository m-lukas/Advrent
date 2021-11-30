/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

const Door = ({navigation, color, number, day, size, content}) => {
  let customStyle = {};

  if (color !== '' && color != null) {
    customStyle.backgroundColor = color;
  }

  if (size !== '' && size != null) {
    customStyle.flex = size;
  }

  const open = () => {
    let supposedDate = new Date(`2021-12-${day}`);
    let currentDate = new Date();

    if (currentDate < supposedDate) {
      Alert.alert('Not yet 😝');
    } else {
      navigation.navigate('Content', {content: content, color: color});
    }
  };

  return (
    <TouchableOpacity
      onPress={() => open()}
      style={[styles.container, customStyle]}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  number: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Door;
