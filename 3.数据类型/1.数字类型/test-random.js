// 编写一个 random(min, max) 函数，生成一个在 min 到 max 之间的随机浮点数
function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(2, 5));
console.log(random(-3, -6));
