import { Ingredient } from 'entities/types';
import React from 'react';

type IngredientsListProps = {
	ingredients: Ingredient[];
	title: string;
};

export const IngredientsList: React.FC<IngredientsListProps> = ({
	ingredients,
	title,
}) => {
	return (
		<div className="flex flex-col flex-wrap gap-2">
			<span className="font-semibold">{title}:</span>
			{ingredients.map((ingredient, index) => (
				<span key={index} className="p-2 border rounded-xl">
					{ingredient.name}
				</span>
			))}
		</div>
	);
};

