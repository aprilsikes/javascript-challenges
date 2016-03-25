/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    return list.join("");
  },
  joinWithForAndIndex: function (list) {
    var join = [];
    for (var i = 0; i < list.length; i++) {
      join.push(list[i], i);
    } return join.join("");
  },
  joinWithoutOddCharacters: function (list) {
    var even = [];
    for (var i = 0; i < list.length; i++) {
      if (i % 2 === 0) {
        even.push(list[i]);
      }
    } return even.join("");
  },
  joinWithForAndToken: function (list, token) {
    return list.join(token);
  },
  joinWithForAndAlternatingTokens: function (list, token1, token2) {
    var join = [];
    for (var i = 0; i < list.length; i++) {
      if (i % 2 === 0) {
        join.push(list[i], token1);
      } else {
        join.push(list[i], token2);
      }
    } join.pop();
      return join.join("");
  }

}
