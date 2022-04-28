function reverseInt(n) {
  let reverse = Math.abs(n).toString().split("").reverse().join("");

  return Math.sign(n) * parseInt(reverse);
}

console.log(reverseInt(-53));
