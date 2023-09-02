import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import Firstpage from "./pages/Firstpage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

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
        initialRouteName="Home"
        screenOptions={{
          headerStyle:{
            backgroundColor: '#008b8b'
          },
          headerTintColor: '#ffff',
          headerTitleStyle:{
            fontWeight: 'bold'
          }
        }}
      >
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Detail" component={DetailsScreen} /> */}

        <Stack.Screen name='Firstpage' component={Firstpage}/>
        <Stack.Screen name='SecondPage' component={SecondPage}/>
        <Stack.Screen name='ThirdPage' component={ThirdPage}/> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;