# 🧐 About

The single page web site for kitchen furniture store.

## Getting started

Install packages with npm (originally v9.1.2, nodeJS v19.0.0):

```sh
npm install
```

Project workflow is based on [webpack](https://webpack.js.org/).


## Scripts

For development using webpack-dev-server:

```sh
npm run dev
```
Build for production:

```sh
npm run build
```

## Project structure

```text
├── dist                 - Production build folder
├─┬ src                  - Source folder
│ ├── scss               - SСSS files
│ ├── js                 - JavaScript files
│ ├── twig               - Twig templates
| ├─┬ static             - Other files
| | └── favicon          - Favicons set
│ └── index.js           - Entry point for webpack
├── package.json         - Settings for Node.js
└── webpack.config.js    - Production settings for Webpack
```

