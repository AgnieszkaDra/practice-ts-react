import { ThemeProvider } from 'styled-components';
import Home from './01/pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { darkTheme, lightTheme } from './01/styles/themes';
import './App.css'
import { GlobalStyle } from './01/styles/GlobalStyle';
import Footer from './02/components/layout/Footer';

import Main from './03/components/layout/Main/Main';


function App() {

  const theme = useSelector((state: RootState) => state.theme.theme);
  const entries = useSelector((state: RootState) => state.journal.entries);
  console.log(entries)
   
  
  

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

