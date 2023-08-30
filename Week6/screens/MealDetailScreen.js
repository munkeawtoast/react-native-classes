import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const { data } = route.params
  useEffect(() => {
    navigation.setOptions({ title: data.title })
  }, [])

  return (
    <View style={styles.screen}>
      <Text>
        Dish: {data.title}
      </Text>
      <Text>
        Steps:
      </Text>
      {data.steps.map(step => <Text>{step}</Text>)}
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.navigate('categories')
        }}
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

export default MealDetailScreen;
