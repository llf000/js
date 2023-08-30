// 实现 arr.filter(inBetween(a,b))过滤出数组中在区间(a, b)中的值
// 实现arr.filter(inArray[a,b,c...])过滤出数组中与给出元素匹配的元素
function inBetween(a, b) {
  return function (x) {
    return x > a && x < b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, , 6, 7, 8, 9, 0, 2, 5, 45, 23];

console.log(arr.filter(inBetween(6, 12)));
console.log(arr.filter(inArray([1, 3, 5, 7, 9])));
