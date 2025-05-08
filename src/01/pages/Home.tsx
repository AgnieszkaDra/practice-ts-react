import { Header, Wrapper } from '../components/layout';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { useThemeContext } from '../context/ThemeContext';

const Home = () => {
	const { theme } = useThemeContext();
	return (
		<Wrapper>
			<StyledThemeProvider theme={themes[theme]}>
				<Header />
				<h1>TypeScript: React</h1>
			</StyledThemeProvider>
			<Header />
		</Wrapper>
	);
};

export default Home;