module.exports = {
  person: function() {
    var person = {
      firstName: "John",
      lastName: "Mayer"
    }
    return person;
  },
  sweetnessProperty: function (obj) {
    if (!obj) {
      return undefined;
    } else {
      return obj['sweetness'];
    }
  },
  savorynessProperty: function (obj) {
    if  (!obj) {
      return undefined;
    } else {
      return obj['savory-ness'];
    }
  },
  keys: function (obj) {
    return Object.keys(obj);
  },
  sortedKeys: function (obj) {
    return Object.keys(obj).sort();
  },
  reverseSortedKeys: function (obj) {
    return Object.keys(obj).sort().reverse();
  }
}
