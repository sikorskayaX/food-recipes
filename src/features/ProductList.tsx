import { X } from 'lucide-react';

type ProductListProps = {
	products: string[];
	onRemoveProduct: (product: string) => void;
	onClearProducts: () => void;
};

export const ProductList: React.FC<ProductListProps> = ({
	products,
	onRemoveProduct,
	onClearProducts,
}) => {
	return (
		<div className="flex  gap-5 border items-center border-gray-400 p-2 rounded-xl bg-white">
			<span className="font-semibold">products: </span>
			{products.length > 0 ? (
				<div className='flex w-full items-center justify-between'>
					<ul className="flex gap-3">
						{products.map((product, index) => (
							<li
								key={index}
								className="flex items-center gap-4 border border-gray-400 w-fit rounded-xl p-2 bg-amber-50"
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
						className="bg-red-600 text-white border border-gray-400 p-2 hover:bg-red-500 rounded-xl "
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
