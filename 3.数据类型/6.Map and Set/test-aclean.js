// 过滤字谜
// 写一个函数 aclean(arr)，它返回被清除了字谜（相同数量相同字母但顺序不同的单词）的数组
// 思路：将单词打散为字母并排序=>map
function aclean(arr) {
  //   let map = new Map();

  //   for (let word of arr) {
  //     let sorted = word // PAN
  //       .toLowerCase() // pan
  //       .split("") // ['p','a','n']
  //       .sort() // ['a','n','p']
  //       .join(""); // anp
  //     map.set(sorted, word);
  //   }

  //   return Array.from(map.values());

  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
