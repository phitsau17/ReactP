import { View, Text } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomSideBarMenu from "./screens/CustomSideBarMenu";
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage'
import ThirdPage from "./pages/ThirdPage";;

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}
function SecondScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#003366",
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomSideBarMenu {...props} />}
    
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