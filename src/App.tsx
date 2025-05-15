import { ThemeProvider } from 'styled-components';
import Home from './01/pages/Home';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { darkTheme, lightTheme } from './01/styles/themes';
import { GlobalStyle } from './01/styles/GlobalStyle';
import Footer from './02/components/layout/Footer';
import Main from './03/components/layout/Main/Main';
import './App.css'

function App() {

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Home/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  )
  
}

export default App

