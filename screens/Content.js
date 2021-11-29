/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Content = ({navigation, route}) => {
  let img = route.params.content.img;
  let description = route.params.content.description;

  return (
    <View style>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Content;
