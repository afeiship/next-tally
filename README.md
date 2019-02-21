# next-tally
> Which group and count elements of the collection

## install:
```bash
npm install -S afeiship/next-tally --registry=https://registry.npm.taobao.org
```

## usage:
```js
//DOCS here!
import 'next-tally';

nx.tally([null, undefined, false, true, true, null, true, 1]);
// { '1': 1, null: 2, undefined: 1, false: 1, true: 3 }
```

## resources
- https://medium.com/@baweaver/ruby-2-7-enumerable-tally-a706a5fb11ea
