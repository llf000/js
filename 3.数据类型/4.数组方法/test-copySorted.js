// 复制和排序数组
// 有一个字符串数组 arr，希望有一个排序过的副本，但保持 arr 不变
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
