// 重复，直到输入的是一个数字
/*
          创建一个函数 readNumber，它提示输入一个数字，直到访问者输入一个有效的数字为止。
          结果值必须以数字形式返回。
          输入空行或点击“取消”停止该过程，返回null
       */
function readNumber() {
  let number;
  do {
    number = prompt("enter a number", 0);
  } while (!isFinite(number));

  if (number === null || number === "") return null;

  return +number;
}

alert(`Read: ${readNumber()}`);
