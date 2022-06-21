import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Alert,
  //Alert,
  //TouchableOpacity,
} from 'react-native';

import {fetchWeather} from './../api/api';

export const SearchScreen = () => {
  const [value, setValue] = useState<string>('');
  //const [city, setCity] = useState<string>('');
  //const [value, setValue] = useState<string>('');
  const [weatherObject, setWeatherObject] = useState<any[]>([]);

  const fetchWeatherFunction = async () => {
    //alert('dsdd')
    //if(value)
    let {data} = await fetchWeather(value);
    console.log(data);
    setWeatherObject(data);

    try {
      if (await AsyncStorage.getItem('@Weather')) {
        const d = await AsyncStorage.getItem('@Weather');

        let newValue = JSON.parse(d);

        newValue.push(data);

        await AsyncStorage.setItem('@Weather', JSON.stringify(newValue));
      } else {
        // = await AsyncStorage.getItem('@Weather');
        let d = [];
        d.push(data);

        await AsyncStorage.setItem('@Weather', JSON.stringify(d));
      }
    } catch (error) {
      //alert(JSON.stringify(error));
      // Error saving data
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <Text style={styles.title}>Weather App </Text>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <TextInput
          style={styles.input}
          placeholder="Type city name here..."
          onChangeText={e => setValue(e)}
        />
        <View style={styles.button}>
          <Button onPress={fetchWeatherFunction} title="Search" />
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.cityLabel}>{weatherObject?.name}</Text>
        <Text style={styles.temperatureLabel}>{weatherObject?.main?.temp}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    margin: 16,
  },
  title: {
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityLabel: {
    fontSize: 32,
    opacity: 0.5,
  },
  temperatureLabel: {
    fontSize: 48,
    opacity: 0.8,
  },
});
