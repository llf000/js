// 输入数字求和
// 函数 sumInput()
//   使用 prompt 向用户索要值，并存在数组中。
//   当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
//   计算并返回数组所有项之和。
//    0 是有效的数字，不要因为是 0 就停止问询。

function sumInput() {
  let arr = [];
  let sum = 0;
  while (true) {
    let value = prompt("enter a number", "");
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(+value);
  }
  for (let value of arr) {
    sum += value;
  }
  return sum;
}

console.log(sumInput());
