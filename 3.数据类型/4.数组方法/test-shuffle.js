// 随机排列数组的元素
// function shuffle(arr) {
//   // Math.random() - 0.5:可能是正数或负数的随机数
//   arr.sort(() => Math.random() - 0.5);
// }

// 更好的做法
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0~i的随机索引

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let arr = [1, 4, 6, 2, 6];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
