(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.tally', function () {
      var ar1 = [1, 1, 2];
      var ar2 = [0, 1, 0, 1, 1, 2];
      var ar3 = [null, undefined, false, true, true, null, true, 1];
      var rs1 = nx.tally(ar1);
      var rs2 = nx.tally(ar2);
      var rs3 = nx.tally(ar3);

      // console.log(rs1, rs2, rs3);

      expect(rs1).toEqual({ 1: 2, 2: 1 });
      expect(rs2).toEqual({ 0: 2, 1: 3, 2: 1 });
      expect(rs3).toEqual({ 1: 1, null: 2, undefined: 1, false: 1, true: 3 });
    });
  });
})();
