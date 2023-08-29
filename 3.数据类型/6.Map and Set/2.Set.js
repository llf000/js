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
