import { useSimpleRecipes, useComplexRecipes } from 'entities/useGetRecipes';
import { CircularLoader } from 'shared/ui/CircularLoader';
import { RecipesList } from './RecipesList';

type RecipesProps = {
	products: string[];
	isComplexSearch: boolean;
};

export const Recipes = ({ products, isComplexSearch }: RecipesProps) => {
	const {
		data: simpleRecipes,
		isLoading: simpleLoading,
		error: simpleError,
	} = useSimpleRecipes(products);

	const {
		data: complexRecipes,
		isLoading: complexLoading,
		error: complexError,
	} = useComplexRecipes(products);

	const recipes = isComplexSearch ? complexRecipes : simpleRecipes;
	const loading = simpleLoading || complexLoading;
	const error = simpleError || complexError;

	if (loading) {
		return <CircularLoader />;
	}

	if (error) {
		return <span>Error: {error.message}</span>;
	}

	return <RecipesList recipes={recipes || []} />;
};
