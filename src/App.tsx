import ThemeProvider from './01/providers/ThemeProvider';
import Home from './01/pages/Home';
import { GlobalStyle } from './01/styles/GlobalStyle';
import Footer from './02/components/layout/Footer';
import Main from './03/components/layout/Main/Main';
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  )
  
}

export default App

