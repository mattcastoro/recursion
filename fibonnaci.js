#!/usr/bin/node

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