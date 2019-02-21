(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.tally = function(inArray) {
    var result = {};
    nx.forEach(inArray, function(item) {
      if (typeof result[item] === 'undefined') {
        result[item] = 1;
      } else {
        result[item] += 1;
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tally;
  }
})();
