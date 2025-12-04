import { RecipeByIngredients } from 'entities/types';
import React from 'react';
import { Link } from 'react-router-dom';
import { IngredientsList } from './IngredientsList';

type RecipeListProps = {
	recipe: RecipeByIngredients;
};

export const RecipeByIngredientsCard: React.FC<RecipeListProps> = ({
	recipe,
}) => {
	return (
		<Link
			to={`/recipes/${recipe.id}`}
			key={recipe.id}
			className="flex flex-col border bg-white border-gray-400 p-5 rounded-xl gap-5 "
		>
			<div className="flex justify-between items-center">
				<h3 className="font-bold">{recipe.title}</h3>
				<span className="bg-[#e3f0e6] p-2 rounded-md font-semibold justify-center text-center">
					{Math.round(
						(recipe.usedIngredients.length /
							(recipe.usedIngredients.length +
								recipe.missedIngredients.length)) *
							100
					)}%{' '}
					match
				</span>
			</div>

			<img
				src={recipe.image}
				alt={recipe.title}
				className="rounded-xl border border-gray-400 p-0.5 bg-white flex text-center"
			/>
			<IngredientsList
				ingredients={recipe.usedIngredients}
				title="Used Ingredients"
			/>
			<IngredientsList
				ingredients={recipe.missedIngredients}
				title="Missed Ingredients"
			/>
		</Link>
	);
};
