// 过滤 查找数组中值在区间[a,b]之间的项，结果以数组形式返回
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 5, 78, 2, 1, 9];
let filtered = filterRange(arr, 2, 10);

console.log(filtered);
console.log(arr);
