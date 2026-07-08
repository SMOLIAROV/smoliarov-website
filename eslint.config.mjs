import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import globals from "globals"

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/out/**", "**/dist/**"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },

    rules: {
      "no-undef": "off",

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "import",
          next: "expression",
        },
        {
          blankLine: "always",
          prev: "import",
          next: "function",
        },
        {
          blankLine: "always",
          prev: "import",
          next: "export",
        },
      ],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["scripts/**/*.mjs"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
