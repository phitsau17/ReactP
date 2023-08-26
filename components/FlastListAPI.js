import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { RefreshControl } from 'react-native-web';

const FlastListAPI = () => {

    const[refreshing, setRefreshing] = useState(true);
    const[dataSource, setDataSource] = useState([]);

    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json)
        .then((responseJson) => {
            setDataSource(responseJson);
            setRefreshing(false);

        }).catch((error) => {
            console.error(error);
        });
    };
    useEffect(() => {
        getData();

    },[]);
    const getItem = (item) =>{
        //Funtion for click
        alert('ID : '+ item.id + 'Title : ' + item.title)
    };

    const ItemView = ({item}) =>{
        return(
            <Text style= {styles.itemStyle}>{item.title}</Text>
        )
    }



    const ItemSeparatorView = () =>{
        return(
            //Flatlist Item Separator
            <View
             style = {{
                height: 0.5,
                width: '100%',
                backgroundColor: '#C8C8C8'
             }}
            />
        )
    };
const onRefresh = () =>{
    //Clear old data
    setDataSource([]);
    //Call the service
    setData();

}
    return(
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                {refreshing ? <ActivityIndicator/> : null}
                <FlatList
                    data = {dataSource}
                    keyExtractor={(index) => index.toSring()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl>
                            refreshing = {refreshing}
                            onRefresh = {onRefresh}
                        </RefreshControl>
                    }
    
    
                />
    
            </View>
    
        </SafeAreaView>
    )
}





export default FlastListAPI

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    },
    itemStyle: {
    fontSize: 20,
    padding: 10,
    },
});