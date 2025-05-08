import { ThemeProvider as ContextThemeProvider } from './01/context/ThemeContext';
import Home from './01/pages/Home';
import './App.css'


function App() {
  
  return (
    <ContextThemeProvider>
      <Home/>
    </ContextThemeProvider>
  )
}

export default App
