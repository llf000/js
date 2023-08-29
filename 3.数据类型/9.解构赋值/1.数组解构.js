let arr = ["John", "Smith"];

// let [firstName, surName] = arr;
let [firstName, surName] = "John Smith".split(" ");

console.log(firstName);
console.log(surName);

// ,,,
let [first, , , end] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(end); // of the Roman Republic

// 等号右侧可以是任何可迭代对象
let [a, b, c] = "ABC";
let [one, two, three] = new Set([1, 2, 3]);

console.log(a, b, c);
console.log(one, two, three);

// 在等号左侧可以使用任何“可以被赋值的”东西
let user = {};
[user.name, user.surname] = "John Smith".split(" ");

console.log(user);

// 与 .entries() 方法进行循环操作
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`);
}
// 用Map更简单
let user2 = new Map();
user2.set("name", "Wahaha");
user2.set("age", "22");
// Map 是以 [key, value] 对的形式进行迭代的，非常便于解构
for (let [key, value] of user2) {
  console.log(`${key}:${value}`);
}

// 交换变量值
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`);

// ...
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(name1);
console.log(name2);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);

// 默认值
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];

console.log(name3);
console.log(surname3);
