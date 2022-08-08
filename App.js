import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homescreen/HomeScreen";
import Inventory from './screens/inventory/Inventory'
import Recipes from "./screens/recipes/Recipes";
import Sets from "./screens/settings/Sets";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"home"}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'inventory'} component={Inventory}/>
        <Stack.Screen name={'recipes'} component={Recipes}/>
        <Stack.Screen name={'sets'} component={Sets}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
