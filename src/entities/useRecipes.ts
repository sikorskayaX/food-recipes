import useSWR from 'swr';


const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSimpleRecipes = (products: string[]) => {
  return useSWR(
    products.length > 0
      ? `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${products.join(
          ','
        )}&apiKey=${process.env.API_KEY}`
      : null,
    fetcher
  );
};


export const useComplexRecipes = (products: string[]) => {
  return useSWR(
    products.length > 0
      ? `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${products.join(
          ','
        )}&apiKey=${process.env.API_KEY}`
      : null,
    fetcher
  );
};