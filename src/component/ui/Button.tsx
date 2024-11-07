import type React from "react";

type ButtonProps = {
	onClick: () => void;
	label: string;
	className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`rounded-lg px-4 py-2 transition-colors ${className}`}
		>
			{label}
		</button>
	);
};

export default Button;
