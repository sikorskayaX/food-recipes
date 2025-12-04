
import { ProductInput } from 'features/productInput';
import { ProductsList } from 'features/productsList';
import { Recipes } from 'features/recipesList';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GoBackButton } from 'shared/ui/GoBackButton';

export const RecipesSearch = () => {
	const [products, setProducts] = useState<string[]>([]);

	useEffect(() => {
		const savedProducts = localStorage.getItem('products');
		if (savedProducts) {
			setProducts(JSON.parse(savedProducts));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products));
	}, [products]);

	const handleAddProduct = (product: string) => {
		setProducts((prev) => [...prev, product]);
	};

	const handleRemoveProduct = (product: string) => {
		setProducts((prev) => prev.filter((p) => p !== product));
	};

	const handleClearProducts = () => {
		setProducts([]);
	};

	return (
		<div className="flex flex-col gap-5 p-5 ">
			<div className="flex justify-between items-center w-full">
				<GoBackButton />
				<h1 className="flex gap-3 items-center text-[35px] self-center uppercase font-semibold mx-auto">
					recipes search <Search />
				</h1>
			</div>
			
			<ProductInput onAddProduct={handleAddProduct} />
			<ProductsList
				products={products}
				onRemoveProduct={handleRemoveProduct}
				onClearProducts={handleClearProducts}
			/>
			{products.length > 0 && (
				<Recipes products={products}  />
			)}
		</div>
	);
};
