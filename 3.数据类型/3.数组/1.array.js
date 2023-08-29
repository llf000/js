// 声明
let arr1 = new Array(); // 不常用
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);

fruits[1] = "Banana";
console.log(fruits); //  ['Apple', 'Banana', 'Plum']

fruits[3] = "Lemon";
console.log(fruits);

console.log(fruits.length);
// 数组可以存储任何类型的元素。

let arr3 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];

console.log(arr3[1].name);

arr3[3]();

// at
// arr.at(i)：
// i >= 0，与 arr[i] 完全相同
// i <0，从数组的尾部向前数
console.log(fruits[fruits.length - 1]); // Lemon
console.log(fruits.at(-1)); // Lemon

// pop/push删除/添加末端元素, shift/unshift取出/添加首端元素
console.log(fruits); //  ['Apple', 'Banana', 'Plum', 'Lemon']
console.log(fruits.pop()); // Lemon
console.log(fruits); //  ['Apple', 'Banana', 'Plum',]
fruits.push("Grape");
console.log(fruits); // // ['Apple', 'Banana', 'Plum', 'Grape']

console.log(fruits.shift()); // Apple
console.log(fruits); //  ['Banana', 'Plum', 'Grape']
fruits.unshift("Watermelon");
console.log(fruits); //  ['Watermelon', 'Banana', 'Plum', 'Grape']

// 循环
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// for..of 不能获取当前元素的索引，只是获取元素值
for (let fruit of fruits) {
  console.log(fruit);
}

// 关于 “length”
let arr4 = [];
arr4[123] = "apple";

console.log(arr4.length); // 124

let arr5 = [1, 2, 3, 4, 5, 6];

arr5.length = 2;
console.log(arr5); // [1, 2]

arr5.length = 5;
console.log(arr5); //  [1, 2, empty × 3]
// 清空数组最简单的方法
arr5.length = 0;
console.log(arr5);

// 多维数组
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]);

// toString
let arr = [1, 2, 3];

console.log(arr); // [1, 2, 3]
console.log(String(arr)); // 1, 2, 3

console.log([] + 1); //
console.log([1] + 1);
console.log([1, 2] + 1);
