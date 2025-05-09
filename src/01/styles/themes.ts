import { DefaultTheme } from 'styled-components';
import themes2 from './abstracts/_themes.scss';



import { ThemeType } from '../context/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    heading: string;
    text: string;
    backgroundColor: string;
    toggleTheme: string;
  }
}

export const lightTheme: DefaultTheme = {
  body: 'white',
  heading: '#333333',
  text: 'gray',
  backgroundColor: 'rgb(220, 220, 220)',
  toggleTheme: 'rgb(34, 49, 209)',
};

export const darkTheme: DefaultTheme = {
  body: 'white',
  heading: 'rgba(30, 14, 98, 1)',
  text: 'smoke',
  backgroundColor:'rgb(119, 118, 118)', 
  toggleTheme: 'rgb(248, 240, 21)',
};

export const themes: Record<ThemeType, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};


