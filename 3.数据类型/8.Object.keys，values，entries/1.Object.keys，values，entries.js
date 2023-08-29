// Object.keys，values，entries
// Object.keys(obj) —— 返回一个包含该对象所有的键的数组
// Object.values(obj) —— 返回一个包含该对象所有的值的数组
// Object.entries(obj) —— 返回一个包含该对象所有 [key, value] 键值对的数组
// 都会忽略symbol属性

// 转换对象
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices);
