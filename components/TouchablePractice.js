import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'https://jsonplaceholder.typicode.com/posts'
import { Image2 } from 'https://randomuser.me/api/?results=15'
import { TouchableOpacity } from 'react-native-web'


const TouchablePractice = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image/>
        <View/>
        <Text>Login Using Facebook</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyleSheet:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle:{
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle:{
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle:{
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },

})