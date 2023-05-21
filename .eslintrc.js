module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        "plugin:prettier/recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: ["tsconfig.json"],
    },
    plugins: [],
    root: true,
    rules: {
        "react/jsx-props-no-spreading": 0,
        // "prettier/prettier": [
        //     "error",
        //     {
        //         "singleQuote": true
        //     }
        // ],
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};