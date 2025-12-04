import useSWR, { SWRResponse } from 'swr';
import { RecipeByIngredients } from './types';
import { fetcher } from 'shared/api';

export const useSimpleRecipes = (
	products: string[]
): SWRResponse<RecipeByIngredients[] | null> => {
	return useSWR(
		`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${products.join(
			','
		)}`,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
};

