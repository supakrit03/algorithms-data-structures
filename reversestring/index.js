function reverse(str) {
  let s = "";
  for (var i = str.length - 1; i >= 0; i--) {
    s = s + str[i];
  }
  return s;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

function reverse3(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverse4(str) {
  return str.split("").reduce((prev, current) => current + prev, "");
}

console.log(reverse4("apple"));
