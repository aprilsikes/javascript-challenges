/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },
  valley: function () {
    return '___';
  },
  peaks: function (n) {
    var peaks = '';
    for (var i = 0; i < n; i++) {
      peaks += this.peak();
    } return peaks;
  },
  valleys: function (n) {
    var valleys = '';
    for (var i = 0; i < n; i++) {
      valleys += this.valley();
    } return valleys;
  },
  peaksAndValleys: function (x, y) {
    var peaksAndValleys = '';
    for (var i = 0; i < x; i++) {
      peaksAndValleys += this.peak();
    }
    for (var j = 0; j < y; j++) {
      peaksAndValleys += this.valley();
    } return peaksAndValleys;
  }
}
