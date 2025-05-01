import 'styled-components';
import { DefaultTheme } from 'styled-components';

// Extend styled-components' DefaultTheme interface
declare module 'styled-components' {
  export interface DefaultTheme {
    heading: string;
    text: string;
    background: string;
    toggleTheme: string;
  }
}

export const lightTheme: DefaultTheme = {
  heading: '#333333',
  text: '#000000',
  background: '#ffffff',
  toggleTheme: 'rgb(25, 40, 209)',
};

export const darkTheme: DefaultTheme = {
  heading: 'rgba(30, 14, 98, 1)',
  text: '#ffffff',
  background: '#000000',
  toggleTheme: 'rgb(209, 200, 25)',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};