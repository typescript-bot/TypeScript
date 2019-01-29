//// [destructuringAssignment_private.ts]
class C {
    private x = 0;
    private o = [{ a: 1 }];
}
let x: number;
([{ a: { x } }] = [{ a: new C() }]);
({ o: [{ a: x }]} = new C());

const nameX = "x";
([{ a: { [nameX]: x } }] = [{ a: new C() }]);

const nameO = "o";
({ [nameO]: [{ a: x }]} = new C());


//// [destructuringAssignment_private.js]
var _a, _b;
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
        this.o = [{ a: 1 }];
    }
    return C;
}());
var x;
(x = [{ a: new C() }][0].a.x);
(x = new C().o[0].a);
var nameX = "x";
(_a = nameX, x = [{ a: new C() }][0].a[_a]);
var nameO = "o";
(_b = nameO, x = new C()[_b][0].a);
