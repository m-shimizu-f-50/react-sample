import axios from 'axios';
import { useState } from 'react';
import { TypeScriptTodo } from '../components/TypeScriptTodo';
import type { TodoType } from '../types/todo';
import { FooksUserCard } from '../components/HooksUserCard';

import { useAllUsers } from '../hooks/useAllUsers';

export const TypeScriptSample = () => {
	const [todos, setTodos] = useState<Array<TodoType>>([]);
	const { userProfiles, loading, error, getUsers } = useAllUsers();

	const onClickFetchData = () => {
		axios
			.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				console.log(response.data);
				setTodos(response.data);
			});
	};

	const onClickFetchUsers = () => {
		getUsers();
	};
	return (
		<div>
			<h1>TypeScript Sample</h1>
			<button onClick={onClickFetchData}>データ取得</button>
			{todos.map((todo) => (
				<TypeScriptTodo
					key={todo.id}
					title={todo.title}
					userId={todo.userId}
					completed={todo.completed}
				/>
			))}

			<h1>Hooks User Card</h1>
			<button onClick={onClickFetchUsers}>データ取得</button>
			<br />
			{error ? (
				<div style={{ color: 'red' }}>データの取得に失敗しました。</div>
			) : loading ? (
				<div>Loading...</div>
			) : (
				<>
					{userProfiles.map((user) => (
						<FooksUserCard key={user.id} user={user} />
					))}
				</>
			)}
		</div>
	);
};
