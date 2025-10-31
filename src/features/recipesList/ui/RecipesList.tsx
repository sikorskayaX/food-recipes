import { RecipeByIngredients } from 'entities/types';
import React from 'react';
import { RecipeByIngredientsCard } from './RecipeByIngredientsCard';
import { ComplexRecipeCard } from './ComplexRecipeCard';
import { ComplexRecipeRDO } from 'entities/useGetRecipes';

type RecipeListProps = {
	recipes: RecipeByIngredients[] | ComplexRecipeRDO;
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
						<ComplexRecipeCard key={recipe.id} recipe={recipe} />
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
