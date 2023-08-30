// 递归遍历
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(deparment) {
  if (Array.isArray(deparment)) {
    return deparment.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(deparment)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

console.log(sumSalaries(company));

// 链表
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(list);
console.log(list.next.next);
// // 将新值添加到链表头部
list = { value: "new item", next: list };
console.log(list);
// 删除中间值
list.next = list.next.next;
console.log(list);
