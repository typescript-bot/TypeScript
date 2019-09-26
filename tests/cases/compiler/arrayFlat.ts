// @lib: es2019

const expected: undefined = undefined as Flatten<undefined>;

// #24579 and #29604

const [x] = [[1], ['']].flat();
const assert: any extends typeof x ? false : true = true;
