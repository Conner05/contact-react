export class Contact {
    id?: number;
    firstName: string;
    lastName: string;
    address: Address;
    phone: string;
    email: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.address = new Address();
        this.phone = '';
        this.email = '';
    }
}

export class Address {
    street: string;
    city: string;
    state: string;
    zip: string;

    constructor() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}