import { StyleSheet, Text, View } from 'react-native';
import TouchablePractice from './components/TouchablePractice';
import Example_useEffect from './components/Example_useEffect';
import UseEffectFlatList from './components/UseEffectFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchablePractice/>
      {/* <Example_useEffect/> */}
      <UseEffectFlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});