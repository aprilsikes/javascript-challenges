module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length === string2.length) {
      return true;
    } else {
      return false;
    }
  },
  firstGreater: function (arg1, arg2) {
    if (arg1 > arg2) {
      return true;
    } else {
      return false;
    }
  },
  firstGreaterOrEqualTo: function (arg1, arg2) {
    if (arg1 >= arg2) {
      return true;
    } else {
      return false;
    }
  },
  firstLengthGreater: function (arg1, arg2) {
    if (arg1.length > arg2.length) {
      return true;
    } else {
      return false;
    }
  },
  secondGreater: function (arg1, arg2) {
    if (arg2 > arg1) {
      return true;
    } else {
      return false;
    }
  }
}
