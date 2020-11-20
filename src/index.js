(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
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
