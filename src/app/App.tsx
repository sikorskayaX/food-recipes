import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from 'widgets/Home';
import { RecipeDetail } from 'widgets/RecipeDetail';
import { RecipesSearch } from 'widgets/RecipesSearch';

export const App = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<RecipesSearch />} />
				<Route path="/recipes/:id" element={<RecipeDetail />} />
			</Routes>
		</Router>
	);
};
