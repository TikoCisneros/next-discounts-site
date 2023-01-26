// more info see https://dev.to/opensauced/set-up-a-nextjs-project-with-typescript-tailwind-and-storybook-3j1k
import '../styles/globals.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
