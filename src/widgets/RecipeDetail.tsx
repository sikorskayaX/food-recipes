import { useGetReceipt } from 'entities/useGetReciept';
import { Utensils } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { GoBackButton } from 'shared/ui/GoBackButton';

export const RecipeDetail = () => {
	const { id } = useParams();
	const { data, error } = useGetReceipt(Number(id));

	if (error) return <div>Error loading recipe</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<div className="flex flex-col gap-10 p-5">
			<div className="flex justify-between items-center w-full">
				<GoBackButton />
				<h1 className="flex gap-3 items-center text-[35px] self-center uppercase font-semibold mx-auto">
					{data.title} <Utensils />
				</h1>
			</div>
			<div className="flex gap-10">
				<img src={data.image} alt={data.title} className="w-1/3 rounded-xl" />
				<ul className="flex flex-col self-end">
					<h3 className="uppercase font-bold">Ingredients:</h3>
					{data.extendedIngredients.map((ingredient) => (
						<li>
							<span className="uppercase">{ingredient.name}</span> -{' '}
							<span>
								{ingredient.measures.metric.amount}{' '}
								{ingredient.measures.metric.unitLong}
							</span>
						</li>
					))}
				</ul>
			</div>
			<p>{data.instructions}</p>
		</div>
	);
};
