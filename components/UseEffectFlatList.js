import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const UseEffectFlatList = () => {
const[data, setData]= useState([]);
const[isLoading, setIsLoading] = useState(true);

  return (
    <View>
      <Text>UseEffectFlatList</Text>
    </View>
  )
}

export default UseEffectFlatList

const styles = StyleSheet.create({})