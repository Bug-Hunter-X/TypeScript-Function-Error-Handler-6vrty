function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(5,3);
let result2 = subtract(10,5);

console.log(result1); // Output: 8
console.log(result2); // Output: 5

//Using Type Guard
let result3 = isNumber(5) && isNumber('3') ? add(5,parseInt('3')) : 0; 
console.log(result3); // Output: 8

let result4 = isNumber(5) && isNumber('hello') ? add(5,parseInt('hello')) : 0; 
console.log(result4); // Output: 0