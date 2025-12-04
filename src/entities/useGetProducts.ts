import useSWR, { SWRResponse } from 'swr';
import { Product } from './types';
import { fetcher } from 'shared/api';

type ProductsRDO = {
	results: Product[];
	offset: number;
	number: number;
	totalResults: number;
};

export const useGetProducts = (
	productName: string
): SWRResponse<ProductsRDO> => {
	return useSWR(
		`https://api.spoonacular.com/food/ingredients/search?query=${productName}`,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
};
