// 最大子数组
// 输入是以数字组成的数组，例如 arr = [1, -2, 3, 4, -9, 6]
// 任务是：找出所有项的和最大的 arr 数组的连续子数组
// 写出函数 getMaxSubSum(arr)，用其找出并返回最大和
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     partialSum += arr[i];

//     maxSum = Math.max(maxSum, partialSum);

//     if (partialSum < 0) {
//       for (let index = i; index < arr.length; index++) {
//         if (partialSum > maxSum) {
//           partialSum = 0;
//           result.length = 0;
//         }
//       }

//       partialSum = 0;
//     } else if (partialSum >= maxSum || partialSum + arr[i + 1] > maxSum) {
//       result.push(arr[i]);
//     }
//   }
//   return `最大和是：${maxSum}\n最大子数组是[${result}]`;
// }

function getMaxSubSum(arr) {
  if (arr.length === 0) {
    return `最大和是: 0\n最大子数组是[]`;
  }

  let maxSum = arr[0];
  let endItemSum = arr[0];
  let start = 0;
  let end = 0;
  let temperIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i] + endItemSum) {
      endItemSum = arr[i];
      temperIndex = i;
    } else {
      endItemSum = endItemSum + arr[i];
    }

    if (endItemSum > maxSum) {
      maxSum = endItemSum;
      start = temperIndex;
      end = i;
    }
  }
  return `最大和是: ${maxSum}\n最大子数组是[${arr.slice(start, end + 1)}]`;
  // return arr.slice(start, end + 1);
}

console.log(getMaxSubSum([-1, 2, 3, -9, 2]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1]));
console.log(getMaxSubSum([1]));
