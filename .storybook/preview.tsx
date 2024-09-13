import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Dark', value: '#1A1A1E' },
        { name: 'Light', value: '#f7fee7' },
      ],
    },
    initialGlobals: { backgrounds: { value: 'light' } },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;
