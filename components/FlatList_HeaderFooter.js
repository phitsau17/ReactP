import { StyleSheet, Text, View, FlatList, SafeAreaView  } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios';


const dummyArray = [
    { id: 1, title: 'Button' },
    { id: 2, title: 'Card' },
    { id: 3, title: 'Input' },
    { id: 4, title: 'Avatar' },
    { id: 5, title: 'CheckBox' },
    { id: 6, title: 'Header' },
    { id: 7, title: 'Icon' },
    { id: 8, title: 'Lists' },
    { id: 9, title: 'Rating' },
    { id: 10, title: 'Pricing' },
    { id: 11, title: 'Avatar' },
    { id: 12, title: 'CheckBox' },
    { id: 13, title: 'Header' },
    { id: 14, title: 'Icon' },
    { id: 15, title: 'Lists' },
    ];

const emptyListMessage = ({item}) => {

    return(
        <Text style = {styles.item} 
              onPress={() => getItem(item)}>
                No Data Found
        </Text>
    )

}


const FlatList_HeaderFooter = () => {
    const[listItems, setItems] = useState(dummyArray);  

    const ItemView = ({item}) => {

        return( //Flat Item
            <View>

                <Text 
                    style = {styles.item} 
                    onPress={() => getItem(item)}>

                    {item.id + '.' + item.title.toUpperCase()}

                </Text>

            </View>

        );

      };


      const ListHeader = () => {
        return(
            <View style = {styles.headerFooterStyle}>

                <Text style = {styles.textStyle}>

                    React Native Component

                </Text>

            </View>
        )
      }


      const ListFooter = () => {
        return(
            <View style = {styles.headerFooterStyle}>

                <Text style = {styles.textStyle}>

                Thai-Nichi Institute of technology

                </Text>

            </View>
        )
      }


      const getItem = (item) =>{
        //Click on item
        alert('ID:' + item.id + 'Value' + item.value);

      }

      const ItemSeparatorView = () =>{

        return(

            <View style = {{height: 0.5, width: '100%', backgroundColor: '#C8C8C8', }}/>
        );

      };



  return (
    <SafeAreaView style = {{flex:1}}>

        <View style = {styles.container}>

            <FlatList 

                data={listItems}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                keyExtractor={(item) => item.id.toString()}

                //Header to show above listview
                ListHeaderComponent={ListHeader}
                //Footer to show above listview
                ListFooterComponent={ListFooter}

                ListEmptyComponent={EmpthyListMessage }
            />

        </View>

    </SafeAreaView>
  )
}

export default FlatList_HeaderFooter

const styles = StyleSheet.create({
    emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    },
    itemStyle: {
    padding: 10,
    },
    headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
    },
    textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
    },
    });