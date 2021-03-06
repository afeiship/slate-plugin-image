# tether-select
> Styleable select elements built on Tether.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/tether-select
```

```conf
.
├── css
│   ├── select-theme-chosen.css
│   ├── select-theme-dark.css
│   └── select-theme-default.css
└── js
    ├── select.js
    └── select.min.js
```

## usage
```js
import 'tether';
import Select from '@jswork/tether-select';

let selectInstance = new Select({
  el: document.querySelector('select#language_id'),
  className: 'select-theme-default'
})
```

## resources
- https://github.com/HubSpot/select

## license
Code released under [the MIT license](https://github.com/afeiship/tether-select/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/tether-select
[version-url]: https://npmjs.org/package/@jswork/tether-select

[license-image]: https://img.shields.io/npm/l/@jswork/tether-select
[license-url]: https://github.com/afeiship/tether-select/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/tether-select
[size-url]: https://github.com/afeiship/tether-select/blob/master/dist/tether-select.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/tether-select
[download-url]: https://www.npmjs.com/package/@jswork/tether-select
