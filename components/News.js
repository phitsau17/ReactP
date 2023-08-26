import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native'
import React, {useEffect,useState} from 'react'

const News = () => {
    const [arcicles,setArticles] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{


    },[])

    const getData = async () => {
        try{
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a144105db6cf44128e712a4e1e9a1f40')
            const data = await response.json();
            setArticles(data.arcicles);
            setLoading(false);
        }
        catch(error) {
            console.error('Error ferching users', error);
            setLoading(false);
        };

    }

    const _renderItem = ({item}) =>{
        let urlToImage = (item.urlToImage !== null)? item.urlToImage : 'http://via.placeholder.com/150*100'

        return(
            <View style ={{flex:1}}>
                <View style = {{flex:1, flexDirection:'row',margin:10}}>
                    <Image
                        source = {{uri : urlToImage}}
                        resizeMode = 'cover'
                        style = {{flex:1, width:'100%',height:'100%'}}

                    />
                    <View style = {{width:2000,alignSelf:'center', margin:5}}>
                        <Text style = {{fontSize:14, marginBottom:5}}>{item.title}</Text>
                        <Text style = {{fontSize:10, marginBottom:5}}>{item.source.name}</Text>

                    </View>

                </View>

            </View>

        );

    };

    const _onRefresh = () => {
        setLoading(true);
        getData();

        return(
            <View>
                {
                    loading?(<ActivityIndicator size="large" color="#0000FF"/>)
                    : (<FlatList                 
                        data={articles}
                        keyExtractor={(index)=>index.toString()}
                        renderItem={_renderItem}
                        refreshing = {loading}
                        onRefresh={_onRefresh}/>)
                }

            </View>

        )

    }


  return (
    <View>
      <Text>News</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({})