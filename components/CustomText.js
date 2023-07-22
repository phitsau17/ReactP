import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fName1,lname1}) => {
  return (
   <Text>Your First Name is {fName1} and Last Name is {lname1}</Text>);

 }

const CustomText = () => {
  return (
  <View>
      <MyCustomTextWith 
      fName1={"Phitsanu"}
      lname1={"Iamphong"}/>
      <MyCustomTextWith
      fName1={"Alice"}
      lname1={"Red"}/>
  </View> );
}

export default CustomText