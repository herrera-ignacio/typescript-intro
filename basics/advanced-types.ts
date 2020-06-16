import { ContactWithEmail } from './interface'

/**
 * MAPPED TYPES
 * Allow the use of an interface to transform keys into values
 * 
*/

interface CommunicationMethods {
    email: ContactWithEmail;
    telephone: { telephone: number };
}

function contact<K extends keyof CommunicationMethods>(
    method: K,
    contact: CommunicationMethods[K]
) {
    //
}
contact("telephone", { telephone: 1234 } );

/**
 * CONDITIONAL TYPES
 */
type EventualType<T> = T extends Promise<infer S>
    ? S // extract the type the promise resolves to
    : T; // otherwise just let T pass through

//== BUILT-IN UTILITY TYPES ==//

/**
 * Partial allows to make all properties on an object optional
 */
type MayHaveEmail = Partial<ContactWithEmail>

/**
 * Pick allows us to select one or more properties from an object type
 */
type HasThen<T> = Pick<Promise<T>, "then" | "catch">;
let hasThen: HasThen<number> = Promise.resolve(4);

/**
 * Extract lets us obtain a subset of types that are assignable to something
 */
type OnlyStrings = Extract<"a" | "b" | 1 | 2, number>;

/**
 * Exclude lets us obtain a subset of types that are NOT assignalbe to something
 */
type NotStrings = Exclude<"a" | "b" | 1 | 2, string>;

/**
 * Record helps us create a type with specified property keys and the same value type
 */
type ABCPromises = Record<"a" | "b" | "c", Promise<any>>;
