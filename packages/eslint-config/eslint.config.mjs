import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import eslintParserTs from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules", "dist", "packages/ui/storybook-static", "**/*.test.ts", "**/*.test.tsx", "tests/**"],
  },
  {
    languageOptions: {
      parser: eslintParserTs,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
];
