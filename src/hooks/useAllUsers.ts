import { useState } from 'react';
import type { UserProfileType } from '../types/userProfile';
import axios from 'axios';
import type { ApiUser } from '../types/api/user';

// 全てのユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
	const [userProfiles, setUserProfiles] = useState<Array<UserProfileType>>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const getUsers = () => {
		setLoading(true);
		setError(false);
		axios
			.get<Array<ApiUser>>('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const data = response.data.map((user) => ({
					id: user.id,
					name: `${user.name} (${user.username})`,
					email: user.email,
					address: `${user.address.city} ${user.address.street}`,
				}));
				setUserProfiles(data);
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return { userProfiles, loading, error, getUsers };
};
