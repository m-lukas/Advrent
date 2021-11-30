/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View, Alert} from 'react-native';

const Content = ({navigation, route}) => {
  const images = {
    Gruenau_3_4: require('../images/Gruenau_3_4.jpg'),
    Helsinki_17_7: require('../images/Helsinki_17_7.jpg'),
    Helsinki_19_7: require('../images/Helsinki_19_7.jpg'),
    Kamenz_23_9_2: require('../images/Kamenz_23_9_2.jpg'),
    Kamenz_23_9: require('../images/Kamenz_23_9.jpg'),
    Kamenz_25_9: require('../images/Kamenz_25_9.jpg'),
    Lichtenberg_27_4: require('../images/Lichtenberg_27_4.jpg'),
    Marzahn_25_4_1: require('../images/Marzahn_25_4_1.jpg'),
    Marzahn_25_4_2: require('../images/Marzahn_25_4_2.jpg'),
    Marzahn_25_4_3: require('../images/Marzahn_25_4_3.jpg'),
    Marzahn_25_4_4: require('../images/Marzahn_25_4_4.jpg'),
    Marzahn_25_4_5: require('../images/Marzahn_25_4_5.jpg'),
    Mitte_12_6: require('../images/Mitte_12_6.jpg'),
    Mitte_13_10: require('../images/Mitte_13_10.jpg'),
    Mitte_24_10: require('../images/Mitte_24_10.jpg'),
    Neukoelln_30_10: require('../images/Neukoelln_30_10.jpg'),
    Oulu_25_7: require('../images/Oulu_25_7.jpg'),
    Schoeneweide_1_1: require('../images/Schoeneweide_1_1.jpg'),
    Spindlersfeld_16_4: require('../images/Spindlersfeld_16_4.jpg'),
    Tampere_20_7_2: require('../images/Tampere_20_7_2.jpg'),
    Tampere_20_7: require('../images/Tampere_20_7.jpg'),
    Tempelhof_27_6: require('../images/Tempelhof_27_6.jpg'),
    Treptow_14_2: require('../images/Treptow_14_2.jpg'),
  };

  let file = images.Neukoelln_30_10;
  file = images[route.params.content.img];

  let description = route.params.content.description;
  let special = route.params.content.special;
  let color = route.params.color;

  let colorStyle = {};
  if (color !== '' && color !== null) {
    colorStyle.backgroundColor = color;
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <Image style={[styles.image, styles.white, {flex: 10}]} source={file} />
      <View style={[styles.descriptionContainer, colorStyle, {flex: 1}]}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={[styles.specialContainer, styles.white, colorStyle, {flex: 1}]}>
        <Text style={styles.specialPrefix}>today: </Text>
        <Text style={styles.specialItem}>{special}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  white: {
    backgroundColor: 'white',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  description: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  specialContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  specialPrefix: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
    marginBottom: 3,
  },
  specialItem: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Content;
