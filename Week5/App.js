import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CategoryGridTile from './components/CategoryGridTile.js'
import CategoriesScreen from './screens/CategoriesScreen.js'
import MealDetailScreen from './screens/MealDetailScreen.js'
import CategoryMealsScreen from './screens/CategoryMealsScreen.js'
import { CATEGORIES } from './data/dummy-data.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="categories"
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c", },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="categories"
          component={CategoriesScreen}
          options={{
            title: "Categories"
          }}
        />
        <Stack.Screen
          name="category-detail"
          component={CategoryMealsScreen}
        />
        <Stack.Screen
          name="meal-detail"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
})
