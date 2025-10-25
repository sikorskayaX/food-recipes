import { useComplexRecipes, useSimpleRecipes } from 'entities/useRecipes';
import { ProductInput } from 'features/ProductInput';
import { RecipesList } from 'features/RecipesList';
import { useState } from 'react';

export const Home = () => {
	const [products, setProducts] = useState<string[]>([]);
	const [isComplexSearch, setIsComplexSearch] = useState<boolean>(false);

	const handleAddProduct = (product: string) => {
		setProducts((prev) => [...prev, product]);
	};

	const simpleRecipes = useSimpleRecipes(products);
	const complexRecipes = useComplexRecipes(products);

	const recipes = isComplexSearch ? complexRecipes : simpleRecipes;

	return (
		<div className="flex flex-col gap-5 p-5">
			<h1 className='text-[40px]'>Reciepts search </h1>
			{isComplexSearch ? (
				<span>ingredients search</span>
			) : (
				<span>what's in your fridge</span>
			)}
			<button
				onClick={() => setIsComplexSearch((prev) => !prev)}
				className="bg-red-100"
			>
				{isComplexSearch ? "what's in your fridge" : 'ingredients search'}
			</button>
			<ProductInput onAddProduct={handleAddProduct} />
			<span>products: </span>
			<span>{products.join(', ')}</span>

			{/* Обработка загрузки и ошибок */}
			{/* {isLoading && <p>Загрузка...</p>}
			{error && <p>Recipes loading error: {error}</p>} */}

			<RecipesList recipes={recipes.data || []} />
		</div>
	);
};
