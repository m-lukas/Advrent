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
          content={{
            img: 'Gruenau_3_4',
            description: 'Grünau, 3.4.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#004346"
          number="16"
          day="16"
          size={1}
          content={{
            img: 'Helsinki_17_7',
            description: 'Helsinki, 17.7.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#FCB07E"
          number="8"
          day="08"
          size={2}
          content={{
            img: 'Kamenz_23_9_2',
            description: 'Kamenz, 23.9.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#EF6F6C"
          number="18"
          day="18"
          size={1}
          content={{
            img: 'Mitte_24_10',
            description: 'Mitte, 24.10.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#D36135"
          number="3"
          day="03"
          size={1}
          content={{
            img: 'Marzahn_25_4_1',
            description: 'Marzahn, 25.4.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#261447"
          number="15"
          day="15"
          size={3}
          content={{
            img: 'Kamenz_25_9',
            description: 'Kamenz, 25.9.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#3581b8"
          number="7"
          day="07"
          size={2}
          content={{
            img: 'Lichtenberg_27_4',
            description: 'Lichtenberg, 27.4.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#CC978E"
          number="12"
          day="12"
          size={2}
          content={{
            img: 'Kamenz_28_3',
            description: 'Kamenz, 28.3.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#08A4BD"
          number="19"
          day="19"
          size={1}
          content={{
            img: 'Marzahn_25_4_2',
            description: 'Marzahn, 25.4.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#FFBA08"
          number="22"
          day="22"
          size={3}
          content={{
            img: 'Spindlersfeld_16_4',
            description: 'Spindlersfeld, 16.4.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#C3BF6D"
          number="6"
          day="06"
          size={1}
          content={{
            img: 'Treptow_10_10',
            description: 'Treptow, 10.10.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#C1BDDB"
          number="13"
          day="13"
          size={1}
          content={{
            img: 'Tempelhof_27_6',
            description: 'Tempelhof, 27.6.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#72195A"
          number="10"
          day="10"
          size={1}
          content={{
            img: 'Tampere_20_7_2',
            description: 'Tampere, 20.7.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#FAA4BD"
          number="21"
          day="21"
          size={2}
          content={{
            img: 'Mitte_13_10',
            description: 'Mitte, 13.10.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#CDE7BE"
          number="5"
          day="05"
          size={1}
          content={{
            img: 'Helsinki_19_7',
            description: 'Helsinki, 19.7.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#A3C4BC"
          number="17"
          day="17"
          size={1}
          content={{
            img: 'Neukoelln_30_10',
            description: 'Neukölln, 30.10.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#3e5641"
          number="1"
          day="01"
          size={1}
          content={{
            img: 'Oulu_25_7',
            description: 'Oulu, 25.7.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#0D3B66"
          number="20"
          day="20"
          size={3}
          content={{
            img: 'Schoeneweide_1_1',
            description: 'Schöneweide, 1.1.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#C6D8FF"
          number="9"
          day="09"
          size={2}
          content={{
            img: 'Marzahn_25_4_3',
            description: 'Marzahn, 25.4.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#0F7173"
          number="14"
          day="14"
          size={1}
          content={{
            img: 'Friedrichshain_10_4',
            description: 'Friedrichshain, 10.4.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#A24936"
          number="2"
          day="02"
          size={1}
          content={{
            img: 'Schwerin_16_5',
            description: 'Schwerin, 16.5.2021',
            special: 'Ü-Eier',
          }}
        />
      </View>
      <View style={styles.row}>
        <Door
          navigation={navigation}
          color="#09BC8A"
          number="24"
          day="24"
          size={3}
          content={{
            img: 'Schönefeld_23_11',
            description: 'Schönefeld, 23.11.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#83BCA9"
          number="4"
          day="04"
          size={1}
          content={{
            img: 'Treptow_14_2',
            description: 'Treptow, 14.2.2021',
            special: 'Ü-Eier',
          }}
        />
        <Door
          navigation={navigation}
          color="#8499B1"
          number="11"
          day="11"
          size={1}
          content={{
            img: 'Mitte_24_10_2',
            description: 'Mitte, 24.10.2021',
            special: 'Ü-Eier',
          }}
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
