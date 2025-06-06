import { useState } from 'react';
import './style.css';

export const Todo = () => {
	const [todoText, setTodoText] = useState('');
	const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
	const [completeTodos, setCompleteTodos] = useState<string[]>([]);

	// 入力欄の値を更新する関数
	const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTodoText(e.target.value);

	// TODOを追加する関数
	const onClickAdd = () => {
		if (todoText === '') return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText('');
	};

	// TODOを完了にする関数
	const onClickDelete = (index: number) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};

	// TODOを完了にする関数
	const onClickComplete = (index: number) => {
		// 完了のTODOに追加
		const newIncompleteTodos = [...incompleteTodos];
		const newCompleteTodos = [...completeTodos, newIncompleteTodos[index]];
		setCompleteTodos(newCompleteTodos);
		// 未完了のTODOから削除
		newIncompleteTodos.splice(index, 1);
		setIncompleteTodos(newIncompleteTodos);
	};

	// TODOを戻す関数
	const onClickBack = (index: number) => {
		// 未完了のTODOに追加
		const newCompleteTodos = [...completeTodos];
		const newIncompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		// 完了のTODOから削除
		newCompleteTodos.splice(index, 1);
		setCompleteTodos(newCompleteTodos);
	};

	return (
		<>
			<div className='input-area'>
				<input
					type='text'
					placeholder='TODOを入力'
					value={todoText}
					onChange={onChangeTodoText}
				/>
				<button onClick={onClickAdd}>追加</button>
			</div>
			<div className='incomplete-area'>
				<p className='title'>未完了のTODO</p>
				<ul>
					{incompleteTodos.map((todo, index) => (
						<li key={todo}>
							<div className='list-row'>
								<p className='todo-item'>{todo}</p>
								<button onClick={() => onClickComplete(index)}>完了</button>
								<button onClick={() => onClickDelete(index)}>削除</button>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='complete-area'>
				<p className='title'>完了のTODO</p>
				<ul>
					{completeTodos.map((todo, index) => (
						<li key={todo}>
							<div className='list-row'>
								<p className='todo-item'>{todo}</p>
								<button onClick={() => onClickBack(index)}>戻す</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Todo;
