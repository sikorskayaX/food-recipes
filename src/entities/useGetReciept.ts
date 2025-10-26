import useSWR, { SWRResponse } from 'swr';
import { RecipeInfo } from './types';
import { fetcher } from 'shared/api';

export const useGetReceipt = (id: number): SWRResponse<RecipeInfo | null> => {
	return useSWR(
		`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`,
		fetcher
	);
};
