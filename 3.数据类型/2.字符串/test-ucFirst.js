// 写一个函数 ucFirst(str)，并返回首字母大写的字符串str
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("string"));
