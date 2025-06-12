import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding/Onboarding';
import GetStarted from './screens/GetStarted/GetStarted';

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
      {/* <GetStarted /> */}
      <StatusBar style="auto" />
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
