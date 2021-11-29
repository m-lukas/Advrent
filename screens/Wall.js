/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Snow from 'react-native-snow';
import Door from '../components/Door';

const Wall = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Snow />
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#99AA38"
          number="23"
          day="23"
          size={2}
        />
        <Door
          navigation={navigation}
          color="#004346"
          number="16"
          day="16"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#FCB07E"
          number="8"
          day="08"
          size={2}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#EF6F6C"
          number="18"
          day="18"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#D36135"
          number="3"
          day="03"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#261447"
          number="15"
          day="15"
          size={3}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#3581b8"
          number="7"
          day="07"
          size={2}
        />
        <Door
          navigation={navigation}
          color="#CC978E"
          number="12"
          day="12"
          size={2}
        />
        <Door
          navigation={navigation}
          color="#80FFE8"
          number="19"
          day="19"
          size={1}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#FFBA08"
          number="22"
          day="22"
          size={3}
        />
        <Door
          navigation={navigation}
          color="#C3BF6D"
          number="6"
          day="06"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#C1BDDB"
          number="13"
          day="13"
          size={1}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#72195A"
          number="10"
          day="10"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#FAA4BD"
          number="21"
          day="21"
          size={2}
        />
        <Door
          navigation={navigation}
          color="#CDE7BE"
          number="5"
          day="05"
          size={1}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#A3C4BC"
          number="17"
          day="17"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#3e5641"
          number="1"
          day="01"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#0D3B66"
          number="20"
          day="20"
          size={3}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#C6D8FF"
          number="9"
          day="09"
          size={2}
        />
        <Door
          navigation={navigation}
          color="#0F7173"
          number="14"
          day="14"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#A24936"
          number="2"
          day="02"
          size={1}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#09BC8A"
          number="24"
          day="24"
          size={3}
        />
        <Door
          navigation={navigation}
          color="#83BCA9"
          number="4"
          day="04"
          size={1}
        />
        <Door
          navigation={navigation}
          color="#8499B1"
          number="11"
          day="11"
          size={1}
        />
      </View>
      {/* */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Wall;
