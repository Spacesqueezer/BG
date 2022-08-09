import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homescreen/HomeScreen";
import Inventory from "./screens/inventory/Inventory";
import Recipes from "./screens/recipes/Recipes";
import Sets from "./screens/settings/Sets";
import { Button } from "react-native";
import PropTypes from "prop-types";
import { registerRootComponent } from "expo";

const Stack = createNativeStackNavigator();

/**
 * Main file, stack of screens
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"home"}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"inventory"}
          component={Inventory}
          options={{
            title: "Инвентаризация",
            headerRight: () => <Button title={"Новая"} />,
          }}
        />
        <Stack.Screen name={"recipes"} component={Recipes} />
        <Stack.Screen name={"sets"} component={Sets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

App.propTypes = {
  title: PropTypes.string,
  headerRight: PropTypes.func,
  headerShown: PropTypes.bool,
};

registerRootComponent(App);
