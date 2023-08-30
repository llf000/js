// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function () {
//       console.log(i);
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function () {
//       console.log(j);
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
// 初始显示都是10 为什么？
// 因为shooter函数内部没有变量i，当函数被调用时，i是来自外部环境的
