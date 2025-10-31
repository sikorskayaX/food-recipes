import { CookingPot } from 'lucide-react';
import { Link } from 'react-router';

export const Home = () => {
	return (
		<div className="flex flex-col gap-10 p-5 text-center ">
			<h1 className="flex gap-3 items-center text-[35px] self-center uppercase font-semibold">
				fridge chef <CookingPot size={30} />
			</h1>
			
			<div className="w-2/3 self-center">
				<h2 className="font-bold uppercase text-[25px]">
					Search Recipes by Ingredients ("what's in your fridge")
				</h2>
				<span className="text-[20px]">
					Ever wondered what recipes you can cook with the ingredients you have
					in your fridge or pantry? This mode lets you find recipes that either
					maximize the usage of ingredients you have at hand (pre shopping) or
					minimize the ingredients that you don't currently have (post
					shopping). Find recipes that use as many of the given ingredients as
					possible and require as few additional ingredients as possible.
				</span>
			</div>
			<div className="w-2/3 self-center">
				<h2 className="font-bold uppercase text-[25px]">Search Recipes</h2>
				<span className="text-[20px]">
					Search through thousands of recipes by your ingredients.
				</span>
			</div>
			<Link
				to={'/recipes'}
				className="border uppercase rounded-xl p-5 border-gray-400 font-semibold w-1/3 self-center bg-white"
			>
				go to Recipes search
			</Link>
		</div>
	);
};
