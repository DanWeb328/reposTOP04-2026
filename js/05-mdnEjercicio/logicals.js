let NumDescuento = 0;
let DescuentoDefecto = 10;

console.log(2);
console.log(NumDescuento || DescuentoDefecto);
console.log(NumDescuento ?? DescuentoDefecto);

let truthyOne = 1;
let truthyTwo = 5;
let truthythree = 0;

console.log(truthyOne && truthyTwo);
console.log(truthythree && truthyOne);

let valueText = "";

function logicalReturn(x) {
  return x;
}

console.log(logicalReturn(valueText));

console.log(!!null);
