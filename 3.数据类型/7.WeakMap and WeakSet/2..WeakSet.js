// WeakSet
// 与Set类似，但只能向WeakSet添加对象（而不能是原始值）
// 对象只有在其它某些地方能被访问的时候，才能留在WeakSet中
// 跟Set一样，WeakSet支持add，has和delete方法，但不支持size和keys()，并且不可迭代
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

console.log(visitedSet.has(john));
console.log(visitedSet.has(mary));

john = null; // 将自动清除已失效的值john
console.log(visitedSet.has(john));
