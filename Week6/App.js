import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text } from "react-native";
import CategoryGridTile from './components/CategoryGridTile.js'
import CategoriesScreen from './screens/CategoriesScreen.js'
import MealDetailScreen from './screens/MealDetailScreen.js'
import CategoryMealsScreen from './screens/CategoryMealsScreen.js'
import { CATEGORIES } from './data/dummy-data.js'

import { ForkKnife, Star } from 'phosphor-react-native'
import { setStatusBarStyle } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen.js";
import FiltersScreen from "./screens/FiltersScreen.js";

const AppStack = createNativeStackNavigator();
const FilterDrawer = createDrawerNavigator();
const MealsFavBar = createBottomTabNavigator();

setStatusBarStyle("light");

export default function App() {

  return (
    <NavigationContainer>
      <FilterDrawerNav />
    </NavigationContainer>
  )
}

const FilterDrawerNav = () => {
  return (
    <FilterDrawer.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <FilterDrawer.Screen
        name="side-main"
        component={MainWrapped}
      />
      <FilterDrawer.Screen
        name="side-filter"
        component={FiltersScreen}
      />
    </FilterDrawer.Navigator>
  )

}

const MainWrapped = ({ navigation, route }) => {
  const [headerShown, setHeaderShown] = useState(false)

  return (
    <MealsFavBar.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c", },
        headerShown,
        headerTintColor: "white",
      }}
      screenListeners={({ route }) => {
        // setHeaderShown(route.name === 'bottom-favorite')
        // console.log(route.name)

      }}
    >
      <MealsFavBar.Screen
        name="bottom-main"
        component={MainAppNav}
        options={{
          title: "Meals",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => <ForkKnife weight={focused ? 'duotone' : 'regular'} color={color} size={size} />
        }}
      />
      <MealsFavBar.Screen
        name="bottom-favorite"
        options={{
          title: "Favorites",
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => <Star weight={focused ? 'duotone' : 'regular'} color={color} size={size} />
        }}
        component={FavoritesScreen}

      />
    </MealsFavBar.Navigator>
  )
}

const MainAppNav = () => {
  return (
    <AppStack.Navigator
      initialRouteName="categories"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c", },
        headerTintColor: "white",
      }}
    >
      <AppStack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "Categories"
        }}
      />
      <AppStack.Screen
        name="category-detail"
        component={CategoryMealsScreen}
      />
      <AppStack.Screen
        name="meal-detail"
        component={MealDetailScreen}
      />
    </AppStack.Navigator>
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
