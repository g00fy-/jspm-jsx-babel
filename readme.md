# jspm-jsx-babel

> JSX loader plugin for [jspm](https://jspm.io) a fork of [plugin-jsx](https://github.com/floatdrop/plugin-jsx) using [babel](https://babeljs.io/)

This plugin will translate JSX templates to JS and executes them (like coffee-script or es6).

To use it you should install it with jspm:

```
jspm install github:g00fy-/jspm-jsx-babel
```

After that you can include JSX templates in your modules:

```js
var Component = require('component.jsx!');
```

### Tests

```bash
jspm install
jspm install react
npm install
npm test
```
