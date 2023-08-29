// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function 让keys.push()工作
// keys.push("more");

// map.keys() 返回的是可迭代对象而非数组
// Array.from 将它转换为数组
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);
