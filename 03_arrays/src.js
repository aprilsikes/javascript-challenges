module.exports = {

  first: function(array) {
    if (array === []) {
      return undefined;
    } else {
      return array[0];
    }
  },
  last: function (array) {
    if (array === []) {
      return undefined;
    } else {
      return array[array.length - 1];
    }
  },
  empty: function (array) {
    if (array.length) {
      return false;
    } else {
      return true;
    }
  },
  first_n: function (array, n) {
    if (!array.length) {
      return array;
    } else if (array.length < n) {
      return array;
    } else {
      return array.slice(0, n);
    }
  },
  last_n: function (array, n) {
    if (!array.length) {
      return array;
    } else if (array.length < n) {
      return array;
    } else {
      return array.slice(array.length - n)
    }
  },
  drop: function (array, n) {
    if (array.length < n) {
      return [];
    } else {
      return array.splice(n);
    }
  },
  union: function (array1, array2) {
    if (!array1.length && !array2.length) {
      return [];
    } else {
      return array1.concat(array2);
    }
  },
  intersection: function (array1, array2) {
    var array3 = [];
    for (var i of array1) {
      for (var j of array2) {
        if (i === j) {
          array3.push(j);
        }
      }
    } return array3;
  }

}
