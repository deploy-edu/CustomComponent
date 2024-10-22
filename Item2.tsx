import { Text, View } from 'react-native';

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

export default Item2;
