import styled from 'styled-components';

export const Input = (props) => {
	const { placeholder = '' } = props;
	return <SInput type='text' placeholder={placeholder} />;
};

const SInput = styled.input`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	width: auto;

	&:focus {
		border-color: #007bff;
		outline: none;
	}

	&::placeholder {
		color: #aaa;
	}
`;
