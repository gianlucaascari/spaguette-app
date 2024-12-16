import { StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import { Text, View } from '@/components/Themed';
import RecipesList from '@/components/recipes/show-recipes/RecipesList';
import AddRecipeInput from '@/components/recipes/add-recipes/AddRecipeInput';
import { DataContext } from '@/services/data/DataContext';
import { useDataService } from '@/services/data/data-service';

export default function TabOneScreen() {

  const { state } = useContext(DataContext);
  const { getRecipes } = useDataService();

  useEffect(() => {
    getRecipes();
  }, []);
  
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Recipes</Text>

      <AddRecipeInput />

      {state.recipes ? (
        <RecipesList recipes={state.recipes} />
      ) : (
        <Text>Loading...</Text>
      )}      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
