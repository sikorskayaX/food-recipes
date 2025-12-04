import { useSimpleRecipes } from 'entities/useGetRecipes';
import { CircularLoader } from 'shared/ui/CircularLoader';
import { RecipesList } from './RecipesList';

type RecipesProps = {
	products: string[];
};

export const Recipes = ({ products }: RecipesProps) => {
	const {
		data: simpleRecipes,
		isLoading: simpleLoading,
		error: simpleError,
	} = useSimpleRecipes(products);

	if (simpleLoading) {
		return <CircularLoader />;
	}

	if (simpleError) {
		return <span>Error: {simpleError.message}</span>;
	}

	return <RecipesList recipes={simpleRecipes || []} />;
};
