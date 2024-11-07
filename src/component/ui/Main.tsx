import { useState } from "react";
import Button from "./Button";
import Task from "./Task";

type TaskType = {
	text: string;
	isCompleted: boolean;
};
function Main() {
	const [inputValue, setInputValue] = useState("");
	const [activeTasks, setActiveTasks] = useState<TaskType[]>([]);
	const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleAddTask = () => {
		if (inputValue.trim() === "") return; // 空の入力は無視
		setActiveTasks([...activeTasks, { text: inputValue, isCompleted: false }]);
		setInputValue(""); // 入力欄をクリア
	};

	const handleClearInput = () => {
		setInputValue("");
	};

	const handleCompleteTask = (index: number) => {
		const taskToComplete = activeTasks[index];
		setActiveTasks(activeTasks.filter((_, i) => i !== index));
		setCompletedTasks([...completedTasks, taskToComplete]); // 完了タスクとして追加
	};

	const handleUndoTask = (index: number) => {
		const taskToUndo = completedTasks[index];
		setCompletedTasks(completedTasks.filter((_, i) => i !== index));
		setActiveTasks([...activeTasks, taskToUndo]); // 未完了タスクとして戻す
	};

	const handleDeleteTask = (index: number, isCompleted: boolean) => {
		if (isCompleted) {
			setCompletedTasks(completedTasks.filter((_, i) => i !== index));
		} else {
			setActiveTasks(activeTasks.filter((_, i) => i !== index));
		}
	};

	return (
		<>
			{/* 入力欄 */}
			<div className="border border-blue-500 p-5 m-5 flex flex-col items-stretch rounded-lg bg-blue-50 shadow-md">
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					className="border border-blue-300 rounded-lg p-2 w-full mb-3 focus:outline-none focus:border-blue-500"
					placeholder="タスクを入力"
				/>
				<div className="flex space-x-2 justify-center">
					<Button
						onClick={handleClearInput}
						label="クリア"
						className="bg-gray-300 text-gray-700 hover:bg-gray-400"
					/>
					<Button
						onClick={handleAddTask}
						label="確定"
						className="bg-blue-500 text-white hover:bg-blue-600"
					/>
				</div>
			</div>

			{/* 未完了タスク一覧 */}
			<div className="border border-blue-500 rounded-lg m-5 p-4 bg-blue-50 shadow-md">
				<h2 className="text-lg font-semibold text-blue-700">未完了タスク</h2>
				<ul className="list-none">
					{activeTasks.map((task, index) => (
						<li key={index}>
							<Task
								task={task.text}
								isCompleted={task.isCompleted}
								onComplete={() => handleCompleteTask(index)}
								onDelete={(isCompleted) => handleDeleteTask(index, isCompleted)}
							/>
						</li>
					))}
				</ul>
			</div>

			{/* 完了済みタスク一覧 */}
			<div className="border border-blue-500 rounded-lg m-5 p-4 bg-blue-50 shadow-md">
				<h2 className="text-lg font-semibold text-blue-700">完了済みタスク</h2>
				<ul className="list-none">
					{completedTasks.map((task, index) => (
						<li key={index}>
							<Task
								task={task.text}
								isCompleted={task.isCompleted}
								onComplete={() => handleUndoTask(index)}
								onDelete={(isCompleted) => handleDeleteTask(index, isCompleted)}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Main;
