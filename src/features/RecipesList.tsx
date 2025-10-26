import { RecipeByIngredients, ComplexRecipe } from 'entities/types';
import React from 'react';
import { Link } from 'react-router-dom';

type RecipeListProps = {
	recipes: RecipeByIngredients[] | ComplexRecipe;
};

export const RecipesList: React.FC<RecipeListProps> = ({ recipes }) => {
	const recipeArray = Array.isArray(recipes) ? recipes : recipes.results;

	return (
		<div className="flex gap-5 flex-wrap md:grid grid-cols-4">
			{recipeArray &&
				recipeArray.length > 0 &&
				recipeArray.map((recipe) => (
					<Link
						to={`/recipes/${recipe.id}`}
						key={recipe.id}
						className="flex flex-col border border-gray-400 p-5 rounded-xl gap-2 justify-between"
					>
						<h3 className="font-semibold">{recipe.title}</h3>
						<img src={recipe.image} alt={recipe.title} className="rounded-xl border border-gray-400 p-0.5" />
					</Link>
				))}
		</div>
	);
};
