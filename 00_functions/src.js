module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function(string) {
    return "Hello " + string.toUpperCase();
  },

  whisper: function(string) {
    return "Hello " + string.toLowerCase();
  },

  separate: function(string) {
    return string.split("");
  },

  reverseJoin: function(array) {
    var newArray = array.reverse();
    return newArray.join(",");
  },

  reverseJoinCompact: function(array) {
    var newArray = array.reverse();
    return newArray.join("");
  },

  backwardsDay: function(string) {
    var array = string.split("");
    var newArray = array.reverse();
    var newString = newArray.join("")
    return "Hello " + newString;
  }
}
