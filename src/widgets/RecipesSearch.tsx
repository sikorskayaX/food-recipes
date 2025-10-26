import { ProductInput } from 'features/ProductInput';
import { ProductList } from 'features/ProductList';
import { Recipes } from 'features/Recipes';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { GoBackButton } from 'shared/ui/GoBackButton';

export const RecipesSearch = () => {
	const [products, setProducts] = useState<string[]>([]);
	const [isComplexSearch, setIsComplexSearch] = useState<boolean>(false);

	const handleAddProduct = (product: string) => {
		setProducts((prev) => [...prev, product]);
	};

	const handleRemoveProduct = (product: string) => {
		setProducts((prev) => prev.filter((p) => p !== product));
	};

	return (
		<div className="flex flex-col gap-5 p-5 ">
			<div className="flex justify-between items-center w-full">
				<GoBackButton />
				<h1 className="flex gap-3 items-center text-[35px] self-center uppercase font-semibold mx-auto">
					receipts search <Search />
				</h1>
			</div>
			<div className="flex gap-5 items-center justify-between">
				{' '}
				<div className="text-[25px]">
					<span>mode: </span>
					{isComplexSearch ? (
						<span>ingredients search</span>
					) : (
						<span>what's in your fridge</span>
					)}
				</div>
				<button
					onClick={() => setIsComplexSearch((prev) => !prev)}
					className="bg-violet-800 text-white border  border-gray-400 p-2 hover:bg-violet-600 rounded-xl"
				>
					change mode
				</button>
			</div>
			<ProductInput onAddProduct={handleAddProduct} />
			<ProductList products={products} onRemoveProduct={handleRemoveProduct} />
			{products.length > 0 && (
				<Recipes products={products} isComplexSearch={isComplexSearch} />
			)}
		</div>
	);
};
