import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import Result from "./Result";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#b76c94"
        },
        headerTintColor: "white"
      }}
      >
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: "Survei Kepuasan Masyarakat"
      }}/>
      <Stack.Screen name="Result" component={Result} options={{
        title: "Hasil"
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}