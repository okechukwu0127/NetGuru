import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

interface Props {
  date: string;
  name: string;
  temperature: number;
}

export const HistoryItem = ({date, name, temperature}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>
        {name} - {temperature} °C
      </Text>
      <Text style={styles.dateLabel}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  dateLabel: {
    opacity: 0.5,
  },
});
