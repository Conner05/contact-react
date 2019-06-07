export interface Contact {
    id?: number;
    firstName: string;
    lastName: string;
    address: Address;
    phone: string;
    email: string;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}