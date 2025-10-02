// .storybook/preview.ts
import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';
import './theme-backgrounds.css';

export const decorators = [
  // Toggle the .dark class on <html> / preview root
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  withThemeByClassName({
    themes: {
      light: '', // no class for light
      dark: 'dark', // adds `.dark`
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
