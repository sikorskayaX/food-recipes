import { Recipe } from 'entities/types';
import React from 'react';

interface RecipeListProps {
	recipes: Recipe[];
}

export const RecipesList: React.FC<RecipeListProps> = ({ recipes }) => {
	return (
		<div className='flex gap-5 flex-wrap'>
			{recipes &&
				recipes.length > 0 &&
				recipes.map((recipe) => (
					<div key={recipe.id}>
						<h3>{recipe.title}</h3>
						<img src={recipe.image} alt={recipe.title} />
					</div>
				))}
		</div>
	);
};
