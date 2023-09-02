import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Firstpage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is the First Page of the app</Text>
      <Button
            title='Go to Second Page'
            onPress={()=>navigation.navigate('SecondPage')}
      />
    </View>
  )
}

export default Firstpage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
    });