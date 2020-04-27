[![https://badgen.net/npm/v/vuepress-plugin-flexsearch](https://badgen.net/npm/v/vuepress-plugin-flexsearch)](https://www.npmjs.com/package/vuepress-plugin-flexsearch)
[![https://badgen.net/npm/dt/vuepress-plugin-flexsearch](https://badgen.net/npm/dt/vuepress-plugin-flexsearch)](https://www.npmjs.com/package/vuepress-plugin-flexsearch)
[![https://badgen.net/npm/license/vuepress-plugin-flexsearch](https://badgen.net/npm/license/vuepress-plugin-flexsearch)](https://github.com/z3by/vuepress-plugin-flexsearch/blob/master/LICENSE)
[![https://badgen.net/github/contributors/z3by/vuepress-plugin-flexsearch](https://badgen.net/github/contributors/z3by/vuepress-plugin-flexsearch)](https://github.com/z3by/vuepress-plugin-flexsearch/graphs/contributors)


# vuepress-plugin-flexsearch

Next-Generation full text search library for Vuepress

> A good replacement of the default Vuepress search plugin.

## Installation

```bash
yarn add -D vuepress-plugin-flexsearch
// or npm install vuepress-plugin-flexsearch -D

```

## Usage

```js
// .vuepress/config.js

module.exports = {
    themeConfig: {
      flexSearchOptions: {
        // to override the default options you can see available options on https://github.com/nextapps-de/flexsearch
      }
    },
    plugins: [
      ['flexsearch'],
      // other plugins
    ]
}
```

## Credit

Thanks to [nextapps-de/flexsearch](https://github.com/nextapps-de/flexsearch)

## Contributions

PRs are welcome :heart:

## Changelog

Go to [Changelog](./CHANGELOG.md)
