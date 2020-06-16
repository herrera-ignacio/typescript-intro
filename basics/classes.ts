// == CLASSES == //

import { ContactWithEmail } from "./interface"

export class Contact implements ContactWithEmail {
    email: string;
    name: string;

    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

//== PARAMETER PROPERTIES & ACCESS MODIFIER KEYWORDS ==//
/**
 * public - everyone
 * protected -me and subclasses
 * private - only me
 * readonly
 */

class ContactWithParams implements ContactWithEmail {
    readonly secret = 'secret';
    private passwordVal!: string;

    constructor (
        protected name: string,
        public email: string = "no email"
    ) {
        // Nothing needed
    }

    get password(): string {
        if (!this.passwordVal) { /* ... */ }
        return this.passwordVal
    }

    async init() {
        this.password;
    }
} 

//== ABSTRACT CLASSES ==/

abstract class AbstractContact implements ContactWithEmail {
    public abstract phone: number;

    constructor (
        public name: string,
        public email: string
    ) {}

    abstract sendEmail(): void;
}

class ConcreteContact extends AbstractContact {
    constructor (
        public phone: number,
        name: string,
        email: string
    ) {
        super(name, email);
    }
    sendEmail() {
        console.log('Sending email!');
    }
}
