// 从 min 到 max 的随机整数
function randomInteger(min, max) {
  // return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return Math.floor(min + Math.random() * (max - min + 1));
}
console.log(randomInteger(1, 5));
console.log(randomInteger(2, 4));
console.log(randomInteger(-3, -6));
