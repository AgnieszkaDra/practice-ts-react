import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.backgroundColor};
    height: 5rem;
	display: flex;
	align-items: center;
	justify-content: end;
	font-size: 1rem;
	position: sticky;
    width: 100%;
	`;

const ThemeToggler = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    justify-self: flex-end;
	border: none;
	cursor: pointer;
	font-size: 1.3rem;
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.toggleTheme};
	background-color: transparent;
`;

export {
    StyledHeader,
    ThemeToggler,
}