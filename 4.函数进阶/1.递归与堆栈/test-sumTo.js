// 编写函数 sumTo(n) 计算 1 + 2 + ... + n 的和
// 用三种方式实现：
//     使用循环
//      n > 1 执行 sumTo(n) = n + sumTo(n-1)
//     使用 等差数列 求和公式
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(10));

function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo2(n - 1);
}

console.log(sumTo2(10));

function sumTo3(n) {
  return ((n + 1) * n) / 2;
}

console.log(sumTo3(10));
