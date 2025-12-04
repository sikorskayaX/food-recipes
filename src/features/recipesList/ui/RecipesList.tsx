import { RecipeByIngredients } from 'entities/types';
import React from 'react';
import { RecipeByIngredientsCard } from './RecipeByIngredientsCard';


type RecipeListProps = {
	recipes: RecipeByIngredients[];
};

export const RecipesList: React.FC<RecipeListProps> = ({ recipes }) => {
	return (
		<div className="flex gap-5 flex-wrap md:grid grid-cols-4">
			{recipes &&
				recipes.length > 0 &&
				recipes.map((recipe) => (
					<RecipeByIngredientsCard
						key={recipe.id}
						recipe={recipe as RecipeByIngredients}
					/>
				))}
		</div>
	);
};
