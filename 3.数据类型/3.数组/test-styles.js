// 数组操作。
// 创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
// 将 “Rock-n-Roll” 从数组末端添加进去。
// 用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
// 去掉数组的第一个值并显示它。
// 在数组前面添加 Rap 和 Reggae。
let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);

//   styles[(styles.length + 1) / 2 - 1] = "Classics";
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

console.log(styles.shift());

styles.unshift("Rap", "Reggae");
console.log(styles);
