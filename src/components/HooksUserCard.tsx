import type { FC } from 'react';
import type { UserProfileType } from '../types/userProfile';

type Props = {
	user: UserProfileType;
};

const style = {
	border: '1px solid #ccc',
	borderRadius: '8px',
	padding: '0 16px',
	margin: '8px',
};

export const FooksUserCard: FC<Props> = (props) => {
	const { user } = props;

	return (
		<div>
			<div style={style}>
				<dl>
					<dt>名前</dt>
					<dd>{user.name}</dd>
					<dt>メール</dt>
					<dd>{user.email}</dd>
					<dt>住所</dt>
					<dd>{user.address}</dd>
				</dl>
			</div>
		</div>
	);
};
