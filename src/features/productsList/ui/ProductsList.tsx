import { X } from 'lucide-react';

type ProductsListProps = {
	products: string[];
	onRemoveProduct: (product: string) => void;
	onClearProducts: () => void;
};

export const ProductsList: React.FC<ProductsListProps> = ({
	products,
	onRemoveProduct,
	onClearProducts,
}) => {
	return (
		<div className="flex  gap-5 border items-center border-gray-400 p-2 rounded-xl bg-white">
			<span className="font-semibold">products: </span>
			{products.length > 0 ? (
				<div className="flex w-full items-center justify-between">
					<ul className="flex gap-3">
						{products.map((product, index) => (
							<li
								key={index}
								className="flex items-center gap-4 border border-gray-400 w-fit rounded-xl p-2 bg-[#f3f4f8]"
							>
								{product}
								<button
									onClick={() => onRemoveProduct(product)}
									className="text-red-400 hover:text-red-600"
								>
									<X size={16} />
								</button>
							</li>
						))}
					</ul>
					<button
						onClick={onClearProducts}
						className="bg-[#f5817f] text-white border border-gray-400 py-2 px-6 hover:bg-[#ec8988] rounded-xl "
					>
						clear all
					</button>
				</div>
			) : (
				<span className="text-gray-300">no added products</span>
			)}
		</div>
	);
};
