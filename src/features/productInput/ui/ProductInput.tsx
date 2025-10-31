import { Product } from 'entities/types';
import { useGetProducts } from 'entities/useGetProducts';
import React, { useEffect, useState } from 'react';

type ProductInputProps = {
	onAddProduct: (product: string) => void;
};

export const ProductInput: React.FC<ProductInputProps> = ({ onAddProduct }) => {
	const [product, setProduct] = useState('');
	const [suggestions, setSuggestions] = useState<Product[]>([]);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const { data: productsData } = useGetProducts(product);

	useEffect(() => {
		if (productsData && product) {
			setSuggestions(productsData.results);
			setIsDropdownOpen(true);
		} else {
			setSuggestions([]);
			setIsDropdownOpen(false);
		}
	}, [productsData, product]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (product) {
			onAddProduct(product);
			setProduct('');
			setSuggestions([]);
			setIsDropdownOpen(false);
		}
	};

	const handleSelectProduct = (selectedProduct: string) => {
		setProduct(selectedProduct);
		setSuggestions([]);
		setIsDropdownOpen(false);
	};

	return (
		<div className="relative">
			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between gap-[10px]"
			>
				<input
					type="text"
					value={product}
					onChange={(e) => setProduct(e.target.value)}
					placeholder="Product name"
					className="border border-gray-400 rounded-xl p-2 w-2/3"
				/>
				<button
					type="submit"
					className="border border-gray-400 rounded-xl p-2 w-1/3 bg-white uppercase font-semibold"
				>
					add
				</button>
			</form>

			{isDropdownOpen && suggestions.length > 0 && (
				<ul className="absolute z-10 bg-white border border-gray-400 rounded-lg mt-1 w-2/3 max-h-60 overflow-auto">
					{suggestions.map((suggestion) => (
						<li
							key={suggestion.id}
							onClick={() => handleSelectProduct(suggestion.name)}
							className="p-2 hover:bg-gray-200 cursor-pointer"
						>
							{suggestion.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
