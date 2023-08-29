// 写一个函数 checkSpam(str)，如果str包含viagra或XXX就返回true，否则返回false
function checkSpam(str) {
  // if (
  //   str.toLowerCase().indexOf("viagra") == -1 &&
  //   str.toLowerCase().indexOf("xxx") == -1
  // )
  //   return false;

  // return true;
  return (
    str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
  );
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
