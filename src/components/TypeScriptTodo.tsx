import type { FC } from 'react';
import type { TodoType } from '../types/todo';

export const TypeScriptTodo: FC<Omit<TodoType, 'id'>> = (props) => {
	const { title, userId, completed } = props;

	const completeMark = completed ? '[完]' : '[未]';
	return <p>{`${completeMark} ${title} ユーザーID：${userId}`}</p>;
};
