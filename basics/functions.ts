//== FUNCTIONS ==//

import { phoneContact, emailContact } from './basics';
import { create } from 'domain';

function createEmail(to: emailContact): { recipient: string; body: string } {
    return {
        recipient: '',
        body: '',
    }
}

const sum = ( ... vals: number[]) => vals.reduce((sum, x) => sum + x, 0);

//== METHOD/SIGNATURE OVERLOADING ==//

function getContacts(
    method: "email" | "phone",
    ... people: (emailContact | phoneContact)[]
): void {
    if (method === "email") {
        (people as emailContact[]).forEach(createEmail);
    } else {
        ( people as phoneContact[]).forEach(console.log);
    }
}
