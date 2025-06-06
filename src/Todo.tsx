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
					{incompleteTodos.map((todo) => (
						<li key={todo}>
							<div className='list-row'>
								<p className='todo-item'>{todo}</p>
								<button>完了</button>
								<button>削除</button>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='complete-area'>
				<p className='title'>完了のTODO</p>
				<ul>
					{completeTodos.map((todo) => (
						<li key={todo}>
							<div className='list-row'>
								<p className='todo-item'>{todo}</p>
								<button>戻す</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Todo;
