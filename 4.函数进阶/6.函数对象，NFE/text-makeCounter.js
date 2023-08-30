// makeCounter()
//     counter() 应该返回下一个数字（与之前的逻辑相同）
//     counter.set(value) 应该将 count 设置为 value
//     counter.decrease() 应该把 count 减 1
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);
  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // set the new count

console.log(counter()); // 10

counter.decrease(); // decrease the count by 1

console.log(counter()); // 10 (instead of 11)
