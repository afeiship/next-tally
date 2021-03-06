# next-tally
> Which group and count elements of the collection.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-tally
```

## usage
```js
import '@jswork/next-tally';


nx.tally([null, undefined, false, true, true, null, true, 1]);
// { '1': 1, null: 2, undefined: 1, false: 1, true: 3 }
```

## resources
- https://medium.com/@baweaver/ruby-2-7-enumerable-tally-a706a5fb11ea


## license
Code released under [the MIT license](https://github.com/afeiship/next-tally/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-tally
[version-url]: https://npmjs.org/package/@jswork/next-tally

[license-image]: https://img.shields.io/npm/l/@jswork/next-tally
[license-url]: https://github.com/afeiship/next-tally/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-tally
[size-url]: https://github.com/afeiship/next-tally/blob/master/dist/next-tally.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-tally
[download-url]: https://www.npmjs.com/package/@jswork/next-tally
