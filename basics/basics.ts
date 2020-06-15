//== VARS ==//

let n: number;
n = 33;
n = 'abc'; // ERROR Type '"abc"' is not assignable to type 'number'

//== ARRAY ==//

let numArr: number[] = [];
numArr.push(33);
numArr.push('abc'); // ERROR

//== TUPLES ==//

let myTuple: [number, string, string, number] = [
    123,
    'Fake Street',
    'Somewhere, ARGENTINA',
    45678
];

//== OBJECTS ==/

let myObj: { score: number; name: string };
myObj = { score: 33 } // ERROR streetName property is missing

let myOptionalObj: { score?: number, name: string };
myOptionalObj = { name: 'Nacho' }

// We can reuse types via interfaces
interface Test {
    score?: number,
    name: string
}

let test: Test = { name: 'Nacho' };

//== UNION AND INTERSECTION ==//
 
export interface phoneContact {
    name: string;
    phone: number;
}
export interface emailContact {
    name: string;
    email: string;
}
let contactInfo: phoneContact | emailContact;
let fullContactInfo: phoneContact & emailContact;
