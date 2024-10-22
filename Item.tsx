import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

const Item: FC<Props> = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: '#f9c2ff',
  },
  itemText: {
    fontSize: 20,
  },
});

export default Item;
