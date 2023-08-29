// 降序排列
function reverseSort(arr) {
  return arr.sort((a, b) => b - a);
}

let arr = [5, 3, 5, 78, 2, 1, 9];

reverseSort(arr);

console.log(arr);
