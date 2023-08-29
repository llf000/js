// WeakMap
// 与Map 的第一个不同点就是，WeakMap 的键必须是对象，不能是原始值
let john = { name: "John" };

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");

// weakMap1.set("test", "Whoops"); // 出错，test不是一个对象

weakMap.set(john, "...");

john = null; // 覆盖引用

console.log(john); // null John被从内存中删除了

// WeakMap的方法
/*
weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
*/
// WeakMap不支持迭代以及 keys()，values() 和 entries() 方法，没有办法获取 WeakMap 的所有键或值
// WeakMap的主要应用场景：额外数据的存储，缓存
