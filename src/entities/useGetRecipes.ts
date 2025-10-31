import useSWR, { SWRResponse } from 'swr';
import { Recipe, RecipeByIngredients } from './types';
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

export type ComplexRecipeRDO = {
	results: Recipe[];
	offset: number;
	number: number;
	totalResults: number;
};

export const useComplexRecipes = (
	products: string[]
): SWRResponse<ComplexRecipeRDO | null> => {
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
