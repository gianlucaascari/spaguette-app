import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { styles } from '@/styles/style';
import { useStyles } from './styles';
import Button from '@/components/general/Button';

interface RecipeListElementShowProps {
    recipe: Recipe;
    setIsModifying: (state: boolean) => void;
}

const RecipeListElementShow: React.FC<RecipeListElementShowProps> = ({ recipe, setIsModifying }) => {

    const styles = useStyles()

  return (
    <View style={styles.shadowContainer}>
        <View style={styles.container}>
            <View style={styles.image}></View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{recipe.name}</Text>
                {recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>
                    {ingredient.quantity} {ingredient.ingredient.unityOfMeasure} of{" "} {ingredient.ingredient.name}
                </Text>
                ))}

                <Button text='Modify' style='primary' onButtonPress={() => setIsModifying(true)} />
            </View>
        </View>
    </View>
  )
}

export default RecipeListElementShow