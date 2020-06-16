//== TOP TYPES ==/
/**
 * They chan hold any value, TypeScript has two:
 * - any
 * - unknown
 */

let myAny: any = 32;
let myUnknown: unknown = "hello, unknown";

// Note that we cannot know about properties of unknown
myUnknown.foo;
// But we can for any
myAny.foo;

/**
 * We want to use `any`
 * when we want maximum flexibility.
 * Sometimes a Promise<any> is fine is we don't care about the resolved value
 */
async function logWhenResolved(p: Promise<any>) {
    const val = await p;
    console.log("Resolved to ", val)
}

/**
 * We want to use `unknown`
 * for private values that we don't want to expose through a public API.
 * They can still hold any value, we just must narrow the type before we're able to use it.
 */

 // Built-in type guards
 if (typeof myUnknown === 'string') {
    myUnknown.split(', ');
 }
 if (myUnknown instanceof Promise) {
    myUnknown.then(x => console.log(x)) 
 }

interface HasEmail {
    email: string
}

// User defined type guards
function hasEmail(x: any): x is HasEmail {
    return typeof x.email === 'string'
}
if (hasEmail(myUnknown)) {
    console.log(myUnknown.email)
}

//== BOTTOM TYPE: never ==//
/**
 * Bottom types can hold no values. TypeScript has one of these: `never`.
 * A good use is through narrowing exhaustively.
 */

// Note that n is not assignable
let n: never = 4;

class UnreachableError extends Error {
    constructor(val: never, message: string) {
        super(`Never gonna happen ${message}`)
    }
}

let y = 4 as string | number;

if (typeof y === 'string') {
    y.split(", ");
} else if (typeof y === 'number') {
    y.toFixed(2);
} else {
    throw new UnreachableError(y, 'y should be a string or number')
}
