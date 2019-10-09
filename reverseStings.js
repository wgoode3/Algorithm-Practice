function reverse(str) {
  var res = "";
  for(var i=0; i<str.length; i++) {
    res = str[i] + res;
  }
  return res;
}

console.log(reverse("hello"));

function reverseWords(sentence) {
  sentence = " " + sentence;
  var res = "", tmp = "";
  for(var i=sentence.length-1; i>=0; i--) {
    if(sentence[i] === " ") {
      if(res.length === 0) {
        res = res + tmp;
      } else {
        res = res + " " + tmp;
      }
      tmp = "";
    } else {
      tmp = sentence[i] + tmp;
    }
  }
  return res;
}

console.log(reverseWords("hello world on wednesday"));
