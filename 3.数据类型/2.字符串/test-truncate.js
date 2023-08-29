// 截断文本
// 创建函数 truncate(str, maxlength)检查str的长度，超过 maxlength,使用 "…" 来代替str的结尾部分，长度仍然等于 maxlength
function truncate(str, maxlength) {
  // if (str.length < maxlength) return str;
  // ...只有一个单独的Unicode字符，不是3个
  // return `${str.slice(0, maxlength - 1)}...`;

  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
