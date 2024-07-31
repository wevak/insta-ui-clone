import { View, Text, StyleSheet } from 'react-native';

export default function BagScreen() {
  return (
    <View style={styles.center}>
      <Text>Bag Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
