import ThemedComponent from './ThemedComponent'
import { ThemeProvider } from './theme'
import '../src/styles/index.scss'


function App() {
 
  return (
    <>
      <ThemeProvider>
        <ThemedComponent />
        <h1 className='heading'>Heading</h1>
      </ThemeProvider>
      
    </>
  )
}

export default App
