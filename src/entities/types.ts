export type Ingredient = {
	id: number;
	amount: number;
	unit: string;
	unitLong: string;
	unitShort: string;
	aisle: string;
	name: string;
	original: string;
	originalName: string;
	image: string;
};

type ExtendedIngredient = Ingredient & {
	measures: {
		metric: {
			amount: number;
			unitLong: string;
			unitShort: string;
		};
		us: {
			amount: number;
			unitLong: string;
			unitShort: string;
		};
	};
};

export type RecipeByIngredients = {
	id: number;
	image: string;
	title: string;
	usedIngredientCount: number;
	missedIngredientCount: number;
	missedIngredients: Ingredient[];
	usedIngredients: Ingredient[];
};

export type Recipe = {
	id: number;
	image: string;
	title: string;
};



export type RecipeInfo = {
	id: number;
	title: string;
	image: string;
	imageType: string;
	servings: number;
	readyInMinutes: number;
	cookingMinutes: number;
	preparationMinutes: number;
	license: string;
	sourceName: string;
	sourceUrl: string;
	spoonacularSourceUrl: string;
	healthScore: number;
	spoonacularScore: number;
	pricePerServing: number;
	analyzedInstructions: string[];
	cheap: boolean;
	creditsText: string;
	cuisines: string[];
	dairyFree: boolean;
	diets: string[];
	gaps: string;
	glutenFree: boolean;
	instructions: string;
	ketogenic: boolean;
	lowFodmap: boolean;
	occasions: string[];
	sustainable: boolean;
	vegan: boolean;
	vegetarian: boolean;
	veryHealthy: boolean;
	veryPopular: boolean;
	whole30: boolean;
	weightWatcherSmartPoints: number;
	dishTypes: string[];
	extendedIngredients: ExtendedIngredient[];
};

export type Product = {
	id: number;
	name: string;
	image: string;
};
