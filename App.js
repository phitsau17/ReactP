import { StyleSheet, Text, View } from "react-native";
import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
import DisplayandImage from "./components/DisplayandImage";
import LotsOfGreeting from "./components/LotsOfGreeting";
import CustomText from "./components/CustomText";
import Counter from "./components/Counter";
import MyInput from "./components/MyInput";
import IncrementCounter from "./components/IncrementCounter";
import Form from "./components/Form";
import Login from "./components/Login";
import Recap from "./components/Recap";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'

export default function App() {
  const App = () => {
    return (
      <View style={styles.container}>
        {/* <ViewBoxesWithColorAndText/> */}
        {/* <DisplayandImage/> */}
        {/* <LotsOfGreeting/> */}
        {/* <CustomText/> */}
        {/* <Counter/> */}
        {/* <MyInput/> */}
        {/* <IncrementCounter/> */}
        {/* <Form/> */}
        {/* <Login/> */}
        <Recap/>
        <TouchableExample/>
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