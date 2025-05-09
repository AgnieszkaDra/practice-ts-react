import { ThemeProvider } from 'styled-components';
import Home from './01/pages/Home';
import { useSelector } from 'react-redux';
import { RootState } from './01/store/store';
import { darkTheme, lightTheme } from './01/styles/themes';
import './App.css'
import { GlobalStyle } from './01/styles/GlobalStyle';
import Footer from './02/components/layout/Footer';


function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

     <Home/>


 <Footer/>

      
    </ThemeProvider>
  )
}

export default App
