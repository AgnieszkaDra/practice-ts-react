import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyle } from './styles/GlobalStyle';
import { useSelector } from 'react-redux';
import { RootState } from './store/store'; 

import router from './Router'
import { RouterProvider } from 'react-router-dom';

function App() {

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );

}

export default App;

