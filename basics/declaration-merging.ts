/**
 * Identifiers (variable, class, functions, interfaces)
 * can be associated with three things:
 * 1) value
 * 2) type
 * 3) namespace
 */

function foo() {}
interface bar {}
namespace baz {
    export const biz = "hello"
}

// Declarations with the same name can be merged, to occupy the same identifier

class Album {
    label: Album.AlbumLabel = new Album.AlbumLabel();
}
namespace Album {
    export class AlbumLabel {}
}
interface Album {
    artist: string;
}

export { Album }; // All three slots exported

/**
 * Namespaces have their own slot, and can be merged with classes or functions
 */

class Contact {
    name: string;
}

class AddressBook {
    contacts!: Contact[];
}
namespace AdressBook {
    export class ABContact extends Contact {} // inner class
}

function format(n: number) {
    console.log(`$ {n}`)
}
namespace format {
    export const currency: string = '$ ';
}
format(3.14);
format.currency;
