import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePostScreen from "./screens/CreatePostScreen";
import IndexScreen from "./screens/IndexScreen";

const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Details" onPress={() => navigation.navigate('Detail')} />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Detail Screen</Text>
//     </View>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode = 'model'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b'
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "MainPage" }} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;