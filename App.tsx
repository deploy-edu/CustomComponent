import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

const Item: FC<Props> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

function Item2({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Item title="Hello Item1" />
      <Item2 title="Hello Item2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
