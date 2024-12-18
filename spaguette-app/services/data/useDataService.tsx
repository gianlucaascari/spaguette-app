import { useContext } from "react";
import { apiService } from "../api/api-service";
import { DataContext } from "./DataContext";

/**
 * Data service to fetch and manipulate data, combining API and (soon) local storage
 * @module services/data/data-service
 * @see module:services/api/api-service
 * @see module:types/Catalogue
 */
export const useDataService = () => {
    const { dispatch } = useContext(DataContext);
    
    return {
        getIngredients: async () => {
            const ingredients = await apiService.getIngredients();
            dispatch({ type: 'SET_INGREDIENTS', payload: ingredients });
        },
        getRecipes: async () => {
            const recipes = await apiService.getRecipes();
            dispatch({ type: 'SET_RECIPES', payload: recipes });
        },
        addRecipe: async (recipe: RecipeInput) => {
            const addedRecipe = await apiService.addRecipe(recipe);
            dispatch({ type: 'ADD_RECIPE', payload: addedRecipe });
        },
        updateRecipe: async (id: string, recipe: RecipeInput) => {
            const updatedRecipe = await apiService.updateRecipe(id, recipe);
            dispatch({ type: 'UPDATE_RECIPE', payload: updatedRecipe });
        },
        deleteRecipe: async (id: string) => {
            await apiService.removeRecipe(id);
            dispatch({ type: 'REMOVE_RECIPE', payload: id });
        }
    };
};