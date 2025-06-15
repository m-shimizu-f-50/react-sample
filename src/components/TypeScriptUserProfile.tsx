import type { FC } from 'react';
import type { User } from '../types/user';

type Props = {
	user: User;
};

export const TypeScriptUserProfile: FC<Props> = (props) => {
	const { name, hobbies } = props.user;
	return (
		<div>
			<h1>TypeScript User Profile</h1>

			<p>Name: {name}</p>
			<p>Hobbies: {hobbies?.join(' / ')}</p>
		</div>
	);
};
