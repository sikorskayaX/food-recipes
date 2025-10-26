import React from 'react';
import classNames from 'classnames';

type CircularLoaderProps = {
	size?: number;
	color?: string;
};

export const CircularLoader: React.FC<CircularLoaderProps> = ({
	size = 150,
	color = 'border-violet-800',
}) => {
	return (
		<div className="flex items-center justify-center w-full h-full p-10">
			<div
				className={classNames(
					'animate-spin rounded-full border-8 border-t-transparent',
					color
				)}
				style={{
					width: size,
					height: size,
				}}
			/>
		</div>
	);
};
