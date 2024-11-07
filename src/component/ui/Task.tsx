import type React from "react";

type TaskProps = {
	task: string;
	isCompleted: boolean;
	onComplete: () => void;
	onDelete: (isCompleted: boolean) => void;
};

const Task: React.FC<TaskProps> = ({
	task,
	isCompleted,
	onComplete,
	onDelete,
}) => {
	return (
		<div className="flex justify-between items-center border-b py-2">
			<span
				className={`text-blue-700 ${isCompleted ? "line-through text-gray-500" : ""}`}
			>
				{task}
			</span>
			<div className="flex space-x-2">
				{/* 完了ボタン / 戻すボタンの表示制御 */}
				<button
					type="button"
					onClick={onComplete}
					className={`${
						isCompleted
							? "bg-yellow-500 hover:bg-yellow-600"
							: "bg-green-500 hover:bg-green-600"
					} text-white rounded-lg px-4 py-1 transition-colors`}
				>
					{isCompleted ? "戻す" : "完了"}
				</button>
				{/* 削除ボタン */}
				<button
					type="button"
					onClick={() => onDelete}
					className="bg-red-500 text-white rounded-lg px-4 py-1 hover:bg-red-600"
				>
					削除
				</button>
			</div>
		</div>
	);
};

export default Task;
