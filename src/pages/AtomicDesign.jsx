import { SearchInput } from '../components/molecules/SearchInput';
import { UserCard } from '../components/organisms/user/UserCard';

const user = {
	id: 1,
	name: '山田太郎',
	email: 'example@email.com',
	phone: '090-1234-5678',
	company: {
		name: '株式会社サンプル',
	},
	website: 'https://example.com',
};

export const AtomicDesign = () => {
	return (
		<div>
			<h1>AtomicDesign</h1>
			<SearchInput />
			<UserCard user={user} />
		</div>
	);
};
