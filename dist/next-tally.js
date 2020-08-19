/*!
 * name: @feizheng/next-tally
 * description: Which group and count elements of the collection.
 * homepage: https://github.com/afeiship/next-tally
 * version: 1.0.0
 * date: 2020-08-19T08:07:13.484Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var UNDEFINED = 'undefined';

  nx.tally = function (inArray) {
    var result = {};
    nx.forEach(inArray, function (item) {
      var value = result[item];
      result[item] = typeof value === UNDEFINED ? 1 : value + 1;
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tally;
  }
})();
