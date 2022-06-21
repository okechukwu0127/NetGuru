import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {HistoryItem} from '../components/HistoryItem';
import {MOCKED_HISTORY, MockedHistory} from '../fixtures/history';
import {formatDate} from '../utils/dates';

export const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>History</Text>
      <ScrollView contentContainerStyle={styles.listWrapper}>
        {MOCKED_HISTORY.map((item: MockedHistory) => (
          <HistoryItem
            date={formatDate(item.date)}
            name={item.name}
            temperature={item.temperature}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
    margin: 16,
  },
  listWrapper: {
    flex: 1,
  },
});
