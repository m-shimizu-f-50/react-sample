import React from 'react';

type InputTodoProps = {
	todoText: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
	disabled: boolean;
};

export const InputTodo: React.FC<InputTodoProps> = (props) => {
	const { todoText, onChange, onClick, disabled } = props;
	return (
		<div className='input-area'>
			<input
				type='text'
				placeholder='TODOを入力'
				value={todoText}
				onChange={onChange}
				disabled={disabled}
			/>
			<button onClick={onClick} disabled={disabled}>
				追加
			</button>
		</div>
	);
};
