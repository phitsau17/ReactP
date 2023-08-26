import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUsersScreen from './components/RandomUsersScreen'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import FlastListAPI from './components/FlastListAPI'
import News from './components/News'
import ProductScreen from './components/ProductScreen'

export default function App() {
  return (
    <View style={styles.container}>
       <ProductScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});