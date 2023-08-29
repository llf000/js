// Iterable object（可迭代对象）
// 可以应用 for..of 的对象被称为 可迭代的
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); // 1, 然后是 2, 3, 4, 5
}
