import { Recipe } from 'entities/types';
import React from 'react';
import { Link } from 'react-router-dom';

type ComplexRecipeCardProps = {
	recipe: Recipe;
};

export const ComplexRecipeCard: React.FC<ComplexRecipeCardProps> = ({
	recipe,
}) => {
	return (
		<Link
			to={`/recipes/${recipe.id}`}
			key={recipe.id}
			className="flex flex-col border bg-white border-gray-400 p-5 rounded-xl gap-2 justify-between"
		>
			<h3 className="font-semibold">{recipe.title}</h3>
			<img
				src={recipe.image}
				alt={recipe.title}
				className="rounded-xl border border-gray-400 p-0.5 bg-white"
			/>
		</Link>
	);
};
