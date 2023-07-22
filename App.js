import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import CustomText from './components/CustomText';
import Couter from './components/Couter';
import MyInput from './components/MyInput';
import IncrementCiunter from './components/IncrementCiunter';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxesWithColorAndText/>  */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* <CustomText/> */}
      {/* <Couter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCiunter/> */}
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 35,
  },
  textInputStyle: {
      width: '100%',
      height: 40,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 15,
  }
});
