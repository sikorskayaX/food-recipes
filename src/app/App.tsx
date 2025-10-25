import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from 'widgets/Home';

export const App = (): JSX.Element => {
	return (
		<Router>
				<Routes>
					 <Route path="/" element={<Home />} />
				</Routes>
		</Router>
	);
};
