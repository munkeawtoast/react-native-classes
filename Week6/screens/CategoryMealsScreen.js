import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: data.title })
  }, [])

  const { data } = route.params

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('meal-detail', { data: itemData.item })
        }}
      />
    );
  };


  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.includes(data.id));

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
