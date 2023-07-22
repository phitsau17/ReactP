import { StyleSheet, Text, View ,Button, TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

const Login = () => {

    const [name,setName] = useState('');
    const [mail,setMail] = useState('');

    const checkTextInput = () => {

        if (!name.trim()){
            alert('Please Enter Name');
            return;
        }
        else if(!mail.trim()){
            alert('Please Enter Mail');
            return;
        }
        else if(!name.trim() & mail.trim()){
            alert('Please Enter Name & Mail');
            return;
        }

            alert(Successfully);
            return;

    }

  return (
    <View>
            <TextInput
                placeholder = 'Enter Name'
                style = {styles.textInputStyle}
                value = {name}
                onChangeText={(value)=>{setName(value)}}
            />
            <Text>{'\n\n'}</Text>

            <TextInput
                placeholder = 'Enter Mail'
                style = {styles.textInputStyle}
                value = {mail}
                onChangeText={(value)=>{setMail(value)}}
            />
            <Text>{'\n\n'}</Text>
            <Button
                title='SUBMIT'
                onPress={()=>{checkTextInput()}}
            /> 
    </View>
  )
}

export default Login

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