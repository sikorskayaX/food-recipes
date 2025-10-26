import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export const GoBackButton = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			className="uppercase flex gap-2 border  border-gray-400 rounded-xl p-2"
		>
			<ArrowLeft /> go back
		</button>
	);
};
