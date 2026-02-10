import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/react-vite";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: ({ autodocs: "tag" } as any),
  typescript: {
    // Enable docgen for TypeScript files
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        // Filter out props from node_modules
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  viteFinal: async (config) => {
    // config.plugins?.push(
    //   /** @see https://github.com/aleclarson/vite-tsconfig-paths */
    //   tsconfigPaths({
    //     projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
    //   })
    // );

    return config;
  },
};
export default config;