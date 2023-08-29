// 提取货币
// "$120"
// 创建函数 extractCurrencyValue(str) 从字符串中提取数值并返回
function extractCurrencyValue(str) {
  // return parseInt(str);  // 错 只能处理数字后的符号
  return +str.slice(1);
}
console.log(extractCurrencyValue("$120") === 120);
