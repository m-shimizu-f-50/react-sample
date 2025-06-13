import styled from 'styled-components';
import { Input } from '../atoms/button/input/Input';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const SearchInput = () => {
	return (
		<SContainer>
			<Input placeholder='キーワードを入力' />
			<SButtonWrapper>
				<PrimaryButton>検索</PrimaryButton>
			</SButtonWrapper>
		</SContainer>
	);
};

const SButtonWrapper = styled.div`
	padding-left: 8px;
`;

const SContainer = styled.div`
	display: flex;
	align-items: center;
`;
