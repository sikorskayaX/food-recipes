import { X } from 'lucide-react';

interface ProductListProps {
	products: string[];
	onRemoveProduct: (product: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
	products,
	onRemoveProduct,
}) => {
	return (
		<div className="flex items-center gap-5 border  border-gray-400 p-2 rounded-xl bg-white">
			<span className="font-semibold">products: </span>
			{products.length > 0 ? (
				<ul className="flex gap-3">
					{products.map((product, index) => (
						<li
							key={index}
							className="flex items-center gap-4 border  border-gray-400 w-fit rounded-xl p-2 bg-amber-50"
						>
							{product}
							<button
								onClick={() => onRemoveProduct(product)}
								className="text-red-400 hover:text-red-600 "
							>
								<X size={16} />
							</button>
						</li>
					))}
				</ul>
			) : (
				<span className="text-gray-300">no added products</span>
			)}
		</div>
	);
};
