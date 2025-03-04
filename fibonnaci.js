#!/usr/bin/node

// iterative form
function fibs(number) {
  let num = Number(number);

  if (num === 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else {
    let array = [0, 1];
    let first = 1;
    let second = 0;
    for (let i = 2; i < num; i++) {
      let current = first + second;
      second = first;
      first = current;
      array.push(first);
    }
    return array;
  }
}
// console.log(fibs(8));

// recursive form
function fibsRec(number) {
  let num = Number(number);
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    console.log("This was printed recursively");
    const array = fibsRec(num - 1);
    return array.concat(array[array.length - 1] + array[array.length - 2]);
  }
}
// console.log(fibsRec(8));