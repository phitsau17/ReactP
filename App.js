import { View, Text, Button } from 'react-native'
import React from 'react'
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Firstpage from './pages/Firstpage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import CreatePostScreen from "./screens/CreatePostScreen";
import IndexScreen from "./screens/IndexScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator
      stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#50C878",
        },
      }}
    >
      <Stack.Screen name="Firstpage" component={Firstpage} />
    </Stack.Navigator>
  );
}
function SecondScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}a

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#40e0d0",
        },
        drawerStyle: {
          backgroundColor: "#fffdd0",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="FirstPage"
        component={FirstScreenStack}
        options={{ title: "First Drawer", drawerLabel: "First Page Option" }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondScreenStack}
        options={{ title: "Second Drawer", drawerLabel: "Second Page Option" }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};


export default App;