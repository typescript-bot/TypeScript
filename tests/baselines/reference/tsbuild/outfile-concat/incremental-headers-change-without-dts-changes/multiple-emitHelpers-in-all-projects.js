Input::
//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
function forfirstfirst_PART1Rest() { }



Output::
/lib/tsc --b /src/third --verbose
[[90m12:08:00 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:08:00 AM[0m] Project 'src/first/tsconfig.json' is out of date because oldest output 'src/first/bin/first-output.js' is older than newest input 'src/first/first_PART1.ts'

[[90m12:08:00 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:08:00 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than oldest output 'src/2/second-output.js'

[[90m12:08:00 AM[0m] Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

[[90m12:08:00 AM[0m] Updating output of project '/src/third/tsconfig.json'...

[[90m12:08:00 AM[0m] Updating unchanged output timestamps of project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/bin/first-output.d.ts] file written with same contents
//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AAGD,iBAAS,uBAAuB,SAAM;AEXtC,iBAAS,CAAC,WAET;AACD,iBAAS,sBAAsB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK;AACnD,QAAA,MAAM,mBAAmB,UAAW,CAAC"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
>>>declare function forfirstfirst_PART1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                        ^^^^^^^^^
1->
  >
  >console.log(s);
  >
2 >function 
3 >                 forfirstfirst_PART1Rest
4 >                                        () { }
1->Emitted(8, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(8, 18) Source(12, 10) + SourceIndex(0)
3 >Emitted(8, 41) Source(12, 33) + SourceIndex(0)
4 >Emitted(8, 50) Source(12, 39) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1 >
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(9, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(9, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(9, 30) Source(3, 2) + SourceIndex(2)
---
>>>declare function firstfirst_part3Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^
6 >                                           ^^^
7 >                                              ^^^^^^
8 >                                                    ^^
9 >                                                      ^^^^^^^^
1->
  >
2 >function 
3 >                 firstfirst_part3Spread
4 >                                       (
5 >                                        ...
6 >                                           b: 
7 >                                              number
8 >                                                    []
9 >                                                      ) { }
1->Emitted(10, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(10, 18) Source(4, 10) + SourceIndex(2)
3 >Emitted(10, 40) Source(4, 32) + SourceIndex(2)
4 >Emitted(10, 41) Source(4, 33) + SourceIndex(2)
5 >Emitted(10, 44) Source(4, 36) + SourceIndex(2)
6 >Emitted(10, 47) Source(4, 39) + SourceIndex(2)
7 >Emitted(10, 53) Source(4, 45) + SourceIndex(2)
8 >Emitted(10, 55) Source(4, 47) + SourceIndex(2)
9 >Emitted(10, 63) Source(4, 52) + SourceIndex(2)
---
>>>declare const firstfirst_part3_ar: number[];
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^^^^
5 >                                 ^^^^^^^^^^
6 >                                           ^
1 >
  >
2 >
3 >        const 
4 >              firstfirst_part3_ar
5 >                                  = [20, 30]
6 >                                           ;
1 >Emitted(11, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(11, 9) Source(5, 1) + SourceIndex(2)
3 >Emitted(11, 15) Source(5, 7) + SourceIndex(2)
4 >Emitted(11, 34) Source(5, 26) + SourceIndex(2)
5 >Emitted(11, 44) Source(5, 37) + SourceIndex(2)
6 >Emitted(11, 45) Source(5, 38) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() { }
console.log(f());
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var firstfirst_part3_ar = [20, 30];
firstfirst_part3Spread.apply(void 0, __spreadArray([10], __read(firstfirst_part3_ar)));
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,SAAS,uBAAuB,KAAK,CAAC;ACXtC,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AACD,SAAS,sBAAsB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACnD,IAAM,mBAAmB,GAAG,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AACrC,sBAAsB,8BAAC,EAAE,UAAK,mBAAmB,IAAE"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var __read = (this && this.__read) || function (o, n) {
>>>    var m = typeof Symbol === "function" && o[Symbol.iterator];
>>>    if (!m) return o;
>>>    var i = m.call(o), r, ar = [], e;
>>>    try {
>>>        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
>>>    }
>>>    catch (error) { e = { error: error }; }
>>>    finally {
>>>        try {
>>>            if (r && !r.done && (m = i["return"])) m.call(i);
>>>        }
>>>        finally { if (e) throw e.error; }
>>>    }
>>>    return ar;
>>>};
>>>var __spreadArray = (this && this.__spreadArray) || function (to, from) {
>>>    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
>>>        to[j] = from[i];
>>>    return to;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(22, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(22, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(22, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(22, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(22, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(22, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(23, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(23, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(23, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(23, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(23, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(23, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(23, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(23, 16) Source(11, 16) + SourceIndex(0)
---
>>>function forfirstfirst_PART1Rest() { }
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^
5 >                                     ^
1->
  >
2 >function 
3 >         forfirstfirst_PART1Rest
4 >                                () { 
5 >                                     }
1->Emitted(24, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(24, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(24, 33) Source(12, 33) + SourceIndex(0)
4 >Emitted(24, 38) Source(12, 38) + SourceIndex(0)
5 >Emitted(24, 39) Source(12, 39) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1 >
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1 >Emitted(25, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(25, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(25, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(25, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(25, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(25, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(25, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(25, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(25, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(26, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(26, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(26, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(27, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(27, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(27, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(27, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(28, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(28, 2) Source(3, 2) + SourceIndex(2)
---
>>>function firstfirst_part3Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >function 
3 >         firstfirst_part3Spread
1->Emitted(29, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(29, 10) Source(4, 10) + SourceIndex(2)
3 >Emitted(29, 32) Source(4, 32) + SourceIndex(2)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(30, 5) Source(4, 33) + SourceIndex(2)
2 >Emitted(30, 16) Source(4, 47) + SourceIndex(2)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(31, 10) Source(4, 33) + SourceIndex(2)
2 >Emitted(31, 20) Source(4, 47) + SourceIndex(2)
3 >Emitted(31, 22) Source(4, 33) + SourceIndex(2)
4 >Emitted(31, 43) Source(4, 47) + SourceIndex(2)
5 >Emitted(31, 45) Source(4, 33) + SourceIndex(2)
6 >Emitted(31, 49) Source(4, 47) + SourceIndex(2)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(32, 9) Source(4, 33) + SourceIndex(2)
2 >Emitted(32, 31) Source(4, 47) + SourceIndex(2)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(34, 1) Source(4, 51) + SourceIndex(2)
2 >Emitted(34, 2) Source(4, 52) + SourceIndex(2)
---
>>>var firstfirst_part3_ar = [20, 30];
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^^^
4 >                       ^^^
5 >                          ^
6 >                           ^^
7 >                             ^^
8 >                               ^^
9 >                                 ^
10>                                  ^
11>                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >const 
3 >    firstfirst_part3_ar
4 >                        = 
5 >                          [
6 >                           20
7 >                             , 
8 >                               30
9 >                                 ]
10>                                  ;
1->Emitted(35, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(35, 5) Source(5, 7) + SourceIndex(2)
3 >Emitted(35, 24) Source(5, 26) + SourceIndex(2)
4 >Emitted(35, 27) Source(5, 29) + SourceIndex(2)
5 >Emitted(35, 28) Source(5, 30) + SourceIndex(2)
6 >Emitted(35, 30) Source(5, 32) + SourceIndex(2)
7 >Emitted(35, 32) Source(5, 34) + SourceIndex(2)
8 >Emitted(35, 34) Source(5, 36) + SourceIndex(2)
9 >Emitted(35, 35) Source(5, 37) + SourceIndex(2)
10>Emitted(35, 36) Source(5, 38) + SourceIndex(2)
---
>>>firstfirst_part3Spread.apply(void 0, __spreadArray([10], __read(firstfirst_part3_ar)));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^
3 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                    ^^
5 >                                                      ^^^^^^^^^^
6 >                                                                ^^^^^^^^^^^^^^^^^^^
7 >                                                                                   ^^^^
1->
  >
2 >firstfirst_part3Spread
3 >                      (
4 >                                                    10
5 >                                                      , ...
6 >                                                                firstfirst_part3_ar
7 >                                                                                   );
1->Emitted(36, 1) Source(6, 1) + SourceIndex(2)
2 >Emitted(36, 23) Source(6, 23) + SourceIndex(2)
3 >Emitted(36, 53) Source(6, 24) + SourceIndex(2)
4 >Emitted(36, 55) Source(6, 26) + SourceIndex(2)
5 >Emitted(36, 65) Source(6, 31) + SourceIndex(2)
6 >Emitted(36, 84) Source(6, 50) + SourceIndex(2)
7 >Emitted(36, 88) Source(6, 52) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 504,
          "kind": "emitHelpers",
          "data": "typescript:read"
        },
        {
          "pos": 506,
          "end": 697,
          "kind": "emitHelpers",
          "data": "typescript:spreadArray"
        },
        {
          "pos": 699,
          "end": 1124,
          "kind": "text"
        }
      ],
      "sources": {
        "helpers": [
          "typescript:read",
          "typescript:spreadArray"
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 318,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
emitHelpers: (0-504):: typescript:read
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
----------------------------------------------------------------------
emitHelpers: (506-697):: typescript:spreadArray
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
----------------------------------------------------------------------
text: (699-1124)
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() { }
console.log(f());
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var firstfirst_part3_ar = [20, 30];
firstfirst_part3Spread.apply(void 0, __spreadArray([10], __read(firstfirst_part3_ar)));

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-318)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function forfirstfirst_PART1Rest(): void;
declare function f(): string;
declare function firstfirst_part3Spread(...b: number[]): void;
declare const firstfirst_part3_ar: number[];

======================================================================

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AAGD,iBAAS,uBAAuB,SAAM;ACXtC,iBAAS,CAAC,WAET;AACD,iBAAS,sBAAsB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK;AACnD,QAAA,MAAM,mBAAmB,UAAW,CAAC;ACJrC,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AACD,iBAAS,yBAAyB,SAEjC;ACbD,cAAM,CAAC;IACH,WAAW;CAGd;AAED,iBAAS,wBAAwB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK;AACrD,QAAA,MAAM,qBAAqB,UAAW,CAAC;ACPvC,QAAA,IAAI,CAAC,GAAU,CAAC;AAEhB,iBAAS,uBAAuB,SAE/B;AACD,iBAAS,sBAAsB,CAAC,GAAG,GAAG,MAAM,EAAE,QAAK;AACnD,QAAA,MAAM,mBAAmB,UAAW,CAAC"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
>>>declare function forfirstfirst_PART1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                        ^^^^^^^^^
1->
  >
  >console.log(s);
  >
2 >function 
3 >                 forfirstfirst_PART1Rest
4 >                                        () { }
1->Emitted(8, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(8, 18) Source(12, 10) + SourceIndex(0)
3 >Emitted(8, 41) Source(12, 33) + SourceIndex(0)
4 >Emitted(8, 50) Source(12, 39) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1 >
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(9, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(9, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(9, 30) Source(3, 2) + SourceIndex(1)
---
>>>declare function firstfirst_part3Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^
6 >                                           ^^^
7 >                                              ^^^^^^
8 >                                                    ^^
9 >                                                      ^^^^^^^^
1->
  >
2 >function 
3 >                 firstfirst_part3Spread
4 >                                       (
5 >                                        ...
6 >                                           b: 
7 >                                              number
8 >                                                    []
9 >                                                      ) { }
1->Emitted(10, 1) Source(4, 1) + SourceIndex(1)
2 >Emitted(10, 18) Source(4, 10) + SourceIndex(1)
3 >Emitted(10, 40) Source(4, 32) + SourceIndex(1)
4 >Emitted(10, 41) Source(4, 33) + SourceIndex(1)
5 >Emitted(10, 44) Source(4, 36) + SourceIndex(1)
6 >Emitted(10, 47) Source(4, 39) + SourceIndex(1)
7 >Emitted(10, 53) Source(4, 45) + SourceIndex(1)
8 >Emitted(10, 55) Source(4, 47) + SourceIndex(1)
9 >Emitted(10, 63) Source(4, 52) + SourceIndex(1)
---
>>>declare const firstfirst_part3_ar: number[];
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^^^^
5 >                                 ^^^^^^^^^^
6 >                                           ^
1 >
  >
2 >
3 >        const 
4 >              firstfirst_part3_ar
5 >                                  = [20, 30]
6 >                                           ;
1 >Emitted(11, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(11, 9) Source(5, 1) + SourceIndex(1)
3 >Emitted(11, 15) Source(5, 7) + SourceIndex(1)
4 >Emitted(11, 34) Source(5, 26) + SourceIndex(1)
5 >Emitted(11, 44) Source(5, 37) + SourceIndex(1)
6 >Emitted(11, 45) Source(5, 38) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(12, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(12, 19) Source(1, 11) + SourceIndex(2)
3 >Emitted(12, 20) Source(1, 12) + SourceIndex(2)
4 >Emitted(12, 21) Source(1, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(13, 2) Source(3, 2) + SourceIndex(2)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(14, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(14, 19) Source(5, 11) + SourceIndex(2)
3 >Emitted(14, 20) Source(5, 12) + SourceIndex(2)
4 >Emitted(14, 21) Source(5, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(15, 2) Source(11, 2) + SourceIndex(2)
---
>>>declare function forsecondsecond_part1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                          ^^^^^^^^^
1->
  >
2 >function 
3 >                 forsecondsecond_part1Rest
4 >                                          () {
  >                                          const { b, ...rest } = { a: 10, b: 30, yy: 30 };
  >                                          }
1->Emitted(16, 1) Source(12, 1) + SourceIndex(2)
2 >Emitted(16, 18) Source(12, 10) + SourceIndex(2)
3 >Emitted(16, 43) Source(12, 35) + SourceIndex(2)
4 >Emitted(16, 52) Source(14, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1 >
2 >class 
3 >              C
1 >Emitted(17, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(17, 15) Source(1, 7) + SourceIndex(3)
3 >Emitted(17, 16) Source(1, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(18, 5) Source(2, 5) + SourceIndex(3)
2 >Emitted(18, 16) Source(2, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(19, 2) Source(5, 2) + SourceIndex(3)
---
>>>declare function secondsecond_part2Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                         ^
5 >                                          ^^^
6 >                                             ^^^
7 >                                                ^^^^^^
8 >                                                      ^^
9 >                                                        ^^^^^^^^
1->
  >
  >
2 >function 
3 >                 secondsecond_part2Spread
4 >                                         (
5 >                                          ...
6 >                                             b: 
7 >                                                number
8 >                                                      []
9 >                                                        ) { }
1->Emitted(20, 1) Source(7, 1) + SourceIndex(3)
2 >Emitted(20, 18) Source(7, 10) + SourceIndex(3)
3 >Emitted(20, 42) Source(7, 34) + SourceIndex(3)
4 >Emitted(20, 43) Source(7, 35) + SourceIndex(3)
5 >Emitted(20, 46) Source(7, 38) + SourceIndex(3)
6 >Emitted(20, 49) Source(7, 41) + SourceIndex(3)
7 >Emitted(20, 55) Source(7, 47) + SourceIndex(3)
8 >Emitted(20, 57) Source(7, 49) + SourceIndex(3)
9 >Emitted(20, 65) Source(7, 54) + SourceIndex(3)
---
>>>declare const secondsecond_part2_ar: number[];
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^^^^^^
5 >                                   ^^^^^^^^^^
6 >                                             ^
1 >
  >
2 >
3 >        const 
4 >              secondsecond_part2_ar
5 >                                    = [20, 30]
6 >                                             ;
1 >Emitted(21, 1) Source(8, 1) + SourceIndex(3)
2 >Emitted(21, 9) Source(8, 1) + SourceIndex(3)
3 >Emitted(21, 15) Source(8, 7) + SourceIndex(3)
4 >Emitted(21, 36) Source(8, 28) + SourceIndex(3)
5 >Emitted(21, 46) Source(8, 39) + SourceIndex(3)
6 >Emitted(21, 47) Source(8, 40) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>declare var c: C;
1 >
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1 >Emitted(22, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(22, 9) Source(1, 1) + SourceIndex(4)
3 >Emitted(22, 13) Source(1, 5) + SourceIndex(4)
4 >Emitted(22, 14) Source(1, 6) + SourceIndex(4)
5 >Emitted(22, 17) Source(1, 16) + SourceIndex(4)
6 >Emitted(22, 18) Source(1, 17) + SourceIndex(4)
---
>>>declare function forthirdthird_part1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                        ^^^^^^^^^
5 >                                                 ^^^^^^^^^^^^^^->
1->
  >c.doSomething();
  >
2 >function 
3 >                 forthirdthird_part1Rest
4 >                                        () {
  >                                        const { b, ...rest } = { a: 10, b: 30, yy: 30 };
  >                                        }
1->Emitted(23, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(23, 18) Source(3, 10) + SourceIndex(4)
3 >Emitted(23, 41) Source(3, 33) + SourceIndex(4)
4 >Emitted(23, 50) Source(5, 2) + SourceIndex(4)
---
>>>declare function thirdthird_part1Spread(...b: number[]): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^
6 >                                           ^^^
7 >                                              ^^^^^^
8 >                                                    ^^
9 >                                                      ^^^^^^^^
1->
  >
2 >function 
3 >                 thirdthird_part1Spread
4 >                                       (
5 >                                        ...
6 >                                           b: 
7 >                                              number
8 >                                                    []
9 >                                                      ) { }
1->Emitted(24, 1) Source(6, 1) + SourceIndex(4)
2 >Emitted(24, 18) Source(6, 10) + SourceIndex(4)
3 >Emitted(24, 40) Source(6, 32) + SourceIndex(4)
4 >Emitted(24, 41) Source(6, 33) + SourceIndex(4)
5 >Emitted(24, 44) Source(6, 36) + SourceIndex(4)
6 >Emitted(24, 47) Source(6, 39) + SourceIndex(4)
7 >Emitted(24, 53) Source(6, 45) + SourceIndex(4)
8 >Emitted(24, 55) Source(6, 47) + SourceIndex(4)
9 >Emitted(24, 63) Source(6, 52) + SourceIndex(4)
---
>>>declare const thirdthird_part1_ar: number[];
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^^^^
5 >                                 ^^^^^^^^^^
6 >                                           ^
1 >
  >
2 >
3 >        const 
4 >              thirdthird_part1_ar
5 >                                  = [20, 30]
6 >                                           ;
1 >Emitted(25, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(25, 9) Source(7, 1) + SourceIndex(4)
3 >Emitted(25, 15) Source(7, 7) + SourceIndex(4)
4 >Emitted(25, 34) Source(7, 26) + SourceIndex(4)
5 >Emitted(25, 44) Source(7, 37) + SourceIndex(4)
6 >Emitted(25, 45) Source(7, 38) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() { }
console.log(f());
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var firstfirst_part3_ar = [20, 30];
firstfirst_part3Spread.apply(void 0, __spreadArray([10], __read(firstfirst_part3_ar)));
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
function forsecondsecond_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
function secondsecond_part2Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var secondsecond_part2_ar = [20, 30];
secondsecond_part2Spread.apply(void 0, __spreadArray([10], __read(secondsecond_part2_ar)));
var c = new C();
c.doSomething();
function forthirdthird_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
function thirdthird_part1Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var thirdthird_part1_ar = [20, 30];
thirdthird_part1Spread.apply(void 0, __spreadArray([10], __read(thirdthird_part1_ar)));
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,SAAS,uBAAuB,KAAK,CAAC;ACXtC,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AACD,SAAS,sBAAsB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACnD,IAAM,mBAAmB,GAAG,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AACrC,sBAAsB,8BAAC,EAAE,UAAK,mBAAmB,IAAE;ACDnD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AACD,SAAS,yBAAyB;IAClC,IAAM,KAAiB,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAvC,CAAC,OAAA,EAAK,IAAI,cAAZ,KAAc,CAA2B,CAAC;AAChD,CAAC;ACbD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AAED,SAAS,wBAAwB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACrD,IAAM,qBAAqB,GAAG,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AACvC,wBAAwB,8BAAC,EAAE,UAAK,qBAAqB,IAAE;ACRvD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC;AAChB,SAAS,uBAAuB;IAChC,IAAM,KAAiB,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAvC,CAAC,OAAA,EAAK,IAAI,cAAZ,KAAc,CAA2B,CAAC;AAChD,CAAC;AACD,SAAS,sBAAsB;IAAC,WAAc;SAAd,UAAc,EAAd,qBAAc,EAAd,IAAc;QAAd,sBAAc;;AAAI,CAAC;AACnD,IAAM,mBAAmB,GAAG,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AACrC,sBAAsB,8BAAC,EAAE,UAAK,mBAAmB,IAAE"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var __read = (this && this.__read) || function (o, n) {
>>>    var m = typeof Symbol === "function" && o[Symbol.iterator];
>>>    if (!m) return o;
>>>    var i = m.call(o), r, ar = [], e;
>>>    try {
>>>        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
>>>    }
>>>    catch (error) { e = { error: error }; }
>>>    finally {
>>>        try {
>>>            if (r && !r.done && (m = i["return"])) m.call(i);
>>>        }
>>>        finally { if (e) throw e.error; }
>>>    }
>>>    return ar;
>>>};
>>>var __spreadArray = (this && this.__spreadArray) || function (to, from) {
>>>    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
>>>        to[j] = from[i];
>>>    return to;
>>>};
>>>var __rest = (this && this.__rest) || function (s, e) {
>>>    var t = {};
>>>    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
>>>        t[p] = s[p];
>>>    if (s != null && typeof Object.getOwnPropertySymbols === "function")
>>>        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
>>>            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
>>>                t[p[i]] = s[p[i]];
>>>        }
>>>    return t;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(33, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(33, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(33, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(33, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(33, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(33, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(34, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(34, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(34, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(34, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(34, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(34, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(34, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(34, 16) Source(11, 16) + SourceIndex(0)
---
>>>function forfirstfirst_PART1Rest() { }
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^
5 >                                     ^
1->
  >
2 >function 
3 >         forfirstfirst_PART1Rest
4 >                                () { 
5 >                                     }
1->Emitted(35, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(35, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(35, 33) Source(12, 33) + SourceIndex(0)
4 >Emitted(35, 38) Source(12, 38) + SourceIndex(0)
5 >Emitted(35, 39) Source(12, 39) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1 >
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1 >Emitted(36, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(36, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(36, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(36, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(36, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(36, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(36, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(36, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(36, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(37, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(37, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(37, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(38, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(38, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(38, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(38, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(39, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(39, 2) Source(3, 2) + SourceIndex(2)
---
>>>function firstfirst_part3Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >function 
3 >         firstfirst_part3Spread
1->Emitted(40, 1) Source(4, 1) + SourceIndex(2)
2 >Emitted(40, 10) Source(4, 10) + SourceIndex(2)
3 >Emitted(40, 32) Source(4, 32) + SourceIndex(2)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(41, 5) Source(4, 33) + SourceIndex(2)
2 >Emitted(41, 16) Source(4, 47) + SourceIndex(2)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(42, 10) Source(4, 33) + SourceIndex(2)
2 >Emitted(42, 20) Source(4, 47) + SourceIndex(2)
3 >Emitted(42, 22) Source(4, 33) + SourceIndex(2)
4 >Emitted(42, 43) Source(4, 47) + SourceIndex(2)
5 >Emitted(42, 45) Source(4, 33) + SourceIndex(2)
6 >Emitted(42, 49) Source(4, 47) + SourceIndex(2)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(43, 9) Source(4, 33) + SourceIndex(2)
2 >Emitted(43, 31) Source(4, 47) + SourceIndex(2)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(45, 1) Source(4, 51) + SourceIndex(2)
2 >Emitted(45, 2) Source(4, 52) + SourceIndex(2)
---
>>>var firstfirst_part3_ar = [20, 30];
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^^^
4 >                       ^^^
5 >                          ^
6 >                           ^^
7 >                             ^^
8 >                               ^^
9 >                                 ^
10>                                  ^
11>                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >const 
3 >    firstfirst_part3_ar
4 >                        = 
5 >                          [
6 >                           20
7 >                             , 
8 >                               30
9 >                                 ]
10>                                  ;
1->Emitted(46, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(46, 5) Source(5, 7) + SourceIndex(2)
3 >Emitted(46, 24) Source(5, 26) + SourceIndex(2)
4 >Emitted(46, 27) Source(5, 29) + SourceIndex(2)
5 >Emitted(46, 28) Source(5, 30) + SourceIndex(2)
6 >Emitted(46, 30) Source(5, 32) + SourceIndex(2)
7 >Emitted(46, 32) Source(5, 34) + SourceIndex(2)
8 >Emitted(46, 34) Source(5, 36) + SourceIndex(2)
9 >Emitted(46, 35) Source(5, 37) + SourceIndex(2)
10>Emitted(46, 36) Source(5, 38) + SourceIndex(2)
---
>>>firstfirst_part3Spread.apply(void 0, __spreadArray([10], __read(firstfirst_part3_ar)));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^
3 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                    ^^
5 >                                                      ^^^^^^^^^^
6 >                                                                ^^^^^^^^^^^^^^^^^^^
7 >                                                                                   ^^^^
1->
  >
2 >firstfirst_part3Spread
3 >                      (
4 >                                                    10
5 >                                                      , ...
6 >                                                                firstfirst_part3_ar
7 >                                                                                   );
1->Emitted(47, 1) Source(6, 1) + SourceIndex(2)
2 >Emitted(47, 23) Source(6, 23) + SourceIndex(2)
3 >Emitted(47, 53) Source(6, 24) + SourceIndex(2)
4 >Emitted(47, 55) Source(6, 26) + SourceIndex(2)
5 >Emitted(47, 65) Source(6, 31) + SourceIndex(2)
6 >Emitted(47, 84) Source(6, 50) + SourceIndex(2)
7 >Emitted(47, 88) Source(6, 52) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1 >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(48, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(48, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(48, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(48, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(49, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(49, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(49, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(50, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(50, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(50, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(51, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(51, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(51, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(51, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(51, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(51, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(51, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(51, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(52, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(52, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(53, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(53, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(53, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(53, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(54, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(54, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(54, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(54, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(54, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(54, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(54, 19) Source(11, 2) + SourceIndex(3)
---
>>>function forsecondsecond_part1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forsecondsecond_part1Rest
1->Emitted(55, 1) Source(12, 1) + SourceIndex(3)
2 >Emitted(55, 10) Source(12, 10) + SourceIndex(3)
3 >Emitted(55, 35) Source(12, 35) + SourceIndex(3)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^
4 >             ^^
5 >               ^
6 >                ^^
7 >                  ^^
8 >                    ^^
9 >                      ^
10>                       ^^
11>                         ^^
12>                           ^^
13>                             ^^
14>                               ^^
15>                                 ^^
16>                                   ^^
17>                                     ^^
18>                                       ^
19>                                        ^^^^^^^
20>                                               ^^
21>                                                 ^^^^
22>                                                     ^^^^^^^^^^^^^^
23>                                                                   ^^^^^
24>                                                                        ^
25>                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = 
4 >             { 
5 >               a
6 >                : 
7 >                  10
8 >                    , 
9 >                      b
10>                       : 
11>                         30
12>                           , 
13>                             yy
14>                               : 
15>                                 30
16>                                    }
17>                                     
18>                                       b
19>                                        
20>                                               , ...
21>                                                 rest
22>                                                     
23>                                                                   { b, ...rest }
24>                                                                         = { a: 10, b: 30, yy: 30 }
25>                                                                         ;
1->Emitted(56, 5) Source(13, 1) + SourceIndex(3)
2 >Emitted(56, 9) Source(13, 7) + SourceIndex(3)
3 >Emitted(56, 14) Source(13, 24) + SourceIndex(3)
4 >Emitted(56, 16) Source(13, 26) + SourceIndex(3)
5 >Emitted(56, 17) Source(13, 27) + SourceIndex(3)
6 >Emitted(56, 19) Source(13, 29) + SourceIndex(3)
7 >Emitted(56, 21) Source(13, 31) + SourceIndex(3)
8 >Emitted(56, 23) Source(13, 33) + SourceIndex(3)
9 >Emitted(56, 24) Source(13, 34) + SourceIndex(3)
10>Emitted(56, 26) Source(13, 36) + SourceIndex(3)
11>Emitted(56, 28) Source(13, 38) + SourceIndex(3)
12>Emitted(56, 30) Source(13, 40) + SourceIndex(3)
13>Emitted(56, 32) Source(13, 42) + SourceIndex(3)
14>Emitted(56, 34) Source(13, 44) + SourceIndex(3)
15>Emitted(56, 36) Source(13, 46) + SourceIndex(3)
16>Emitted(56, 38) Source(13, 48) + SourceIndex(3)
17>Emitted(56, 40) Source(13, 9) + SourceIndex(3)
18>Emitted(56, 41) Source(13, 10) + SourceIndex(3)
19>Emitted(56, 48) Source(13, 10) + SourceIndex(3)
20>Emitted(56, 50) Source(13, 15) + SourceIndex(3)
21>Emitted(56, 54) Source(13, 19) + SourceIndex(3)
22>Emitted(56, 68) Source(13, 7) + SourceIndex(3)
23>Emitted(56, 73) Source(13, 21) + SourceIndex(3)
24>Emitted(56, 74) Source(13, 48) + SourceIndex(3)
25>Emitted(56, 75) Source(13, 49) + SourceIndex(3)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(57, 1) Source(14, 1) + SourceIndex(3)
2 >Emitted(57, 2) Source(14, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(58, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(59, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(60, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(60, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(61, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(61, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(61, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(62, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(62, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(62, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(62, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(62, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(62, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(62, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(62, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(63, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(63, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(64, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(64, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(65, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(65, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(65, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(65, 6) Source(5, 2) + SourceIndex(4)
---
>>>function secondsecond_part2Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^^
1->
  >
  >
2 >function 
3 >         secondsecond_part2Spread
1->Emitted(66, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(66, 10) Source(7, 10) + SourceIndex(4)
3 >Emitted(66, 34) Source(7, 34) + SourceIndex(4)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(67, 5) Source(7, 35) + SourceIndex(4)
2 >Emitted(67, 16) Source(7, 49) + SourceIndex(4)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(68, 10) Source(7, 35) + SourceIndex(4)
2 >Emitted(68, 20) Source(7, 49) + SourceIndex(4)
3 >Emitted(68, 22) Source(7, 35) + SourceIndex(4)
4 >Emitted(68, 43) Source(7, 49) + SourceIndex(4)
5 >Emitted(68, 45) Source(7, 35) + SourceIndex(4)
6 >Emitted(68, 49) Source(7, 49) + SourceIndex(4)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(69, 9) Source(7, 35) + SourceIndex(4)
2 >Emitted(69, 31) Source(7, 49) + SourceIndex(4)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(71, 1) Source(7, 53) + SourceIndex(4)
2 >Emitted(71, 2) Source(7, 54) + SourceIndex(4)
---
>>>var secondsecond_part2_ar = [20, 30];
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^^^^^
4 >                         ^^^
5 >                            ^
6 >                             ^^
7 >                               ^^
8 >                                 ^^
9 >                                   ^
10>                                    ^
11>                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >const 
3 >    secondsecond_part2_ar
4 >                          = 
5 >                            [
6 >                             20
7 >                               , 
8 >                                 30
9 >                                   ]
10>                                    ;
1->Emitted(72, 1) Source(8, 1) + SourceIndex(4)
2 >Emitted(72, 5) Source(8, 7) + SourceIndex(4)
3 >Emitted(72, 26) Source(8, 28) + SourceIndex(4)
4 >Emitted(72, 29) Source(8, 31) + SourceIndex(4)
5 >Emitted(72, 30) Source(8, 32) + SourceIndex(4)
6 >Emitted(72, 32) Source(8, 34) + SourceIndex(4)
7 >Emitted(72, 34) Source(8, 36) + SourceIndex(4)
8 >Emitted(72, 36) Source(8, 38) + SourceIndex(4)
9 >Emitted(72, 37) Source(8, 39) + SourceIndex(4)
10>Emitted(72, 38) Source(8, 40) + SourceIndex(4)
---
>>>secondsecond_part2Spread.apply(void 0, __spreadArray([10], __read(secondsecond_part2_ar)));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^
3 >                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                      ^^
5 >                                                        ^^^^^^^^^^
6 >                                                                  ^^^^^^^^^^^^^^^^^^^^^
7 >                                                                                       ^^^^
1->
  >
2 >secondsecond_part2Spread
3 >                        (
4 >                                                      10
5 >                                                        , ...
6 >                                                                  secondsecond_part2_ar
7 >                                                                                       );
1->Emitted(73, 1) Source(9, 1) + SourceIndex(4)
2 >Emitted(73, 25) Source(9, 25) + SourceIndex(4)
3 >Emitted(73, 55) Source(9, 26) + SourceIndex(4)
4 >Emitted(73, 57) Source(9, 28) + SourceIndex(4)
5 >Emitted(73, 67) Source(9, 33) + SourceIndex(4)
6 >Emitted(73, 88) Source(9, 54) + SourceIndex(4)
7 >Emitted(73, 92) Source(9, 56) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>var c = new C();
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1 >
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1 >Emitted(74, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(74, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(74, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(74, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(74, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(74, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(74, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(74, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(75, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(75, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(75, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(75, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(75, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(75, 17) Source(2, 17) + SourceIndex(5)
---
>>>function forthirdthird_part1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forthirdthird_part1Rest
1->Emitted(76, 1) Source(3, 1) + SourceIndex(5)
2 >Emitted(76, 10) Source(3, 10) + SourceIndex(5)
3 >Emitted(76, 33) Source(3, 33) + SourceIndex(5)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^
4 >             ^^
5 >               ^
6 >                ^^
7 >                  ^^
8 >                    ^^
9 >                      ^
10>                       ^^
11>                         ^^
12>                           ^^
13>                             ^^
14>                               ^^
15>                                 ^^
16>                                   ^^
17>                                     ^^
18>                                       ^
19>                                        ^^^^^^^
20>                                               ^^
21>                                                 ^^^^
22>                                                     ^^^^^^^^^^^^^^
23>                                                                   ^^^^^
24>                                                                        ^
25>                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = 
4 >             { 
5 >               a
6 >                : 
7 >                  10
8 >                    , 
9 >                      b
10>                       : 
11>                         30
12>                           , 
13>                             yy
14>                               : 
15>                                 30
16>                                    }
17>                                     
18>                                       b
19>                                        
20>                                               , ...
21>                                                 rest
22>                                                     
23>                                                                   { b, ...rest }
24>                                                                         = { a: 10, b: 30, yy: 30 }
25>                                                                         ;
1->Emitted(77, 5) Source(4, 1) + SourceIndex(5)
2 >Emitted(77, 9) Source(4, 7) + SourceIndex(5)
3 >Emitted(77, 14) Source(4, 24) + SourceIndex(5)
4 >Emitted(77, 16) Source(4, 26) + SourceIndex(5)
5 >Emitted(77, 17) Source(4, 27) + SourceIndex(5)
6 >Emitted(77, 19) Source(4, 29) + SourceIndex(5)
7 >Emitted(77, 21) Source(4, 31) + SourceIndex(5)
8 >Emitted(77, 23) Source(4, 33) + SourceIndex(5)
9 >Emitted(77, 24) Source(4, 34) + SourceIndex(5)
10>Emitted(77, 26) Source(4, 36) + SourceIndex(5)
11>Emitted(77, 28) Source(4, 38) + SourceIndex(5)
12>Emitted(77, 30) Source(4, 40) + SourceIndex(5)
13>Emitted(77, 32) Source(4, 42) + SourceIndex(5)
14>Emitted(77, 34) Source(4, 44) + SourceIndex(5)
15>Emitted(77, 36) Source(4, 46) + SourceIndex(5)
16>Emitted(77, 38) Source(4, 48) + SourceIndex(5)
17>Emitted(77, 40) Source(4, 9) + SourceIndex(5)
18>Emitted(77, 41) Source(4, 10) + SourceIndex(5)
19>Emitted(77, 48) Source(4, 10) + SourceIndex(5)
20>Emitted(77, 50) Source(4, 15) + SourceIndex(5)
21>Emitted(77, 54) Source(4, 19) + SourceIndex(5)
22>Emitted(77, 68) Source(4, 7) + SourceIndex(5)
23>Emitted(77, 73) Source(4, 21) + SourceIndex(5)
24>Emitted(77, 74) Source(4, 48) + SourceIndex(5)
25>Emitted(77, 75) Source(4, 49) + SourceIndex(5)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(78, 1) Source(5, 1) + SourceIndex(5)
2 >Emitted(78, 2) Source(5, 2) + SourceIndex(5)
---
>>>function thirdthird_part1Spread() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >function 
3 >         thirdthird_part1Spread
1->Emitted(79, 1) Source(6, 1) + SourceIndex(5)
2 >Emitted(79, 10) Source(6, 10) + SourceIndex(5)
3 >Emitted(79, 32) Source(6, 32) + SourceIndex(5)
---
>>>    var b = [];
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >(
2 >    ...b: number[]
1 >Emitted(80, 5) Source(6, 33) + SourceIndex(5)
2 >Emitted(80, 16) Source(6, 47) + SourceIndex(5)
---
>>>    for (var _i = 0; _i < arguments.length; _i++) {
1->^^^^^^^^^
2 >         ^^^^^^^^^^
3 >                   ^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^
6 >                                            ^^^^
1->
2 >         ...b: number[]
3 >                   
4 >                     ...b: number[]
5 >                                          
6 >                                            ...b: number[]
1->Emitted(81, 10) Source(6, 33) + SourceIndex(5)
2 >Emitted(81, 20) Source(6, 47) + SourceIndex(5)
3 >Emitted(81, 22) Source(6, 33) + SourceIndex(5)
4 >Emitted(81, 43) Source(6, 47) + SourceIndex(5)
5 >Emitted(81, 45) Source(6, 33) + SourceIndex(5)
6 >Emitted(81, 49) Source(6, 47) + SourceIndex(5)
---
>>>        b[_i] = arguments[_i];
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >        ...b: number[]
1 >Emitted(82, 9) Source(6, 33) + SourceIndex(5)
2 >Emitted(82, 31) Source(6, 47) + SourceIndex(5)
---
>>>    }
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >) { 
2 >}
1 >Emitted(84, 1) Source(6, 51) + SourceIndex(5)
2 >Emitted(84, 2) Source(6, 52) + SourceIndex(5)
---
>>>var thirdthird_part1_ar = [20, 30];
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^^^
4 >                       ^^^
5 >                          ^
6 >                           ^^
7 >                             ^^
8 >                               ^^
9 >                                 ^
10>                                  ^
11>                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >const 
3 >    thirdthird_part1_ar
4 >                        = 
5 >                          [
6 >                           20
7 >                             , 
8 >                               30
9 >                                 ]
10>                                  ;
1->Emitted(85, 1) Source(7, 1) + SourceIndex(5)
2 >Emitted(85, 5) Source(7, 7) + SourceIndex(5)
3 >Emitted(85, 24) Source(7, 26) + SourceIndex(5)
4 >Emitted(85, 27) Source(7, 29) + SourceIndex(5)
5 >Emitted(85, 28) Source(7, 30) + SourceIndex(5)
6 >Emitted(85, 30) Source(7, 32) + SourceIndex(5)
7 >Emitted(85, 32) Source(7, 34) + SourceIndex(5)
8 >Emitted(85, 34) Source(7, 36) + SourceIndex(5)
9 >Emitted(85, 35) Source(7, 37) + SourceIndex(5)
10>Emitted(85, 36) Source(7, 38) + SourceIndex(5)
---
>>>thirdthird_part1Spread.apply(void 0, __spreadArray([10], __read(thirdthird_part1_ar)));
1->
2 >^^^^^^^^^^^^^^^^^^^^^^
3 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                                    ^^
5 >                                                      ^^^^^^^^^^
6 >                                                                ^^^^^^^^^^^^^^^^^^^
7 >                                                                                   ^^^^
1->
  >
2 >thirdthird_part1Spread
3 >                      (
4 >                                                    10
5 >                                                      , ...
6 >                                                                thirdthird_part1_ar
7 >                                                                                   );
1->Emitted(86, 1) Source(8, 1) + SourceIndex(5)
2 >Emitted(86, 23) Source(8, 23) + SourceIndex(5)
3 >Emitted(86, 53) Source(8, 24) + SourceIndex(5)
4 >Emitted(86, 55) Source(8, 26) + SourceIndex(5)
5 >Emitted(86, 65) Source(8, 31) + SourceIndex(5)
6 >Emitted(86, 84) Source(8, 50) + SourceIndex(5)
7 >Emitted(86, 88) Source(8, 52) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../..",
    "sourceFiles": [
      "../../third_part1.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 504,
          "kind": "emitHelpers",
          "data": "typescript:read"
        },
        {
          "pos": 506,
          "end": 697,
          "kind": "emitHelpers",
          "data": "typescript:spreadArray"
        },
        {
          "pos": 699,
          "end": 1199,
          "kind": "emitHelpers",
          "data": "typescript:rest"
        },
        {
          "pos": 1201,
          "end": 1626,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 1201,
              "end": 1626,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 1626,
          "end": 2313,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 1626,
              "end": 2313,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 2313,
          "end": 2741,
          "kind": "text"
        }
      ],
      "sources": {
        "helpers": [
          "typescript:rest",
          "typescript:read",
          "typescript:spreadArray"
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 318,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 318,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 318,
          "end": 585,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 318,
              "end": 585,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 585,
          "end": 765,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
emitHelpers: (0-504):: typescript:read
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
----------------------------------------------------------------------
emitHelpers: (506-697):: typescript:spreadArray
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
----------------------------------------------------------------------
emitHelpers: (699-1199):: typescript:rest
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
----------------------------------------------------------------------
prepend: (1201-1626):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (1201-1626)
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() { }
console.log(f());
function f() {
    return "JS does hoists";
}
function firstfirst_part3Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var firstfirst_part3_ar = [20, 30];
firstfirst_part3Spread.apply(void 0, __spreadArray([10], __read(firstfirst_part3_ar)));

----------------------------------------------------------------------
prepend: (1626-2313):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (1626-2313)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
function forsecondsecond_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
function secondsecond_part2Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var secondsecond_part2_ar = [20, 30];
secondsecond_part2Spread.apply(void 0, __spreadArray([10], __read(secondsecond_part2_ar)));

----------------------------------------------------------------------
text: (2313-2741)
var c = new C();
c.doSomething();
function forthirdthird_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
function thirdthird_part1Spread() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
}
var thirdthird_part1_ar = [20, 30];
thirdthird_part1Spread.apply(void 0, __spreadArray([10], __read(thirdthird_part1_ar)));

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-318):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-318)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function forfirstfirst_PART1Rest(): void;
declare function f(): string;
declare function firstfirst_part3Spread(...b: number[]): void;
declare const firstfirst_part3_ar: number[];

----------------------------------------------------------------------
prepend: (318-585):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (318-585)
declare namespace N {
}
declare namespace N {
}
declare function forsecondsecond_part1Rest(): void;
declare class C {
    doSomething(): void;
}
declare function secondsecond_part2Spread(...b: number[]): void;
declare const secondsecond_part2_ar: number[];

----------------------------------------------------------------------
text: (585-765)
declare var c: C;
declare function forthirdthird_part1Rest(): void;
declare function thirdthird_part1Spread(...b: number[]): void;
declare const thirdthird_part1_ar: number[];

======================================================================

