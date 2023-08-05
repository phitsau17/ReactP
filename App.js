import { StyleSheet, Text, View } from 'react-native';
import Recap from './components/Recap';
import TouchablePractice from './components/TouchablePractice';

export default function App() {
  const App = () => {
    return (
      <View style={styles.container}>
      <Recap/>
      <TouchablePractice/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});