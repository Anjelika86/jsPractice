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

const randomNumber = function () {
  return Math.round(Math.random() * 100);
};

const arr2 = [];
for (let i = 0; i < 10; i++) {
  arr2[i] = randomNumber();
}

console.log(arr2);
