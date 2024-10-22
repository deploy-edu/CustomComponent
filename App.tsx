import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Item from './Item';
import Item2 from './Item2';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Item title="Hello Item1" />
      <Item2 title="Hello Item2" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
