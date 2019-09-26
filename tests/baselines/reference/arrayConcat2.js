//// [arrayConcat2.ts]
var a: string[] = [];
a.concat("hello", 'world');

a.concat('Hello');

var b = new Array<string>();
b.concat('hello');

const expected: undefined = undefined as ConcatFlatten<undefined>;

// #19535

const [x] = (undefined as unknown as number[][]).concat([1]);
x == 1;

// #26378

[1].concat(['']);

// #26976

[].concat([1]);


//// [arrayConcat2.js]
var a = [];
a.concat("hello", 'world');
a.concat('Hello');
var b = new Array();
b.concat('hello');
var expected = undefined;
// #19535
var x = undefined.concat([1])[0];
x == 1;
// #26378
[1].concat(['']);
// #26976
[].concat([1]);
