import { useState } from "react";

type Task = {
	id: number;
	content: string;
	created_at: string;
};

function Main() {
	return (
		<>
			{/* 入力欄 */}
			<div className="border border-blue-500 p-3 m-5">
				<input type="text" className="border border-black" />
				<button type="button" className="border border-black rounded-lg p-2">
					確定
				</button>
			</div>
			{/* タスク一覧 */}
			<div className="border border-blue-500 m-5">
				<h2 className="text-lg m-2">タスク一覧</h2>
			</div>
		</>
	);
}

export default Main;
