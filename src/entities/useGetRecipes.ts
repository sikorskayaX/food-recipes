import useSWR, { SWRResponse } from 'swr';
import { ComplexRecipe, RecipeByIngredients } from './types';
import { fetcher } from 'shared/api';

export const useSimpleRecipes = (
	products: string[]
): SWRResponse<RecipeByIngredients[] | null> => {
	return useSWR(
		`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${products.join(
			','
		)}&apiKey=${process.env.API_KEY}`,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
};

export const useComplexRecipes = (
	products: string[]
): SWRResponse<ComplexRecipe | null> => {
	return useSWR(
		`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${products.join(
			','
		)}&apiKey=${process.env.API_KEY}`,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
};
