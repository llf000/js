// Map
// Map方法
// new Map()
// map.set(key, value)
// map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size
let map1 = new Map();

map1.set("1", "str1"); // 字符串键
map1.set(1, "num1"); // 数字键
map1.set(true, "bool1");

console.log(map1.get(1));
console.log(map1.get("1"));
console.log(map1.size);
// 链式调用
map1.set("1", "str1").set(1, "num1").set(true, "bool1");
// 使用对象作为键
let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));

// Map迭代
// map中使用循环：map.keys(); map.values(); map.entries()
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

for (let entry of recipeMap) {
  // 与 recipeMap.entries() 相同
  console.log(entry); // cucumber,500 (and so on)
}

// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Object.entries 从对象创建 Map
let obj = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj));

console.log(map2.get("name"));

// Object.fromEntries 从 Map 创建对象

let obj2 = Object.fromEntries(map2.entries());

console.log(obj2);

// Set
// new Set(iterable)
// set.add(value)
// set.delete(value)
// set.has(value)
// set.clear()
// set.size
let set1 = new Set();

let wa = { name: "Wahaha" };
let LL = { name: "LuLu" };
let mary = { name: "Mary" };

set1.add(wa);
set1.add(LL);
set1.add(mary);
set1.add(mary);
set1.add(LL);

console.log(set1.size);

// Set迭代
let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(value);

set2.forEach((value, valueAgain, set2) => {
  console.log(value);
});
