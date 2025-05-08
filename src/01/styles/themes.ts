import { DefaultTheme } from 'styled-components';
import * as colors from './abstracts/_colors.scss';
import { ThemeType } from '../context/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    heading: string;
    text: string;
    background: string;
    toggleTheme: string;
  }
}

export const lightTheme: DefaultTheme = {
  body: 'white',
  heading: '#333333',
  text: 'gray',
  background: colors.background,
  toggleTheme: 'rgb(34, 49, 209)',
};

export const darkTheme: DefaultTheme = {
  body: 'white',
  heading: 'rgba(30, 14, 98, 1)',
  text: 'smoke',
  background: colors.background, 
  toggleTheme: 'rgb(248, 240, 21)',
};

export const themes: Record<ThemeType, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};


