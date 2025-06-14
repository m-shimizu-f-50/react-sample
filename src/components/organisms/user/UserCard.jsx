import styled from 'styled-components';
import { Card } from '../../atoms/button/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserProvider';

export const UserCard = (props) => {
	const { user } = props;

	const context = useContext(UserContext);
	return (
		<Card>
			<UserIconWithName name={context.contextName} />
			<SDl>
				<dt>メールアドレス</dt>
				<dd>{user.email}</dd>
				<dt>電話番号</dt>
				<dd>{user.phone}</dd>
				<dt>会社名</dt>
				<dd>{user.company.name}</dd>
				<dt>web</dt>
				<dd>{user.website}</dd>
			</SDl>
		</Card>
	);
};

const SDl = styled.dl`
	texty-align: left;
	margin-bottom: 0;
	dt {
		float: left;
	}
	dd {
		padding-left: 32px;
		padding-bottom: 8px;
		overflow-wrap: break-word;
	}
`;
