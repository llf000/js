// 计算阶乘
function factorial(n) {
  return n != 1 ? (n *= factorial(n - 1)) : 1;
}

console.log(factorial(3));

function factorial2(n) {
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  return factor;
}

console.log(factorial2(3));
