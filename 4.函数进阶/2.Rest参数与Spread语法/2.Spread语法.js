// spread语法 ... 与rest完全相反
let arr1 = [1, 2, 3];
console.log(Math.max(...arr1));

let arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);

console.log(Math.max(...arr1, ...arr2, 24));

let merged = [11, ...arr1, 10, ...arr2, 8];
console.log(merged);

let str = "hello";
console.log([...str]);

// 复制array/object
let arr3 = [...arr1];
console.log(JSON.stringify(arr3) === JSON.stringify(arr1));
console.log(arr3 === arr1);

let obj1 = {
  name: "John",
  age: 22,
};

let obj2 = { ...obj1 };

console.log(JSON.stringify(obj2) === JSON.stringify(obj1));
console.log(obj2 === obj1);
