import { ContactWithEmail } from './interface'

//== GENERICS ==//

// param determines the value of x
function wrappedValue(x: any) {
    return {
        value: x
    };
}

// type param determines the type of x
interface WrappedValue<X> {
    value: X;
}

// Convention to name with T as C++ templates

// You can use default types
interface FilterFunction<T = any> {
    (val: T): boolean
}
const stringFilter: FilterFunction<string> = val => typeof val === 'string';

// Can have constraints
function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
    const out: { [k: string]: T } = {};
    array.forEach(val => {
        out[val.id] = val;
    });
    return out;
}