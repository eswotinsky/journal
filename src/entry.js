export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.countWords = function(body) {
    var bodyArray = body.split(" ");
    return bodyArray.length;
  };
  this.countVowels = function(body) {
    var count = 0;
    var bodyChars = body.toLowerCase().split("");
    var vowels = ["a", "e", "i", "o", "u"];
    for(var i = 0; i < bodyChars.length; i++) {
      for (var x = 0; x < vowels.length; x++) {
        if (bodyChars[i] == vowels[x]){
          count++;
        }
      }
    }
    return count;
  };
  this.countConsonants = function(body) {
    var count = 0;
    var bodyChars = body.toLowerCase().split("");
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    for(var i = 0; i < bodyChars.length; i++) {
      for (var x = 0; x < consonants.length; x++) {
        if (bodyChars[i] == consonants[x]){
          count++;
        }
      }
    }
    return count;
  };
}
