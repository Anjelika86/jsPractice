const arr = [4, -2, 5, 19, -130, 0, 10];
const minNumber = function (arr) {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
};

const maxNumber = function (arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};

const arr1 = [12, 15, 20, 25, 59, 79];
const arifmaticMean = function (arr1) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    if ((result += arr1[i])) {
    }
  }
  return result / arr1.length;
};
console.log(arifmaticMean(arr1));

const randomNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
console.log(randomNumber(1, 100));

const arr2 = [];
for (let i = 0; i < 10; i++) {
  arr2[i] = randomNumber(1, 100);
}

console.log(arr2);

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = arr3.concat(arr4);
console.log(arr5);

const reversed = arr3.reverse();
console.log(reversed);

const arr6 = [1, 2, 3];
const arr7 = [1, 2, 3];
arr6.push(4, 5, 6);
arr7.unshift(4, 5, 6);
console.log(arr6);
console.log(arr7);

const arrShift = ["js", "css", "jq"];
console.log(arrShift[0]);
arrShift.shift();
console.log(arrShift);

const arrPop = ["js", "css", "jq"];
console.log(arrPop[2]);
arrPop.pop();
console.log(arrPop);
