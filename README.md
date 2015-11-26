# eslint-config-tombfix

[![Build Status](https://api.travis-ci.org/tombfix/eslint-config.svg?branch=master)](https://travis-ci.org/tombfix/eslint-config) [![NPM Version](https://img.shields.io/npm/v/eslint-config-tombfix.svg)](https://npmjs.org/package/eslint-config-tombfix)

[ESLint](http://eslint.org/) [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Tombfix](https://github.com/tombfix)

## Installation

``` sh
$ npm install eslint eslint-config-tombfix --save-dev
```

## Usage

In `package.json`:

``` json
{
  "scripts": {
    "lint": "eslint ."
  },
  "devDependencies": {
    "eslint": "",
    "eslint-config-tombfix": ""
  },
  "eslintConfig": {
    "extends": "tombfix"
  }
}
```

Or:

``` json
{
  "scripts": {
    "lint": "eslint -c tombfix ."
  },
  "devDependencies": {
    "eslint": "",
    "eslint-config-tombfix": ""
  }
}
```

Or, in `.eslintrc`:

``` json
{
  "extends": "tombfix"
}
```

Then lint:

``` sh
$ npm run lint
```

## Contributing

Please see [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

Please see [LICENSE](/LICENSE).
