//// [arrayFlatMap.ts]
const array: number[] = [];
const readonlyArray: ReadonlyArray<number> = [];
array.flatMap((): ReadonlyArray<number> => []); // ok
readonlyArray.flatMap((): ReadonlyArray<number> => []); // ok

// #19535

const [x] = [1].flatMap(undefined as () => number[] | number[][]);
x == 1;


//// [arrayFlatMap.js]
var array = [];
var readonlyArray = [];
array.flatMap(function () { return []; }); // ok
readonlyArray.flatMap(function () { return []; }); // ok
// #19535
var x = [1].flatMap(undefined)[0];
x == 1;
