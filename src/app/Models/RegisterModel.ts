export class RegisterModel {
    fullName: string = '';
    email: string = '';
    password: string = '';
    phone: string = '';
    address: Address = new Address();
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zipCode: string = '';
    country: string = '';
}

export class verificationModel {
    email: string = '';
    otp: string = '';
}
