import { RecipeByIngredients, ComplexRecipe } from 'entities/types';
import React from 'react';
import { RecipeByIngredientsCard } from './RecipeByIngredientsCard';
import { ComplexRecipeItem } from './ComplexRecipeItem';

type RecipeListProps = {
	recipes: RecipeByIngredients[] | ComplexRecipe;
	isComplexSearch: boolean;
};

export const RecipesList: React.FC<RecipeListProps> = ({
	recipes,
	isComplexSearch,
}) => {
	const recipeArray = Array.isArray(recipes) ? recipes : recipes.results;

	return (
		<div className="flex gap-5 flex-wrap md:grid grid-cols-4">
			{recipeArray &&
				recipeArray.length > 0 &&
				recipeArray.map((recipe) =>
					isComplexSearch ? (
						<ComplexRecipeItem key={recipe.id} recipe={recipe} />
					) : (
						<RecipeByIngredientsCard
							key={recipe.id}
							recipe={recipe as RecipeByIngredients}
						/>
					)
				)}
		</div>
	);
};
