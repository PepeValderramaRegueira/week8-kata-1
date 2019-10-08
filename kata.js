// const sum_pairs = (ints, s) => {
//   for (let i = 0; i < ints.length; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if ((ints[i] + ints[j] === s) && (ints[i] !== s)) {
//         for (let k = i + 1; k < j; k++) {
//           for (let l = k + 1; l < j; l++) {
//             if (ints[k] + ints[l] === s) {
//               return [ints[k], ints[l]]
//             }
//           }
//         }
//         return [ints[i], ints[j]]
//       }

//       if (ints[i] + ints[j] === s) {
//         return [ints[i], ints[j]]
//       }
//     }
//   }

//   return undefined
// }

const sum_pairs = (ints, s) => {
  ints.sort((a, b) => a - b)
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        return [ints[i], ints[j]]
      }
    }
  }

  return undefined
}

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8))
console.log(sum_pairs(l2, -6))
console.log(sum_pairs(l3, -7))
console.log(sum_pairs(l4, 2))
console.log(sum_pairs(l5, 10))
console.log(sum_pairs(l6, 8))
console.log(sum_pairs(l7, 0))
console.log(sum_pairs(l8, 10))
