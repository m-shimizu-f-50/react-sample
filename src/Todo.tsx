import { useState } from 'react';
import './style.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

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
			<InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
				disabled={incompleteTodos.length >= 5}
			/>
			{incompleteTodos.length >= 5 && (
				<p style={{ color: 'red' }}>登録できるTODOは5個までです。</p>
			)}
			<IncompleteTodos
				incompleteTodos={incompleteTodos}
				onClickComplete={onClickComplete}
				onClickDelete={onClickDelete}
			/>
			<CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
		</>
	);
};

export default Todo;
