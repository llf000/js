// 添加/移除数组元素
// splice
// arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr = ["I", "study", "JavaScript", "right", "now"];

delete arr[1];
console.log(arr.length); // 5

arr.splice(0, 3, "let's", "dance");
console.log(arr);

let removed = arr.splice(0, 2);
console.log(removed);

arr.splice(0, 0, "let's", "study");
console.log(arr);

arr.splice(-2, 0, "javascript");
console.log(arr);
// slice
// arr.slice([start], [end])
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
// concat
// arr.concat(arg1, arg2...)
let arr1 = [1, 2];
console.log(arr1.concat([3, 4]));
console.log(arr1.concat([3, 4], [5, 6]));
console.log(arr1.concat([3, 4], 5, 6));

// 遍历：forEach
// arr.forEach(function(item, index, array){...});
arr.forEach(console.log);

arr.forEach((item, index, array) => {
  console.log(`${item}在${array}数组中排${index}位`);
});

// 在数组中搜索
// indexOf/lastIndexOf和includes
let arr2 = [1, 0, "apple", false, NaN, "apple"];

console.log(arr2.indexOf(0)); // 1
console.log(arr2.indexOf(false)); // 3
console.log(arr2.indexOf(null)); // -1

console.log(arr2.includes(1)); // true

console.log(arr2.indexOf("apple")); // 2
console.log(arr2.lastIndexOf("apple")); // 5 从右向左查找

console.log(arr2.indexOf(NaN)); // -1 错了 不能正确处理NaN
console.log(arr2.includes(NaN)); // true

// find/findIndex/findLastIndex
/*find
        let result = arr.find(function(item, index, array) {
          如果返回 true，则返回 item 并停止迭代
          对于假值（falsy）的情况，则返回 undefined
        });
      */
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let user = users.find((item) => item.id == 1);
console.log(user.name);

console.log(users.findIndex((user) => user.name == "John"));
console.log(users.findLastIndex((user) => user.name == "John"));

// filter 返回所有匹配元素组成的数组
let someUsers = users.filter((item) => item.id < 2);
console.log(someUsers);
console.log(someUsers.length);

// 转换数组
// arr.map 对数组的每个元素都调用函数，并返回结果数组
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);

// arr.sort 对数组进行原位（in-place）排序，更改元素的顺序
// sort(a,b=>(b-a)) b>a
// sort(a,b=>(a-b)) a>b
// 不定义排序函数，所有非 undefined 的数组元素都会被转换为字符串，并按照 UTF-16 码元顺序比较字符串进行排序
let arr3 = [1, 2, 6, 3, 80, 4, 5];

console.log(arr3.sort());

// arr.reverse 颠倒 arr 中元素的顺序
console.log(arr3.reverse());

// arr.split(delim) 通过给定的分隔符 delim 将字符串分割成一个数组
let names = "Bilbo, Gandalf, Nazgul";

let nameArr = names.split(",");

for (let name of nameArr) {
  console.log(`给${name}发消息`);
}

console.log(names.split(",", 2));

console.log("test".split(""));

// arr.join(glue) 创建一串由glue粘合的arr项
console.log(nameArr.join(";"));

// reduce/reduceRight
let arr4 = [1, 2, 3, 4, 5];

let result = arr4.reduce((sum, current) => sum + current, 0);

console.log(result);

// Array.isArray
console.log(Array.isArray({}));
console.log(Array.isArray([]));
