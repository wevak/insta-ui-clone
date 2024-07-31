import { View, Text, StyleSheet } from 'react-native';

export default function ReelsScreen() {
  return (
    <View style={styles.center}>
      <Text>Reels Screen</Text>
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
