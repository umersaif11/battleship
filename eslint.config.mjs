// eslint.config.mjs

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest"; // <--- 1. Import the plugin

export default defineConfig([
  // 1. Base configurations for all files
  js.configs.recommended, 
  eslintConfigPrettier,

  // 2. Configuration for your source code (browser)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // 3. Configuration for your config files (Node.js)
  {
    files: [
      "eslint.config.mjs",
      "webpack.common.js", 
      "webpack.dev.js",   
      "webpack.prod.js",
      "babel.config.js",
      "fileTransformer.js",
      "jest.config.js"
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // 4. Configuration for Jest Test Files (Node + Jest globals) <--- NEW SECTION
  {
    // Apply this ONLY to test files
    files: ["**/*.test.js", "**/*.spec.js", "tests/**/*.js"], 
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.node, // Tests usually run in Node environment
        ...globals.jest, // Adds 'describe', 'it', 'expect', etc.
      },
    },
    rules: {
      // Enable recommended Jest rules (e.g. warning if you have no assertions)
      ...pluginJest.configs.recommended.rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
]);