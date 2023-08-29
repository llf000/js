// 写一个函数 formatDate(date)，能够对 date 进行如下格式化：
/*
如果 date 距离现在不到 1 秒，输出 "right now"
否则，如果 date 距离现在不到 1 分钟，输出 "n sec. ago"
否则，如果不到 1 小时，输出 "m min. ago"
否则，以 "DD.MM.YY HH:mm" 格式输出完整日期
*/
// function formatDate(date) {
//   let diff = new Date() - date; // 以毫秒表示的差值

//   if (diff < 1000) {
//     // 少于 1 秒
//     return "right now";
//   }

//   let sec = Math.floor(diff / 1000); // 将 diff 转换为秒

//   if (sec < 60) {
//     return sec + " sec. ago";
//   }

//   let min = Math.floor(diff / 60000);
//   if (min < 60) {
//     return min + " min. ago";
//   }

//   let d = date;
//   d = [
//     "0" + d.getDate(),
//     "0" + (d.getMonth() + 1),
//     "" + d.getFullYear(),
//     "0" + d.getHours(),
//     "0" + d.getMinutes(),
//   ].map((component) => component.slice(-2));

//   // 将时间信息和日期组合在一起
//   return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
// }

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
