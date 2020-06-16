//== INTERFACES ==//

type StringOrNumber = string | number;
type Named = { name: string };

export interface ContactWithPhone {
    phone: number;
}

export interface ContactWithEmail {
    email: string;
}

export interface ContactWithInternationalPhone extends ContactWithPhone {
    countryCode: number;
}

//== CALL SIGNATURES ==//

export interface Contact1 {
    (contact: ContactWithEmail | ContactWithPhone, message: string) : void;
}

type Contact2 = (
    contact: ContactWithEmail | ContactWithPhone,
    message: string
) => void;

interface Contact3 {
    new ( ... args: any[]): ContactWithEmail | ContactWithPhone
}

// Note: we dont need type annotations for contact or message
const emailer : Contact1 = (_contact, _message) => { /* ... */ }

//== DICT OBJECTS & INDEX SIGNATURES ==//
interface PhoneNumberDict {
    [numberName: string]: undefined | {
        areaCode: number;
        num: number;
    };
}

//== COMBINING INTERFACES ==//

/**
 * Interfaces are "open", meaning any declarations of the same name
 * are merged.
 */
interface PhoneNumberDict {
    home: {
        areaCode: number;
        num: number;
    };
    office: {
        areaCode: number;
        num: number;
    }
}

interface stringArr extends Array<string> {}
