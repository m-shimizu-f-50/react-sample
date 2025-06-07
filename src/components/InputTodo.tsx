import React from 'react';

type InputTodoProps = {
	todoText: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
};

export const InputTodo: React.FC<InputTodoProps> = (props) => {
	const { todoText, onChange, onClick } = props;
	return (
		<div className='input-area'>
			<input
				type='text'
				placeholder='TODOを入力'
				value={todoText}
				onChange={onChange}
			/>
			<button onClick={onClick}>追加</button>
		</div>
	);
};
