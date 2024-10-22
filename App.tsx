import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Item from './Item';

type Props = {
  title: string;
};

function Item2({ title }: Props) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#f9c200',
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

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
