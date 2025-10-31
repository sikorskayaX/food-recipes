import { useGetReceipt } from 'entities/useGetReciept';
import { Utensils } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { CircularLoader } from 'shared/ui/CircularLoader';
import { GoBackButton } from 'shared/ui/GoBackButton';

export const RecipeDetail = () => {
	const { id } = useParams();
	const { data, error } = useGetReceipt(Number(id));

	if (error) return <div>Error loading recipe {error?.message}</div>;
	if (!data) return <CircularLoader />;

	return (
		<div className="flex flex-col gap-10 p-5">
			<div className="flex justify-between items-center w-full">
				<GoBackButton />
				<h1 className="flex gap-3 items-center text-[35px] self-center uppercase font-semibold mx-auto">
					{data.title} <Utensils />
				</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-10 ">
				<img src={data.image} alt={data.title} className="w-1/3 rounded-xl" />
				<div className='flex flex-col gap-5 h-auto'>
					<ul className="flex flex-col bg-white p-5 rounded-xl border ">
						<h3 className="uppercase font-bold">Ingredients:</h3>
						{data.extendedIngredients.map((ingredient) => (
							<li key={ingredient.id}>
								<span className="uppercase">{ingredient.name}</span> -{' '}
								<span>
									{ingredient.measures.metric.amount}{' '}
									{ingredient.measures.metric.unitLong}
								</span>
							</li>
						))}
					</ul>
					<span className='font-semibold bg-white p-5 rounded-xl border '>ready in minutes: {data.readyInMinutes} </span>
				</div>
			</div>
			<div>
				<h3 className="uppercase font-bold">Instructions:</h3>
				{data.instructions ? (
					<p dangerouslySetInnerHTML={{ __html: data.instructions }} />
				) : (
					<span>Just mix all ingredients</span>
				)}
			</div>
		</div>
	);
};
