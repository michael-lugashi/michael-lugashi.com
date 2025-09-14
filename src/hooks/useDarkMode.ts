import { useCallback, useState } from 'react';

export type ColorMode = 'light' | 'dark';
const THEME_STORAGE_KEY = 'theme';

const isColorModeOption = (mode: unknown): mode is ColorMode => mode === 'light' || mode === 'dark';

const getSystemPreference = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyThemeTransition = (html: HTMLElement) => {
  html.classList.add('theme-transition');
  setTimeout(() => {
    html.classList.remove('theme-transition');
  }, 1000);
};

const toggleHtmlDarkMode = (mode: ColorMode) => {
  const html = document.documentElement;
  if (mode === 'dark') {
    applyThemeTransition(html);
    html.classList.add('dark');
  } else {
    applyThemeTransition(html);
    html.classList.remove('dark');
  }
};

const useDarkMode = () => {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const localStoredMode = localStorage.getItem(THEME_STORAGE_KEY);
    const mode = !isColorModeOption(localStoredMode) ? getSystemPreference() : localStoredMode;
    toggleHtmlDarkMode(mode);
    return mode;
  });

  const toggleColorMode = useCallback(() => {
    setColorMode((prevMode) => {
      const mode = prevMode === 'light' ? 'dark' : 'light';
      toggleHtmlDarkMode(mode);
      localStorage.setItem(THEME_STORAGE_KEY, mode);
      return mode;
    });
  }, []);

  const isDarkMode = colorMode === 'dark';

  return { toggleColorMode, isDarkMode };
};

export default useDarkMode;
