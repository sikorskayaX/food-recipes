import React, { useState } from 'react';

interface ProductInputProps {
	onAddProduct: (product: string) => void;
}

export const ProductInput: React.FC<ProductInputProps> = ({ onAddProduct }) => {
	const [product, setProduct] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (product) {
			onAddProduct(product);
			setProduct('');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center justify-between gap-[10px]"
		>
			<input
				type="text"
				value={product}
				onChange={(e) => setProduct(e.target.value)}
				placeholder="Product name"
				className="border  border-gray-400 rounded-xl p-2 w-2/3"
			/>
			<button
				type="submit"
				className="border  border-gray-400 rounded-xl p-2 w-1/3 bg-white uppercase font-semibold"
			>
				add
			</button>
		</form>
	);
};
