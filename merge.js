#!/usr/bin/node

const arr0 = [123];
const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110]; 

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let middle = Math.floor(array.length / 2);
    let leftSide = array.slice(0, middle);
    let rightSide = array.slice(middle);

    let sortedLeft = mergeSort(leftSide);
    let sortedRight = mergeSort(rightSide);

    const mergedArray = [];
    while (sortedLeft.length && sortedRight.length) {
        if (sortedLeft[0] < sortedRight[0]) {
          mergedArray.push(sortedLeft.shift());
        } else {
          mergedArray.push(sortedRight.shift());
        }
    }
    return [...mergedArray, ...sortedLeft, ...sortedRight];
  }
}
// console.log(mergeSort(arr1));
