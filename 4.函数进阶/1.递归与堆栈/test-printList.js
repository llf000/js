// 编写一个可以逐个输出链表元素的函数 printList(list)。
// 使用两种方式实现：循环和递归 哪个好 递归好？
function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printList2(list) {
  console.log(list.value);

  if (list.next) {
    printList2(list.next);
  }
}

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

printList(list);
printList2(list);

// 从技术上讲，循环更有效。这两种解法的做了同样的事儿，但循环不会为嵌套函数调用消耗资源

// 另一方面，递归解法更简洁，有时更容易理解
