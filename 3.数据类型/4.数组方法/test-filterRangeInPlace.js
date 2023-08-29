// 原位过滤 过滤 查找数组中值在区间[a,b]之间的项，并删除区间外的值，应只修改数组，无返回值
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 78, 2, 1, 9];

filterRangeInPlace(arr, 2, 10);

console.log(arr);
