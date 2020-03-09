module.exports = {
    root: true,
    globals: {
        wx: true,
        flex: true,
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            'babel-module': {},
        },
    },
    parser: 'babel-eslint',
    plugins: [
        'babel',
    ],
    extends: 'airbnb',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'unix'],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        quotes: ['error', 'single'],
        "semi": [2, "always"],
        'max-len': ['error', 200],
        'no-shadow': 'off', // 解构需要，比如 const { getUser } = this.props
        'no-return-assign': 'off', // 这与 react 中获取元素的方式冲突， ref = {ele => this.input = ele}
        'no-nested-ternary': 'off', // 习惯了在jsx语法各种三元操作了。。。
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        // 'react/prop-types': 0,
        'react/no-danger': 'off',
        'react/react-in-jsx-scope': 0,
        'jsx-a11y/anchor-is-valid': 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "camelcase": 2,
        "dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "prefer-destructuring": ["error", {"object": true, "array": false}],
        "no-param-reassign": [2, { "props": false }],
        'arrow-parens': 'off',
        "react/prefer-stateless-function": "off",
        "dot-notation": ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "react/prop-types": [2, { ignore: ['router'] }],
    },
  }
